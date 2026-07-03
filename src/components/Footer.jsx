import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-slate-800 py-8 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-cyan-400">
            Govind Giri
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            AI Developer • Full Stack Developer • B.Tech IT Student
          </p>
        </div>

        <div className="flex gap-5 mt-5 md:mt-0">

          <a
            href="https://github.com/girigovind210"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/govindgiri2004"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin size={24} />
          </a>

        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        Made with <FaHeart className="inline text-red-500" /> by Govind Giri
        <br />
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;