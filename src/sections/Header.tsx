export const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-md">
        <a href="#" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </header>
  );
};
