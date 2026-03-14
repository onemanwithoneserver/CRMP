export function Skeleton() {
  const skeletonBlock = "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse";
  return (
    <div className="w-full h-full max-h-full flex flex-col bg-white overflow-hidden">
      <div className="px-4 pt-8 pb-4 flex justify-between items-center">
        <div className={`w-20 h-5 rounded-md ${skeletonBlock}`} />
        <div className={`w-6 h-5 rounded-md ${skeletonBlock}`} />
      </div>
      <div className="px-4 pb-6">
        <div className={`w-full h-12 rounded-full ${skeletonBlock}`} />
      </div>
      <div className="flex-3 min-h-0 bg-white" />
      <div className="flex-2 min-h-0 w-full bg-linear-to-b from-gray-200/80 to-gray-100/30 animate-pulse" />
      <div className="px-6 py-4 flex justify-between items-end bg-white">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex flex-col items-center gap-2">
            <div className={`w-11 h-11 rounded-xl ${skeletonBlock}`} />
            <div className={`w-8 h-1.5 rounded-full ${skeletonBlock}`} />
          </div>
        ))}
      </div>

    </div>
  );
}