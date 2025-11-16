import { Skeleton } from "./ui/skeleton";

function WeatherSkeleton() {
  return (
    <div className="space-y-6">

      {/* Small equal-width skeletons filling full width */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton
            key={i}
            className="h-20 w-full rounded-lg"
          />
        ))}
      </div>

      {/* Main skeleton layout */}
      <div className="grid gap-6">
        {/* Two full-width big boxes */}
        <Skeleton className="h-[300px] w-full rounded-lg" />
         {/* Two equal-width bottom boxes */}
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </div>
        <Skeleton className="h-[300px] w-full rounded-lg" />

       
      </div>
    </div>
  );
}

export default WeatherSkeleton;
