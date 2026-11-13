import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-paper-sunken border-t border-line py-space-2xl lg:pl-16">
      <div className="max-w-7xl mx-auto px-space-md lg:px-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-md text-headline-md font-semibold text-primary uppercase">
              Follow The Frame
            </span>
            <span className="w-1.5 h-1.5 bg-secondary-container rounded-full"></span>
          </div>
          <p className="font-body-sm text-body-sm text-ink-muted max-w-md">
            Computational optics, deep vision pipelines, and production machine intelligence systems engineered by Rajesh Kumar S.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-space-xs font-label-timecode text-label-timecode text-ink-muted">
          <div className="flex items-center gap-space-sm">
            <span>LAT 12.9716° N</span>
            <span>·</span>
            <span>LON 77.5946° E</span>
            <span>·</span>
            <span className="text-secondary font-bold">SYS_OK</span>
          </div>
          <div className="text-ink-faint font-label-sm text-label-sm uppercase">
            © {new Date().getFullYear()} RAJESH KUMAR S · ARCHIVAL CALIBRATION SYSTEM
          </div>
        </div>
      </div>
    </footer>
  );
}
