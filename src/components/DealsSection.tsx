import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { products } from '../data/products';

export function DealsSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dealProducts = products.slice(0, 6);

  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl">Deals and offers</h2>
          <div className="flex items-center space-x-2">
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hour" />
            <TimeBox value={timeLeft.minutes} label="Min" />
            <TimeBox value={timeLeft.seconds} label="Sec" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {dealProducts.map((product, index) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {index < 3 && (
                    <Badge className="absolute top-2 left-2 bg-red-100 text-red-600 hover:bg-red-100">
                      -{15 + index * 10}%
                    </Badge>
                  )}
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm line-clamp-1 mb-1">{product.name}</p>
                  <Badge variant="outline" className="text-xs">
                    -{15 + index * 5}%
                  </Badge>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 rounded px-3 py-2 min-w-[50px] text-center">
        <span className="text-lg">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
  );
}
