import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Listings", href: "#listings" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Buy a Home", href: "#" },
    { label: "Sell a Home", href: "#" },
    { label: "Property Management", href: "#" },
    { label: "Investment Properties", href: "#" },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl text-orange-500 mb-4">
              DreamHome Realty
            </h3>
            <p className="text-muted-foreground mb-4">
              Your trusted partner in finding the perfect home. We make real
              estate dreams come true.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-orange-500 hover:opacity-80 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-orange-500 transition-colors duration-300"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Contact Info</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-orange-500" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-orange-500" />
                <span>info@dreamhomerealty.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-orange-500" />
                <span>
                  123 Main Street
                  <br />
                  Beverly Hills, CA 90210
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 DreamHome Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
