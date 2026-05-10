export const FULL_NAME = 'Gajendra Kumar Kaushik';
export const TITLE = 'Software Engineer';

export const EMAIL = 'gajendrakaushik128@gmail.com';
export const GITHUB_USERNAME = 'GajendraKaushik';
export const LINKEDIN_HANDLE = 'gaj3';

export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
export const LINKEDIN_URL = `https://www.linkedin.com/in/${LINKEDIN_HANDLE}/`;
export const MAILTO = `mailto:${EMAIL}`;

export const PROFILE_PIC_URL =
  'https://github.com/GajendraKaushik/certificates_and_achievements/raw/main/Images/black.jpeg';

export const RESUME_PDF_URL = '#';

export const DUMMY_PROJECTS = [
  {
    title: 'Full-Stack Project One',
    problem:
      'Placeholder project to showcase an end-to-end build: UI, API, and database working together.',
    solution:
      'Responsive frontend with a backend API and persistence layer. Structure kept modular for easy scaling.',
    impact:
      'Demonstrates product delivery mindset: clear requirements, maintainable architecture, and clean UX.',
    stack: ['React', 'Node.js', 'Database'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Full-Stack Project Two',
    problem:
      'Placeholder project to highlight full-stack patterns like authentication, CRUD flows, and deployment readiness.',
    solution:
      'Frontend + backend API with a simple data model and reusable components; designed for iterative improvements.',
    impact:
      'Shows ability to ship a complete feature set and communicate tradeoffs clearly.',
    stack: ['React', 'API', 'Database'],
    githubUrl: '#',
    demoUrl: '#',
  },
];

export const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind', 'Vite', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'Auth (JWT)'],
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'Git', 'CI/CD', 'PostgreSQL', 'Terraform'],
  },
];

export const RECRUITER_SKILL_GROUPS = [
  {
    label: 'Backend Systems',
    skills: [
      { name: 'Python', iconKey: 'python' },
      { name: 'Django', iconKey: 'django' },
      { name: 'Java', iconKey: 'java' },
      { name: 'Spring Boot', iconKey: 'springboot' },
    ],
  },
  {
    label: 'Frontend Delivery',
    skills: [
      { name: 'React', iconKey: 'react' },
      { name: 'Angular', iconKey: 'angular' },
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'Tailwind', iconKey: 'tailwind' },
    ],
  },
  {
    label: 'Infra & Tools',
    skills: [
      { name: 'AWS', iconKey: 'aws' },
      { name: 'Docker', iconKey: 'docker' },
      { name: 'PostgreSQL', iconKey: 'postgresql' },
      { name: 'MongoDB', iconKey: 'mongodb' },
    ],
  },
];

export const DEVELOPER_SKILLS = [
  { name: 'Django', iconKey: 'django', note: 'Where I live. 2 years deep.' },
  { name: 'Python', iconKey: 'python', note: 'First language I actually liked.' },
  { name: 'Spring Boot', iconKey: 'springboot', note: 'Enterprise APIs. Hibernate made me cry once.' },
  { name: 'React', iconKey: 'react', note: 'I understand hooks now. Took a while.' },
  { name: 'Angular', iconKey: 'angular', note: 'RxJS and I have a complicated relationship.' },
  { name: 'TypeScript', iconKey: 'typescript', note: 'Once you go typed, you never go back.' },
  { name: 'PostgreSQL', iconKey: 'postgresql', note: 'Indexes are magic. Write the query plan.' },
  { name: 'AWS', iconKey: 'aws', note: 'S3, EC2. Still afraid of billing alerts.' },
  { name: 'Docker', iconKey: 'docker', note: '"Works on my machine" — now ships everywhere.' },
  { name: 'MongoDB', iconKey: 'mongodb', note: 'Schema-less, until you wish you had one.' },
  { name: 'Git', iconKey: 'git', note: 'git blame → git shame → git fix.' },
  { name: 'Node.js', iconKey: 'nodejs', note: 'Async all the way down.' },
];
