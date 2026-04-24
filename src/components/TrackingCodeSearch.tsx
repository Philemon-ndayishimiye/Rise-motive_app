import { useState } from "react";
import { Search, CheckCircle, XCircle, Loader } from "lucide-react";
import { useLazySearchByTrackingCodeQuery } from "../app/api/Auth/search";

const statusColors: Record<string, { bg: string; color: string }> = {
  PENDING: { bg: "#FEF9C3", color: "#92400E" },
  IN_PROGRESS: { bg: "#DBEAFE", color: "#1E3A8A" },
  ASSIGNED: { bg: "#EDE9FE", color: "#4C1D95" },
  COMPLETED: { bg: "#DCFCE7", color: "#14532D" },
  CANCELLED: { bg: "#FEE2E2", color: "#7F1D1D" },
  CONFIRMED: { bg: "#DCFCE7", color: "#14532D" },
  OUT_FOR_DELIVERY: { bg: "#FEF9C3", color: "#92400E" },
  DELIVERED: { bg: "#DCFCE7", color: "#14532D" },
};

export default function TrackingSearch() {
  const [code, setCode] = useState("");
  const [search, { data, isLoading, isFetching }] =
    useLazySearchByTrackingCodeQuery();

  const handleSearch = () => {
    if (code.trim()) search(code.trim());
  };

  const loading = isLoading || isFetching;

  return (
    <div className="w-full min-w-0 p-4 sm:p-6 max-w-3xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-family-playfair font-bold text-[#1E3A8A] text-[18px] sm:text-[20px]">
          Track a Request
        </h1>
        <p className="font-family-playfair text-gray-500 text-[12px] sm:text-[13px] mt-1">
          Enter a tracking code to find its status across all services
        </p>
      </div>

      {/* Search input */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2.5 mb-6">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="e.g. WEB-3F9A1C2B"
          style={{
            flex: 1,
            padding: "11px 16px",
            borderRadius: "10px",
            border: "1px solid #BFDBFE",
            fontSize: "14px",
            color: "#1E3A8A",
            outline: "none",
            fontFamily: "inherit",
            letterSpacing: "0.05em",
          }}
        />

        <button
          onClick={handleSearch}
          disabled={loading || !code.trim()}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "7px",
            padding: "11px 20px",
            background: "#1E3A8A",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            opacity: loading || !code.trim() ? 0.6 : 1,
            width: "100%",
          }}
        >
          {loading ? (
            <Loader
              size={15}
              style={{ animation: "spin 1s linear infinite" }}
            />
          ) : (
            <Search size={15} />
          )}
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* No result */}
      {data && !data.found && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 20px",
            background: "#FEE2E2",
            border: "1px solid #FECACA",
            borderRadius: "12px",
          }}
        >
          <XCircle size={18} color="#DC2626" />
          <p
            style={{
              fontSize: "14px",
              color: "#7F1D1D",
              fontWeight: 600,
              margin: 0,
            }}
          >
            No request found for tracking code <strong>"{code}"</strong>
          </p>
        </div>
      )}

      {/* Results */}
      {data?.found &&
        data.results.map((result, idx) => {
          const d = result.data;
          const status = d.status as string | undefined;
          const statusStyle = statusColors[status ?? ""] ?? {
            bg: "#F3F4F6",
            color: "#374151",
          };

          return (
            <div
              key={idx}
              style={{
                border: "1px solid #DBEAFE",
                borderRadius: "14px",
                overflow: "hidden",
                marginBottom: "16px",
                background: "#fff",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  background: "#EFF6FF",
                  borderBottom: "1px solid #BFDBFE",
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CheckCircle size={15} color="#1E3A8A" />
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "#1E3A8A",
                    }}
                  >
                    {result.type}
                  </span>
                </div>

                {status && (
                  <span
                    style={{
                      background: statusStyle.bg,
                      color: statusStyle.color,
                      padding: "3px 10px",
                      borderRadius: "999px",
                      fontSize: "11px",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {status}
                  </span>
                )}
              </div>

              {/* Card body (RESPONSIVE FIX HERE) */}
              <div
                className="tracking-grid"
                style={{
                  padding: "16px 18px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "10px",
                }}
              >
                {[
                  { label: "Tracking Code", value: d.trackingCode },
                  { label: "Customer Name", value: d.customerName },
                  { label: "Phone", value: d.customerPhone },
                  { label: "Email", value: d.customerEmail },
                  { label: "Service", value: d.service },
                  {
                    label: "Date",
                    value: d.createdAt
                      ? new Date(d.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : undefined,
                  },
                ]
                  .filter((item) => item.value)
                  .map(({ label, value }) => (
                    <div key={label}>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#9CA3AF",
                          margin: "0 0 2px",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#1E3A8A",
                          margin: 0,
                          wordBreak: "break-word",
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          );
        })}

      {/* Responsive CSS */}
      <style>
        {`
          @media (min-width: 640px) {
            .tracking-grid {
              grid-template-columns: 1fr 1fr;
            }

            button {
              width: auto !important;
            }
          }
        `}
      </style>
    </div>
  );
}
