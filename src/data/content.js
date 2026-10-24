export const profile = {
  name: 'Takahiro Largo',
  fullName: 'Takahiro Sanchez Largo',
  email: 'largotakahiro@gmail.com',
  github: 'https://github.com/Kiyoshi6969',
  linkedin: 'https://www.linkedin.com/in/takahiro-largo-2700b9308/',
  resume: 'https://drive.google.com/file/d/1ShGhRnciwdn6RwuJREOIOEawDjNf3xbD/view?usp=sharing',
};

export const projects = [
  {
    id: 'two-cities',
    name: '2 Cities Church',
    type: 'Website & mobile app',
    summary: 'Maintaining a WordPress website and Flutter application.',
    image: '/projects/two-cities-website.png',
    alt: '2 Cities Church website homepage screenshot',
    href: 'https://2citieschurch.com/',
    tech: 'WordPress / SiteGround / Flutter / Dart',
    detail: 'Website updates, hosting and domain administration, troubleshooting, and ongoing Flutter mobile app maintenance.',
  },
  {
    id: 'jeff-struecker',
    name: 'Jeff Struecker Ministries',
    type: 'Website & front-end',
    summary: 'Managing Subsplash pages and custom web experiences.',
    image: '/projects/jeff-struecker-website.png',
    alt: 'Jeff Struecker Ministries website with book promotion',
    href: 'https://www.jeffstrueckerministries.com/',
    tech: 'Subsplash / SnapPages / HTML / CSS / JavaScript',
    detail: 'Website management, visual updates, interactive components, bookstore enhancements, and responsive UI troubleshooting.',
  },
  {
    id: 'n8n',
    name: 'n8n Workflow Systems',
    type: 'Automation',
    summary: 'Building structured workflows for data and CRM tasks.',
    image: null,
    href: null,
    tech: 'n8n / Logic / Data Validation / CRM Data Tables',
    detail: 'Practical workflows for contact capture, field mapping, upsert operations, and duplicate prevention. Illustration is a conceptual workflow, not a claimed client deployment.',
  },
];

export const experience = [
  { name: '2 Cities Church', role: 'Website & mobile app maintenance', tags: 'WordPress · SiteGround · Flutter', image: '/projects/two-cities-website.png' },
  { name: 'Jeff Struecker Ministries', role: 'Website management & UI customization', tags: 'Subsplash · HTML · CSS · JavaScript', image: '/projects/jeff-struecker-website.png' },
  { name: 'Workflow Automation', role: 'n8n development projects', tags: 'n8n · CRM · Data validation', image: null },
];

export const additional = [
  {
    name: '2 Cities Church Website',
    kind: 'WordPress / SiteGround / GoDaddy',
    image: '/projects/two-cities-website.png',
    fallback: '2 CITIES CHURCH',
    href: 'https://2citieschurch.com/',
  },
  {
    name: 'Jeff Struecker Ministries Website',
    kind: 'Subsplash / HTML / CSS / JavaScript',
    image: '/projects/jeff-struecker-website.png',
    fallback: 'JSM WEBSITE',
    href: 'https://www.jeffstrueckerministries.com/',
  },
  { name: '2 Cities Church App', kind: 'Flutter / Dart', image: '/mobile-app/two-cities-home.jpeg', fallback: 'MOBILE APP' },
  { name: 'Sentiment Analysis', kind: 'Python / NLP / React', image: '/sentiment-app/sentiment-welcome.svg', fallback: 'SENTIMENT' },
  { name: 'DSWD Procurement UI/UX', kind: 'Figma concept', href: 'https://www.figma.com/design/zLOLy6KWwJlFvq3HddIsje/DSWD?node-id=0-1&t=c9s6cqUzpuf1Y0hh-1', fallback: 'DSWD' },
];

export const certificates = [
  { name: 'Python for Beginners', file: '/certificates/certificate-1.pdf' },
  { name: 'Full Stack Java Development', file: '/certificates/certificate.pdf' },
  { name: 'Introduction to SQL', file: '/certificates/certificate-2.pdf' },
  { name: 'Front End Development', file: '/certificates/certificate-3.pdf' },
];
