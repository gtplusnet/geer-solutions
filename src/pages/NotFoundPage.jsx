import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-darker">
      <div className="text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-text-white/60 text-lg mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/">
            <Home className="w-4 h-4" /> Back to Home
          </Button>
          <Button to="/solutions" variant="outline">
            <ArrowLeft className="w-4 h-4" /> View Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
