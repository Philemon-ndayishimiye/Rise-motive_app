import {
  BadgeCheck,
  MapPin,
  Calendar,
  ExternalLink,
  Phone,
  Briefcase,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { useGetAllInfoPostsQuery } from "../app/api/Infospot/Infospot";
import type { InfoPost } from "../app/api/Infospot/Infospot";
import { useState } from "react";

type Bubble = { size: number; left: number; duration: number; delay: number };
const bubbles: Bubble[] = Array.from({ length: 15 }).map(() => ({
  size: Math.random() * 60 + 20,
  left: Math.random() * 100,
  duration: Math.random() * 5 + 5,
  delay: Math.random() * 5,
}));

// ── Category config ────────────────────────────────────────────────────────

const categoryConfig: Record<
  string,
  { icon: React.ReactNode; bg: string; color: string; border: string }
> = {
  JOB: {
    icon: <Briefcase size={14} />,
    bg: "#DBEAFE",
    color: "#1E3A8A",
    border: "#BFDBFE",
  },
  SCHOLARSHIP: {
    icon: <GraduationCap size={14} />,
    bg: "#FEF9C3",
    color: "#92400E",
    border: "#FDE68A",
  },
  OPPORTUNITY: {
    icon: <Lightbulb size={14} />,
    bg: "#DCFCE7",
    color: "#14532D",
    border: "#86EFAC",
  },
};

// ── Info Card ──────────────────────────────────────────────────────────────

function InfoCard({ post }: { post: InfoPost }) {
  const cat = categoryConfig[post.category] ?? categoryConfig["OPPORTUNITY"];

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #DBEAFE",
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.15s, box-shadow 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 24px rgba(30,58,138,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Top accent */}
      <div style={{ height: "4px", background: "#1E3A8A" }} />

      <div
        style={{
          padding: "18px 18px 14px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* Category badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              background: cat.bg,
              color: cat.color,
              border: `1px solid ${cat.border}`,
              padding: "3px 10px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: 700,
            }}
          >
            {cat.icon}
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "#1E3A8A",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {post.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "13px",
            color: "#6B7280",
            margin: 0,
            lineHeight: 1.6,
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.description}
        </p>

        {/* Meta */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {post.location && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "#6B7280",
              }}
            >
              <MapPin size={13} color="#1E3A8A" />
              {post.location}
            </div>
          )}
          {post.deadline && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "#6B7280",
              }}
            >
              <Calendar size={13} color="#1E3A8A" />
              Deadline:{" "}
              <strong style={{ color: "#1E3A8A" }}>{post.deadline}</strong>
            </div>
          )}
          {post.contactInfo && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "#6B7280",
              }}
            >
              <Phone size={13} color="#1E3A8A" />
              {post.contactInfo}
            </div>
          )}
        </div>
      </div>

      {/* Apply button */}
      {post.applyLink && (
        <div style={{ padding: "0 18px 18px" }}>
          <a
            href={post.applyLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              padding: "10px",
              borderRadius: "10px",
              background: "#1E3A8A",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Apply Now <ExternalLink size={13} />
          </a>
        </div>
      )}
    </div>
  );
}

// ── Filter Tab ─────────────────────────────────────────────────────────────

function FilterTab({
  label,
  active,
  count,
  onClick,
}: {
  label: string;
  active: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="font-family-playfair"
      style={{
        padding: "8px 18px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        background: active ? "#1E3A8A" : "#EFF6FF",
        color: active ? "#fff" : "#1E3A8A",
        fontSize: "13px",
        fontWeight: 700,
        transition: "all 0.15s",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {label}
      <span
        style={{
          background: active ? "rgba(255,255,255,0.25)" : "#BFDBFE",
          color: active ? "#fff" : "#1E3A8A",
          borderRadius: "999px",
          padding: "1px 7px",
          fontSize: "11px",
          fontWeight: 700,
        }}
      >
        {count}
      </span>
    </button>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function RMInfoSpot() {
  const { data, isLoading, isError } = useGetAllInfoPostsQuery();
  const allItems = (data?.items ?? []).filter((p) => p.isActive);

  const categories = ["ALL", "JOB", "SCHOLARSHIP", "OPPORTUNITY"];
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered =
    activeFilter === "ALL"
      ? allItems
      : allItems.filter((p) => p.category === activeFilter);
  const count = (cat: string) =>
    cat === "ALL"
      ? allItems.length
      : allItems.filter((p) => p.category === cat).length;

  return (
    <div className="py-7">
      {/* ── Hero Banner ── */}
      <div className="px-7 relative overflow-hidden py-20 bg-blue-800">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-family-playfair text-white text-[20px] font-bold py-5">
            RISEMOTIVE INFO SPOT
          </h1>
          <p className="font-family-playfair text-white text-[17px]">
            <strong className="text-white">
              Opportunities. Scholarships. Jobs. All in One Place.
            </strong>
            <br />
            Discover the latest opportunities curated just for you. Stay
            informed and take action today.
          </p>
        </div>
      </div>

      {/* ── Intro ── */}
      <div className="py-8 px-4 md:px-23">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h1 className="py-2 font-family-playfair text-gray-800 text-[15px]">
              RM InfoSpot is your trusted source for curated opportunities 
              from jobs and scholarships to business opportunities and community
              programs.
            </h1>
            <h2 className="py-2 font-family-playfair text-gray-800 text-[15px]">
              We gather the best listings so you don't have to search
              everywhere. Just browse, find, and apply.
            </h2>
            {[
              "Verified and curated opportunities",
              "Updated regularly",
              "Free to access for everyone",
              "Direct apply links included",
            ].map((text) => (
              <div key={text} className="flex flex-row gap-2 pb-4">
                <BadgeCheck size={19} className="text-[#1E3A8A]" />
                <p className="font-family-playfair text-gray-800 text-[15px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
          {/* Stats */}
          <div className="flex flex-row md:flex-col gap-4 justify-center md:justify-start">
            {categories.slice(1).map((cat) => {
              const conf = categoryConfig[cat];
              return (
                <div
                  key={cat}
                  style={{
                    background: conf.bg,
                    border: `1px solid ${conf.border}`,
                    borderRadius: "14px",
                    padding: "16px 20px",
                    minWidth: "120px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: conf.color,
                      margin: 0,
                    }}
                  >
                    {count(cat)}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: conf.color,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    {cat}S
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Listings ── */}
      <div className="px-4 md:px-7 pb-10">
        <h1 className="font-family-playfair text-center text-[#1E3A8A] text-[20px] font-bold py-5">
          Browse Opportunities
        </h1>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "24px",
            justifyContent: "center",
          }}
        >
          {categories.map((cat) => (
            <FilterTab
              key={cat}
              label={cat}
              active={activeFilter === cat}
              count={count(cat)}
              onClick={() => setActiveFilter(cat)}
            />
          ))}
        </div>

        {/* Loading */}
        {isLoading && (
          <div
            style={{
              textAlign: "center",
              padding: "60px",
              color: "#9CA3AF",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg
                style={{
                  width: "16px",
                  height: "16px",
                  animation: "spin 1s linear infinite",
                }}
                fill="none"
                viewBox="0 0 24 24"
              >
                <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#1E3A8A"
                  strokeWidth="3"
                  opacity=".2"
                />
                <path
                  fill="#1E3A8A"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  opacity=".75"
                />
              </svg>
              Loading opportunities...
            </div>
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 mb-5 text-center">
            <p className="font-family-playfair text-red-600 text-[13px]">
              Failed to load opportunities. Please try again.
            </p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "60px",
              color: "#9CA3AF",
              fontSize: "14px",
            }}
          >
            No {activeFilter === "ALL" ? "" : activeFilter.toLowerCase()}{" "}
            opportunities available right now. Check back soon!
          </div>
        )}

        {/* Cards grid */}
        {!isLoading && !isError && filtered.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {filtered.map((post) => (
              <InfoCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
