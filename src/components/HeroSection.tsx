import { Link } from 'react-router';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ChevronRight } from 'lucide-react';

const categories = [
  'Automobiles',
  'Clothes and wear',
  'Home interiors',
  'Computer and tech',
  'Tools, equipments',
  'Sports and outdoor',
  'Animal and pets',
  'Machinery tools',
  'More category',
];

export function HeroSection() {
  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-2 hidden lg:block">
            <Card className="p-0 overflow-hidden">
              <nav className="py-2">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/products?category=${category}`}
                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors text-sm"
                  >
                    <span className="text-gray-700">{category}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </nav>
            </Card>
          </div>

          {/* Center - Hero Banner */}
          <div className="lg:col-span-7">
            <Card className="overflow-hidden bg-gradient-to-br from-teal-300 to-teal-400 h-full">
              <div className="flex items-center h-full min-h-[300px] lg:min-h-[400px]">
                <div className="p-8 lg:p-12 flex-1">
                  <h2 className="text-2xl lg:text-3xl mb-2">Latest trending</h2>
                  <h1 className="text-3xl lg:text-4xl mb-6">Electronic items</h1>
                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/products">Learn more</Link>
                  </Button>
                </div>
                <div className="hidden md:block flex-1 h-full">
                  <img
                    src="https://images.unsplash.com/photo-1555960840-b1b7fcbec685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBoZWFkcGhvbmVzJTIwZGVza3xlbnwxfHx8fDE3NjQxODE4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Electronics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Sidebar - User Actions */}
          <div className="lg:col-span-3 space-y-4">
            {!false && (
              <Card className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Hi, user</p>
                    <p className="font-medium">let's get started</p>
                  </div>
                </div>
                <Link to="/register" className="block">
                  <Button className="w-full mb-2">Join now</Button>
                </Link>
                <Link to="/login" className="block">
                  <Button variant="outline" className="w-full">Log in</Button>
                </Link>
              </Card>
            )}

            <Card className="p-6 bg-orange-500 text-white">
              <h3 className="mb-2">Get US $10 off</h3>
              <p className="text-sm opacity-90">with a new supplier</p>
            </Card>

            <Card className="p-6 bg-teal-500 text-white">
              <h3 className="mb-1">Send quotes with</h3>
              <p className="text-sm opacity-90">supplier preferences</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
