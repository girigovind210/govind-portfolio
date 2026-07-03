import { FaGraduationCap, FaLaptopCode, FaRobot } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-[#0b1120] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-8">
          I'm <span className="text-cyan-400 font-semibold">Govind Sainath Giri</span>,
          a B.Tech Information Technology student at
          Ratan Tata Maharashtra State Skills University.
          I enjoy building AI-powered applications, Flutter apps,
          and solving real-world problems with technology.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-800 p-6 rounded-2xl">
            <FaGraduationCap className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold">Education</h3>
            <p className="text-gray-400 mt-2">
              B.Tech IT (2024–2028)
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <FaLaptopCode className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold">Development</h3>
            <p className="text-gray-400 mt-2">
              Flutter, React, Python & AI Projects
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <FaRobot className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold">AI Focus</h3>
            <p className="text-gray-400 mt-2">
              Machine Learning, Generative AI & RAG
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;