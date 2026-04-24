import {
  Scale,
  Mail,
  BookOpen,
  MessageSquare,
  FileCheck,
  Handshake,
  CheckCircle,
} from "lucide-react";

const sections = [
  {
    icon: <BookOpen size={18} color="#1E3A8A" />,
    title: "3.1 Purpose",
    content:
      "This section provides legal clarity for clients and the company, ensuring transparency and mutual understanding of rights and obligations.",
  },
  {
    icon: <Scale size={18} color="#1E3A8A" />,
    title: "3.2 Legal Standing",
    content:
      "Rise Motive Ltd operates under applicable laws of Rwanda and complies with business and digital service regulations.",
  },
  {
    icon: <FileCheck size={18} color="#1E3A8A" />,
    title: "3.3 Agreements",
    content:
      "Any engagement (verbal, written, or digital) may form a binding agreement depending on service type.",
  },
  {
    icon: <MessageSquare size={18} color="#1E3A8A" />,
    title: "3.4 Evidence",
    content:
      "Emails, invoices, chats, and written communication may be used as legal evidence in any dispute or proceeding.",
  },
  {
    icon: <Handshake size={18} color="#1E3A8A" />,
    title: "3.5 Dispute Resolution",
    content: "We handle disputes in the following order:",
    list: [
      "First: Amicable resolution between both parties",
      "Second: Mediation by a neutral third party",
      "Third: Legal action under Rwanda jurisdiction if needed",
    ],
  },
  {
    icon: <CheckCircle size={18} color="#1E3A8A" />,
    title: "3.6 Acceptance",
    content:
      "By using our services, you confirm acceptance of these terms and acknowledge that they constitute a legally binding agreement.",
  },
  {
    icon: <Scale size={18} color="#1E3A8A" />,
    title: "3.7 Final Note",
    content:
      "We operate professionally, transparently, and expect mutual respect from all clients and partners. Rise Motive Ltd is committed to fair and ethical business practices at all times.",
  },
];

export default function LawyersCorner() {
  return (
    <div className="">
      {/* Hero */}
      <div className="px-7 relative overflow-hidden py-16 bg-blue-800">
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-4">
            <Scale size={40} color="#ffffff" />
          </div>
          <h1 className="font-family-playfair text-white text-[24px] font-bold py-3">
            LAWYER'S CORNER
          </h1>
          <p className="font-family-playfair text-white text-[16px] max-w-xl mx-auto">
            Legal clarity for clients and the company. Rise Motive Ltd is
            committed to transparent, professional, and lawful operations.
          </p>
          <p className="font-family-playfair text-white text-[12px] mt-3">
            Last updated: April 2026 RISE MOTIVE.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-24 py-10 max-w-4xl mx-auto">
        {/* Rwanda Law Banner */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #1E40AF",
            borderRadius: "12px",
            padding: "14px 20px",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Scale size={16} color="#1E40AF" />
          <p className="font-family-playfair text-gray-600 text-[13px] font-bold">
            Rise Motive Ltd operates under the laws of the Republic of Rwanda.
            All disputes are subject to Rwandan jurisdiction.
          </p>
        </div>

        {sections.map((section, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              border: "1px solid #1E40AF",
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
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#1E3A8A",
                        color: "#fff",
                        fontSize: "10px",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-family-playfair text-gray-700 text-[14px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Final acceptance */}
        <div
          style={{
            background: "#1E3A8A",
            borderRadius: "14px",
            padding: "24px",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          <CheckCircle
            size={28}
            color="#fff"
            style={{ margin: "0 auto 10px" }}
          />
          <h3 className="font-family-playfair font-bold text-white text-[16px] mb-2">
            Acceptance of Terms
          </h3>
          <p className="font-family-playfair text-blue-200 text-[14px] leading-relaxed">
            By engaging with Rise Motive Ltd through our website, services, or
            any communication  you confirm that you have read, understood, and
            accepted all terms outlined across our Privacy Policy, Terms and
            Conditions, and this Lawyer's Corner.
          </p>
        </div>

        {/* Contact */}
        <div
          style={{
            background: "#EFF6FF",
            border: "1px solid #1E40AF",
            borderRadius: "14px",
            padding: "20px 24px",
            textAlign: "center",
          }}
        >
          <Mail size={20} color="#1E3A8A" style={{ margin: "0 auto 8px" }} />
          <h3 className="font-family-playfair font-bold text-[#1E3A8A] text-[15px] mb-1">
            3.8 Contact
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
