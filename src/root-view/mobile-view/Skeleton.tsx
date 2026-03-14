export function Skeleton() {
  return (
    <div className="flex flex-col gap-[2px] p-[2px] animate-pulse">
      <div className="h-4 bg-cremp-lightgray rounded-[5px] w-3/4" />
      <div className="h-4 bg-cremp-lightgray rounded-[5px] w-full" />
      <div className="h-4 bg-cremp-lightgray rounded-[5px] w-5/6" />
      <div className="h-20 bg-cremp-lightgray rounded-[5px] w-full mt-[2px]" />
      <div className="h-4 bg-cremp-lightgray rounded-[5px] w-2/3 mt-[2px]" />
      <div className="h-4 bg-cremp-lightgray rounded-[5px] w-full" />
    </div>
  );
}
