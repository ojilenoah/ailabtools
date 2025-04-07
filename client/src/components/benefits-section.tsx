import { Check } from "lucide-react";

interface BenefitItemProps {
  title: string;
  description: string;
}

function BenefitItem({ title, description }: BenefitItemProps) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0">
        <Check className="h-6 w-6 text-primary dark:text-blue-400" />
      </div>
      <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
        <span className="font-medium text-gray-900 dark:text-white">{title}</span> {description}
      </p>
    </li>
  );
}

export function BenefitsSection() {
  const benefits = [
    {
      title: "Enhanced Learning:",
      description: "Provides hands-on experience without physical limitations or resource constraints."
    },
    {
      title: "Safety:",
      description: "Eliminates risks associated with handling hazardous materials and equipment."
    },
    {
      title: "Cost Efficiency:",
      description: "Reduces expenses related to equipment, materials, and facility maintenance."
    },
    {
      title: "Accessibility:",
      description: "Makes laboratory experiences available to anyone, anywhere, at any time."
    },
    {
      title: "R&D Acceleration:",
      description: "Speeds up research and development by simulating experiments before physical implementation."
    }
  ];

  return (
    <section id="benefits" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Why Use AI for Lab Simulations?
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
              AI-powered laboratory simulations transform how we learn, teach, and conduct research in the sciences, providing advantages that traditional labs cannot match.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <BenefitItem 
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
