import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Phone,
  ExternalLink,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Trophy,
  Users,
  BookOpen,
  ImageOff,
} from "lucide-react";
import type { InfoPost } from "../app/api/Infospot/Infospot";

const categoryConfig: Record<
  string,
  { icon: React.ReactNode; bg: string; color: string; border: string }
> = {
  JOB: {
    icon: <Briefcase size={13} />,
    bg: "#DBEAFE",
    color: "#1E3A8A",
    border: "#BFDBFE",
  },
  SCHOLARSHIP: {
    icon: <GraduationCap size={13} />,
    bg: "#FEF9C3",
    color: "#92400E",
    border: "#FDE68A",
  },
  COMPETITION: {
    icon: <Trophy size={13} />,
    bg: "#FCE7F3",
    color: "#9D174D",
    border: "#FBCFE8",
  },
  COMMUNITY: {
    icon: <Users size={13} />,
    bg: "#DCFCE7",
    color: "#14532D",
    border: "#86EFAC",
  },
  ADVISORY: {
    icon: <BookOpen size={13} />,
    bg: "#EDE9FE",
    color: "#4C1D95",
    border: "#DDD6FE",
  },
};
export default function InfoPostDetail() {
  const { slug } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const hasStatePost = Boolean(state?.post);

  const [post, setPost] = useState<InfoPost | null>(state?.post ?? null);
  const [loading, setLoading] = useState<boolean>(!hasStatePost); // ← derived once, no setState in effect
  const [error, setError] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (hasStatePost || !slug) return; // nothing to fetch

    let cancelled = false;

    fetch(`https://api.risemotive.rw/info-posts/slug/${slug}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then((data) => {
        if (!cancelled) setPost(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false); // only setLoading(false) here — never setLoading(true)
      });

    return () => {
      cancelled = true;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const cat = post
    ? (categoryConfig[post.category] ?? categoryConfig["OPPORTUNITY"])
    : null;

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          gap: "10px",
        }}
      >
        <svg
          style={{
            width: "20px",
            height: "20px",
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
        <span style={{ color: "#1E3A8A", fontSize: "14px", fontWeight: 600 }}>
          Loading...
        </span>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div
        style={{ textAlign: "center", padding: "80px 20px", color: "#6B7280" }}
      >
        <p style={{ fontSize: "15px", marginBottom: "16px" }}>
          Post not found.
        </p>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "#1E3A8A",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#F0F7FF",
        minHeight: "100vh",
        padding: "24px 16px 48px",
      }}
    >
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#fff",
            border: "1px solid #DBEAFE",
            borderRadius: "10px",
            padding: "9px 16px",
            color: "#1E3A8A",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            marginBottom: "20px",
            boxShadow: "0 1px 4px rgba(30,58,138,0.07)",
          }}
        >
          <ArrowLeft size={14} /> Back to InfoSpot
        </button>

        {/* Main card */}
        <div
          style={{
            background: "#fff",
            borderRadius: "18px",
            border: "1px solid #DBEAFE",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(30,58,138,0.08)",
          }}
        >
          {/* Top accent */}
          <div
            style={{
              height: "5px",
              background: "linear-gradient(90deg, #1E3A8A, #3B82F6)",
            }}
          />

          {/* Image */}
          {post.image && !imgError ? (
            <div
              style={{
                width: "100%",
                maxHeight: "320px",
                overflow: "hidden",
                background: "#EFF6FF",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                onError={() => setImgError(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  maxHeight: "320px",
                }}
              />
            </div>
          ) : post.image && imgError ? (
            <div
              style={{
                width: "100%",
                height: "120px",
                background: "#EFF6FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                color: "#93C5FD",
              }}
            >
              <ImageOff size={22} />{" "}
              <span style={{ fontSize: "13px" }}>Image unavailable</span>
            </div>
          ) : null}

          <div style={{ padding: "clamp(18px, 4vw, 32px)" }}>
            {/* Category + date row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              {cat && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    background: cat.bg,
                    color: cat.color,
                    border: `1px solid ${cat.border}`,
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: 700,
                  }}
                >
                  {cat.icon} {post.category}
                </span>
              )}
              {post.createdAt && (
                <span style={{ fontSize: "11px", color: "#9CA3AF" }}>
                  Posted{" "}
                  {new Date(post.createdAt).toLocaleDateString("en-RW", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(18px, 4vw, 24px)",
                fontWeight: 800,
                color: "#1E3A8A",
                margin: "0 0 20px",
                lineHeight: 1.4,
              }}
            >
              {post.title}
            </h1>

            {/* Meta pills */}
            {(post.location || post.deadline || post.contactInfo) && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "24px",
                  padding: "14px 16px",
                  background: "#F0F7FF",
                  borderRadius: "12px",
                  border: "1px solid #DBEAFE",
                }}
              >
                {post.location && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      color: "#374151",
                      background: "#fff",
                      padding: "5px 12px",
                      borderRadius: "8px",
                      border: "1px solid #DBEAFE",
                    }}
                  >
                    <MapPin size={13} color="#1E3A8A" /> {post.location}
                  </div>
                )}
                {post.deadline && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      color: "#374151",
                      background: "#fff",
                      padding: "5px 12px",
                      borderRadius: "8px",
                      border: "1px solid #DBEAFE",
                    }}
                  >
                    <Calendar size={13} color="#1E3A8A" />
                    Deadline:{" "}
                    <strong style={{ color: "#1E3A8A" }}>
                      {post.deadline}
                    </strong>
                  </div>
                )}
                {post.contactInfo && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      color: "#374151",
                      background: "#fff",
                      padding: "5px 12px",
                      borderRadius: "8px",
                      border: "1px solid #DBEAFE",
                    }}
                  >
                    <Phone size={13} color="#1E3A8A" /> {post.contactInfo}
                  </div>
                )}
              </div>
            )}

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "#DBEAFE",
                marginBottom: "22px",
              }}
            />

            {/* Description */}
            <div style={{ marginBottom: "28px" }}>
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#1E3A8A",
                  margin: "0 0 10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                About this Opportunity
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#374151",
                  lineHeight: 1.85,
                  margin: 0,
                  whiteSpace: "pre-wrap",
                }}
              >
                {post.description}
              </p>
            </div>

            {/* Qualification Criteria */}
            {post.qualificationCriteria?.length > 0 && (
              <div
                style={{
                  marginBottom: "28px",
                  padding: "18px 20px",
                  background: "#F0F7FF",
                  borderRadius: "14px",
                  border: "1px solid #DBEAFE",
                }}
              >
                <h2
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1E3A8A",
                    margin: "0 0 14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Qualification Criteria
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {post.qualificationCriteria.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <CheckCircle
                        size={15}
                        color="#1E3A8A"
                        style={{ marginTop: "3px", flexShrink: 0 }}
                      />
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#374151",
                          lineHeight: 1.7,
                        }}
                      >
                        {c}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Apply button */}
            {post.applyLink && (
              <div style={{ paddingTop: "4px" }}>
                <a
                  onClick={() => navigate("/taskSpot#application")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "13px 28px",
                    borderRadius: "11px",
                    background: "linear-gradient(135deg, #1E3A8A, #2563EB)",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(30,58,138,0.25)",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  Apply Now <ExternalLink size={15} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
