import { TaskCardService } from "@/layouts/TaskCardService";
import TaskSpotImage from "../assets/RM TASKSPOT.jpg.jpeg";
import egovernmentpic from "../assets/egovernment.png";
import webdigit from "../assets/webdigital.png";
import applicationdocs from "../assets/application.png";
import creative from "../assets/creative.png";
import { BadgeCheck, Scale } from "lucide-react";
import Ai from "../assets/Ai.jpg";
import basicProgramming from "../assets/Basic Programming.jpg";
import computerfoundation from "../assets/Computer & Digital Foundations.jpg";
import digitalContent from "../assets/Digital Content Creation.jpg";
import googletools from "../assets/Google Tools & Online Collaboration.jpg";
import graphicDesign from "../assets/Graphic Design.jpg";
import microsoft from "../assets/Microsoft Office.jpg";
import egovernment from "../assets/e-Government Tools & Services.jpg";
import GovernmentForm from "@/layouts/Forms/GovernmentForm";
import { Modal } from "@/components/ui/Model";
import { useState, useEffect } from "react";
import CourseForm from "@/layouts/Forms/Courses";
import CreativeForm from "@/layouts/Forms/CreativeForm";
import LegalandOfficialServices from "@/layouts/Forms/Legal";
import WebAndDigital from "@/layouts/Forms/WebAndDigital";
import ApplicationAndDocument from "@/layouts/Forms/ApplicationAndDocumentation";
import { useLocation } from "react-router-dom";

// Replace these imports at the top:
import {
  useEGovernmentOptions,
  useWebOptions,
  useAppDocOptions,
  useLegalOptions,
  useCreativeOptions,
} from "../hooks/spotservice"; // ← use the hooks file

// ── Helpers ────────────────────────────────────────────────────────────────

type Bubble = { size: number; left: number; duration: number; delay: number };

const bubbles: Bubble[] = Array.from({ length: 15 }).map(() => ({
  size: Math.random() * 60 + 20,
  left: Math.random() * 100,
  duration: Math.random() * 5 + 5,
  delay: Math.random() * 5,
}));

// "Rembo services — 5,000 RWF"

// ── Fallbacks (shown while loading) ───────────────────────────────────────

const FALLBACK_EGOV = [
  "Rembo services",
  "RRA services",
  "RDB services",
  "RURA Services",
  "MIFOTRA Services",
];
const FALLBACK_APPDOC = [
  "Job Application",
  "Scholarship Application",
  "CV & Cover Letter Writing",
  "Project Proposal Writing",
  "Report Writing & Editing",
  "Book Writing & Formatting",
  "General Document Preparation",
];
const FALLBACK_CREATIVE = ["Photography & Videography", "Graphic Design"];
const FALLBACK_WEB = ["Website Development", "Online Setup & Support"];
const FALLBACK_LEGAL = [
  "Notary Services",
  "Case Filing & Legal Representation Support",
  "Bail Application Assistance",
  "Court Case Submission & Filing",
  "Legal Advisory & Consultation",
  "Legally Recognized Contracts & Agreements",
];

// ── Component ──────────────────────────────────────────────────────────────

export default function TaskSpot() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const location = useLocation();

  // ── Fetch all services via hooks ──────────────────────────
  const { items: egovItems, options: egovOptions } = useEGovernmentOptions();
  const { items: webItems, options: webOptions } = useWebOptions();
  const { items: appDocItems, options: appDocOptions } = useAppDocOptions();
  const { items: legalItems, options: legalOptions } = useLegalOptions();
  const { items: creativeItems, options: creativeOptions } =
    useCreativeOptions();

  // ── Hash navigation ────────────────────────────────────────────────────
  useEffect(() => {
    if (location.hash === "#application") {
      const timer = setTimeout(() => setOpenModal("document"), 0);
      return () => clearTimeout(timer);
    }
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div>
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
            RM TASK SPOT
          </h1>
          <p className="font-family-playfair text-white text-[17px]">
            <strong className="text-white">
              Get Things Done. Learn Skills. Grow Faster
            </strong>{" "}
            <br />
            Access reliable digital services and practical skills all in one
            place. Send a task, choose a skilled RM Tasker, or start learning
            today.
          </p>
        </div>
      </div>

      {/* ── Image + Description ── */}
      <div className="py-8 flex flex-col md:flex-row px-4 md:px-23 gap-6 md:gap-0">
        <div className="flex justify-center md:block">
          <img
            src={TaskSpotImage}
            className="w-full md:w-[77%] h-auto md:h-[78%] rounded-md"
          />
        </div>
        <div>
          <h1 className="py-2 font-family-playfair text-gray-800 text-[15px]">
            RM TaskSpot is your go-to platform to access trusted services and
            practical digital skills from RISE MOTIVE.
          </h1>
          <h2 className="py-2 font-family-playfair text-gray-800 text-[15px]">
            Whether you need something done or want to learn how to do it
            yourself, we have got you covered.
          </h2>
          {[
            "Request services from anywhere",
            "Choose skilled and verified RM Taskers",
            "Learn in-demand digital skills",
            "Fast, reliable, and affordable",
          ].map((text) => (
            <div key={text} className="flex flex-row gap-2 pb-6">
              <BadgeCheck size={19} className="text-[#1E3A8A]" />
              <p className="font-family-playfair text-gray-800 text-[16px]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Service Cards ── */}
      <div className="pb-5 px-4 md:px-7">
        <h1 className="font-family-playfair text-center text-blue-800 text-[20px] font-bold py-5">
          Request a Service (Send a Task), Get started by selecting a service
          below;
        </h1>

        <div
          id="services"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {/* e-Government */}
          <>
            <TaskCardService
              title="e-Government & Online Services"
              service="Click To Request Service"
              icon={<img src={egovernmentpic} />}
              onClick={() => setOpenModal("government")}
              items={egovItems.length > 0 ? egovItems : FALLBACK_EGOV}
            />
            <Modal
              isOpen={openModal === "government"}
              onClose={() => setOpenModal(null)}
              title="e-Government & Online Services"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <GovernmentForm
                title="Submit your request for e-Government services quickly and securely."
                serviceOptions={egovOptions}
              />
            </Modal>
          </>

          {/* Applications & Documentation */}
          <>
            <TaskCardService
              title="Applications & Documentation"
              service="Click To Request Service"
              icon={<img src={applicationdocs} />}
              onClick={() => setOpenModal("document")}
              items={appDocItems.length > 0 ? appDocItems : FALLBACK_APPDOC}
            />
            <Modal
              isOpen={openModal === "document"}
              onClose={() => setOpenModal(null)}
              title="Application And Documentation"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <ApplicationAndDocument serviceOptions={appDocOptions} />
            </Modal>
          </>

          {/* Creative & Media */}
          <>
            <TaskCardService
              title="Creative & Media Services"
              service="Click To Request Service"
              icon={<img src={creative} />}
              onClick={() => setOpenModal("creative")}
              items={
                creativeItems.length > 0 ? creativeItems : FALLBACK_CREATIVE
              }
            />
            <Modal
              isOpen={openModal === "creative"}
              onClose={() => setOpenModal(null)}
              title="Creative and Media Services"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <CreativeForm serviceOptions={creativeOptions} />
            </Modal>
          </>

          {/* Web & Digital */}
          <>
            <TaskCardService
              title="Web & Digital Solutions"
              service="Click To Request Service"
              icon={<img src={webdigit} />}
              onClick={() => setOpenModal("web")}
              items={webItems.length > 0 ? webItems : FALLBACK_WEB}
            />
            <Modal
              isOpen={openModal === "web"}
              onClose={() => setOpenModal(null)}
              title="Web and Digital Solution"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <WebAndDigital serviceOptions={webOptions} />
            </Modal>
          </>

          {/* Legal */}
          <>
            <TaskCardService
              title="Legal & Official Services"
              service="Click To Request Service"
              icon={<Scale size={95} />}
              onClick={() => setOpenModal("legal")}
              items={legalItems.length > 0 ? legalItems : FALLBACK_LEGAL}
            />
            <Modal
              isOpen={openModal === "legal"}
              onClose={() => setOpenModal(null)}
              title="Legal and Official Services"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <LegalandOfficialServices serviceOptions={legalOptions} />
            </Modal>
          </>
        </div>
      </div>

      {/* ── Available Modules ── */}
      <div className="pb-7 px-4 md:px-7">
        <h1 className="font-family-playfair text-center text-blue-800 text-[20px] font-bold py-5">
          AVAILABLE MODULES
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {[
            {
              key: "computerFoundation",
              title: "Computer & Digital Foundations",
              img: computerfoundation,
              alt: "computer foundation",
            },
            {
              key: "microsoft",
              title: "Microsoft Office Applications",
              img: microsoft,
              alt: "microsoft",
            },
            {
              key: "googletools",
              title: "Google Tools & Online Collaboration",
              img: googletools,
              alt: "google tools",
            },
            {
              key: "egovernm",
              title: "e-Government Tools & Services",
              img: egovernment,
              alt: "e-government",
            },
            {
              key: "digitalcont",
              title: "Digital Content Creation",
              img: digitalContent,
              alt: "digital content",
            },
            {
              key: "graphicDesign",
              title: "Graphic Design",
              img: graphicDesign,
              alt: "graphic design",
            },
            {
              key: "AI",
              title: "Introduction to Artificial Intelligence & Digital Tools",
              img: Ai,
              alt: "AI",
            },
            {
              key: "programming",
              title: "Basic Programming",
              img: basicProgramming,
              alt: "basic programming",
            },
          ].map(({ key, title, img, alt }) => (
            <div key={key}>
              <TaskCardService
                title={title}
                service="Click To Apply"
                icon={<img src={img} alt={alt} />}
                onClick={() => setOpenModal(key)}
                items={[]}
              />
              <Modal
                isOpen={openModal === key}
                onClose={() => setOpenModal(null)}
                title={`Apply for ${title}`}
                subtitle="Fill in the details below and we'll connect you with the right agency."
              >
                <CourseForm />
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
