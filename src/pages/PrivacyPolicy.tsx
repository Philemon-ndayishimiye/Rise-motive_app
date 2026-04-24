import {
  Shield,
  Mail,
  Eye,
  Lock,
  Share2,
  UserCheck,
  Cookie,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    icon: <Eye size={18} color="#1E3A8A" />,
    title: "1.1 Introduction",
    content:
      "Rise Motive Ltd respects your privacy and is committed to protecting your personal data when you use our website, services, or communication channels.",
  },
  {
    icon: <UserCheck size={18} color="#1E3A8A" />,
    title: "1.2 Information We Collect",
    content: "We may collect the following information:",
    list: [
      "Full name",
      "Phone number",
      "Email address",
      "Business details (if provided)",
      "Messages and communication history",
      "Technical data (IP address, browser type, device information)",
    ],
  },
  {
    icon: <ChevronRight size={18} color="#1E3A8A" />,
    title: "1.3 How We Use Your Information",
    content: "We use your information to:",
    list: [
      "Provide and manage services",
      "Respond to inquiries",
      "Process orders and projects",
      "Improve our website and services",
      "Send important updates",
    ],
  },
  {
    icon: <Lock size={18} color="#1E3A8A" />,
    title: "1.4 Data Protection",
    content:
      "We apply appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.",
  },
  {
    icon: <Share2 size={18} color="#1E3A8A" />,
    title: "1.5 Data Sharing",
    content: "We do not sell your data. We only share it when:",
    list: [
      "Required by law",
      "Needed to deliver services with trusted partners",
      "You give consent",
    ],
  },
  {
    icon: <Shield size={18} color="#1E3A8A" />,
    title: "1.6 Your Rights",
    content: "You may:",
    list: [
      "Request access to your data",
      "Request correction",
      "Request deletion (where legally possible)",
      "Withdraw consent where applicable",
    ],
  },
  {
    icon: <Cookie size={18} color="#1E3A8A" />,
    title: "1.7 Cookies",
    content:
      "Our website may use cookies to improve functionality and analytics. You can disable cookies in your browser settings.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="">
      {/* Hero */}
      <div className="px-7 relative overflow-hidden py-16  bg-blue-800 ">
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-4">
            <Shield size={40} color="#ffffff" />
          </div>
          <h1 className="font-family-playfair text-white text-[24px] font-bold py-3">
            PRIVACY POLICY
          </h1>
          <p className="font-family-playfair text-white text-[16px] max-w-xl mx-auto">
            Your privacy matters to us. Learn how Rise Motive Ltd collects,
            uses, and protects your personal data.
          </p>
          {/* <p className="font-family-playfair text-white text-[12px] mt-3">
            Last updated: April 2026 — © 2026 RISE MOTIVE. All rights reserved.
          </p> */}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-24 py-10 max-w-4xl mx-auto">
        {sections.map((section, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              border: "1px solid #DBEAFE",
              borderRadius: "14px",
              padding: "20px 24px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  background: "#EFF6FF",
                  borderRadius: "8px",
                  padding: "6px",
                  display: "flex",
                }}
              >
                {section.icon}
              </div>
              <h2 className="font-family-playfair font-bold text-[#1E3A8A] text-[16px]">
                {section.title}
              </h2>
            </div>
            <p className="font-family-playfair text-gray-700 text-[14px] leading-relaxed">
              {section.content}
            </p>
            {section.list && (
              <ul style={{ marginTop: "10px", paddingLeft: "8px" }}>
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#1E3A8A",
                        marginTop: "7px",
                        flexShrink: 0,
                      }}
                    />
                    <span className="font-family-playfair text-gray-700 text-[14px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Contact */}
        <div
          style={{
            background: "#EFF6FF",
            border: "1px solid #BFDBFE",
            borderRadius: "14px",
            padding: "20px 24px",
            textAlign: "center",
          }}
        >
          <Mail size={20} color="#1E3A8A" style={{ margin: "0 auto 8px" }} />
          <h3 className="font-family-playfair font-bold text-[#1E3A8A] text-[15px] mb-1">
            1.8 Contact
          </h3>
          <a
            href="mailto:tasks.risemotive@gmail.com"
            className="font-family-playfair text-[#1E3A8A] text-[14px] font-bold underline"
          >
            tasks.risemotive@gmail.com
          </a>
        </div>

        {/* <p className="font-family-playfair text-gray-400 text-[12px] text-center mt-8">
          © 2026 RISE MOTIVE. All rights reserved.
        </p> */}
      </div>
    </div>
  );
}
