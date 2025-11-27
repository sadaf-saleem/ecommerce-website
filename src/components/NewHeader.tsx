import { Link, useNavigate } from 'react-router';
import { ShoppingCart, User, MessageSquare, Package, Search, Menu, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function NewHeader() {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}&category=${category}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Header */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">B</span>
              </div>
              <span className="text-xl text-blue-500 hidden sm:block">Brand</span>
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4 md:mx-8">
              <div className="flex">
                <Input
                  type="search"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none border-r-0"
                />
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-[140px] rounded-none border-x-0 hidden sm:flex">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All category</SelectItem>
                    <SelectItem value="Clothing">Clothing</SelectItem>
                    <SelectItem value="Shoes">Shoes</SelectItem>
                    <SelectItem value="Accessories">Accessories</SelectItem>
                    <SelectItem value="Outerwear">Outerwear</SelectItem>
                  </SelectContent>
                </Select>
                <Button type="submit" className="rounded-l-none">
                  Search
                </Button>
              </div>
            </form>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex-col h-auto py-1 px-2">
                      <User className="w-5 h-5 mb-1" />
                      <span className="text-xs hidden sm:block">Profile</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="text-red-600">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="flex-col h-auto py-1 px-2">
                    <User className="w-5 h-5 mb-1" />
                    <span className="text-xs hidden sm:block">Profile</span>
                  </Button>
                </Link>
              )}

              <Button variant="ghost" size="sm" className="flex-col h-auto py-1 px-2 hidden md:flex">
                <MessageSquare className="w-5 h-5 mb-1" />
                <span className="text-xs">Message</span>
              </Button>

              <Link to="/profile">
                <Button variant="ghost" size="sm" className="flex-col h-auto py-1 px-2 hidden md:flex">
                  <Package className="w-5 h-5 mb-1" />
                  <span className="text-xs">Orders</span>
                </Button>
              </Link>

              <Link to="/cart" className="relative">
                <Button variant="ghost" size="sm" className="flex-col h-auto py-1 px-2">
                  <ShoppingCart className="w-5 h-5 mb-1" />
                  <span className="text-xs hidden sm:block">My cart</span>
                  {getTotalItems() > 0 && (
                    <Badge className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center p-0 text-xs">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-1 h-12 overflow-x-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="shrink-0">
                  <Menu className="w-4 h-4 mr-2" />
                  All category
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/products?category=Clothing">Clothing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products?category=Shoes">Shoes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products?category=Accessories">Accessories</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products?category=Outerwear">Outerwear</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/products">
              <Button variant="ghost" size="sm" className="shrink-0">
                Hot offers
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="shrink-0">
              Gift boxes
            </Button>
            <Link to="/products">
              <Button variant="ghost" size="sm" className="shrink-0">
                Projects
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="shrink-0">
              Menu item
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="shrink-0">
                  Help
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Help Center</DropdownMenuItem>
                <DropdownMenuItem>Contact Us</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex-1" />

            <div className="flex items-center space-x-2 text-sm shrink-0">
              <Select defaultValue="en-usd">
                <SelectTrigger className="w-[120px] h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-usd">English, USD</SelectItem>
                  <SelectItem value="en-eur">English, EUR</SelectItem>
                  <SelectItem value="es-usd">Spanish, USD</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="us">
                <SelectTrigger className="w-[100px] h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">Ship to 🇺🇸</SelectItem>
                  <SelectItem value="uk">Ship to 🇬🇧</SelectItem>
                  <SelectItem value="ca">Ship to 🇨🇦</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
