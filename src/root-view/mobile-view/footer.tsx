import homeIcon from "../../assets/images/Icons/footer_icons/house-blank.svg";
import rentIcon from "../../assets/images/Icons/footer_icons/key.svg";
import buyIcon from "../../assets/images/Icons/footer_icons/buy.svg";
import businessIcon from "../../assets/images/Icons/footer_icons/Business_opp.svg";
import handPickedIcon from "../../assets/images/Icons/footer_icons/hand_picked.svg";

const NAV_ITEMS = [
  { label: "Home", icon: homeIcon },
  { label: "Rent/Lease", icon: rentIcon },
  { label: "Buy/Invest", icon: buyIcon },
  { label: "Business opp", icon: businessIcon },
  { label: "Hand Picked", icon: handPickedIcon },
];

interface FooterProps {
  active?: string;
  onNavigate?: (label: string) => void;
}

export function Footer({ active = "Home", onNavigate }: FooterProps) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-cremp-blue flex justify-between z-50 ">
      {NAV_ITEMS.map((item) => {
        const isActive = item.label === active;
        return (
          <button
            key={item.label}
            onClick={() => onNavigate?.(item.label)}
            className="relative flex justify-center flex-1 h-16 group overflow-hidden"
          >
            <div 
              className={`absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#E6C36A]/15 rounded-full blur-md transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isActive ? "top-[12px] opacity-100 scale-100" : "top-[16px] opacity-0 scale-50"
              }`}
            />

            <span
              className={`absolute left-1/2 -translate-x-1/2 text-center whitespace-nowrap font-bold transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0 ${
                isActive 
                  ? "top-[6px] text-[#E6C36A] opacity-100 text-[10px] tracking-wide scale-100" 
                  : "top-[42px] text-white opacity-100 text-[10px] tracking-tight scale-90 group-hover:top-[40px] group-hover:scale-100"
              }`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {item.label}
            </span>

            <img
              src={item.icon}
              alt={item.label}
              className={`absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isActive 
                  ? "top-[24px] w-[22px] h-[22px] drop-shadow-[0_4px_6px_rgba(230,195,106,0.5)]" 
                  : "top-[16px] w-5 h-5 group-hover:top-[14px]"
              }`}
              style={
                isActive
                  ? { filter: "invert(85%) sepia(21%) saturate(983%) hue-rotate(345deg) brightness(97%) contrast(92%)" }
                  : { filter: "brightness(0) invert(1)" }
              }
            />

            <div 
              className={`absolute left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-[#E6C36A] shadow-[0_0_6px_rgba(230,195,106,0.8)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-75 ${
                isActive ? "w-6 bottom-[4px] opacity-100 scale-100" : "w-0 -bottom-[10px] opacity-0 scale-50"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}