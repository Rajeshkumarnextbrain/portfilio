import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Rajesh Kumar S',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          Error 404
        </div>
        <h1 className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-on-surface">
          Page Not Found
        </h1>
        <p className="text-outline text-sm sm:text-base leading-relaxed">
          The requested system route does not exist or has been relocated in the cluster.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded border border-primary bg-primary text-surface-container-lowest font-mono font-semibold text-sm hover:bg-primary-hover hover:border-primary-hover transition-colors shadow-sm"
          >
            ← Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
