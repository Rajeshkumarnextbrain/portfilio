import Link from 'next/link';
import { IDENTITY, CONTACT_INFO } from '../content/facts';

export default function Footer() {
  return (
    <footer className="w-full bg-paper-sunken border-t border-line py-12">
      <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-lg">
          <div className="flex items-center gap-2">
            <span className="font-headline-md text-lg font-bold text-primary uppercase">
              {IDENTITY.name}
            </span>
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            <span className="font-label-sm text-xs text-ink-muted uppercase">
              {IDENTITY.location}
            </span>
          </div>
          <p className="font-body-md text-sm text-ink-muted leading-relaxed">
            {IDENTITY.footerBio}
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2 font-label-timecode text-[13px] text-ink-muted">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Email
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href={CONTACT_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Resume (PDF)
            </a>
          </div>
          <div className="text-ink-faint text-[13px]">
            © {new Date().getFullYear()} {IDENTITY.name} · {IDENTITY.location} · {IDENTITY.timezone}
          </div>
        </div>
      </div>
    </footer>
  );
}
