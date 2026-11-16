import React from 'react';
import {
  Download,
  ArrowUpRight,
  Compass,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Mail,
  Laptop,
  Video,
  Menu,
  X,
  Check,
  Copy,
  Activity,
  Calculator,
  BookOpen,
  Radio,
  Pause,
  Play,
  Film,
  Bot,
  Gauge,
  Users,
  LucideProps,
} from 'lucide-react';

export type IconName =
  | 'download'
  | 'north_east'
  | 'travel_explore'
  | 'arrow_back'
  | 'arrow_forward'
  | 'arrow_downward'
  | 'verified'
  | 'mail'
  | 'laptop'
  | 'videocam'
  | 'menu'
  | 'close'
  | 'check'
  | 'check_circle'
  | 'content_copy'
  | 'monitoring'
  | 'calculate'
  | 'menu_book'
  | 'sensors'
  | 'pause'
  | 'play_arrow'
  | 'movie'
  | 'smart_toy'
  | 'speed'
  | 'groups';

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  download: Download,
  north_east: ArrowUpRight,
  travel_explore: Compass,
  arrow_back: ArrowLeft,
  arrow_forward: ArrowRight,
  arrow_downward: ArrowDown,
  verified: CheckCircle2,
  mail: Mail,
  laptop: Laptop,
  videocam: Video,
  menu: Menu,
  close: X,
  check: Check,
  check_circle: CheckCircle2,
  content_copy: Copy,
  monitoring: Activity,
  calculate: Calculator,
  menu_book: BookOpen,
  sensors: Radio,
  pause: Pause,
  play_arrow: Play,
  movie: Film,
  smart_toy: Bot,
  speed: Gauge,
  groups: Users,
};

interface IconProps extends LucideProps {
  name: IconName | string;
}

export function Icon({ name, className = '', size = '1em', strokeWidth = 2, ...props }: IconProps) {
  const Component = ICON_MAP[name];
  if (!Component) {
    return null;
  }
  return (
    <Component
      size={size}
      strokeWidth={strokeWidth}
      className={`inline-block shrink-0 align-middle ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}

export default Icon;
