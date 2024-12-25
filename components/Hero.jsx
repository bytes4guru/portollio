"use client";
import Image from "next/image";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaTelegram, FaSkype } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import bgImg from "../public/hero/bg.png";

const Hero = () => {
    return (
        <main
            className="min-h-[calc(100svh-5.03rem)] lg:py-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
            {/* Left Section */}
            <section className="min-h-xl p-4 flex flex-col gap-3 m-4 justify-center">
                <h1 className="lg:text-5xl text-4xl font-bold text-emerald-700">
                    Thomas Feeney
                </h1>
                <h2 className="lg:text-4xl text-3xl font-medium text-gray-500">
                    Software Engineer
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-gray-700 ml-4 mt-4">
                    <li className="text-2xl font-semibold">Professional software engineer with 10+ years of experience</li>
                    <li className="text-2xl font-semibold">Driven to craft exceptional, reliable software through meticulous testing and industry best practices</li>
                    <li className="text-2xl font-semibold">Passionate about tackling complex challenges and delivering impactful technological solutions.</li>
                    <li className="text-2xl font-semibold">Committed to staying updated on industry advancements and adopting innovative practices.</li>
                </ul>
                <div className="h-16"></div>
                <section className="flex flex-col gap-6">
                    {/* Social Media Icons */}
                    <section className="flex items-center gap-4 mt-3">
                        {/* Linkedin */}
                        <a
                            href="https://www.linkedin.com/in/thomas-feeney-a4b617343/"
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
                            href="https://t.me/codeastronomer"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Goto my x profile"
                        >
                            <FaTelegram className="bg-white text-blue-700 transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 hover:bg-blue-700 p-1.5 hover:text-white" />
                        </a>
                        {/* Instagram */}
                        <a
                            href="skype:live:.cid.1652dd0b337065d7"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Goto my instagram profile"
                        >
                            <FaSkype className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-600 hover:bg-blue-600 p-1.5 hover:text-white" />
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

                        <a
                            className="flex items-center px-3 py-2 bg-red-700 hover:bg-red-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
                            href="/resume/Thomas_Feeney_CV.pdf" target="_blank" rel="noreferrer">
                            <IoDocumentText size={22} />
                            <span className="ml-1.5 md:text-lg">Resume</span>
                        </a>
                    </section>
                </section>
            </section>

            {/* Right Section */}
            <section className=" lg:max-w-lg p-4 max-lg:hidden flex justify-center items-center">
                <Image
                    className="max-w-xl rounded-xl"
                    src={bgImg}
                    alt="Thomas Feeney"
                    priority={false}
                    height={700}
                    placeholder="blur"
                />
            </section>
        </main>
    );
};
export default Hero;
