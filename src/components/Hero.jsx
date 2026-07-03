import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <div>
          <p className="text-cyan-400 text-lg mb-2">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Govind <span className="text-cyan-400">Giri</span>
          </h1>

          <div className="text-2xl md:text-3xl text-purple-400 mt-5 font-semibold">
            <TypeAnimation
              sequence={[
                "AI Developer",
                2000,
                "Full Stack Developer",
                2000,
                "Machine Learning Enthusiast",
                2000,
                "Generative AI Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-300 mt-6 max-w-xl text-lg leading-8">
            Passionate Information Technology student building AI-powered
            applications, Full Stack web solutions, and intelligent systems
            that solve real-world problems using modern technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-cyan-500 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-xl font-semibold transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Govind Giri"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;