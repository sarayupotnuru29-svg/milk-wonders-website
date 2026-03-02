import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="gradient-green text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="MilkWonders" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-heading text-xl font-bold">MilkWonders</span>
          </div>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            Pure Love in Every Drop.<br />100% Farm Fresh Milk.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm">
            {["Fresh Milk", "Paneer", "Curd", "Ghee"].map((s) => (
              <li key={s}>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Delivery */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Delivery Timing</h4>
          <p className="text-sm text-primary-foreground/80 mb-1">🌅 Morning: 6AM – 8AM</p>
          <p className="text-sm text-primary-foreground/80 mb-4">🌆 Evening: 5PM – 9PM</p>
          <div className="space-y-2 text-sm text-primary-foreground/80">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> 7396304599</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> milkwonders36@gmail.com</p>
            <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Lunani Nagar, Eluru, AP 534005</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} MilkWonders. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
