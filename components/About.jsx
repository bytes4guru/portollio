import { FaAngular, FaTelegram, FaSkype, FaReact, FaVuejs, FaEthereum } from "react-icons/fa";
import { RiLinkedinFill, RiNftFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiAmazonaws, SiBlockchaindotcom, SiFlux, SiHiveBlockchain, SiMicrosoftazure, SiMicrosoftsqlserver, SiMui, SiMysql, SiNestjs, SiNextdotjs, SiRedux, SiRubyonrails, SiSolidity, SiWeb3Dotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { DiDigitalOcean, DiDjango, DiDotnet, DiFirebase, DiGoogleCloudPlatform, DiLaravel, DiMysql, DiNodejs, DiPostgresql, DiReact } from 'react-icons/di'
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
                                    <td className="w-1/6">
                                        <div className="flex justify-center"><DiDotnet size={60} className="text-dotnet" /></div>
                                    </td>
                                    <td className="w-1/6">
                                        <div className="flex justify-center"><DiDjango size={60} className="text-django" /></div>
                                    </td>
                                    <td className="w-1/6">
                                        <div className="flex justify-center">
                                            <SiNextdotjs size={40} className="text-nextjs" />
                                        </div>
                                    </td>
                                    <td className="w-1/6">
                                        <div className="flex justify-center"><FaNodeJs size={45} className="text-nodejs" /></div>
                                    </td>
                                    <td className="w-1/6">
                                        <div className="flex justify-center"><DiLaravel size={60} className="text-laravel" /></div></td>
                                    <td className="w-1/6"><div className="flex justify-center"><SiRubyonrails size={60} className="text-ror" /></div></td>
                                </tr>
                                <tr>
                                    <td className="text-center text-dotnet">ASP.Net</td>
                                    <td className="text-center text-django">Django</td>
                                    <td className="text-center text-nextjs">Next.jS</td>
                                    <td className="text-center text-nodejs">Node.js</td>
                                    <td className="text-center text-laravel">Laravel</td>
                                    <td className="text-center text-ror">RoR</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>
                    <section className="p-2 flex gap-6 justify-center flex-wrap h-1/3 text-lg">
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="w-1/4">
                                        <div className="flex justify-center"><FaEthereum size={60} className="text-dotnet" /></div>
                                    </td>
                                    <td className="w-1/4">
                                        <div className="flex justify-center"><SiSolidity size={60} className="text-django" /></div>
                                    </td>
                                    <td className="w-1/4">
                                        <div className="flex justify-center">
                                            <SiWeb3Dotjs size={40} className="text-nextjs" />
                                        </div>
                                    </td>
                                    <td className="w-1/4">
                                        <div className="flex justify-center"><RiNftFill size={45} className="text-nodejs" /></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center text-dotnet">Ethereum</td>
                                    <td className="text-center text-django">Solidity</td>
                                    <td className="text-center text-nextjs">Web3</td>
                                    <td className="text-center text-nodejs">NFT</td>
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
                                        <div className="flex justify-center"><FaReact size={60} className="text-react" /></div>
                                    </td>

                                    <td className="w-1/5"><div className="flex justify-center"><FaVuejs size={60} className="text-vue" /></div></td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><FaAngular size={60} className="text-angular" /></div>
                                    </td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><SiFlux size={60} className="text-flux" /></div>
                                    </td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><SiMui size={45} className="text-mui" /></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center text-react">React</td>
                                    <td className="text-center text-vue">Vue</td>
                                    <td className="text-center text-angular">Angular</td>
                                    <td className="text-center text-flux">Flux</td>
                                    <td className="text-center text-mui">MUI</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="p-2 flex gap-6 justify-center flex-wrap h-1/3 text-lg">
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><SiMicrosoftsqlserver size={45} className="text-mssql" /></div>
                                    </td>
                                    <td className="w-1/5"><div className="flex justify-center"><DiPostgresql size={60} className="text-postgresql" /></div></td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><DiMysql size={60} className="text-mysql" /></div>
                                    </td>


                                    <td className="w-1/5">
                                        <div className="flex justify-center"><SiMongodb size={60} className="text-mongodb" /></div>
                                    </td>
                                    <td className="w-1/5">
                                        <div className="flex justify-center"><DiFirebase size={60} className="text-firebase" /></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center text-mssql">MsSQL</td>
                                    <td className="text-center text-postgresql">Postgres</td>
                                    <td className="text-center text-mysql">MySQL</td>
                                    <td className="text-center text-mongodb">MongoDB</td>
                                    <td className="text-center text-firebase">Firebase</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="p-2 flex gap-6 justify-center flex-wrap h-1/3 text-lg">
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="w-1/4">
                                        <div className="flex justify-center"><SiAmazonaws size={45} className="text-aws" /></div>
                                    </td>
                                    <td className="w-1/4"><div className="flex justify-center"><DiGoogleCloudPlatform size={60} className="text-gcp" /></div></td>
                                    <td className="w-1/4">
                                        <div className="flex justify-center"><SiMicrosoftazure size={45} className="text-azure" /></div>
                                    </td>
                                    <td className="w-1/4">
                                        <div className="flex justify-center"><DiDigitalOcean size={72} className="text-digitalocean" /></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center text-aws">AWS</td>
                                    <td className="text-center text-gcp">GCP</td>
                                    <td className="text-center text-azure">Azure</td>
                                    <td className="text-center text-digitalocean">DigitalOcean</td>
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
                    <div className="lg:text-xl text-lg text-gray-700 font-normal">
                    <ul className="space-y-4 text-lg">
                        <li><strong className="font-semibold">Quality-Driven:</strong> Committed to delivering high-performance, reliable, and sustainable software solutions through rigorous testing and best practices.</li>
                        <li><strong className="font-semibold">Experienced Professional:</strong> Over 10 years in software engineering, with a focus on full-stack development and building scalable systems.</li>
                        <li><strong className="font-semibold">Standards-Focused:</strong> Expertise in clean code principles, design patterns, and building robust architectures to ensure long-term success.</li>
                        <li><strong className="font-semibold">Technology Expertise:</strong> Skilled in Python, JavaScript, React, Django, ASP.NET, Node.js, and cloud technologies like AWS, Azure, and GCP.</li>
                        <li><strong className="font-semibold">Testing Advocate:</strong> Proficient in unit, integration, and automated testing to ensure flawless application performance.</li>
                        <li><strong className="font-semibold">Collaborative Leader:</strong> Strong team-oriented mindset, mentoring others while promoting continuous learning and improvement.</li>
                        <li><strong className="font-semibold">Customer-Focused:</strong> Passionate about delivering solutions that not only meet user requirements but also surpass expectations in quality.</li>
                    </ul>
                    </div>
                    <section className="flex max-md:flex-col gap-6 items-center mt-4">
                        {/* Social Media Icons */}
                        <section className="flex items-center gap-4">
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
