import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 text-lg mb-2">👋 Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Govind <span className="text-cyan-400">Giri</span>
          </h1>

          <div className="text-2xl md:text-3xl text-purple-400 mt-5 font-semibold">
            <TypeAnimation
              sequence={[
                "AI Developer",
                2000,
                "Flutter Developer",
                2000,
                "Machine Learning Enthusiast",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-300 mt-6 max-w-xl text-lg">
            Passionate IT student building AI-powered applications,
            Flutter apps and intelligent solutions that solve real-world
            problems.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition">
              View Projects
            </button>

            <button className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-xl transition">
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
         <img
  src="/profile.jpg"
  alt="Govind Giri"
  className="w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
/>
        </div>

      </div>
    </section>
  );
}

export default Hero;