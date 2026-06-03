export const profile = {
  name: 'Andrei Reyes',
  location: 'Lipa City, Batangas',
  email: 'I.reyesandrei02@gmail.com',
  phone: '+63 930 573 9619',
  specialization:
    'data analysis, modeling, and visualization — turning raw data into strategic business decisions',
  toolsLine: 'Powered by Python, SQL, Power BI, Flask, and React.',
  github: 'https://github.com/andreiouhh',
  linkedin: 'https://www.linkedin.com/in/randreil',
  resumeUrl: '/Reyes, Andrei - Resume.pdf',
}

export const projects = [
  {
    id: 'dairybox',
    title: 'DairyBox: B2B E-Commerce Platform',
    subtitle: 'Capstone Project · Project Manager / Developer',
    impact:
      'Built a responsive B2B e-commerce platform for a local dairy cooperative — streamlining orders, inventory, and direct sales while integrating predictive demand forecasting from 22 months of cleaned historical data.',
    tech: ['React', 'Flask', 'Python', 'SQL', 'RBAC', 'Machine Learning'],
    liveUrl: null,
    githubUrl: null,
    caseStudy: {
      situation:
        'A local dairy cooperative relied on manual order tracking and spreadsheets, limiting direct sales channels and making inventory planning reactive rather than data-driven.',
      task:
        'Lead development of a full B2B e-commerce solution with secure role-based access, reliable sales data, and demand forecasting to reduce spoilage and optimize stock levels.',
      action:
        'Developed a responsive platform with RBAC for Administrators, Customers, and Inventory Staff. Cleaned 22 months of raw sales data — resolving inconsistencies, missing values, and duplicates — then integrated a predictive analytics module that processes historical trends to forecast demand.',
      result:
        'Streamlined order operations and inventory management, expanded direct sales channels, and gave the cooperative data-backed stock decisions to minimize product spoilage.',
    },
  },
  {
    id: 'hr-dashboard',
    title: 'HR Strategic Insights Dashboard',
    subtitle: 'Personal Project',
    impact:
      'Built an interactive Power BI dashboard on a SQL-driven star schema to surface attrition risk, department metrics, and the link between training engagement and workforce performance.',
    tech: ['SQL', 'Power BI', 'Star Schema', 'ETL'],
    liveUrl: null,
    githubUrl: null,
    caseStudy: {
      situation:
        'HR leadership lacked a unified view of workforce performance, hiring trends, and attrition drivers across relational data spread across multiple tables.',
      task:
        'Design a data pipeline and dashboard that supports filtering across the employee lifecycle and delivers actionable HR metrics for L&D and recruitment decisions.',
      action:
        'Extracted and grouped workforce data using SQL with CASE logic and multi-table JOINs. Modeled the dataset in a Star Schema for efficient filtering, then built a Power BI dashboard tracking attrition risk, department KPIs, recruitment status, and training outcomes.',
      result:
        'Enabled stakeholders to identify effective L&D programs and spot hiring and retention trends through interactive, drill-down views of workforce performance.',
    },
  },
  {
    id: 'esg-hub',
    title: 'ESG & Financial Performance Hub',
    subtitle: 'Personal Project',
    impact:
      'Created an interactive Tableau hub correlating ESG scores with profit margins across 9 industries, with automated SQL cleaning pipelines and tier-based ESG segmentation.',
    tech: ['SQL', 'Tableau', 'Data Modeling'],
    liveUrl: null,
    githubUrl: null,
    caseStudy: {
      situation:
        'Stakeholders needed to understand whether sustainability initiatives correlate with long-term financial performance, but raw company data contained nulls and inconsistent ESG classifications.',
      task:
        'Build an automated cleaning pipeline and executive-level dashboard for cross-industry ESG and profitability analysis with full interactivity.',
      action:
        'Developed SQL Views applying CASE logic to handle null values and segment companies into ESG performance tiers. Designed a Tableau dashboard with dual-axis trends, scatter plots, regional maps, and global filters with dynamic parameters across 9 industries.',
      result:
        'Delivered granular comparative assessments that visualized how sustainability scores relate to profit margins, supporting data-driven strategic conversations at the executive level.',
    },
  },
  {
    id: 'sales-forecast',
    title: 'Sales Forecasting Dashboard',
    subtitle: 'Academic Project',
    impact:
      'Built a dynamic Flask web dashboard with integrated predictive modeling to visualize product-level sales and anticipate demand for smarter inventory planning.',
    tech: ['Python', 'Flask', 'Predictive Modeling'],
    liveUrl: null,
    githubUrl: null,
    caseStudy: {
      situation:
        'Businesses managing multiple product lines lacked a centralized view of sales performance and forward-looking demand signals to guide inventory decisions.',
      task:
        'Create a web-based dashboard that combines historical sales visualization with predictive algorithms for product-level forecasting.',
      action:
        'Developed a Flask application with Python backend logic to render product-level sales trends and integrated predictive modeling algorithms to project market demand patterns.',
      result:
        'Gave users a single interface for faster, data-driven decision-making and more refined inventory planning strategies based on anticipated demand.',
    },
  },
]

export const skillCategories = [
  {
    category: 'Programming & Databases',
    tools: 'Python, SQL, JavaScript, PostgreSQL',
  },
  {
    category: 'Web Frameworks',
    tools: 'Flask, React.js',
  },
  {
    category: 'Tools & Platforms',
    tools: 'Power BI, Tableau, Google Colab, Microsoft Excel, VS Code',
  },
  {
    category: 'Core Competencies',
    tools: 'Data Analysis, Data Modeling, Data Visualization, ETL, Project Management',
  },
]

export const timeline = [
  {
    period: 'Feb 2026 – May 2026',
    title: 'Data and Operations Intern',
    organization: 'Job Placement Office – Batangas State University, The National Engineering University, Lipa',
    highlights: [
      'Used reporting dashboards to monitor recruitment activities and surface placement trends.',
      'Managed and cleaned applicant databases in Excel to maintain data integrity and efficient candidate tracking.',
      'Designed marketing collateral — posters, flyers, and job posting templates — to increase program engagement.',
      'Audited company requirements for corporate partnerships, ensuring documentation and compliance standards were met.',
    ],
  },
  {
    period: 'Jan 2025 – Apr 2025',
    title: 'Research and Impact Associate Intern',
    organization: 'Tech Executive Labs',
    highlights: [
      'Aggregated a comprehensive Philippine geolocation dataset with urbanization classifications and demographic metrics for regional analysis.',
      'Evaluated startup ecosystems through comparative case studies of high-growth and failed ventures.',
      'Analyzed program effectiveness data to deliver insights supporting strategic decision-making.',
    ],
  },
  {
    period: '2022 – 2026',
    title: 'B.S. Information Technology — Business Analytics Track',
    organization:
      'Batangas State University, The National Engineering University · Lipa Campus',
    description:
      'Focused on data analysis, predictive modeling, database design, and translating analytical output into operational decisions.',
  },
]
