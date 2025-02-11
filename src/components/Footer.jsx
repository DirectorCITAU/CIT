// src/components/Footer.jsx
import universitylogo from '../assets/logo.webp';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

function Footer() {
  return (
    <footer
      className="bg-[#022830] p-6 sm:p-8"
      style={{
        background: "linear-gradient(to right, #1b263b, #1e3c72, #121212)",
      }}
    >
      <div className="container mx-auto lg:px-10 max-w-screen-xl overflow-x-hidden">
        <div className="md:flex md:justify-between items-center">
          {/* Logo and Title */}
          <div className="mb-6 md:mb-0 flex items-center justify-center sm:justify-start">
            <img
              src={universitylogo}
              className="h-16 w-auto mr-4"
              alt="Anna University"
            />
            <span className="text-2xl font-semibold text-white">
              ANNA UNIVERSITY
            </span>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 text-white">
            {/* Quick Links 1 */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Quick Links</h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-2">
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/team" className="hover:text-white">
                    Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Quick Links</h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-2">
                  <a href="/project" className="hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Contact Us</h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-2 flex items-center">
                  <FiMail className="mr-2" />
                  <a
                    href="mailto:directorcit2023@gmail.com"
                    className="hover:text-white truncate"
                  >
                    directorcit2023@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FiPhoneCall className="mr-2" />
                  <a href="tel:04422357791" className="hover:text-white">
                    044 2235 7791
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
