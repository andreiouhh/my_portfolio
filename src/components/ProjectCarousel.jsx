import { useCallback, useEffect, useRef, useState } from 'react'

const DEFAULT_INTERVAL = 5000

export default function ProjectCarousel({
  media,
  variant = 'card',
  autoplayInterval = DEFAULT_INTERVAL,
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [slideWidth, setSlideWidth] = useState(0)
  const videoRefs = useRef([])
  const containerRef = useRef(null)
  const viewportRef = useRef(null)

  const count = media?.length ?? 0
  const hasMultiple = count > 1
  const current = media?.[index]
  const isVideoSlide = current?.type === 'video'

  const slideStyle =
    slideWidth > 0
      ? { flex: `0 0 ${slideWidth}px`, width: slideWidth, minWidth: slideWidth }
      : undefined

  const goTo = useCallback(
    (nextIndex) => {
      if (count === 0) return
      setIndex(((nextIndex % count) + count) % count)
    },
    [count],
  )

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])
  const goNext = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return undefined

    const updateWidth = () => {
      setSlideWidth(viewport.clientWidth)
    }

    updateWidth()
    const observer = new ResizeObserver(updateWidth)
    observer.observe(viewport)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === index && media[i]?.type === 'video') {
        video.play().catch(() => {})
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [index, media])

  useEffect(() => {
    if (!hasMultiple || paused || isVideoSlide) return undefined

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count)
    }, autoplayInterval)

    return () => window.clearInterval(timer)
  }, [hasMultiple, paused, isVideoSlide, count, autoplayInterval, index])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        goNext()
      }
    }

    container.addEventListener('keydown', handleKeyDown)
    return () => container.removeEventListener('keydown', handleKeyDown)
  }, [goPrev, goNext])

  if (!count) return null

  return (
    <div
      ref={containerRef}
      className={`project-carousel project-carousel--${variant}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div ref={viewportRef} className="project-carousel__viewport">
        <div
          className="project-carousel__track"
          style={{
            transform: slideWidth ? `translateX(-${index * slideWidth}px)` : undefined,
          }}
        >
          {media.map((slide, slideIndex) => (
            <div
              key={slide.src}
              className="project-carousel__slide"
              style={slideStyle}
              aria-hidden={slideIndex !== index}
            >
              {slide.type === 'video' ? (
                <video
                  ref={(el) => {
                    videoRefs.current[slideIndex] = el
                  }}
                  className="project-carousel__media"
                  src={slide.src}
                  controls
                  muted
                  playsInline
                  loop
                  aria-label={slide.alt}
                />
              ) : (
                <img
                  className="project-carousel__media"
                  src={slide.src}
                  alt={slide.alt}
                  loading={slideIndex === 0 ? 'eager' : 'lazy'}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            className="project-carousel__nav project-carousel__nav--prev"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            className="project-carousel__nav project-carousel__nav--next"
            onClick={goNext}
            aria-label="Next slide"
          >
            ›
          </button>
          <div className="project-carousel__dots" role="tablist" aria-label="Slide navigation">
            {media.map((slide, dotIndex) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                className="project-carousel__dot"
                aria-label={`Go to slide ${dotIndex + 1}`}
                aria-selected={dotIndex === index}
                aria-current={dotIndex === index ? 'true' : undefined}
                onClick={() => goTo(dotIndex)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
