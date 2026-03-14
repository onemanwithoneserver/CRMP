import { DeviceProvider } from "./context/DeviceContext";
import { Main } from "./root-view/Main";

export default function App() {
  return (
    <DeviceProvider>
      <Main />
    </DeviceProvider>
  );
}
