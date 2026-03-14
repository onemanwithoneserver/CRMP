import crempLogo from "../../assets/images/Logo_header.svg";
import loginIcon from "../../assets/images/Icons/header_icons/login.svg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-14 px-1 w-full bg-[#FFFFFF] backdrop-blur-md border-b border-cremp-lightgray shrink-0">
      <div className="flex items-center gap-1 cursor-pointer group">
        <div className="relative flex items-center justify-center">
          <img 
            src={crempLogo} 
            alt="CREMP Logo" 
            className="relative w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105 group-active:scale-95" 
          />
        </div>
        <span
          className="font-extrabold text-[22px] text-cremp-blue tracking-wider transition-opacity group-hover:opacity-90 mt-px"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          CREMP
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button 
          className="flex items-center gap-2 px-4 py-1.5 rounded-[5px] bg-cremp-blue text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <img src={loginIcon} alt="Login Icon" className="w-4 h-4 brightness-0 invert opacity-90 " />
          <span>Login</span>
        </button>

        <button 
          className="flex flex-col justify-center items-end gap-1.25 w-10 h-10 rounded-[5px] transition-colors duration-200 p-1 group"
          aria-label="Toggle Menu"
        >
          <span className="block w-6 h-0.5 bg-cremp-blue rounded-xs transition-all duration-300" />
          <span className="block w-3.5 h-0.5 bg-cremp-blue rounded-xs transition-all duration-300 group-hover:w-6" />
          <span className="block w-6 h-0.5 bg-cremp-blue rounded-xs transition-all duration-300" />
        </button>
      </div>
    </header>
  );
}