import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Virtual Property Tours</h3>
            <p className="text-gray-400 mb-4">
              Explore properties virtually from the comfort of your home. We provide immersive 360° tours of premium
              properties.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/properties">Properties</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-xl font-bold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Houses</FooterLink>
              <FooterLink href="#">Apartments</FooterLink>
              <FooterLink href="#">Condos</FooterLink>
              <FooterLink href="#">Townhouses</FooterLink>
              <FooterLink href="#">Commercial</FooterLink>
              <FooterLink href="#">Land</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-emerald-500 mt-0.5" />
                <span className="text-gray-400">
                  123 Real Estate Avenue
                  <br />
                  Los Angeles, CA 90001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-emerald-500" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-emerald-500" />
                <span className="text-gray-400">info@virtualpropertytours.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Virtual Property Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-emerald-500 transition-colors">
        {children}
      </Link>
    </li>
  )
}
