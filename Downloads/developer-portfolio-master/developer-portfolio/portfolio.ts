import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Kiran Pawar',
  title: "Hello all, I'm Kiran Pawar",
  description:
    "A versatile IT professional with a passion for crafting exceptional digital experiences. I specialize in both frontend development and cloud and DevOps engineering, bringing a unique blend of creativity and technical expertise to the table.",
  resumeLink:
    '',
};

export const openSource = {
  githubUserName: 'imkiran13',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://imkiran13.github.io/',
  linkedin: 'https://www.linkedin.com/in/kiran-pawar-57b4b8135',
  github: 'https://github.com/imkiran13',
  instagram: 'https://www.instagram.com/imkiran13',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FRONT DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Front End Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) in React.js'
        ),
        emoji('⚡ Ensuring that websites and applications are accessible and visually appealing on various devices and screen sizes.'),
        emoji('⚡ Working with CSS preprocessors like SASS or LESS to manage and maintain CSS code more efficiently.'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        // {
        //   skillName: 'Redux',
        //   iconifyTag: 'logos:redux',
        // },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud and DevOps',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Creating, setting up, and overseeing cloud-based infrastructure on platforms such as AWS'),
        emoji(
          '⚡ Working with containers (e.g., Docker) and orchestration tools (e.g., Kubernetes) for efficient application deployment and scaling.'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Jenkins.'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        // {
        //   skillName: 'Azure',
        //   iconifyTag: 'logos:microsoft-azure',
        // },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        // {
        //   skillName: 'Github Actions',
        //   iconifyTag: 'logos:github-actions',
        // },
        // {
        //   skillName: 'Cloudinary',
        //   iconifyTag: 'logos:cloudinary',
        // },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        // {
        //   skillName: 'Sentry',
        //   iconifyTag: 'logos:sentry-icon',
        // },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Ramrao Adik Institute of Technology',
    subHeader: 'Bachelor of Engineering in Information Technology',
    duration: 'August 2014 - June 2018',
    desc: 'Presented paper in National Level Students Conference on frontiers in engineering and technology applications.',
    grade: 'CGPA 7.23/10',
    descBullets: [
      'Attended Workshop on Graphics Designing C-DAC conducted by ITSA RAIT.',
      'Participated in Hackathon (Android App developement) Organised by Prodology held at VJTI mumbai in Feb 2017.',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'NeoSOFT Technologies',
    companyLogo: '/img/icons/common/neosoft.png',
    date: 'March 2021-Present',
    desc: 'I worked as frontend web developer to design web Applications  using HTML5, CSS3, SCSS, BEM, Bootstrap, Tailwind, Javascript, React and some other libraries.',
  },
  // {
  //   role: 'API Engineer',
  //   company: 'Duseca Software',
  //   companyLogo: '/img/icons/common/dusecaSoftware.jpg',
  //   date: 'Jan 2022 – Mar 2022',
  //   desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
  //   descBullets: [
  //   	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  //   	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   ],
  // },
  // {
  //   role: 'Full Stack Developer',
  //   company: 'Bleed-AI',
  //   companyLogo: '/img/icons/common/bleedAI.jpg',
  //   date: 'Sept 2021 - Oct 2021',
  //   desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  // },
  // {
  //   role: 'Backend Developer',
  //   company: 'Wapidu',
  //   companyLogo: '/img/icons/common/wapidu.jpg',
  //   date: 'Sept 2021',
  //   desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  // },
];

export const projects: ProjectType[] = [
  {
    name: 'Developer Portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap.',
    github: 'https://github.com/imkiran13/developer-portfolio',
    link: 'https://developer-portfolio.netlify.app/',
  },
  {
    name: 'Keerti Academy',
    desc: ' Template designed for Educational purpose with Html,css,javascript with mobile responsive approach.',
    github: 'https://github.com/imkiran13/Keerti-Academy',
  },
  {
    name: 'Supply Chain',
    desc: 'Template designed for Business purpose with Html,css,javascript with mobile responsive approach.',
    github: 'https://github.com/imkiran13/Supplychain',
  },
  {
    name: 'Neosmile',
    desc: 'Template designed for Educational purpose with Html,css,javascript with mobile responsive approach.',
    github: 'https://github.com/imkiran13/Neosmile',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Kiran Pawar',
  description:
    'A passionate Cloud and DevOps Engineer and Front End Developer.',
  author: 'Kiran Pawar',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: '',
  keywords: [
    'Kiran',
    'Kiran Pawar',
    '@imkiran13',
    'imkiran13',
    'Portfolio',
    'Kiran Portfolio ',
    'Kiran Pawar Portfolio',
  ],
};
