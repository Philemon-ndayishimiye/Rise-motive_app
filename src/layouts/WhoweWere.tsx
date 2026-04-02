import ServiceCard from "./ServiceCard";
import patrick from "../assets/patrick.jpeg";
import prote from "../assets/prote.jpeg";
import philemon from "../assets/komvuga ndayishimiye philemon.jpg"

import {
  Code,
  Globe,
  Briefcase,
  Users,
  Star,
  Info,
  GraduationCap,
  BadgeCheck,
  CheckSquare,
  ShoppingBag,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import ProfileCard from "./ProfileCard";

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
          />

          <ServiceCard
            icon={<Star />}
            title="RM ProSpot"
            subtitle="MarketPlace"
          />

          <ServiceCard
            icon={<Info />}
            title="RM InfoSpot"
            subtitle="Information Hub"
          />
        </div>
      </div>

      <div className="py-7">
        <div>
          <div className="pt-7">
            {/* Title row */}
            <div className="flex items-center gap-2">
              <div className="text-blue-400 text-sm md:text-base">
                <Code />
              </div>

              <h1 className="text-[#1E3A8A] text-base md:text-lg lg:text-xl font-bold font-family-playfair">
                RM TASKSPOT
              </h1>
            </div>

            {/* Subtitle */}
            <h2 className="pb-6 font-family-playfair text-sm md:text-base text-blue-500 font-medium mt-2 md:ml-7">
              Learn. Create. Get Things Done.
            </h2>

            {/* Description */}
            <p className="mt-3 md:ml-7 text-sm md:text-base text-gray-700 font-family-playfair leading-relaxed">
              RM TaskSpot is a hybrid environment where learning meets
              real-world service delivery. We equip people with practical,
              employable skills while providing fast, reliable services.
            </p>
          </div>

          <div className="py-10 grid grid-cols-2 gap-8 ml-7">
            <div className=" shadow  rounded-lg px-8 py-5 bg-blue-300 text-white ">
              <GraduationCap className="text-2xl text-blue-500  " />
              <h1 className="py-3"></h1>
              <h1 className="font-bold text-[14px] font-family-playfair text-blue-400 pb-3">
                APPLY TO LEARN
              </h1>
              <h1 className="font-bold font-family-playfair text-[17px] text-[#1E3A8A] pb-5">
                Start Your Learning Journey
              </h1>

              <h3 className="text-gray-900 text[14px] font-family-playfair pb-5">
                Ready to gain practical, income-generating skills? Join our{" "}
                <br />
                hands-on programs and build capabilities
              </h3>

              <h1 className="text-[#1E3A8A] text-[16px] font-family-playfair font-bold pb-5 ">
                Training Areas:{" "}
              </h1>

              <div>
                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-900 font-family-playfair">
                    Digital Literacy
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-900 font-family-playfair">
                    Software Development
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-900 font-family-playfair">
                    Graphic Design{" "}
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-900 font-family-playfair">
                    Office and Productivity Skills
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-900 font-family-playfair">
                    Basic Programming
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-900 font-family-playfair">
                    Community Based Learning
                  </h1>
                </div>
              </div>

              <h1 className="text-[#1E3A8A] text-[17px] font-family-playfair font-bold py-3">
                How It Works
              </h1>

              <div>
                <div className="flex flex-row gap-2 pb-3">
                  <CheckSquare className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-900 font-family-playfair">
                    Choose a Course
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <CheckSquare className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-900 font-family-playfair">
                    Submit Your Application
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <CheckSquare className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-900 font-family-playfair">
                    Get Contacted
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <CheckSquare className="text-blue-500 " />
                  <h1 className="text-[14px] pb-5 text-gray-900 font-family-playfair">
                    Start Learning
                  </h1>

                  <div className="mt-16">
                    <button className={buttonVariants()}>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" shadow  rounded-lg px-5 py-5 bg-white ">
              <ShoppingBag className="text-2xl text-blue-500  " />
              <h1 className="py-3"></h1>
              <h1 className="font-bold text-[14px] font-family-playfair text-blue-400 pb-3">
                REQUEST A TASKER (SERVICES)
              </h1>
              <h1 className="font-bold font-family-playfair text-[17px] text-[#1E3A8A] pb-5">
                Get Things Done From Anywhere
              </h1>

              <h3 className="text-gray-700 text[14px] font-family-playfair pb-5">
                Need a service but can’t reach us physically? <br /> We bring
                the service to you. hands-on programs and build capabilities
              </h3>

              <h1 className="text-[#1E3A8A] text-[16px] font-family-playfair font-bold pb-5 ">
                Available Services::{" "}
              </h1>

              <div>
                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    Photography & videography
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    Passport Photo
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    YouTube & TikTok content creation{" "}
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    Branding & Graphic Design
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    Printing & documentation
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    Online services (IREMBO, RRA Services, RDB Services, RURA
                    Services...)
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    ICT & media support
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    Video streaming
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <BadgeCheck className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    Web development
                  </h1>
                </div>
              </div>

              <h1 className="text-[#1E3A8A] text-[17px] font-family-playfair font-bold py-3">
                How It Works
              </h1>

              <div>
                <div className="flex flex-row gap-2 pb-3">
                  <CheckSquare className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    Tell us the service you need
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <CheckSquare className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    Submit your task details
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <CheckSquare className="text-blue-500 " />
                  <h1 className="text-[14px] text-gray-700 font-family-playfair">
                    Choose your preferred tasker (optional)
                  </h1>
                </div>

                <div className="flex flex-row gap-2 pb-3">
                  <CheckSquare className="text-blue-500 " />
                  <h1 className="text-[14px] pb-5 text-gray-700 font-family-playfair">
                    Get the work done professionally
                  </h1>

                  <div className="mt-16 mr-28 flex justify-center items-center">
                    <button className={buttonVariants()}>
                      Submit Your Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3 ">
            <h1 className="text-center font-bold text-[#1E3A8A] text-[25px] font-family-playfair ">
              Our Enterprise Ecosystem
            </h1>

            <div className="py-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg py-5 px-5 bg-blue-50 border border-blue-400">
                <div className="flex flex-row gap-2 py-3">
                  <Globe className="text-[#1E3A8A] " />
                  <h1 className="text-[17px]  font-family-playfair text-[#1E3A8A] font-bold">
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
              <div className="rounded-lg py-5 px-5 bg-blue-50 border border-blue-400">
                <div className="flex flex-row gap-2 py-3">
                  <Briefcase className="text-[#1E3A8A] " />
                  <h1 className="text-[17px]  font-family-playfair text-[#1E3A8A] font-bold">
                    OUR BUSINESS MODEL
                  </h1>
                </div>
                <h1 className="text-[16px] pb-4 text-blue-500 font-medium font-family-playfair">
                  We generate value through:
                </h1>
                <div className="flex flex-row gap-5 justify-between pb-2">
                  <h2 className=" bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1">
                    Learning program
                  </h2>

                  <h2 className=" bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1">
                    Service Delivery
                  </h2>
                </div>

                <div className="flex flex-row gap-5 justify-between pb-2">
                  <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1">
                    Digital Product
                  </h2>

                  <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1">
                    Media Production
                  </h2>
                </div>

                <h2 className="bg-blue-400 text-[15px] font-family-playfair text-white rounded-2xl px-3 py-1 w-30">
                  Consultancy
                </h2>
              </div>
            </div>
          </div>

          <div className="py-7 ">
            <div className="pb-6 flex flex-row font-bold gap-2 items-center justify-center">
              <Users className="text-blue-400  " />
              <h1 className="text-3xl  font-family-playfair text-[23px] text-[#1E3A8A] ">
                {" "}
                MEET WITH OUR TASKERS
              </h1>
            </div>

            <h1 className="text-blue-400 font-family-playfair text-center text-[18px] font-semibold">
              The professionals making it happen.
            </h1>

            <div className="grid grid-cols-3 gap-4 py-7 ">
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
      </div>
    </div>
  );
}
