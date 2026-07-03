import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Industrial Knowledge Intelligence Platform",
    description:
      "AI-powered enterprise platform that transforms industrial documents into actionable insights using RAG, Knowledge Graphs, Multi-Agent AI, and Google Gemini.",
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
    description:
      "Healthcare platform with authentication, patient & doctor dashboard, and appointment management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/girigovind210/frontend-medconnectG",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-[#050816] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200"
                >
                  <FaGithub />
                  GitHub
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-lg font-medium hover:bg-cyan-600"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;