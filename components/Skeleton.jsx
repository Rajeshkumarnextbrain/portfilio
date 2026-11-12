'use client';

export function Skeleton({ className = '', ...props }) {
  return (
    <div
      className={`skeleton rounded-md ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container border border-outline-variant/40 p-5 sm:p-6 lg:p-7 shadow-lg">
      <div>
        {/* Category tag & icon skeleton */}
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-36 rounded" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>

        {/* Title skeleton */}
        <Skeleton className="h-7 w-3/4 mb-3 rounded" />

        {/* Description lines skeleton */}
        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-5/6 rounded" />
        </div>

        {/* Metric box skeleton */}
        <div className="my-4 sm:my-5 p-3 sm:p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/30 space-y-2.5">
          <div className="flex justify-between items-center">
            <Skeleton className="h-3 w-16 rounded" />
            <Skeleton className="h-3 w-12 rounded" />
          </div>
          <div className="flex justify-between items-center">
            <Skeleton className="h-3 w-24 rounded" />
            <Skeleton className="h-3 w-20 rounded" />
          </div>
          <div className="flex justify-between items-center">
            <Skeleton className="h-3 w-20 rounded" />
            <Skeleton className="h-3 w-10 rounded" />
          </div>
        </div>

        {/* Tech tags skeleton */}
        <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
          <Skeleton className="h-5 w-14 rounded" />
          <Skeleton className="h-5 w-16 rounded" />
          <Skeleton className="h-5 w-12 rounded" />
          <Skeleton className="h-5 w-14 rounded" />
          <Skeleton className="h-5 w-16 rounded" />
        </div>
      </div>

      {/* Footer link skeleton */}
      <div className="pt-3 border-t border-surface-variant/40 flex items-center gap-2">
        <Skeleton className="h-4 w-28 rounded" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
    </div>
  );
}

export function MetricCardSkeleton() {
  return (
    <div className="p-4 sm:p-6 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between">
      <Skeleton className="h-8 w-20 rounded mb-2" />
      <Skeleton className="h-5 w-3/4 rounded mb-2" />
      <Skeleton className="h-3.5 w-full rounded" />
    </div>
  );
}

export default Skeleton;
