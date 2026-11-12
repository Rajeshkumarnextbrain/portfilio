import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-variant/40 py-10 sm:py-12 mt-space-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-surface-variant/40">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <img
                alt="Rajesh Kumar S Monogram Logo"
                className="h-7 sm:h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WEzOKc-zZxWvBRVFjDmoiMVl89en19Q0Qgoi_Pn6DEJJm6gxVH3o6NUqJxcEKr6HCr79Jp1C8TIv7XF8K1cKjoB8vJKhPVSJEZNgFU0FPCz757fIK8PcwhRwU7QhgCKh1zLGevV4ipcXThS7V8A5X_zReYGoOFcFUtx1f7Jo6uEVDeea_zRuW0BeiUOCNRdC5i5SuDhDDzcrasxkBRIbQ0VBqFUC2SF9GApwMxt8La3g"
              />
              <span className="font-headline-md text-base sm:text-headline-md text-on-surface font-semibold tracking-tight">
                Rajesh Kumar S
              </span>
            </div>
            <span className="hidden sm:inline text-outline-variant">|</span>
            <p className="font-mono-code text-xs sm:text-caption text-secondary">
              AI Engineer · Computer Vision, VLMs &amp; GenAI Systems
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono-code text-xs sm:text-caption text-secondary">
            <Link className="hover:text-primary transition-colors py-1 px-1.5" href="/">
              Home
            </Link>
            <Link className="hover:text-primary transition-colors py-1 px-1.5" href="/#projects">
              Projects
            </Link>
            <Link className="hover:text-primary transition-colors py-1 px-1.5" href="/experience">
              Experience
            </Link>
            <Link className="hover:text-primary transition-colors py-1 px-1.5" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono-code text-xs sm:text-caption text-secondary text-center md:text-left">
          <div className="flex items-center justify-center gap-2">
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-primary shrink-0">
              terminal
            </span>
            <span>
              © {currentYear} Rajesh Kumar S. Built for high-throughput inference &amp; reasoning.
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/40 text-on-surface text-[11px] sm:text-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
              <span>Available for Select Advisory &amp; Staff AI roles</span>
            </div>
            <div className="inline-flex items-center gap-1 text-secondary text-[11px] sm:text-xs">
              <span aria-hidden="true" className="material-symbols-outlined text-[15px] text-primary shrink-0">
                location_on
              </span>
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
