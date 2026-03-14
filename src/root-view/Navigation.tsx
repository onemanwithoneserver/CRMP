import { DeviceToggle } from "./DeviceToggle";

export function Navigation() {
  return (
    <header className="flex items-center justify-between px-[2px] py-[2px] bg-white border-b border-cremp-lightgray">
      <span className="text-[13px] font-semibold text-cremp-blue pl-[2px]">
        CRMP Preview
      </span>
      <DeviceToggle />
      <div className="w-[60px]" />
    </header>
  );
}
