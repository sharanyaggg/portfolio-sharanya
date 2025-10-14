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
    company: 'Arizona State University',
    position: 'Graduate Teaching Assistant',
    startDate: new Date(2024, 6), // July 2024
    endDate: new Date(2025, 5), // June 2025
    summary: [
      'Enhanced student performance by 10% by supporting Information Security coursework and simplifying technical concepts.',
      'Assessed 200+ submissions with 95% grading accuracy ensuring academic data integrity.',
      'Reduced recurring issues by 15% through tailored academic support and pattern analysis.',
    ],
  },
  {
    company: 'Trivent Legal, Inc.',
    position: 'Data Engineer Intern',
    startDate: new Date(2024, 4), // May 2024
    endDate: new Date(2024, 7), // August 2024
    summary: [
      'Built Power BI/Tableau dashboards improving forecasting accuracy by 30%.',
      'Automated executive reporting reducing delivery time by 20% and decision cycles by 15%.',
      'Refactored ETL pipelines cutting data discrepancies by 40% and improving scalability.',
    ],
  },
  {
    company: 'EXL Service',
    position: 'Data Engineer',
    startDate: new Date(2022, 2), // March 2022
    endDate: new Date(2023, 7), // August 2023
    summary: [
      'Developed dashboards to track KPIs improving forecasting accuracy by 30%.',
      'Automated workflows using SQL and AWS Lambda reducing manual workload by 25%.',
      'Optimized ETL pipelines minimizing data errors by 40%.',
    ],
  },
  {
    company: 'The Sparks Foundation',
    position: 'Data Engineer Intern',
    startDate: new Date(2021, 8),
    endDate: new Date(2021, 9),
    summary: [
      'Refined prediction workflows cutting model complexity by 20% and boosting performance.',
      'Performed exploratory data analysis reducing costs by 10% through resource optimization.',
      'Enhanced visualization improving stakeholder understanding by 20%.',
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
    'https://drive.google.com/file/d/1YngBx3-JHtbpdEe4-ErdQ3ULewoe4iVu/view?usp=sharing',
  aboutMe:
    'Data Engineer and Analyst with 2+ years of experience designing ETL pipelines, developing BI dashboards, and leveraging Python, SQL, and cloud platforms to transform data into actionable insights.',
  avatar: AvatarSharanya,
};
