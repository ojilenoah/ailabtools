import { Facebook, Twitter, Github } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer">LabAITools</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-base">
              Transforming science education and research through AI-powered laboratory simulations.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/">
                      <span className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer">Home</span>
                    </Link>
                  </li>
                  <li>
                    <a href="#features" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Features</a>
                  </li>
                  <li>
                    <a href="#platforms" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Platforms</a>
                  </li>
                  <li>
                    <a href="#benefits" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Benefits</a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase">About</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-400 dark:text-gray-500 text-center">
            &copy; {new Date().getFullYear()} LabAITools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
