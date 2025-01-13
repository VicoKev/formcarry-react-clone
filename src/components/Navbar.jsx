import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const navWebLinks = [
    { href: "#", text: "Examples" },
    { href: "#", text: "Form Generator" },
    { href: "#", text: "Integrations" },
    { href: "#", text: "Docs" },
    { href: "#", text: "Pricing" },
  ];

  const navMobLinks = [
    { href: "#", text: "Docs" },
    { href: "#", text: "Integrations" },
    { href: "#", text: "Blog" },
    { href: "#", text: "Pricing" },
  ];

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si on scrolle vers le bas, masquer la navbar. Sinon, la réafficher.
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 py-8 bg-white mt-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full max-w-[1120px] mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <img className="h-8" src={logo} alt="Formcarry Logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navWebLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-gray-600 hover:bg-[#f3f5fb] transition-colors duration-200 rounded-full text-sm"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="/login"
              className="px-4 py-2 text-gray-600 hover:bg-[#f3f5fb] transition-colors duration-200 rounded-full text-sm"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 text-[#171531] bg-[#f3f5fb] rounded-full text-sm font-semibold"
            >
              Sign up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleNavbar}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 top-[72px] bg-white z-50 lg:hidden mt-4">
            <div className="flex flex-col p-6">
              {navMobLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#6c6f93] hover:text-gray-900 py-4 text-4xl font-medium transition-colors duration-200"
                >
                  {link.text}
                </a>
              ))}
              <div className="flex flex-col space-y-3 mt-8">
                <a
                  href="/login"
                  className="w-full py-3 text-center text-gray-600 hover:text-gray-900 rounded-full border border-gray-200 transition-colors duration-200"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="w-full py-3 text-center text-white bg-[#171531] rounded-full hover:bg-[#535479] transition-colors duration-200"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;