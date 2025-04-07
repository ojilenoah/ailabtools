import { Button } from "@/components/ui/button";
import { MoleculeDecorative } from "@/components/ui/molecular-icon";

export function HeroSection() {
  return (
    <section className="pt-20 bg-gradient-to-r from-blue-50/5 to-green-50/5 dark:from-blue-950/5 dark:to-green-950/5 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">AI for Simulating</span>
            <span className="block text-blue-600 dark:text-blue-400 xl:inline"> Laboratory Experiments</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explore, learn, and innovate in safe, virtual environments powered by intelligent simulation.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button 
                asChild
                className="w-full px-8 py-3 text-base md:py-4 md:text-lg md:px-10"
              >
                <a href="#features">
                  Explore Simulations
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none relative">
          {/* Decorative elements - simplified molecular structure */}
          <MoleculeDecorative position="left" />
          <MoleculeDecorative position="right" />
        </div>
      </div>
    </section>
  );
}
