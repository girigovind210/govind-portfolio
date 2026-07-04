function Github() {
  return (
    <section
      id="github"
      className="bg-[#050816] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">
          GitHub Statistics
        </h2>

        <div className="flex flex-col items-center gap-8">

          {/* GitHub Stats */}
          <img
            src="https://github-readme-stats.vercel.app/api?username=girigovind210&show_icons=true&theme=tokyonight&hide_border=true&cache_seconds=1800"
            alt="GitHub Stats"
            className="w-full max-w-2xl rounded-xl shadow-xl"
          />

          {/* GitHub Streak */}
          <img
            src="https://streak-stats.demolab.com?user=girigovind210&theme=tokyonight&hide_border=true"
            alt="GitHub Streak"
            className="w-full max-w-2xl rounded-xl shadow-xl"
          />

          {/* Top Languages */}
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=girigovind210&layout=compact&theme=tokyonight&hide_border=true&cache_seconds=1800"
            alt="Top Languages"
            className="w-full max-w-xl rounded-xl shadow-xl"
          />

        </div>
      </div>
    </section>
  );
}

export default Github;