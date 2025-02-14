import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">About Me</h3>
            <p className="text-sm">
              I'm a passionate full-stack developer with a love for creating efficient, scalable, and user-friendly web
              applications. Always learning, always coding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Projects", "Skills", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-gray-800 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Get in Touch</h3>
            <p className="text-sm mb-4">Feel free to reach out for collaborations or just a friendly hello</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/mohdza-far/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size={24} color="blue"/>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/Mohdzafar1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <FaGithub size={24} color="black"/>
                <span className="sr-only">GitHub</span>
              </Link>
              
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

