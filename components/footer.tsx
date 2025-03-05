import Link from "next/link"
import { Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-violet-900 via-violet-800 to-violet-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold">
              CSBS Symposium
            </Link>
            <p className="text-base text-gray-200">
              Empowering Innovation and Business Acumen
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/cisbosium_25?igsh=N3FsaHJqaWQ5NTJ0" className="transform hover:scale-110 transition-transform duration-200">
                <span className="sr-only">Instagram</span>
                <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/rmkec-csbs-5a4471220/" className="transform hover:scale-110 transition-transform duration-200">
                <span className="sr-only">LinkedIn</span>
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-4">
              {["About", "Events", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-200">Contact Us</h3>
            <address className="not-italic space-y-2 text-gray-300">
              <p>R.S.M Nagar, Kavaraipettai, Gummidipoondi,</p>
              <p>Tamil Nadu 601 206</p>
              <p className="mt-4">Email: info@csbssymposium.com</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-violet-700/50 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; 2025 CSBS Symposium. All rights reserved. Organized by Department of Computer Science and Business Systems
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

