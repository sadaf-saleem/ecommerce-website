import { Link } from 'react-router';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

export function Footer() {
  const countries = [
    { name: 'Denmark', flag: '🇩🇰', domain: 'denmark.com.dk' },
    { name: 'France', flag: '🇫🇷', domain: 'shopname.com.fr' },
    { name: 'Arabic Emirates', flag: '🇦🇪', domain: 'shopname.ae' },
    { name: 'China', flag: '🇨🇳', domain: 'shopname.cn' },
    { name: 'Great Britain', flag: '🇬🇧', domain: 'shopname.co.uk' },
  ];

  return (
    <footer className="bg-white border-t">
      {/* Countries Bar */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 justify-center">
            {countries.map((country) => (
              <div key={country.name} className="flex items-center space-x-2">
                <span className="text-2xl">{country.flag}</span>
                <div className="text-sm">
                  <div>{country.name}</div>
                  <div className="text-gray-500">{country.domain}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl mb-3">Subscribe on our newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="email"
                placeholder="Email"
                className="pl-10"
              />
            </div>
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">B</span>
              </div>
              <span className="text-xl text-blue-500">Brand</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Best information about the company goes here but now lorem ipsum is
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-gray-900">About Us</Link></li>
              <li><Link to="/stores" className="hover:text-gray-900">Find store</Link></li>
              <li><Link to="/categories" className="hover:text-gray-900">Categories</Link></li>
              <li><Link to="/blog" className="hover:text-gray-900">Blogs</Link></li>
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="mb-4">Partnership</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-gray-900">About Us</Link></li>
              <li><Link to="/stores" className="hover:text-gray-900">Find store</Link></li>
              <li><Link to="/categories" className="hover:text-gray-900">Categories</Link></li>
              <li><Link to="/blog" className="hover:text-gray-900">Blogs</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/help" className="hover:text-gray-900">Help Center</Link></li>
              <li><Link to="/refund" className="hover:text-gray-900">Money Refund</Link></li>
              <li><Link to="/shipping" className="hover:text-gray-900">Shipping</Link></li>
              <li><Link to="/contact" className="hover:text-gray-900">Contact us</Link></li>
            </ul>
          </div>

          {/* For users */}
          <div>
            <h3 className="mb-4">For users</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/login" className="hover:text-gray-900">Login</Link></li>
              <li><Link to="/register" className="hover:text-gray-900">Register</Link></li>
              <li><Link to="/profile" className="hover:text-gray-900">Settings</Link></li>
              <li><Link to="/profile" className="hover:text-gray-900">My Orders</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-gray-600">
            © 2024 Ecommerce. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
