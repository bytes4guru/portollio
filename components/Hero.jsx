"use client";
import Image from "next/image";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import bgImg from "../public/hero/bg.png";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/resume/Avnish_Kumar_Resume.pdf";
    window.open(resumeUrl, "_blank");
  };
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] md:flex-row flex flex-col-reverse justify-center items-center gap-4"
    >
      {/* Left Section */}
      <section className=" max-w-3xl min-h-xl p-4 flex flex-col gap-3 m-4">
        <h1 className="lg:text-5xl text-4xl font-bold text-emerald-700">
          Thomas Feeney
        </h1>
        <h2 className="lg:text-4xl text-3xl font-medium">
          Software Engineer
        </h2>
        
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-lg font-semibold">10+ years of experience in full-stack solutions, AI model creation, and cloud integration.</li>
            <li className="text-lg font-semibold">16+ complex projects successfully executed, including AI-driven applications, big data solutions, and scalable web systems.</li>
            <li className="text-lg font-semibold">Skilled in leveraging <span className="font-bold text-blue-500">AWS</span>, <span className="font-bold text-blue-500">Azure</span>, and <span className="font-bold text-blue-500">Google Cloud</span> for building high-performance, reliable applications.</li>
            <li className="text-lg font-semibold">Expertise in cloud platform integration to drive business success.</li>
          </ul>

        <section className="flex flex-col gap-6">
          {/* Social Media Icons */}
          <section className="flex items-center gap-4 mt-3">
            {/* Linkedin */}
            <a
              href="https://linkedin.com/in/thomas-feeney117"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my linkedin profile"
            >
              <RiLinkedinFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-500 hover:bg-blue-500 p-1.5 hover:text-white" />
            </a>
            {/* Github */}
            <a
              href="https://github.com/bytes4guru"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my github profile"
            >
              <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black  hover:bg-black p-1.5 hover:text-white" />
            </a>
            {/* X */}
            <a
              href="https://x.com/thomas-feeney117"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my x profile"
            >
              <FaXTwitter className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/thomas-feeney117"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my instagram profile"
            >
              <FaInstagram className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-pink-500 hover:bg-pink-500 p-1.5 hover:text-white" />
            </a>
          </section>
          {/* Buttons */}
          <section className="flex gap-4">
            <Link href="mailto:thomasfeeney117@gmail.com">
              <button className="flex items-center px-3 py-2 bg-emerald-700 hover:bg-emerald-800  rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform" aria-label="Contact Button">
                <IoIosMail size={24} />
                <span className="ml-1.5 md:text-lg">Contact</span>
              </button>
            </Link>

            <button className="flex items-center px-3 py-2 bg-red-700 hover:bg-red-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform" onClick={handleDownloadResume} aria-label="Resume Download Button">
              <IoDocumentText size={22} />
              <span className="ml-1.5 md:text-lg">Resume</span>
            </button>
          </section>
        </section>
      </section>

      {/* Right Section */}
      <section className=" lg:max-w-lg p-4 max-lg:hidden">
        <Image
          className="max-w-xl rounded-xl"
          src={bgImg}
          alt="Avnish Kumar"
          priority={false}
          height={300}
          width={350}
          placeholder="blur"
          style={{
            width: "350px",
            height: "auto",
          }}
        />
      </section>
    </main>
  );
};
export default Hero;
