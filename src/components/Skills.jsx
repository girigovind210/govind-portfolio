import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiGooglecloud,
  SiNeo4J,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-300" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress size={40} className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" /> },
  { name: "Python", icon: <FaPython size={40} className="text-blue-400" /> },
  { name: "Google Gemini", icon: <SiGooglecloud size={40} className="text-orange-400" /> },
  { name: "Neo4j", icon: <SiNeo4J size={40} className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub size={40} className="text-white" /> },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#0b1120] py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 text-center border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>

              <h3 className="font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;