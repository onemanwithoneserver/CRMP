interface DesktopPagesNavProps {
  pages: string[];
  active: string;
  onNavigate: (page: string) => void;
}

export function DesktopPagesNav({
  pages,
  active,
  onNavigate,
}: DesktopPagesNavProps) {
  return (
    <aside className="w-36 bg-cremp-bg border-r border-cremp-lightgray py-[2px]">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onNavigate(page)}
          className={`w-full text-left px-[2px] py-[2px] text-[12px] rounded-[5px] transition-colors cursor-pointer ${
            active === page
              ? "bg-white text-cremp-blue font-medium shadow-sm"
              : "text-cremp-gray hover:text-cremp-blue hover:bg-cremp-lightgray"
          }`}
        >
          {page}
        </button>
      ))}
    </aside>
  );
}
