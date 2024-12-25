import Image from "next/image";
import "../app/globals.css";
import { project_data } from "../project_data";

const Projects = () => {
    return (
        <main
            className="min-h-[calc(100svh-5.03rem)] lg:py-6 lg:px-20 p-1"
            id="projects"
        >
            <section className="flex items-center gap-4 pt-3 mb-4">
                <p className="text-xl lg:text-5xl font-medium">
                    Projects
                </p>
            </section>

            {/* Projects Section */}
            <section className=" flex justify-center items-center flex-col p-2 max-lg:gap-2 w-full">
                {project_data.map((e, index) => (
                    <section
                        className="card shadow-lg rounded-xl flex lg:flex-row flex-col  gap-4 mb-4 lg:w-full"
                        key={index}
                    >
                        {/* Image Section */}
                        <section className="p-1 lg:w-1/2 max-w-fit flex items-center">
                            <a
                                target="_blank"
                                rel="noreferrer" className="text-xl lg:text-2xl font-semibold"
                                href={e.live}
                            >
                                <Image
                                    className=" rounded-lg shadow-lg"
                                    src={`/projects/${e.image}`}
                                    alt={`${e.title} by Thomas Feeney`}
                                    priority={false}
                                    height={300}
                                    width={600}
                                    style={{
                                        width: "600px",
                                        height: "auto",
                                    }}
                                />
                            </a>
                        </section>

                        {/* Detail Section */}
                        <section className="p-1 py-4 lg:p-2 lg:py-6 gap-1 flex flex-col lg:w-2/3">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className="text-xl lg:text-4xl text-indigo-300"
                                href={e.live}
                            >{e.title}</a>
                            <h3 className="text-xl text-gray-500">{e.subtitle}</h3>
                            
                            {/* Project Description */}
                            <p className=" lg:text-lg text-gray-700 lg:p-2">
                                {e.description}
                            </p>
                            {/* Badges */}
                            <section className="p-2 flex max-w-fit flex-wrap gap-2">
                                {e.badges.map((badge, index) => (
                                    <span
                                        key={index}
                                        className="bg-green-100 text-green-800 text-xs lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded min-w-fit"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </section>
                        </section>
                        
                    </section>
                ))}
            </section>
        </main>
    );
};
export default Projects;
