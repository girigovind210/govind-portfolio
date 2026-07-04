import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-slate-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Govind Giri
            </h2>

            <p className="text-gray-400 mt-2">
              AI Developer • Full Stack Developer • B.Tech IT Student
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">

            <a
              href="https://github.com/girigovind210"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/govindgiri2004"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:girigovind210@gmail.com"
              className="text-2xl hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-400">

          <p>
            Made with{" "}
            <FaHeart className="inline text-red-500 mx-1" />
            by <span className="text-cyan-400 font-semibold">Govind Giri</span>
          </p>

          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;