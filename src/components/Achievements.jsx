import {
  FaRobot,
  FaGlobe,
  FaCode,
  FaAward,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaRobot size={35} className="text-cyan-400" />,
    title: "Industrial AI Platform",
    desc: "Built an enterprise AI platform using RAG, Knowledge Graphs, OCR and Google Gemini.",
  },
  {
    icon: <FaLaptopCode size={35} className="text-green-400" />,
    title: "Full Stack Projects",
    desc: "Developed AI-powered and healthcare web applications using React, Node.js and MongoDB.",
  },
  {
    icon: <FaGlobe size={35} className="text-blue-400" />,
    title: "Portfolio Website",
    desc: "Designed and deployed a responsive personal portfolio using React and Vercel.",
  },
  {
    icon: <FaAward size={35} className="text-yellow-400" />,
    title: "AI Certifications",
    desc: "Completed AWS Cloud, Deloitte Data Analytics, SAP ABAP and AICTE certifications.",
  },
  {
    icon: <FaCode size={35} className="text-purple-400" />,
    title: "AI Hackathons",
    desc: "Actively participated in AI hackathons and real-world software development challenges.",
  },
  {
    icon: <FaGraduationCap size={35} className="text-pink-400" />,
    title: "B.Tech IT",
    desc: "Currently pursuing B.Tech in Information Technology (2025–2028).",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-[#0B1120] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-4">
          Achievements
        </h2>

        <p className="text-center text-gray-400 mb-14">
          My journey, achievements and technical milestones.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl border border-slate-700 p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;