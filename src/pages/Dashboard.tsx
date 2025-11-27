import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { TrendingUp, ShoppingBag, Users, DollarSign, ArrowRight } from 'lucide-react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const salesData = [
  { name: 'Clothing', value: 45, color: '#3b82f6' },
  { name: 'Shoes', value: 25, color: '#10b981' },
  { name: 'Accessories', value: 20, color: '#f59e0b' },
  { name: 'Outerwear', value: 10, color: '#8b5cf6' },
];

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    icon: DollarSign,
    color: 'text-green-600',
  },
  {
    title: 'Total Orders',
    value: '1,234',
    change: '+15.3%',
    icon: ShoppingBag,
    color: 'text-blue-600',
  },
  {
    title: 'Total Customers',
    value: '8,562',
    change: '+12.5%',
    icon: Users,
    color: 'text-purple-600',
  },
  {
    title: 'Growth',
    value: '23.5%',
    change: '+4.2%',
    icon: TrendingUp,
    color: 'text-orange-600',
  },
];

export function Dashboard() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{stat.title}</span>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-2xl mb-1">{stat.value}</div>
                <div className="text-xs text-green-600">{stat.change} from last month</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sales Distribution Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={salesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {salesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {salesData.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 pb-3 border-b">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                <div className="flex-1">
                  <p className="text-sm">New order received</p>
                  <p className="text-xs text-gray-500">Order #12345 - $299.99</p>
                  <p className="text-xs text-gray-400">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 pb-3 border-b">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2" />
                <div className="flex-1">
                  <p className="text-sm">Product review submitted</p>
                  <p className="text-xs text-gray-500">5 stars for Winter Jacket</p>
                  <p className="text-xs text-gray-400">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 pb-3 border-b">
                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2" />
                <div className="flex-1">
                  <p className="text-sm">New customer registered</p>
                  <p className="text-xs text-gray-500">Sarah Johnson</p>
                  <p className="text-xs text-gray-400">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-orange-600 mt-2" />
                <div className="flex-1">
                  <p className="text-sm">Stock alert</p>
                  <p className="text-xs text-gray-500">Classic Cotton T-Shirt low stock</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Products */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl">Featured Products</h2>
          <Link to="/products">
            <Button variant="outline" size="sm">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
