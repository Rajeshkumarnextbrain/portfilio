import { Skeleton, ProjectCardSkeleton, MetricCardSkeleton } from '../components/Skeleton';

export default function Loading() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-10">

        {/* Hero Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <Skeleton className="h-7 w-48 rounded-full" />
            <Skeleton className="h-12 sm:h-16 w-full max-w-xl rounded-lg" />
            <Skeleton className="h-10 sm:h-12 w-4/5 rounded-lg" />
            <div className="space-y-2 max-w-2xl pt-2">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-5/6 rounded" />
              <Skeleton className="h-4 w-3/4 rounded" />
            </div>
            <div className="flex gap-3 pt-4">
              <Skeleton className="h-11 w-36 rounded-lg" />
              <Skeleton className="h-11 w-36 rounded-lg" />
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-4 sm:p-5">
              <Skeleton className="h-6 w-1/2 mb-4 rounded" />
              <Skeleton className="w-full aspect-[4/3] rounded-lg" />
              <div className="grid grid-cols-2 gap-3 mt-4">
                <Skeleton className="h-16 rounded-lg" />
                <Skeleton className="h-16 rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-4">
          <MetricCardSkeleton />
          <MetricCardSkeleton />
          <MetricCardSkeleton />
          <MetricCardSkeleton />
        </div>

        {/* Project Cards Grid Skeleton */}
        <div className="space-y-6 pt-6">
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-60 rounded-lg" />
            <Skeleton className="h-8 w-44 rounded-lg" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        </div>

      </div>
    </div>
  );
}
