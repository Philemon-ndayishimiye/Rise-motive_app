import React from "react";
import { BadgeCheck } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type CardServiceProps = {
  /** Title displayed below the icon area */
  title: string;
  /** Icon element rendered inside the dashed icon box */
  icon: React.ReactNode;
  /** Called when the card is clicked */
  onClick: () => void;
  /** List of service items shown as bullet points */
  items: string[];
  /** Optional extra class names on the wrapper */
  className?: string;
  service : string ;
};

// ─── Component ────────────────────────────────────────────────────────────────

export const TaskCardService: React.FC<CardServiceProps> = ({
  title,
  icon,
  onClick,
  items,
  service,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className={`
        group w-full  cursor-pointer select-none
        rounded-2xl bg-white border border-gray-200
        p-5 flex flex-col gap-4
        transition-all duration-200
        hover:shadow-md hover:border-blue-100 hover:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
        ${className}
      `}
    >
      {/* ── Icon Box ── */}
      <div
        className="
          w-full aspect-square rounded-xl
          border-2 border-dashed border-gray-300
          bg-gray-50
          flex flex-col items-center justify-center gap-2
          transition-colors duration-200
          group-hover:border-blue-300 group-hover:bg-blue-50/40
        "
      >
        {/* Icon */}
        <div className="text-blue-800 text-3xl transition-transform duration-200 ">
          {icon}
        </div>

        {/* Click hint */}
        <p className="text-[11px] font-medium text-[#1E3A8A] font-family-playfair group-hover:text-blue-500 transition-colors duration-200 tracking-wide text-center px-3">
         {service}
        </p>
      </div>

      {/* ── Title ── */}
      <h3 className="font-family-playfair text-blue-800 font-bold text-[17px] leading-snug text-center ">
        {title}
      </h3>

      {/* ── Items List ── */}
      <ul className="flex flex-col gap-2 list-none">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <BadgeCheck
              size={17}
              className="text-blue-800 fill-white shrink-0"
            />
            <span className="font-family-playfair pb-1 text-gray-700 text-[15px] leading-snug">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ─── Demo ─────────────────────────────────────────────────────────────────────

// NOTE: The icons below are inline SVGs for demo purposes.
// In your project replace them with any lucide-react icon, e.g. <Globe size={48} />

const GovIcon = () => (
  <svg
    width="48"
    height="48"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11"
    />
  </svg>
);

const HealthIcon = () => (
  <svg
    width="48"
    height="48"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v4M10 12h4" />
  </svg>
);

const FinanceIcon = () => (
  <svg
    width="48"
    height="48"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v2m0 8v2M9 12h6M9.5 9.5l5 5M14.5 9.5l-5 5"
    />
  </svg>
);

const cards = [
  {
    title: "e-Government & Online Services",
    icon: <GovIcon />,
    items: ["Rembo services", "RRA services", "RDB services"],
  },
  {
    title: "Health & Medical Services",
    icon: <HealthIcon />,
    items: ["RSSB health cover", "Hospital referrals", "Insurance claims"],
  },
  {
    title: "Finance & Banking",
    icon: <FinanceIcon />,
    items: ["Mobile money", "Bank transfers", "Loan applications"],
  },
];

export default function CardServiceDemo() {
  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 sm:p-10"
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap'); .font-family-playfair { font-family: 'Playfair Display', Georgia, serif; }`}</style>

      <h1 className="font-family-playfair text-gray-950 font-bold text-2xl mb-8 text-center">
        Service Cards
      </h1>

      {/* Responsive grid: 1 col → 2 col → 3 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl justify-items-center">
        {cards.map((card, i) => (
          <TaskCardService
            key={i}
            title={card.title}
            icon={card.icon}
            service="click to explore"
            items={card.items}
            onClick={() => alert(`Requested: ${card.title}`)}
          />
        ))}
      </div>
    </div>
  );
}
