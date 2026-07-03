function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#050816]/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-cyan-400">
          Govind Giri
        </h1>

        <ul className="hidden md:flex gap-8">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;