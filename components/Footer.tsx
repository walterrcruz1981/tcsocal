import Link from 'next/link'
import { FacebookIcon, InstagramIcon } from './Icons'

const Footer = () => {
  return (
    <footer className="bg-[#1a242e] text-white border-t border-[#2a3441]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
          <p className="text-xl uppercase">Ministering to the needs of the people</p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-bold mb-4">ABOUT</h4>
            <ul className="space-y-2">
              <li><Link href="/our-story" className="hover:text-gray-300 transition-colors">Our Story</Link></li>
              <li><Link href="/about" className="hover:text-gray-300 transition-colors">Leadership</Link></li>
              <li><Link href="/beliefs" className="hover:text-gray-300 transition-colors">What We Believe</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">CONNECT</h4>
            <ul className="space-y-2">
              <li><Link href="/connect" className="hover:text-gray-300 transition-colors">Get Connected</Link></li>
              <li><Link href="/groups" className="hover:text-gray-300 transition-colors">Small Groups</Link></li>
              <li><Link href="/serve" className="hover:text-gray-300 transition-colors">Serve</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li><Link href="/latest-message" className="hover:text-gray-300 transition-colors">Messages</Link></li>
              <li><Link href="/events" className="hover:text-gray-300 transition-colors">Events</Link></li>
              <li><Link href="/give" className="hover:text-gray-300 transition-colors">Give</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-4">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/tcsocal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                <FacebookIcon className="w-5 h-5" />
                Facebook
              </a>
              <a 
                href="https://instagram.com/tcsocal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                <InstagramIcon className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info & Copyright */}
        <div className="text-center border-t border-[#2a3441] pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-4 text-sm">
            <div className="flex items-center gap-4">
              <p>Service Times: Sunday: 9:00 AM, 11:00 AM & 5:00 PM</p>
            </div>
            <span className="hidden md:block">•</span>
            <div className="flex items-center gap-4">
              <p>Find Us Here: 2501 W 5th St, Santa Ana, CA 92703​</p>
            </div>
          </div>
          <p className="text-sm">Copyright © {new Date().getFullYear()} TC SoCal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 