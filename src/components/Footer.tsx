import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Ticket,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-white/10 z-40">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full 2xl:w-8/12 xl:w-9/12 lg:w-11/12">
        {/* Ticket Purchase Banner */}
        <div className="mb-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl sm:text-lg font-bold text-heat-pink mb-2">
              Ready to Experience HEAT?
            </h3>
            <p className="text-white text-md">
              Secure your spot at the ultimate boiler room event
            </p>
          </div>
          <a
            href="https://heatboilerroom.eventsquare.store/nl/oqs4qgra3oo1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-3 text-md sm:text-xs font-medium text-white bg-heat-pink rounded hover:bg-white hover:text-heat-pink transition-colors"
          >
            <Ticket className="w-5 h-5 mr-2 " />
            Buy Tickets Now
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="block mb-4">
              <img
                src="/images/HEAT_logo_nottrans.jpg"
                alt="HEAT"
                className="h-16 w-20 object-contain"
              />
            </Link>
            
            <div className="flex space-x-4">
              <a
                target='_blank'
                href="https://www.facebook.com/events/1340066513673879"
                className="text-gray-400 hover:text-heat-pink transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                target='_blank'
                href="https://www.instagram.com/heat.boiler/"
                className="text-gray-400 hover:text-heat-pink transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                target='_blank'
                href="https://www.youtube.com/watch?v=24py2CSvqtM"
                className="text-gray-400 hover:text-heat-pink transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                target='_blank'
                href="https://www.tiktok.com/@heat_boiler?fbclid=IwY2xjawG7GetleHRuA2FlbQIxMAABHSmSCRuQ1BtIbkGi2fflMkMrJGE2LywBo5LEmzFOx9iSENCDZklDynhQZQ_aem_JXgiI7xbdnTBMo3_D3yAzw"
                className="text-gray-400 hover:text-heat-pink transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.17-2.39V11.9a6.37 6.37 0 00-1.02-.08c-3.41 0-6.17 2.73-6.17 6.09s2.76 6.09 6.17 6.09c3.41 0 6.17-2.73 6.17-6.09V8.75c1.09.93 2.43 1.5 3.87 1.5h.82V6.69h-.82z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-heat-pink">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-heat-pink transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/program"
                  className="text-gray-400 hover:text-heat-pink transition-colors"
                >
                  Line-up
                </Link>
              </li>
              <li>
                <Link
                  to="/more"
                  className="text-gray-400 hover:text-heat-pink transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/dj-contest"
                  className="text-gray-400 hover:text-heat-pink transition-colors"
                >
                  DJ Contest
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-heat-pink">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@heat-event.com"
                  className="text-gray-400 hover:text-heat-pink transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@heatboiler.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section - Full Width */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6 text-heat-pink ">Partners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 ">
            <div className="flex place-items-start  sm:justify-center">
              <img
                src="/images/Partners/Alphatheta_logo2.png" 
                alt="AlphaTheta"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="flex place-items-start  sm:justify-center">
              <img
                src="/images/Partners/Pioneer_logo_wit.png" 
                alt="Pioneer"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="flex place-items-start  sm:justify-center">
              <img
                src="/images/Partners/Pro_gear_logo_wit.png" 
                alt="Pro Gear"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="flex place-items-start  sm:justify-center">
              <img
                src="/images/Partners/Bonfire_club_logo_wit.png" 
                alt="Bonfire club"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} HEAT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;