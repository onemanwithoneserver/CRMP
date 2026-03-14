export type DeviceType = "mobile" | "desktop";

export interface DeviceContextValue {
  device: DeviceType;
  setDevice: (device: DeviceType) => void;
}
