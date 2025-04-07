import { FlaskConical, Settings, BarChart3 } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgClass: string;
}

function FeatureCard({ icon, title, description, iconBgClass }: FeatureCardProps) {
  return (
    <div className="pt-6">
      <div className="flow-root bg-white dark:bg-gray-900 rounded-lg shadow-sm px-6 pb-8 h-full transform transition duration-300 hover:scale-105 hover:shadow-md">
        <div className="-mt-6">
          <div>
            <span className={`inline-flex items-center justify-center p-3 ${iconBgClass} rounded-md shadow-lg`}>
              {icon}
            </span>
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">{title}</h3>
          <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesGrid() {
  const features = [
    {
      icon: <FlaskConical className="h-6 w-6 text-white" />,
      title: "Virtual Lab Environments",
      description: "Access fully interactive laboratory spaces with realistic equipment and materials simulation.",
      iconBgClass: "bg-primary dark:bg-blue-700"
    },
    {
      icon: <Settings className="h-6 w-6 text-white" />,
      title: "Experiment Design",
      description: "Create, modify, and save custom experimental protocols with intuitive design interfaces.",
      iconBgClass: "bg-secondary dark:bg-green-700"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "Data Analysis & Visualization",
      description: "Powerful tools to analyze experimental data, create visualizations, and export results.",
      iconBgClass: "bg-accent dark:bg-purple-700"
    }
  ];

  return (
    <section id="features" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Core Features
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Our platform provides comprehensive tools for simulating laboratory experiences.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconBgClass={feature.iconBgClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
