import { useDevice } from "../context/DeviceContext";
import type { DeviceType } from "../types/device";

const tabs: { label: string; value: DeviceType }[] = [
  { label: "Mobile", value: "mobile" },
  { label: "Laptop", value: "desktop" },
];

export function DeviceToggle() {
  const { device, setDevice } = useDevice();

  return (
    <div className="flex items-center gap-[2px] bg-cremp-lightgray rounded-[5px] p-[1px]">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setDevice(tab.value)}
          className={`px-[6px] py-[2px] text-[13px] rounded-[5px] transition-colors cursor-pointer ${
            device === tab.value
              ? "bg-cremp-lightgold text-cremp-blue shadow-sm font-medium"
              : "text-cremp-gray hover:text-cremp-blue"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
