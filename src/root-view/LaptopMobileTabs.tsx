import { useDevice } from "../context/DeviceContext";
import type { DeviceType } from "../types/device";

const tabs: { label: string; value: DeviceType }[] = [
  { label: "Mobile", value: "mobile" },
  { label: "Laptop", value: "desktop" },
];

export function LaptopMobileTabs() {
  const { device, setDevice } = useDevice();

  return (
    <div className="flex gap-[2px]">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setDevice(tab.value)}
          className={`px-[6px] py-[1px] text-[12px] rounded-[5px] border transition-colors cursor-pointer ${
            device === tab.value
              ? "border-cremp-gold bg-cremp-lightgold/20 text-cremp-blue font-medium"
              : "border-transparent text-cremp-gray hover:text-cremp-blue"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
