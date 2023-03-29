interface NavigationItem {
  id: number;
  tooltip: string;
  icon: string;
  to: string;
};

type Navigation = {
  navItems: Array<NavigationItem>;
};

type Home = {
  tag: string;
  route: string;
  smallText: string;
  mainText: string;
};

type StackListItem = {
  tooltip: string;
  icon: string;
  animationDelay: number
};

type Stack = {
  tag: string;
  route: string;
  stackList: Array<StackListItem>;
};

type WorkExperienceItem = {
  title: string;
  company: string;
  dateRange: string;
  jobSummary: {
    summaryText: string;
    keyResponsibilities: {
      title: string;
      responsibilitiesList: Array<string>;
    },
    skills: {
      title: string;
      skillsList: Array<string>
    }
  }
};

type WorkExperience = {
  tag: string;
  to: string;
  workList: Array<WorkExperienceItem>;
};

type SocialItem = {
  icon: string;
  link: string;
  tooltip: string;
}

type Socials = {
  socialsList: Array<SocialItem>
}

type AnimationStates = {
  homeAnimation: boolean,
  stackAnimation: boolean,
  workAnimation: boolean
}
// initial, animate, transition, tag
interface AnimationInitialAndAnimateType {
  opacity: number,
  scale: number
}

interface AnimationTransitionType {
  duration: number,
  delay: number,
  ease: Array<number>
}

type AnimationDataType = {
  stackAnimation: {
    initial: AnimationInitialAndAnimateType | {},
    animate?: AnimationInitialAndAnimateType | {},
    opacity?: AnimationInitialAndAnimateType | {},
    transition: AnimationTransitionType | {},
    tag: string
  },
  navAnimation: {
    x: string
  }
}

type AnimationDataItemType = {
  animationDelay: number;
  index?: number
}


type AnimationTab = {
  initialX: {x: string} | {}, 
  animateX: {x: string} | {}
  to?: string,
}

// interface ProjectItem {
//   link: string;
//   tooltip: string;
// }

// type Projects = {
//   projectsList: Array<>
// }


export type {
  Navigation,
  NavigationItem,
  Home,
  Stack,
  StackListItem,
  WorkExperience,
  WorkExperienceItem,
  Socials,
  SocialItem,
  AnimationStates,
  AnimationDataType,
  AnimationDataItemType,
  AnimationTab
};
