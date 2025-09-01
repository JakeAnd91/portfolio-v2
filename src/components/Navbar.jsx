import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white shadow">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left: Logo / Brand */}
        <div className="text-2xl font-bold">
          Portfolio
        </div>

        {/* Center: Nav Links */}
        <div className="flex space-x-8">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/portfolio" className="hover:text-gray-300 transition">
            Code
          </Link>
          <Link to="/art" className="hover:text-gray-300 transition">
            Art
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>

        {/* Right: Call-to-action / Login */}
        <div>
          <Link
            to="/login"
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900 transition"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
}
