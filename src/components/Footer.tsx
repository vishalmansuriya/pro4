import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Building2, MapPin, Mail, Phone, Linkedin, MessageSquare, Rss } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/alumni" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">
                  Job Board
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="text-gray-300 hover:text-white transition-colors">
                  Mentorship Program
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-gray-300 hover:text-white transition-colors">
                  Make a Donation
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </li>
              <li className="flex items-center text-gray-300">
                <MessageSquare className="h-4 w-4 mr-2" />
                Newsletter
              </li>
              <li className="flex items-center text-gray-300">
                <MessageSquare className="h-4 w-4 mr-2" />
                Podcast
              </li>
              <li className="flex items-center text-gray-300">
                <Rss className="h-4 w-4 mr-2" />
                Tech Blog
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                123 University Ave, City, State 12345
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                alumni@university.edu
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                (123) 456-7890
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <Building2 className="h-3 w-3 text-gray-400 absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">NEXUS</span>
                <div className="text-gray-400 text-xs -mt-1">Alumni Network</div>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 NEXUS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;