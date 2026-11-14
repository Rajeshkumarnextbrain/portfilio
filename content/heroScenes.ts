export interface WatchSceneData {
  id: 'watch';
  tabLabel: string;
  tabProduct: string;
  tabTitle: string;
  bigLabel: string;
  srDescription: string;
  alerts: string[];
  finalStatus: string;
}

export interface AskSceneData {
  id: 'ask';
  tabLabel: string;
  tabProduct: string;
  tabTitle: string;
  bigLabel: string;
  srDescription: string;
  query: string;
  steps: string[];
  chip: string;
}

export interface LearnSceneData {
  id: 'learn';
  tabLabel: string;
  tabProduct: string;
  tabTitle: string;
  bigLabel: string;
  srDescription: string;
  query: string;
  steps: string[];
  calcResult: string;
  source: string;
}

export type HeroScene = WatchSceneData | AskSceneData | LearnSceneData;

export const HERO_SCENES: HeroScene[] = [
  {
    id: 'watch',
    tabLabel: 'Watch',
    tabProduct: 'VisionFacts.ai',
    tabTitle: 'Watch · VisionFacts.ai',
    bigLabel: '130+ cameras, watched automatically',
    srDescription: 'Scene 1: VisionFacts.ai monitors 130 camera feeds simultaneously, detecting safety alerts such as missing helmets and forklift proximity before sending alerts to the dashboard.',
    alerts: [
      'Helmet missing',
      'Forklift close to a worker',
      'Person in restricted zone',
      'Possible fall',
    ],
    finalStatus: 'Alert sent to dashboard',
  },
  {
    id: 'ask',
    tabLabel: 'Ask',
    tabProduct: 'Analytics Agent',
    tabTitle: 'Ask · Analytics Agent',
    bigLabel: 'Ask in plain English, get answers and reports',
    srDescription: 'Scene 2: Analytics Agent receives a plain-English query correlating gate logs with attendance, checks table schemas, executes read-only queries, and generates a shift report.',
    query: 'Correlate vehicles entering Gate 2 between 08:00 and 09:00 with attendance logs and perimeter alerts.',
    steps: [
      'Checking table structure…',
      'Running a read-only query…',
      'Writing the answer…',
    ],
    chip: 'Shift report emailed',
  },
  {
    id: 'learn',
    tabLabel: 'Learn',
    tabProduct: 'Edubotix',
    tabTitle: 'Learn · Edubotix',
    bigLabel: 'Answers from the textbook, maths from verified tools',
    srDescription: 'Scene 3: Edubotix answers physics questions directly from verified curriculum textbooks using computational tools to calculate precise results with section citations.',
    query: 'A car moves at 5 m/s for 10 s. How far does it go?',
    steps: [
      'Finding the textbook section…',
      'Calculating with a verified tool',
    ],
    calcResult: '5 m/s × 10 s = 50 m',
    source: 'Source: textbook chapter, page and section',
  },
];

export const HERO_SCENE_CAPTION = 'Illustration: simplified example, not live data.';
