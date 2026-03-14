import logo from "../../assets/images/logo.svg";

export default function AppLoading() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#1C2A44]">
      <img
        src={logo}
        alt="CREMP Logo"
        className="w-3/4 h-auto mb-4" 
      />
    </div>
  );
}