import { Github } from 'lucide-react';

// --------------------------- LOGOS ---------------------------

import LogoPython from '/public/images/logos/icon-javascript.svg';
import LogoSQL from '/public/images/logos/icon-postgresql.svg';
import LogoPowerBI from '/public/images/logos/icon-tailwindcss.svg';
import LogoTableau from '/public/images/logos/icon-figma.svg';
import LogoAWS from '/public/images/logos/icon-nodejs.svg';
import LogoAzure from '/public/images/logos/icon-nextjs.svg';
import LogoSpark from '/public/images/logos/icon-react.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoASU from '/public/images/logos/logo-upwork.svg';
import LogoTrivent from '/public/images/logos/logo-greenapex.svg';
import LogoEXL from '/public/images/logos/logo-dotnpixel.svg';
import LogoTSF from '/public/images/logos/icon-storybook.svg';

// --------------------------- PROJECT IMAGES ---------------------------

import ProjectCybersecurity from '/public/images/project-fiskil.png';
import ProjectSales from '/public/images/project-wingie.png';
import ProjectInsurance from '/public/images/project-pepehousing.png';
import ProjectHospital from '/public/images/project-hospital.png'; // ✅ NEW IMAGE IMPORT
import AvatarSharanya from '/public/images/avatar-sharanya.jpg';

// --------------------------- TYPES ---------------------------

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

// --------------------------- LINKS ---------------------------

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/sharanyaggg',
  GITHUB_REPO: '',
  TWITTER: '',
  FIGMA: '',
  FIGMA_FILE: '',
};

// --------------------------- NAV LINKS ---------------------------

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// --------------------------- SOCIAL LINKS ---------------------------

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/sharanyaggg',
  },
];

// --------------------------- TECHNOLOGIES ---------------------------

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Python',
    logo: '/images/logos/icon-python.svg',
    url: 'https://www.python.org/',
  },
  {
    label: 'SQL',
    logo: '/images/logos/icon-sql.svg',
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'Power BI',
    logo: '/images/logos/icon-powerbi.svg',
    url: 'https://powerbi.microsoft.com/',
  },
  {
    label: 'Tableau',
    logo: '/images/logos/icon-tableau.svg',
    url: 'https://www.tableau.com/',
  },
  {
    label: 'AWS',
    logo: '/images/logos/icon-aws.svg',
    url: 'https://aws.amazon.com/',
  },
  {
    label: 'Azure',
    logo: '/images/logos/icon-azure.svg',
    url: 'https://azure.microsoft.com/',
  },
  {
    label: 'Apache Spark',
    logo: '/images/logos/icon-spark.svg',
    url: 'https://spark.apache.org/',
  },
  {
    label: 'Git',
    logo: '/images/logos/icon-git.svg',
    url: 'https://git-scm.com/',
  },
  {
    label: 'Excel',
    logo: '/images/logos/icon-excel.svg',
    url: 'https://www.microsoft.com/microsoft-365/excel',
  },
  {
    label: 'Machine Learning',
    logo: '/images/logos/icon-ml.svg',
    url: 'https://en.wikipedia.org/wiki/Machine_learning',
  },
  {
    label: 'Java',
    logo: '/images/logos/icon-java.svg',
    url: 'https://www.java.com/',
  },
  {
    label: 'Databricks',
    logo: '/images/logos/icon-databricks.svg',
    url: 'https://www.databricks.com/',
  },
];

// --------------------------- EXPERIENCE ---------------------------

export const EXPERIENCES: ExperienceDetails[] = [
  {
    company: 'Sayam for All',
    position: 'Data Analyst',
    startDate: new Date(2025, 7),
    currentlyWorkHere: true,
    summary: [
      'Deployed donor data pipelines into governed analytics layer improving retention visibility by 25% across programs.',
      'Productionized machine learning models within MLOps pipelines with drift monitoring achieving 75% retention accuracy.',
      'Validated models using AI-assisted workflows generating actionable insights supporting strategic program decision-making.',
      'Enhanced donor segmentation models using feature engineering improving targeting precision across multiple fundraising initiatives.',
    ],
  },
  {
    company: 'Arizona State University',
    position: 'Data Analyst',
    startDate: new Date(2024, 7),
    endDate: new Date(2025, 4),
    summary: [
      'Built configuration-driven analytics dashboards from faculty requirements improving student performance outcomes by 10%.',
      'Engineered grading framework using Excel Pivot formulas ensuring 95% accuracy across 200+ academic submissions.',
      'Synthesized student behavioral trends into actionable insights enabling faculty interventions and improved academic performance.',
    ],
  },
  {
    company: 'Trivent Legal',
    position: 'Data Analyst',
    startDate: new Date(2024, 5),
    endDate: new Date(2024, 7),
    summary: [
      'Architected predictive pipelines from CRM data through production deployment reducing customer churn by 12%.',
      'Orchestrated CRM analytics and A/B testing lifecycle improving campaign engagement rates by 15% across segments.',
      'Optimized data pipelines reducing risk assessment turnaround time by 20% while ensuring production scalability.',
      'Standardized data governance frameworks improving data quality and ensuring audit-ready compliant reporting systems.',
    ],
  },
  {
    company: 'EXL Service',
    position: 'Data Analyst',
    startDate: new Date(2022, 4),
    endDate: new Date(2023, 7),
    summary: [
      'Translated business requirements into BRD and delivered MVP analytics solution improving forecasting accuracy by 30%.',
      'Constructed scalable ETL pipelines using Snowflake reducing data errors by 40% and improving data reliability.',
      'Developed proof-of-concept models on Databricks and Spark enabling production deployment using AWS and Azure.',
      'Designed data marts using Redshift and Azure SQL enabling self-service analytics across business stakeholders.',
    ],
  },
];

// --------------------------- PROJECTS ---------------------------

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Cybersecurity Salary Analysis Dashboard',
    description:
      'Designed an interactive Tableau dashboard visualizing cybersecurity salary trends across roles, experience levels, and regions. Integrated multi-source datasets to uncover factors influencing pay such as remote work, company size, and employment type. Enabled HR and analysts to identify compensation gaps and forecast salary changes year-over-year. Improved data accessibility and decision-making by 35%.',
    url: 'https://public.tableau.com/app/profile/sharanya.gangadharappa/viz/Cybersecurity_Salary_Analysis_Dashboard',
    previewImage: ProjectCybersecurity,
    technologies: ['Tableau', 'Excel', 'Data Visualization'],
  },
  {
    name: 'Super Store Sales Forecasting Dashboard',
    description:
      'Built a Power BI dashboard to analyze Super Store sales data and forecast demand trends. Implemented DAX measures and time-series forecasting to enhance accuracy by 40%. Visualized KPIs like profit, sales by segment, category, and region to help management make data-driven decisions. Optimized marketing strategies, improving profitability by 25%.',
    url: 'https://app.powerbi.com/groups/me/reports/a8d50abe-5582-4dc0-8c31-3cfafe86e59b/ReportSection',
    previewImage: ProjectSales,
    technologies: ['Power BI', 'Excel', 'Data Analytics'],
  },
  {
    name: 'ML Based Health Insurance System',
    description:
      'Developed a fraud detection portal using machine learning to verify hospital insurance claims. Implemented Logistic Regression, Decision Tree, and K-Means clustering to classify legitimate vs. fraudulent cases with 71% accuracy. Automated document verification and budget estimation checks, reducing manual workload. Enhanced transparency for insurance firms and improved claim validation speed.',
    url: 'https://github.com/sharanyaggg',
    previewImage: ProjectInsurance,
    technologies: ['Python', 'MySQL', 'ML'],
  },
  {
    name: 'Hospital Management System',
    description:
      'Created a PHP-MySQL web application to automate hospital operations like patient registration, billing, and appointment scheduling. Implemented role-based access for admins, doctors, and patients with secure data management. Replaced manual recordkeeping with digital tracking to minimize errors. Improved operational efficiency and reduced administrative time by 80%.',
    url: 'https://github.com/sharanyaggg',
    previewImage: ProjectHospital, // ✅ NEW IMAGE USED HERE
    technologies: ['PHP', 'MySQL', 'Web Dev'],
  },
];

// --------------------------- TESTIMONIALS ---------------------------

export const TESTIMONIALS: TestimonialDetails[] = [];

// --------------------------- ABOUT INFO ---------------------------

export const ABOUT = {
  name: 'Sharanya Gangadharappa',
  title:
    'Data Engineer | Data Analyst | ETL Pipelines | BI Dashboards | AWS, SQL, Python, Tableau',
  location: 'Houston, TX',
  email: 'sharanya.g.0307@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sharanya-gangadhar/',
  github: 'https://github.com/sharanyaggg',
  resume:
    'https://drive.google.com/file/d/12o8_E1SvwuRH-WbryhqnAah4TdeKP9qe/view?usp=sharing',
  aboutMe:
    'Data Engineer and Analyst with 2+ years of experience designing ETL pipelines, developing BI dashboards, and leveraging Python, SQL, and cloud platforms to transform data into actionable insights.',
  avatar: AvatarSharanya,
};
