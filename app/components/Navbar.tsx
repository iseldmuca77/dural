export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 p-6 px-58">
      <div className="container mx-auto flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md rounded-2xl py-3 px-2 shadow-lg">
        <div className="font-bold text-lg pl-8">ReBuild</div>

        <ul className="flex space-x-8 text-gray-700">
          <li>
            <a href="#home" className="hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-900">
              About us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-900">
              Services
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-gray-900">
              Project
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-900">
              Blog
            </a>
          </li>
          <li>
            <a href="#consultation" className="hover:text-gray-900">
              Consultation
            </a>
          </li>
        </ul>

        <button className="bg-primary text-black py-2 px-6 rounded-lg bg-yellow-500 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};