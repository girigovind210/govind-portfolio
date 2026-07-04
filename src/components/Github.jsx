function Github() {
  return (
    <section className="bg-[#050816] py-20 text-center" id="github">
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        GitHub Statistics
      </h2>

      <div className="flex flex-col items-center gap-6">
        <img
          src="https://github-readme-stats.vercel.app/api?username=girigovind210&show_icons=true&theme=tokyonight&hide_border=true"
          alt="GitHub Stats"
        />

        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=girigovind210&theme=tokyonight&hide_border=true"
          alt="GitHub Streak"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=girigovind210&layout=compact&theme=tokyonight&hide_border=true"
          alt="Top Languages"
        />
      </div>
    </section>
  );
}

export default Github;