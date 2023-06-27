import {

  FaBriefcase,
  FaGraduationCap,
  FaCode,
   
  FaGithub,
} from 'react-icons/fa';
import {  FiExternalLink } from 'react-icons/fi';

import Vercel1 from './SitePhoto/Vercel1.png'
import SimonGame1 from './SitePhoto/SimonGame1.png'
import SimonGame2 from './SitePhoto/SimonGame2.png'
import TextUtils1 from './SitePhoto/TextUtils.png'
import TextUtils2 from './SitePhoto/TextUtils2.png'
import NoteKeeper1 from './SitePhoto/NoteKeeper1.png'
import NoteKeeper2 from './SitePhoto/NoteKeeper2.png'
import NoteKeeper3 from './SitePhoto/NoteKeeper3.png'
import NoteKeeper4 from './SitePhoto/NoteKeeper4.png'
import NoteKeeper5 from './SitePhoto/NoteKeeper5.png'
import NewsApp from './SitePhoto/NewsApp.png'
import Ecommerce1 from './SitePhoto/Ecommerce1.png'
import Ecommerce2 from './SitePhoto/Ecommerce2.png'
import Ecommerce3 from './SitePhoto/Ecommerce3.png'
import Ecommerce4 from './SitePhoto/Ecommerce4.png'
import Ecommerce5 from './SitePhoto/Ecommerce5.png'
import Ecommerce6 from './SitePhoto/Ecommerce6.png'
import Ecommerce7 from './SitePhoto/Ecommerce7.png'
import Ecommerce8 from './SitePhoto/Ecommerce8.png'
import Ecommerce9 from './SitePhoto/Ecommerce9.png'
import Ecommerce10 from './SitePhoto/Ecommerce10.png'
import Ecommerce11 from './SitePhoto/Ecommerce11.png'





export const resume = [
  {
    id: 1,
    category: 'certification',
    icon: <FaBriefcase />,
    year: '2021',
    title: ' Web Development   <span> Certification </span>',
    desc: 'successfully completed a course in Full Stack Web Development from Udemy and have been awarded a certificate for my achievement. with expertise in reactJs',
  },

  {
    id: 2,
    category: 'certification',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'Data Science & Machine Learning <span> Certification </span>',
    desc: ' I have successfully completed a course in Machine Learning and Data Science from Udemy and have been awarded a certificate for my achievement. ',
  },

  {
    id: 3,
    category: 'certification',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Python , C++ , C  <span> Certification </span>',
    desc: 'Succefully completed the C C++ & Python Certification ',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023 - Present',
    title: 'Engineering Degree <span> SGSITS Indore M.P,India </span>',
    desc: 'I am currently pursuing a degree in Computer Science Engineering from SGSITS Indore. This program provides me with a strong foundation in the principles and techniques of computer science, including programming, algorithms, data structures, and software engineering. I am excited to continue my studies and to apply my knowledge to real-world problems in the field of computer science.',
  },
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Higher Education <span>DPS kukshi MP,India </span>',
    desc: 'I pursued my higher education in Physics, Chemistry, and Mathematics (PCM) from DPS. This program provided me with a strong foundation in these subjects and equipped me with the knowledge and skills to excel in my studies. I am grateful for the opportunity to have studied at DPS and for the education I received there.',
  },

];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '50',
  },
  {
    id: 7,
    title: 'React',
    percentage: '80',
  },
  {
    id: 8,
    title: 'C/C++',
    percentage: '70',
  },

  {
    id: 6,
    title: 'java',
    percentage: '40',
  },
  {
    id: 6,
    title: 'pthon',
    percentage: '60',
  },
  {
    id: 6,
    title: 'SQL',
    percentage: '60',
  },
  {
    id: 6,
    title: 'NodeJs',
    percentage: '70',
  },
  {
    id: 6,
    title: 'MongoDB',
    percentage: '70',
  },
  {
    id: 6,
    title: 'Express',
    percentage: '50',
  },
  {
    id: 6,
    title: 'DSA',
    percentage: '80',
  },






];


export const portfolio = [
  {
    id: 1,
    img: [Vercel1],
    title: 'AI Summarizer',
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React & ChatGPT API',
        link: false
      },
      {
        icon: <FaGithub />,
        title: 'Source Code : ',
        desc: 'https://github.com/samoilbohra/AI-Summarizer',
        link: true

      },
      {
        icon: < FiExternalLink />,
        title: 'Live Link  : ',
        desc: 'https://ai-summarizer-steel.vercel.app/',
        link: true

      },

    ],
  },

  {
    id: 2,
    img: [SimonGame1, SimonGame2],
    title: 'Simon Game',
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML CSS & vanilla JS',
        link: false
      },
      {
        icon: <FaGithub />,
        title: 'Source Code : ',
        desc: 'https://github.com/samoilbohra/SimonGame',
        link: true

      },
      {
        icon: < FiExternalLink />,
        title: 'Live Link  : ',
        desc: 'https://samoilbohra.github.io/SimonGame/',
        link: true

      },
    ],
  },

  {
    id: 3,
    img: [TextUtils1, TextUtils2],
    title: 'Text Utils',
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs Bootstrap  ',
        link: false
      },
      {
        icon: <FaGithub />,
        title: 'Source Code : ',
        desc: 'https://github.com/samoilbohra/TEXT-APP',
        link: true

      },
      {
        icon: < FiExternalLink />,
        title: 'Live Link  : ',
        desc: 'https://samoilbohra.github.io/TEXT-APP/',
        link: true

      },
    ],
  },

  {
    id: 4,
    img: [NoteKeeper1, NoteKeeper2, NoteKeeper3, NoteKeeper4, NoteKeeper5],
    title: 'Note-Keeper',
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs NodeJs MongoDb ',
        link: false
      },
      {
        icon: <FaGithub />,
        title: 'Source Code : ',
        desc: 'https://github.com/samoilbohra/NoteKeeper-Frontend',
        link: true

      },
      {
        icon: < FiExternalLink />,
        title: 'Live Link  : ',
        desc: 'https://samoilbohra.github.io/NoteKeeper-Frontend',
        link: true

      },
    ],
  },

  {
    id: 5,
    img: [NewsApp],
    title: 'News WebApp',
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs , NewsAPI ',
        link: false
      },
      {
        icon: <FaGithub />,
        title: 'Source Code : ',
        desc: 'https://github.com/samoilbohra/News-App',
        link: true

      },
      {
        icon: < FiExternalLink />,
        title: 'Live Link  : ',
        desc: 'https://samoilbohra.github.io/News-App/',
        link: true

      },
    ],
  },

  {
    id: 6,
    img: [Ecommerce1, Ecommerce2, Ecommerce3, Ecommerce4, Ecommerce5, Ecommerce6, Ecommerce7, Ecommerce8, Ecommerce9, Ecommerce10 , Ecommerce11],
    title: 'Ecommerce - Website',
    details: [
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs , Material Ui , Node , Express , Mongo etc ',
        link: false
      },
      {
        icon: <FaGithub />,
        title: 'Source Code : ',
        desc: 'https://github.com/samoilbohra/E-Commerce-Frontrend',
        link: true

      },
      {
        icon: < FiExternalLink />,
        title: 'Live Link  : ',
        desc: 'not Hosted till Now',
        link: false

      },
    ],
  },
];

