import { HeroSection } from '../components/HeroSection';
import { DealsSection } from '../components/DealsSection';
import { CategoryShowcase } from '../components/CategoryShowcase';

export function NewDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <DealsSection />
      <CategoryShowcase
        title="Home and outdoor"
        bgColor="bg-amber-50"
        image="https://images.unsplash.com/photo-1630224049701-c1e2c7c671c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb3V0ZG9vciUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjQxODE4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />
      <CategoryShowcase
        title="Consumer electronics"
        bgColor="bg-blue-50"
        image="https://images.unsplash.com/photo-1761877945239-4d15febdeddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdW1lciUyMGVsZWN0cm9uaWNzJTIwZ2FkZ2V0c3xlbnwxfHx8fDE3NjQxODE4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />
    </div>
  );
}
