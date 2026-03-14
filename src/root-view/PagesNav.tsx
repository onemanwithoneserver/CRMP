interface PagesNavProps {
  pages: string[];
  active: string;
  onNavigate: (page: string) => void;
}

export function PagesNav({
  pages,
  active,
  onNavigate,
}: PagesNavProps) {
  return (
    <nav className="flex items-center gap-[2px] px-[2px] py-[1px] bg-white border-b border-cremp-lightgray">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onNavigate(page)}
          className={`px-[6px] py-[2px] text-[12px] rounded-[5px] transition-colors cursor-pointer ${
            active === page
              ? "bg-cremp-lightgold/20 text-cremp-blue font-medium border border-cremp-gold"
              : "text-cremp-gray hover:text-cremp-blue border border-transparent"
          }`}
        >
          {page}
        </button>
      ))}
    </nav>
  );
}
