import { TaskCardService } from "@/layouts/TaskCardService";
import TaskSpotImage from "../assets/RM TASKSPOT.jpg.jpeg";
import { BadgeCheck } from "lucide-react";
import { Globe, FileText, Palette, Code, Scale } from "lucide-react";
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
import { useState } from "react";
import CourseForm from "@/layouts/Forms/Courses";
import CreativeForm from "@/layouts/Forms/CreativeForm";
import LegalandOfficialServices from "@/layouts/Forms/Legal";
import WebAndDigital from "@/layouts/Forms/WebAndDigital";
import ApplicationAndDocument from "@/layouts/Forms/ApplicationAndDocumentation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Bubble = {
  size: number;
  left: number;
  duration: number;
  delay: number;
};

const bubbles: Bubble[] = Array.from({ length: 15 }).map(() => ({
  size: Math.random() * 60 + 20,
  left: Math.random() * 100,
  duration: Math.random() * 5 + 5,
  delay: Math.random() * 5,
}));

export default function TaskSpot() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="py-7">
      {/* ── Hero Banner ── */}
      <div className="px-7 relative overflow-hidden py-20 bg-blue-800">
        {bubbles.map((bubble: Bubble, i: number) => (
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
            RISEMOTIVE TASK SPOT
          </h1>
          <p className="font-family-playfair text-white text-[17px]">
            <strong className="text-white">
              Get Things Done. Learn Skills. Grow Faster
            </strong>{" "}
            <br />
            Access reliable digital services and practical skills all in one
            place. Send a task, choose a skilled RM Tasker, or start learning
            today
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
            RM TaskSpot is, your go to platform to access trusted services and
            practical digital skills from RISE MOTIVE.
          </h1>
          <h2 className="py-2 font-family-playfair text-gray-800 text-[15px]">
            Whether you need something done or want to learn how to do it
            yourself we have got you covered.
          </h2>

          <div className="flex flex-row gap-2 pb-6">
            <BadgeCheck size={19} className="text-[#1E3A8A]" />
            <p className="font-family-playfair text-gray-800 text-[15px]">
              Request services from anywhere
            </p>
          </div>
          <div className="flex flex-row gap-2 pb-6">
            <BadgeCheck size={19} className="text-[#1E3A8A]" />
            <p className="font-family-playfair text-gray-800 text-[15px]">
              Choose skilled and verified RM Taskers
            </p>
          </div>
          <div className="flex flex-row gap-2 pb-6">
            <BadgeCheck size={19} className="text-[#1E3A8A]" />
            <p className="font-family-playfair text-gray-800 text-[15px]">
              Learn in-demand digital skills
            </p>
          </div>
          <div className="flex flex-row gap-2 pb-6">
            <BadgeCheck size={19} className="text-[#1E3A8A]" />
            <p className="font-family-playfair text-gray-800 text-[15px]">
              Fast, reliable, and affordable
            </p>
          </div>
        </div>
      </div>

      {/* ── Service Cards ── */}
      <div className="pb-5 px-4 md:px-7">
        <h1 className="font-family-playfair text-center text-[#1E3A8A] text-[20px] font-bold py-5">
          Request a Service (Send a Task), Get started by selecting a service
          below;
        </h1>

        <div
          id="services"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          <>
            <TaskCardService
              title="e-Government & Online Services"
              service="Click To Request Service"
              icon={<Globe size={95} />}
              onClick={() => setOpenModal("government")}
              items={[
                "Rembo services",
                "RRA services",
                "RDB services",
                "RURA Services",
                "MIFOTRA Services",
              ]}
            />
            <Modal
              isOpen={openModal === "government"}
              onClose={() => setOpenModal(null)}
              title="e-Government & Online Services"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <GovernmentForm title="Submit your request for e-Government services quickly and securely." />
            </Modal>
          </>

          <>
            <TaskCardService
              title="Applications & Documentation"
              service="Click To Request Service"
              icon={<FileText size={95} />}
              onClick={() => setOpenModal("document")}
              items={[
                "Job Application",
                "Scholarship Application",
                "CV & Cover Letter Writing",
                "Project Proposal Writing",
                "Report Writing & Editing",
                "Book Writing & Formatting",
                "General Document Preparation",
              ]}
            />
            <Modal
              isOpen={openModal === "document"}
              onClose={() => setOpenModal(null)}
              title="Application And Documentation"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <ApplicationAndDocument />
            </Modal>
          </>

          <>
            <TaskCardService
              title="Creative & Media Services"
              service="Click To Request Service"
              icon={<Palette size={95} />}
              onClick={() => setOpenModal("creative")}
              items={["Photography & Videography", "Graphic Design"]}
            />
            <Modal
              isOpen={openModal === "creative"}
              onClose={() => setOpenModal(null)}
              title="Creative and Media Services"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <CreativeForm />
            </Modal>
          </>

          <>
            <TaskCardService
              title="Web & Digital Solutions"
              service="Click To Request Service"
              icon={<Code size={95} />}
              onClick={() => setOpenModal("web")}
              items={["Website Development", "Online Setup & Support"]}
            />
            <Modal
              isOpen={openModal === "web"}
              onClose={() => setOpenModal(null)}
              title="Web and Digital Solution"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <WebAndDigital />
            </Modal>
          </>

          <>
            <TaskCardService
              title="Legal & Official Services"
              service="Click To Request Service"
              icon={<Scale size={95} />}
              onClick={() => setOpenModal("legal")}
              items={[
                "Notary Services",
                "Case Filing & Legal Representation Support",
                "Bail Application Assistance",
                "Court Case Submission & Filing",
                "Legal Advisory & Consultation",
                "Legally Recognized Contracts & Agreements",
              ]}
            />
            <Modal
              isOpen={openModal === "legal"}
              onClose={() => setOpenModal(null)}
              title="Legal and Official Services"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <LegalandOfficialServices />
            </Modal>
          </>
        </div>
      </div>

      {/* ── Available Modules ── */}
      <div className="pb-7 px-4 md:px-7">
        <h1 className="font-family-playfair text-center text-[#1E3A8A] text-[20px] font-bold py-5">
          AVAILABLE MODULES
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          <>
            <TaskCardService
              title="Computer & Digital Foundations"
              service="Click To Apply"
              icon={<img src={computerfoundation} alt="computer foundation" />}
              onClick={() => setOpenModal("computerFoundation")}
              items={[]}
            />
            <Modal
              isOpen={openModal === "computerFoundation"}
              onClose={() => setOpenModal(null)}
              title="Please Apply Computer And Digital Foundations"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <CourseForm />
            </Modal>
          </>

          <>
            <TaskCardService
              title="Microsoft Office Applications"
              service="Click To Apply"
              icon={<img src={microsoft} alt="microsoft" />}
              onClick={() => setOpenModal("microsoft")}
              items={[]}
            />
            <Modal
              isOpen={openModal === "microsoft"}
              onClose={() => setOpenModal(null)}
              title="Microsoft Office Applications"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <CourseForm />
            </Modal>
          </>

          <>
            <TaskCardService
              title="Google Tools & Online Collaboration"
              service="Click To Apply"
              icon={<img src={googletools} alt="google tools" />}
              onClick={() => setOpenModal("googletools")}
              items={[]}
            />
            <Modal
              isOpen={openModal === "googletools"}
              onClose={() => setOpenModal(null)}
              title="Apply for Google Tools and Online Collaboration"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <CourseForm />
            </Modal>
          </>

          <>
            <TaskCardService
              title="e-Government Tools & Services"
              service="Click To Apply"
              icon={<img src={egovernment} alt="e-government" />}
              onClick={() => setOpenModal("egovernm")}
              items={[]}
            />
            <Modal
              isOpen={openModal === "egovernm"}
              onClose={() => setOpenModal(null)}
              title="Apply for e-Government Tools and Services"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <CourseForm />
            </Modal>
          </>

          <>
            <TaskCardService
              title="Digital Content Creation"
              service="Click To Apply"
              icon={<img src={digitalContent} alt="digital content" />}
              onClick={() => setOpenModal("digitalcont")}
              items={[]}
            />
            <Modal
              isOpen={openModal === "digitalcont"}
              onClose={() => setOpenModal(null)}
              title="Apply for Digital Content Creation"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <CourseForm />
            </Modal>
          </>

          <>
            <TaskCardService
              title="Graphic Design"
              service="Click To Apply"
              icon={<img src={graphicDesign} alt="graphic design" />}
              onClick={() => setOpenModal("graphicDesign")}
              items={[]}
            />
            <Modal
              isOpen={openModal === "graphicDesign"}
              onClose={() => setOpenModal(null)}
              title="Apply for Graphic Design"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <CourseForm />
            </Modal>
          </>

          <>
            <TaskCardService
              title="Introduction to Artificial Intelligence & Digital Tools"
              service="Click To Apply"
              icon={<img src={Ai} alt="AI" />}
              onClick={() => setOpenModal("AI")}
              items={[]}
            />
            <Modal
              isOpen={openModal === "AI"}
              onClose={() => setOpenModal(null)}
              title="Apply for Introduction To Artificial Intelligence"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <CourseForm />
            </Modal>
          </>

          <>
            <TaskCardService
              title="Basic Programming"
              service="Click To Apply"
              icon={<img src={basicProgramming} alt="basic programming" />}
              onClick={() => setOpenModal("programming")}
              items={[]}
            />
            <Modal
              isOpen={openModal === "programming"}
              onClose={() => setOpenModal(null)}
              title="Apply for Basic Programming"
              subtitle="Fill in the details below and we'll connect you with the right agency."
            >
              <CourseForm />
            </Modal>
          </>
        </div>
      </div>
    </div>
  );
}
