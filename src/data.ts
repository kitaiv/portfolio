import {
  BootstrapIcon,
  EslintIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TypescriptIcon,
  WebpackIcon,
  HomeIcon,
  StackIcon,
  ContactIcon,
  ProjectsIcon,
  WorkExperienceIcon,
  TwitterIcon,
  TelegramIcon,
  GitHubIcon,
  LinkedInIcon
} from './assets/img/index';

import type {
  Navigation,
  Home,
  Stack,
  WorkExperience,
  Socials,
  AnimationDataItemType,
  AnimationDataType,
  Projects
} from './types';

const navData: Navigation = {
  navItems: [
    {
      id: 1,
      tooltip: 'Home',
      icon: HomeIcon,
      to: '/'
    },
    {
      id: 2,
      tooltip: 'Stack',
      icon: StackIcon,
      to: '/stack'
    },
    {
      id: 3,
      tooltip: 'Work Experience',
      icon: WorkExperienceIcon,
      to: '/work'
    },
    {
      id: 4,
      tooltip: 'Projects',
      icon: ProjectsIcon,
      to: '/projects'
    },
    {
      id: 5,
      tooltip: 'Contact me',
      icon: ContactIcon,
      to: '/contact'
    }
  ]
};

const homeData: Home = {
  tag: 'home',
  route: '/home',
  smallText: 'Hey',
  mainText:
    "Welcome to my website!\nMy name is Svyatoslav\nI'm a Front-end Developer\nI specialize in creating engaging and user-friendly websites using the latest web technologies"
};

function clearObjectValues(obj: any) {
  for (let key in obj) {
    obj[key] = {};
  }
  return { ...obj, tag: 'div' };
}
// item.animationDelay
function checkIfAnimated(
  item: AnimationDataItemType,
  stackAnimationData: AnimationDataType['stackAnimation'],
  isAnimated: boolean
) {
  if (isAnimated) return clearObjectValues(stackAnimationData);
  return {
    ...stackAnimationData,
    transition: {
      ...stackAnimationData.transition,
      delay: item.animationDelay
    }
  };
}

function setXValue(initialX: string, animateX: string) {
  return {
    transition: { type: 'spring', duration: 1 },
    initial: { x: initialX },
    animate: { x: animateX }
  };
}

// transition={{ type: "spring", duration: 1 }}
// initial={{ x: "-100%" }}
// animate={{ x: "0%" }}

const stackAnimationData: AnimationDataType['stackAnimation'] = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.4,
    delay: undefined,
    ease: [0, 0.71, 0.2, 1.01]
  },
  tag: `div`
};

const animate = (
  item: AnimationDataItemType,
  isAnimated: boolean,
  initialX: string = '',
  animateX: string = ''
) => ({
  stackAnimation: checkIfAnimated(item, stackAnimationData, isAnimated),
  navAnimation: setXValue(initialX, animateX)
  //other animation objects
});

const stackData: Stack = {
  tag: 'stack',
  route: '/stack',
  stackList: [
    {
      tooltip: 'JavaScript',
      icon: JsIcon,
      animationDelay: 0.1
    },
    {
      tooltip: 'TypeScript',
      icon: TypescriptIcon,
      animationDelay: 0.2
    },
    {
      tooltip: 'HTML',
      icon: HtmlIcon,
      animationDelay: 0.3
    },
    {
      tooltip: 'React',
      icon: ReactIcon,
      animationDelay: 0.4
    },
    {
      tooltip: 'Redux',
      icon: ReduxIcon,
      animationDelay: 0.5
    },
    {
      tooltip: 'Bootstrap',
      icon: BootstrapIcon,
      animationDelay: 0.6
    },
    {
      tooltip: 'Git',
      icon: GitIcon,
      animationDelay: 0.7
    },
    {
      tooltip: 'SASS',
      icon: SassIcon,
      animationDelay: 0.8
    },
    {
      tooltip: 'Webpack',
      icon: WebpackIcon,
      animationDelay: 0.9
    },
    {
      tooltip: 'Eslint',
      icon: EslintIcon,
      animationDelay: 1
    }
  ]
};

const workData: WorkExperience = {
  tag: 'work-experience',
  to: '/work-experience',
  workList: [
    {
      tag: 'work-experience',
      title: 'Front-end ReactJS Developer',
      company: 'DEV SIT',
      dateRange: '12/2021 - Present',
      jobSummary: {
        summaryText:
          'As a Frontend Developer at DEV SIT, I was responsible for building Chrome extensions, landing pages, PWA web apps. My technical skills in front-end development, including HTML, CSS, React, JavaScript, Redux/Redux-Toolkit, git, npm, Ajax, and Bootstrap, were instrumental in creating visually appealing and responsive web apps that met the needs of our clients. My problem-solving skills and strong communication skills ensured that project requirements were met and exceeded expectations, making me a valuable team member.',
        keywords: ['HTML', 'CSS', 'React', 'JavaScript', 'Redux/Redux-Toolkit', 'git', 'npm', 'Ajax', 'Bootstrap'],
        keyResponsibilities: {
          title: 'Key Responsibilities:',
          responsibilitiesList: [
            'Developed visually appealing and responsive Chrome extensions, landing pages, PWA web apps, and ReactJS web apps using HTML, CSS, ReactJS, TypeScript, Redux, Redux-toolkit, git, npm, AJAX, and Bootstrap.',
            'Collaborated with designers and other developers to implement UI/UX designs.',
            'Implemented front-end architecture best practices and coding standards.',
            'Wrote clean, efficient, and reusable code.',
            'Integrated with APIs and databases to enable the creation of web apps with dynamic content.',
            'Troubleshot and debugged issues as they arose.',
            'Conducted code reviews and provided feedback to other developers.',
            'Communicated effectively with project managers and clients to understand and meet project requirements.'
          ]
        },
        skills: {
          title: "Skills:",
          skillsList: [
            'Strong technical skills in HTML, CSS, JavaScript, ReactJS, TypeScript, Redux, Redux-toolkit, git, npm, AJAX, and Bootstrap',
            'Excellent problem-solving skills and attention to detail.',
            'Strong communication skills and ability to work collaboratively in a team environment.',
            'Passion for developing visually appealing and responsive web apps.'
          ]
        }
      }
    },
    {
      tag: 'work-experience',
      title: 'Front End Developer',
      company: 'CB',
      dateRange: '12/2020 - 10/2021',
      jobSummary: {
        summaryText:
          'As a Frontend Developer at CB, I was responsible for building a web app that aimed to be a constructor for building a Telegram, WhatsApp, and other bots. My technical skills in front-end development, including React, Redux/Redux-Toolkit, git, npm, and Ajax, were instrumental in creating a user-friendly web app that met the needs of our clients. My ability to organize workflows and manage processes ensured the timely delivery of milestones, making me a valuable team member.',
        keywords: ['React', 'Redux/Redux-Toolkit', 'git', 'npm', 'Ajax'],
        keyResponsibilities: {
          title: 'Key Responsibilities:',
          responsibilitiesList: [
            'Developed a web app that aimed to be a constructor for building bots using ReactJS, Redux, Redux-toolkit, git, npm, and AJAX.',
            'Collaborated with designers and developers to implement UI/UX designs.',
            'Implemented front-end architecture best practices and coding standards.',
            'Wrote clean, efficient, and reusable code.',
            'Integrated with APIs and databases to enable the creation of bots for different messaging platforms.',
            'Troubleshot and debugged issues as they arose.',
            'Conducted code reviews and provided feedback to other developers.',
            'Managed and maintained project workflows, ensuring timely delivery of milestones.'
          ]
        },
        skills: {
          title: "Skills:",
          skillsList: [
            'Strong technical skills in ReactJS, JavaScript, Redux, Redux-toolkit, git, npm, and AJAX.',
            'Excellent problem-solving skills and attention to detail.',
            'Ability to manage project workflows and prioritize tasks.',
            'Strong communication skills and ability to work collaboratively in a team environment.',
            'Passion for developing user-friendly web apps.'
          ]
        }
      }
    },
    {
      tag: 'work-experience',
      title: 'Front-end ReactJS Developer',
      company: 'Autoparts | Start-up ',
      dateRange: '09/2020 - 10/2020',
      jobSummary: {
        summaryText:
          'As a Frontend Developer at Autoparts, I was responsible for building and maintaining an online store that sells different parts for automobiles. My technical skills in front-end dev elopment, including React, JavaScript, Redux/Redux-Toolkit, git, npm, and Material UI, were instrumental in creating a user-friendly online store that met the needs of our customers. My ability to organize workflows and manage processes ensured the timely delivery of milestones, making me a valuable team member.',
          keywords: ['React', 'JavaScript', 'Redux/Redux-Toolkit', 'git', 'npm', 'Material UI'],
        keyResponsibilities: {
          title: 'Key Responsibilities:',
          responsibilitiesList: [
            'Developed and maintained an online store that sells different parts for automobiles using ReactJS, JavaScript, Redux, Reduxtoolkit, git, npm, and MaterialUI.',
            'Collaborated with designers and developers to implement UI/UX designs.',
            'Implemented front-end architecture best practices and coding standards.',
            'Wrote clean, efficient, and reusable code.',
            'Worked with the back-end development team to integrate with APIs and databases.',
            'Troubleshot and debugged issues as they arose.',
            'Conducted code reviews and provided feedback to other developers.',
            'Managed and maintained project workflows, ensuring timely delivery of milestones.'
          ]
        },
        skills: {
          title: "Skills:",
          skillsList: [
            'Strong technical skills in ReactJS, JavaScript, Redux, Redux-toolkit, git, npm, and MaterialUI.',
            'Excellent problem-solving skills and attention to detail.',
            'Ability to manage project workflows and prioritize tasks.',
            'Strong communication skills and ability to work collaboratively in a team environment.',
            'Passion for developing user-friendly online stores.'
          ]
        }
      }
    },
    {
      tag: 'work-experience',
      title: 'ReactJS Engineer',
      company: 'Astomi',
      dateRange: '01/2020 - 03/2020',
      jobSummary: {
        summaryText:
          'As a ReactJS Engineer at Astomi, I was responsible for developing and maintaining an online store using React, Redux/Redux-Toolkit, git, and npm. My technical skills in front-end development were crucial in building a user-friendly online store that met the needs of our customers. My ability to organize workflows and manage processes ensured the timely delivery of milestones, making me a valuable team member.',
        keywords: ['React', 'git', 'npm', 'Redux/Redux-Toolkit'],
        keyResponsibilities: {
          title: 'Key Responsibilities:',
          responsibilitiesList: [
            'Developed and maintained an online store using ReactJS, Redux, and Redux-toolkit.',
            'Collaborated with designers and developers to implement UI/UX designs.',
            'Implemented front-end architecture best practices and coding standards.',
            'Wrote clean, efficient, and reusable code.',
            'Worked with the back-end development team to integrate with APIs and databases.',
            'Troubleshot and debugged issues as they arose.',
            'Conducted code reviews and provided feedback to other developers.',
            'Managed and maintained project workflows, ensuring timely delivery of milestones.'
          ]
        },
        skills: {
          title: "Skills:",
          skillsList: [
            'Strong technical skills in ReactJS, Redux, Redux-toolkit, git, and npm.',
            'Excellent problem-solving skills and attention to detail.',
            'Ability to manage project workflows and prioritize tasks.',
            'Strong communication skills and ability to work collaboratively in a team environment.',
            'Passion for developing user-friendly online stores.'
          ]
        }
      }
    }
  ]
};

const projectsData: Projects = {
  to: '/projects',
  projectsList: [
    {
      id: 0,
      tag: 'projects',
      title: 'GameReqs',
      description: "Gamereqs is a web application built using React and styled using Material UI. The app provides a platform for gamers to search and discover new games based on their preferences. The search functionality allows users to filter games by genre, platform, release date, and rating. Gamereqs also features a recommendation system that generates personalized game suggestions based on the user's previous searches and preferences.",
      keywords: ['React', 'Material UI'],
      githubLink: 'https://github.com/kitaiv/gamereqs',
      viewLink: 'https://gamereqs-ojuqjlg6o-kitaiv.vercel.app/'
    },
    {
      id: 1,
      tag: 'projects',
      title: 'Todo App',
      description: "To-do app is a simple and efficient web application built using React and TypeScript. The user interface is designed using React Bootstrap, making it intuitive and user-friendly. With this app, users can easily create and manage their to-do lists, set deadlines, and mark tasks as completed.",
      keywords: ['React', 'TypeScript', 'React Bootstrap'],
      githubLink: 'https://github.com/kitaiv/todo-app',
      viewLink: 'https://todo-5yz5z730q-kitaiv.vercel.app/'
    },
    {
      id: 2,
      tag: 'projects',
      title: 'Volume Deck',
      description: "Volume Deck is a Chrome extension built using React, TypeScript, and Webpack. The extension provides users with a customizable volume control interface that can be accessed from anywhere on the web. The interface includes a slider that allows users to adjust the volume of their device, as well as individual volume controls for specific tabs or applications. volumedeck is designed to be user-friendly and intuitive, with a simple and modern interface. With volumedeck, users can easily manage their device's volume without having to switch between tabs or applications.",
      keywords: ['React', 'TypeScript', 'Webpack'],
      githubLink: 'https://github.com/kitaiv/volumedeck',
      viewLink: undefined
    }
    
  ]
}

const socialsData: Socials = {
  socialsList: [
    {
      icon: TelegramIcon,
      link: 'https://t.me/kitaiv',
      tooltip: 'Telegram'
    },
    {
      icon: TwitterIcon,
      link: 'https://twitter.com/svyatos_dev',
      tooltip: 'Twitter'
    },
    {
      icon: GitHubIcon,
      link: 'https://github.com/kitaiv',
      tooltip: 'GitHub'
    },
    {
      icon: LinkedInIcon,
      link: 'https://www.linkedin.com/in/svyatoslavkurka/',
      tooltip: 'LinkedIn'
    }
  ]
};

const currentYear = new Date().getFullYear()

const footerData = {
  seeCode: {
    text: 'See code >>',
    link: 'https://github.com/kitaiv/portfolio'
  },
  footerText: {
    text_1: 'Design and built fully by me',
    text_2: '®All rights reserved @' + currentYear
  }
}

export { homeData, stackData, workData, navData, socialsData, animate, projectsData, footerData};
