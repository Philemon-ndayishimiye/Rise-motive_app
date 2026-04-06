import ServiceCard from "./ServiceCard";
import patrick from "../assets/patrick.jpeg";
import prote from "../assets/prote.jpeg";
import philemon from "../assets/komvuga ndayishimiye philemon.jpg";

import { Code, Globe, Briefcase, Users, Star, Info } from "lucide-react";

import ProfileCard from "./ProfileCard";
import Card from "./Card";
import TestimonialCarousel from "./TestimonialCoursel";
import { testimonials } from "./Testimonies";
import { Link } from "react-router-dom";

export default function WhoweWere() {
  return (
    <div className="px-2 sm:px-8 md:px-16 lg:px-32  bg-linear-to-r from-blue-100/30 to-blue-50/25">
      {/* Gradient Heading */}
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#1E3A8A] text-center font-bold py-5 font-family-playfair">
        WHO WE ARE
      </h1>

      {/* Responsive Paragraph */}
      <h4 className="text-[14px] sm:text-[14px] md:text-base lg:text-[17px] pb-12 text-center leading-relaxed font-family-playfair text-gray-700">
        Rise Motive operates through three integrated clusters. Each cluster is
        built <br />
        to solve real-life problems today while preparing for the future.
      </h4>

      <div className="py-4 px-5">
        <div className="flex flex-col md:flex-row gap-7">
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
        <h1 className="pb-6 text-2xl sm:text-3xl md:text-4xl font-family-playfair text-[#1E3A8A] font-bold text-center">
          Start your Learning Journey
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            backgroundColor="bg-gradient-to-r from-blue-50 to-teal-50"
            title="Media Production and Graphic Design"
            items={["Media Production", "Graphic Design", "Digital Literacy"]}
            description="We deliver creative media and graphic design solutions."
          />

          <Card
            backgroundColor="bg-gradient-to-r from-teal-50 to-blue-100"
            title="Office & Productivity Skills"
            items={[
              "Office Skills",
              "Productivity Skills",
              "Community Learning",
            ]}
            description="We deliver creative media and graphic design solutions that engage, inspire, and bring your brand to life."
          />

          <Card
            backgroundColor="bg-gradient-to-r from-teal-50 to-blue-50"
            title="Basic Programming"
            items={["Frontend", "Backend", "System Analytics"]}
            description="We deliver creative media and graphic design solutions that engage, inspire, and bring your brand to life."
          />

          <Card
            backgroundColor="bg-gradient-to-r from-teal-100 to-teal-50"
            title="Video Streaming"
            items={["Frontend", "Backend", "System Analytics"]}
            description="We deliver creative media and graphic design solutions that engage, inspire, and bring your brand to life."
          />

          <Card
            backgroundColor="bg-gradient-to-r from-teal-50 to-blue-100"
            title="Photography and Videography"
            items={["Frontend", "Backend", "System Analytics"]}
            description="We deliver creative media and graphic design solutions that engage, inspire, and bring your brand to life."
          />

          <Card
            backgroundColor="bg-gradient-to-r from-blue-50 to-teal-50"
            title="Software Development"
            items={["Train", "Develop", "Maintain"]}
            description="We deliver creative media and graphic design solutions that engage, inspire, and bring your brand to life."
          />
        </div>
      </div>
      {/*  Testimonial section*/}

      <div className="py-7 ">
        <h1 className="pb-6 text-2xl sm:text-3xl md:text-4xl font-family-playfair text-[#1E3A8A] font-bold text-center">
          See What Our Customers Say About Us
        </h1>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
      <div className="py-3 px-4 sm:px-6 lg:px-10">
        {/* Section Title */}
        <h1 className="text-center font-bold text-[#1E3A8A] text-[25px] sm:text-[28px] font-family-playfair pb-6">
          Our Enterprise Ecosystem
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          {/* Card 1: Our Presence */}
          <div className="w-full sm:w-auto rounded-lg py-5 px-5 bg-blue-50 ">
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
          </div>

          {/* Card 2: Our Business Model */}
          <div className="w-full sm:w-auto rounded-lg py-5 px-5 bg-blue-50">
            <div className="flex flex-row gap-2 py-3 items-center">
              <Briefcase className="text-[#1E3A8A]" size={24} />
              <h1 className="text-[17px] font-family-playfair text-[#1E3A8A] font-bold">
                OUR BUSINESS MODEL
              </h1>
            </div>
            <h1 className="text-[16px] pb-4 text-blue-500 font-medium font-family-playfair">
              We generate value through:
            </h1>

            {/* First row of services */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 pb-2">
              <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1 text-center">
                Learning program
              </h2>
              <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1 text-center">
                Service Delivery
              </h2>
            </div>

            {/* Second row of services */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 pb-2">
              <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1 text-center">
                Digital Product
              </h2>
              <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1 text-center">
                Media Production
              </h2>
            </div>

            {/* Last service */}
            <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1 w-max text-center mt-2">
              Consultancy
            </h2>
          </div>
        </div>
      </div>
      {/* Taskers*/}
      <div className="py-7 px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="pb-6 flex flex-col sm:flex-row gap-2 items-center justify-center  sm:text-left">
          <Users className="text-blue-400" size={28} />
          <h1 className="text-[23px]  sm:text-3xl font-family-playfair  text-[#1E3A8A] font-bold">
            MEET WITH OUR TASKERS
          </h1>
        </div>

        {/* Subheading */}
        <h1 className="text-blue-400 font-family-playfair text-center sm:text-left text-[16px] sm:text-[18px] font-semibold">
          The professionals making it happen.
        </h1>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-7 justify-items-center">
          <ProfileCard
            photo={prote}
            email="joe@gmail.com"
            name="Hakizimana Joseph Patrick"
            title="Graphic Designer"
            phone="+250786789872"
          />

          <ProfileCard
            photo={patrick}
            email="joe@gmail.com"
            name="Hakizimana Joseph Patrick"
            title="Consultancy and CEO"
            phone="+250786789872"
          />

          <ProfileCard
            photo={philemon}
            email="philemonndayi@gmail.com"
            name="NDAYISHIMIYE Philemon"
            title="Senior Software Engeneer"
            phone="+250785436374"
          />
        </div>
      </div>
    </div>
  );
}
