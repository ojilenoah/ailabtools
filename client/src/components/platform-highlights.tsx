import { ArrowRight } from "lucide-react";

interface PlatformCardProps {
  title: string;
  description: string;
  url: string;
  colorClass: string;
  linkColorClass: string;
}

function PlatformCard({ title, description, url, colorClass, linkColorClass }: PlatformCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group">
      <div className="h-full flex flex-col rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transform transition duration-300 hover:shadow-md hover:scale-105 bg-gray-50 dark:bg-gray-800">
        <div className={`flex-shrink-0 ${colorClass} p-6`}>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-base text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <span className={`text-sm font-medium ${linkColorClass} group-hover:underline`}>
              Learn More
              <ArrowRight className="ml-1 h-4 w-4 inline" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function PlatformHighlights() {
  const platforms = [
    {
      title: "LabXchange",
      description: "Harvard-developed platform offering free virtual lab simulations across biology, chemistry, and more.",
      url: "https://www.labxchange.org/",
      colorClass: "bg-primary dark:bg-blue-700",
      linkColorClass: "text-primary dark:text-blue-400"
    },
    {
      title: "PhET Interactive Simulations",
      description: "University of Colorado Boulder's interactive science simulations for physics, chemistry, biology, and more.",
      url: "https://phet.colorado.edu/",
      colorClass: "bg-secondary dark:bg-green-700",
      linkColorClass: "text-secondary dark:text-green-400"
    },
    {
      title: "ChemCollective",
      description: "Virtual chemistry labs and interactive learning materials from Carnegie Mellon University.",
      url: "http://chemcollective.org/",
      colorClass: "bg-accent dark:bg-purple-700",
      linkColorClass: "text-accent dark:text-purple-400"
    },
    {
      title: "Labster",
      description: "Advanced 3D virtual labs with gamified elements for engaging science education.",
      url: "https://www.labster.com/",
      colorClass: "bg-blue-600 dark:bg-blue-800",
      linkColorClass: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "SimLab",
      description: "Professional laboratory simulation software for research and industrial applications.",
      url: "https://www.simlab-soft.com/",
      colorClass: "bg-green-600 dark:bg-green-800",
      linkColorClass: "text-green-600 dark:text-green-400"
    }
  ];

  return (
    <section id="platforms" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Top Platforms
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Explore leading AI-powered laboratory simulation platforms.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <PlatformCard 
              key={index}
              title={platform.title}
              description={platform.description}
              url={platform.url}
              colorClass={platform.colorClass}
              linkColorClass={platform.linkColorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
