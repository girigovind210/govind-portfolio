import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Industrial Knowledge Intelligence Platform",
    image: "/projects/industrial.png",
    description:
      "AI-powered enterprise platform that transforms industrial documents into actionable insights using RAG, Knowledge Graphs, Multi-Agent AI, OCR, and Google Gemini.",
    tech: [
      "React",
      "TypeScript",
      "Express.js",
      "Gemini",
      "Neo4j",
      "Tailwind CSS",
    ],
    github: "https://github.com/girigovind210/Industrial-Asset-Brain",
    live: "https://industrial-asset-brain-31510399175.asia-southeast1.run.app/",
  },
  {
  title: "MedConnect",
  image: "/projects/medconnect.png",
  description:
    "Healthcare platform with authentication, patient dashboard, doctor dashboard, and appointment management.",
  tech: ["React", "Node.js", "Express.js", "MongoDB"],
  github: "https://github.com/girigovind210/frontend-medconnectG",
  live: "https://frontend-medconnectg-1.onrender.com/#/",
},
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mb-14">
          A selection of projects showcasing AI, Full Stack Development, and modern web technologies.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-semibold hover:bg-gray-200 hover:scale-105 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-xl font-semibold hover:bg-cyan-600 hover:scale-105 transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;