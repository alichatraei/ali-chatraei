"use client";
import Image from "next/image";
import MyAvatar from "@public/assets/images/alichatraei.jpg";
import Link from "next/link";
import { RiInstagramLine, RiLinkedinFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FiDownloadCloud, FiMail } from "react-icons/fi";
import ExperienceSection from "@/components/experienceSection/ExperienceSection";
import SuperiorExpertise from "@/components/SuperiorExpertise/SuperiorExpertise";
import WorkJourney from "@/components/WorkJourney/WorkJourney";
export default function Home() {
  return (
    <main className="grid lg:grid-cols-2 sm:grid-cols-1 min-h-screen min-w-screen bg-primary select-none">
      <div className="lg:w-1/2 min-w-screen flex min-h-screen flex-col items-center justify-center p-4 lg:fixed lg:left-0">
        {/* Image */}
        <Image
          src={MyAvatar}
          width="140"
          height="140"
          alt="ali chatraei"
          className=" rounded-3xl drop-shadow-lg select-none"
        />
        <span className="text-accent text-30 mt-4">Ali Chatraei</span>
        <div className="text-accent text-30 mt-1">
          <span className="text-secondary">.</span>
          <span>Front-End Developer</span>
          <span className="text-secondary">.</span>
        </div>
        <div className="mt-1.5 text-justify mx-16 text-accent">
          <h6>
            I am a front-end developer with a passion for creating seamless user
            experiences. I have more than 3 years of experience working with
            cutting-edge front-end frameworks and libraries like React.js,
            Next.js, and a little React Native. Currently, I am working at{" "}
            <Link
              href="https://www.graph-inc.ir/"
              target="_blank"
              className="text-secondary decoration-transparent"
            >
              Graph Inc company
            </Link>
          </h6>
        </div>
        <div className="mt-10 text-justify mx-16 text-accent flex justify-between gap-2.5 ">
          <Link
            href="https://www.linkedin.com/in/alichatraei"
            target="_blank"
            className="decoration-transparent p-2.5 rounded-full bg-[#0077B5] w-auto h-auto"
          >
            <RiLinkedinFill size={32} />
          </Link>
          <Link
            href="https://www.instagram.com/aliiich1"
            target="_blank"
            className="decoration-transparent p-2.5 rounded-full bg-accent w-auto h-auto"
          >
            <RiInstagramLine size={32} color="black" />
          </Link>
          <Link
            href="https://www.telegram.me./alichatraei"
            target="_blank"
            className="decoration-transparent p-2.5 rounded-full bg-[#37AEE2] w-auto h-auto"
          >
            <FaTelegramPlane size={32} />
          </Link>
        </div>
        <div className="flex mt-24 gap-5">
          <Link
            href="https://uploadkon.ir/uploads/905712_23alichatraei-resume.pdf"
            target="_blank"
            className="bg-white rounded-md py-2 px-3 flex text-[#2E5F73] justify-start items-center gap-2.5"
          >
            <span className="text-left text-sm font-bold">
              Download PDF Portfolio
              <br />
              <span className="text-xs font-normal">
                Resume and portfolio Version 2.2.1
              </span>
            </span>
            <FiDownloadCloud size={46} color="#2E5F73" />
          </Link>
          <Link
            className="rounded-md py-2 px-3 flex bg-secondary justify-start items-center gap-2.5 text-accent"
            href="mailto:alichatraei@yahoo.com"
          >
            <span className="text-left text-sm font-bold">
              Get in touch
              <br />
              <span className="text-xs font-normal">
                Let's touch me by email
              </span>
            </span>
            <FiMail size={46} color="white" />
          </Link>
        </div>
      </div>
      <div className="w-full lg:relative lg:-right-full flex min-h-full flex-col items-center justify-center bg-secondary overflow-y-auto ">
        <ExperienceSection />
        <SuperiorExpertise />
        <WorkJourney />
      </div>
    </main>
  );
}
