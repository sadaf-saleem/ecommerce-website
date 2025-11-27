import { Link } from 'react-router';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { products } from '../data/products';

interface CategoryShowcaseProps {
  title: string;
  subtitle?: string;
  bgColor: string;
  image: string;
}

export function CategoryShowcase({ title, subtitle, bgColor, image }: CategoryShowcaseProps) {
  const categoryProducts = products.slice(0, 8);

  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl mb-6">{title}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Featured Card */}
          <Card className={`lg:col-span-1 overflow-hidden ${bgColor}`}>
            <div className="p-6 h-full flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-xl mb-2">{title}</h3>
                {subtitle && <p className="text-sm mb-4">{subtitle}</p>}
              </div>
              <div className="mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-32 object-cover rounded"
                />
              </div>
              <Link to="/products">
                <Button variant="outline" className="w-full">
                  Source now
                </Button>
              </Link>
            </div>
          </Card>

          {/* Product Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoryProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Card className="p-4 hover:shadow-md transition-shadow h-full">
                  <div className="aspect-square bg-gray-50 rounded mb-3 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm mb-1 line-clamp-1">{product.name}</h4>
                  <p className="text-xs text-gray-500">From USD {product.price}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
