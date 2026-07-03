import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-[#0b1120] py-24 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-10">
          I'm always open to internships, collaborations, and exciting AI projects.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="mailto:girigovind210@gmail.com"
            className="bg-cyan-500 px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://github.com/girigovind210"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/govindgiri2004"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;