import type { ReactNode } from "react";
import { useDevice } from "../context/DeviceContext";

export function Layout({ children }: { children: ReactNode }) {
  const { device } = useDevice();

  return (
    <div className="flex-1 flex items-start justify-center bg-cremp-bg overflow-auto p-0.5 pt-1">
      {device === "mobile" ? (
        <div
          className="bg-white rounded-[6px] shadow-lg overflow-hidden flex-shrink-0"
          style={{ width: 375, height: 812 }}
        >
          <div className="w-full h-full overflow-y-auto">{children}</div>
        </div>
      ) : (
        <div
          className="bg-white rounded-[6px] shadow-lg overflow-hidden w-full"
          style={{ maxWidth: 1440 }}
        >
          <div className="w-full min-h-[600px] overflow-y-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
