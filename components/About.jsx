import { FaAngular, FaInstagram, FaReact, FaVuejs } from "react-icons/fa";
import { RiJavascriptFill, RiLinkedinFill } from "react-icons/ri";
import { FaNodeJs, FaMicrosoft } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiFlux, SiMicrosoftsqlserver, SiMui, SiMysql, SiNestjs, SiRedux, SiRubyonrails } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { DiDjango, DiDotnet, DiFirebase, DiLaravel, DiNodejs, DiPostgresql, DiReact } from 'react-icons/di'
import "../app/globals.css";
import Link from "next/link";

const About = () => {
    return (
        <main
            className="min-h-[calc(100svh-5.03rem)] lg:py-6 lg:px-20 p-1 justify-between items-center"
            id="about"
        >
            <section className="flex items-center gap-4 pt-3">
                <p className="text-xl lg:text-5xl font-medium">
                    About Me
                </p>
            </section>

            <section className="flex flex-col-reverse lg:flex-row gap-6 mt-6">
                {/* left Section */}

                <section className="w-full p-2 rounded-xl shadow-sm flex  flex-col max-md:gap-6 card px-10 py-8">
                    <section className="flex items-center gap-4 h-1/5 ">
                        <p className="text-xl lg:text-3xl font-medium mb-4">
                            My Skills
                        </p>
                    </section>
                    {/* <section className="text-xl font-semibold p-2">Frontend</section> */}
                    <section className="p-2 flex gap-6 justify-center flex-wrap h-1/3 text-lg">
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><DiDotnet size={60} /></div>
                                    </td>
                                    <td className="w-1/5"><div className="flex justify-center"><DiDjango size={60} /></div></td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center">
                                            <svg
                                                width="50px"
                                                height="50px"
                                                viewBox="0 0 256 256"
                                                preserveAspectRatio="xMidYMid"
                                            >
                                                <g>
                                                    <path
                                                        d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                                                        fill="#000000"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><FaNodeJs size={45} className=" text-green-500" /></div>
                                    </td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><DiLaravel size={60} className=" text-green-500" /></div></td>
                                    <td className="w-1/5"><div className="flex justify-center"><SiRubyonrails size={60} /></div></td>
                                </tr>
                                <tr>
                                    <td className="text-center">ASP.Net</td>
                                    <td className="text-center">Django</td>
                                    <td className="text-center">Next JS</td>
                                    <td className="text-center">Node Js</td>
                                    <td className="text-center">Laravel</td>
                                    <td className="text-center">RoR</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>
                    {/* <section className="text-xl font-semibold p-2">Backend</section> */}
                    <section className="p-2 flex gap-6 justify-center flex-wrap h-1/3 text-lg">
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><FaReact size={60} /></div>
                                    </td>

                                    <td className="w-1/5"><div className="flex justify-center"><FaVuejs size={60} /></div></td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><FaAngular size={45} className=" text-green-500" /></div>
                                    </td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><SiFlux size={60} /></div>
                                    </td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><SiMui size={60} /></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">React</td>
                                    <td className="text-center">Vue</td>
                                    <td className="text-center">Angular</td>
                                    <td className="text-center">Flux</td>
                                    <td className="text-center">MUI</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="p-2 flex gap-6 justify-center flex-wrap h-1/3 text-lg">
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><SiMicrosoftsqlserver size={45} className=" text-green-500" /></div>
                                    </td>
                                    <td className="w-1/5"><div className="flex justify-center"><DiPostgresql size={60} /></div></td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><SiMysql size={60} /></div>
                                    </td>


                                    <td className="w-1/5">
                                        <div className="flex justify-center"><SiMongodb size={60} /></div>
                                    </td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><DiFirebase size={60} /></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">MsSQL</td>

                                    <td className="text-center">PostgresSQL</td>
                                    <td className="text-center">MySQL</td>
                                    <td className="text-center">MongoDB</td>
                                    <td className="text-center">Firebase</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </section>

                {/* Right Section */}
                <section className="w-full p-2 rounded-xl shadow-sm flex  flex-col max-md:gap-6 card px-10 py-8">
                    <section className="flex items-center gap-4 ">
                        <p className="text-xl lg:text-3xl font-medium mb-4">
                            More about Me
                        </p>
                    </section>
                    <p className="lg:text-xl text-lg text-gray-700 font-normal">
                        With over 10 years of experience, I specialize in delivering comprehensive, end-to-end full stack solutions, as well as AI model creation and seamless cloud platform integration. I have successfully executed 16+ complex projects, including AI-driven applications, big data solutions, and scalable web systems. Skilled in leveraging AWS, Azure, and Google Cloud to build high-performance, reliable applications that drive business success.
                    </p>
                    <section className="flex max-md:flex-col gap-6 md:items-center">
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
                            <Link href="mailto:thomas-feeney117@gmail.com">
                                <button
                                    className="flex items-center px-3 py-2 bg-emerald-700 hover:bg-emerald-800  rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
                                    aria-label="Contact Button"
                                >
                                    <IoIosMail size={24} />
                                    <span className="ml-1.5 md:text-lg">Contact</span>
                                </button>
                            </Link>
                        </section>
                    </section>
                </section>
            </section>
        </main>
    );
};
export default About;
