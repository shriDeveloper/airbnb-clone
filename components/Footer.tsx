import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

type FooterSection = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

const footerSections: FooterSection[] = [
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Safety Information', href: '/safety' },
      { label: 'Cancellation Options', href: '/cancellation' },
      { label: 'COVID-19 Resources', href: '/covid' },
      { label: 'Report a Concern', href: '/report' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Diversity & Inclusion', href: '/diversity' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Referrals', href: '/referrals' },
      { label: 'Gift Cards', href: '/gift-cards' },
      { label: 'Forum', href: '/forum' },
    ],
  },
  {
    title: 'Hosting',
    links: [
      { label: 'Airbnb Your Home', href: '/host' },
      { label: 'Host Resources', href: '/host/resources' },
      { label: 'Community Forum', href: '/host/forum' },
      { label: 'Hosting Responsibly', href: '/host/responsible' },
      { label: 'Host Protection', href: '/host/protection' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Newsroom', href: '/newsroom' },
      { label: 'Careers', href: '/careers' },
      { label: 'Investors', href: '/investors' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© 2023 Airbnb Clone, Inc.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                Terms
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-600 hover:text-gray-900">
                Sitemap
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://facebook.com" className="text-gray-500 hover:text-gray-700" aria-label="Facebook">
              <Facebook size={20} />
            </Link>
            <Link href="https://twitter.com" className="text-gray-500 hover:text-gray-700" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
            <Link href="https://instagram.com" className="text-gray-500 hover:text-gray-700" aria-label="Instagram">
              <Instagram size={20} />
            </Link>
            <Link href="https://youtube.com" className="text-gray-500 hover:text-gray-700" aria-label="YouTube">
              <Youtube size={20} />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-500 hover:text-gray-700" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 