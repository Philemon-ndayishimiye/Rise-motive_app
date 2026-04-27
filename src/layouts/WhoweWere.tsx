import ServiceCard from "./ServiceCard";
import patrick from "../assets/patrick.jpeg";
import prote from "../assets/prote.jpeg";
import frank from "../assets/frank.jpeg";
import defaultImg from "../assets/defoultImg.png"

import { Code, Users, Star, Info } from "lucide-react";

import ProfileCard from "./ProfileCard";
import Card from "./Card";
import TestimonialCarousel from "./TestimonialCoursel";
import { testimonials } from "./Testimonies";
import { Link } from "react-router-dom";

export default function WhoweWere() {
  return (
    <div id="whoWeAre" className="px-2 sm:px-4 md:px-8 lg:px-15  ">
      {/* Gradient Heading */}
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-800 text-center font-bold py-5 font-family-playfair">
        WHO WE ARE
      </h1>

      {/* Responsive Paragraph */}
      <h4 className="text-[14px] sm:text-[14px] md:text-base lg:text-[17px] pb-12 text-center leading-relaxed font-family-playfair text-gray-700">
        Rise Motive operates through three integrated clusters. Each cluster is
        built <br />
        to solve real-life problems today while preparing for the future.
      </h4>

      <div className="py-4  ">
        <div
          id="clusters"
          className="flex  justify-center flex-col md:flex-row gap-14"
        >
          <ServiceCard
            icon={<Code />}
            title="RM TaskSpot"
            subtitle="Learning + services"
            linkElement={<Link to="/TaskSpot"></Link>}
          />

          <ServiceCard
            icon={<Star />}
            title="RM ProSpot"
            subtitle="MarketPlace"
            linkElement={<Link to="/ProSpot"></Link>}
          />

          <ServiceCard
            icon={<Info />}
            title="RM InfoSpot"
            subtitle="Information Hub"
            linkElement={<Link to="/InfoSpot"></Link>}
          />
        </div>
      </div>

      {/**services */}
      <div className="py-7 ">
        {/* Section Title */}
        <h1 className="py-12 text-xl sm:text-2xl md:text-3xl lg:4xl font-family-playfair text-blue-800 font-bold text-center">
          We deliver creative Solutions
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 pt-6 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            backgroundColor="bg-blue-800"
            title="Media Production"
            items={[
              "Photography",
              "Videography",
              "VideoEditing",
              "Event Coverage",
              "Content Creation",
              "Video Streaming",
            ]}
            description="We create high-quality visual and digital media content that captures moments and communicates powerful stories."
          />

          <Card
            backgroundColor="bg-blue-800"
            title="Graphic Design"
            items={[
              "Logo Design",
              "Posters",
              "Flyers",
              "Branding",
              "Social Media Graphics",
              "Print Desig",
            ]}
            description="We design visually appealing and brandfocused materials that help businesses stand out and communicate effectively."
          />

          <Card
            backgroundColor="bg-blue-800"
            title="Basic Programming"
            items={["Frontend", "Backend", "System Analytics"]}
            description="We deliver creative media and graphic design solutions that engage, inspire, and bring your brand to life."
          />

          <Card
            backgroundColor="bg-blue-800"
            title="Digital Skills &Literacy"
            items={[
              "Basic Computer Skills",
              "Internet Use",
              "Online Tools",
              "Digital Communication",
            ]}
            description="We equip individuals with essential digital knowledge to confidently use modern technology in daily life and work."
          />

          <Card
            backgroundColor="bg-blue-800"
            title="Office & Productivity Skills"
            items={[
              "Microsoft Office (Word, Excel PowerPoint)",
              "Google Workspace",
              "Time Management",
              "Workplace Productivity",
            ]}
            description="We train individuals and teams to work efficiently using professional tools and modern workflows."
          />

          <Card
            backgroundColor="bg-blue-800"
            title="Programming & Tech Fundamentals"
            items={[
              "Basic Programming",
              "Mobile APP Development",
              "System Design",
            ]}
            description="We introduce learners to the foundations of software development and analytical thinking."
          />
        </div>
      </div>
      {/*  Testimonial section*/}

      <div className="py-7 ">
        <h1 className=" text-2xl sm:text-2xl md:text-3xl font-family-playfair text-blue-800 font-bold text-center">
          See What Our Customers Say About Us
        </h1>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
      <div className=" px-4 sm:px-6 lg:px-10">
        {/* Section Title */}
        {/* <h1 className="text-center font-bold text-[#1E3A8A] text-[25px] sm:text-[28px] font-family-playfair pb-6">
          Our Enterprise Ecosystem
        </h1> */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          {/* Card 1: Our Presence */}
          {/* <div className="w-full sm:w-auto rounded-lg py-5 px-5 bg-blue-800 ">
            <div className="flex flex-row gap-2 py-3 items-center">
              <Globe className="text-[#1E3A8A]" size={24} />
              <h1 className="text-[17px] font-family-playfair text-[#1E3A8A] font-bold">
                OUR PRESENCE
              </h1>
            </div>
            <h1 className="text-[16px] pb-4 text-blue-500 font-medium font-family-playfair">
              Rise Motive exists across:
            </h1>
            <h2 className="pb-2 text-[15px] font-family-playfair text-gray-700">
              Physical Location
            </h2>
            <h2 className="pb-2 text-[15px] font-family-playfair text-gray-700">
              Digital Platform
            </h2>
          </div> */}

          {/* Card 2: Our Business Model */}
          {/* <div className="w-full sm:w-auto rounded-lg py-5 px-5 bg-blue-50">
            <div className="flex flex-row gap-2 py-3 items-center">
              <Briefcase className="text-[#1E3A8A]" size={24} />
              <h1 className="text-[17px] font-family-playfair text-[#1E3A8A] font-bold">
                OUR BUSINESS MODEL
              </h1>
            </div>
            <h1 className="text-[16px] pb-4 text-blue-500 font-medium font-family-playfair">
              We generate value through:
            </h1>

            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 pb-2">
              <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1 text-center">
                Learning program
              </h2>
              <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1 text-center">
                Service Delivery
              </h2>
            </div>

           
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 pb-2">
              <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1 text-center">
                Digital Product
              </h2>
              <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1 text-center">
                Media Production
              </h2>
            </div>

            
            <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1 w-max text-center mt-2">
              Consultancy
            </h2>
          </div> */}
        </div>
      </div>
      {/* Taskers*/}
      <div className="py-7 px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="pb-6 flex flex-col sm:flex-row gap-2 items-center justify-center  sm:text-left">
          <Users className="text-blue-400" size={28} />
          <h1 className="text-[23px]  sm:text-2xl font-family-playfair  text-blue-800 font-bold">
            MEET OUR TASKERS
          </h1>
        </div>

        {/* Subheading */}
        <h1 className="text-gray-600 font-family-playfair  sm:text-left text-[16px] sm:text-[18px] font-semibold text-center">
          The professionals making it happen.
        </h1>

        {/* Profile Cards Grid */}
        <div
          id="proffessionals"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-7 justify-items-center"
        >
          <ProfileCard
            photo={prote}
            email="tasks.risemotive@gmail.com"
            name="MURWANASHYAKA Protegene"
            title="Online Services & Basic Digital Skills Trainer"
            phone="0795344768"
          />

          <ProfileCard
            photo={patrick}
            email="tasks.risemotive@gmail.com"
            name="Joe H.Patrick"
            title="RM Taskers Coordinator"
            phone="0788625873 "
          />

          <ProfileCard
            photo={defaultImg}
            email="tasks.risemotive@gmail.com"
            name="NDAYISHIMIYE Philemon"
            title="Web Developer & Advanced Digital Skills Trainer"
            phone="0785436374"
          />

          <ProfileCard
            photo={frank}
            email="tasks.risemotive@gmail.com"
            name="Frank IRANKUNDA"
            title="Lawyer – IECMS Services"
            phone="0795344768 "
          />

          <ProfileCard
            photo={defaultImg}
            email="tasks.risemotive@gmail.com"
            name="MUKANSANGA Marie Agnes"
            title="Lawyer- Private Notary"
            phone="0795344768"
          />

          <ProfileCard
            photo={defaultImg}
            email="tasks.risemotive@gmail.com"
            name="UWAJENEZA Adrienne"
            title="RM ProSpot Dealer "
            phone="0795344768"
          />
        </div>
      </div>
    </div>
  );
}
