import React from 'react';
import { Mail, Github, User } from 'lucide-react';

// Main React component for the "About" page
const AboutPage = () => {
    return (
        // Main container with Tailwind styles for dark background, rounded edges, and shadow
        <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl max-w-md mx-auto my-12 border border-gray-700 transform transition-all hover:scale-105 duration-300">
            {/* Page title with gradient text and prominent styles */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                About Page
            </h1>

            {/* User information sections */}
            <div className="space-y-4">
                {/* Full name with icon */}
                <div className="flex items-center text-lg sm:text-xl font-light">
                    <User className="text-purple-400 w-6 h-6 mr-3" />
                    <span className="text-gray-300">Full Name:</span>
                    <span className="ml-2 font-medium">Mohsen Malekifard</span>
                </div>

                {/* Email address with icon */}
                <div className="flex items-center text-lg sm:text-xl font-light">
                    <Mail className="text-pink-400 w-6 h-6 mr-3" />
                    <span className="text-gray-300">Email:</span>
                    <span className="ml-2 font-medium">mohsenmaleki1389@gmail.com</span>
                </div>
                
                {/* GitHub address with icon and clickable link */}
                <div className="flex items-center text-lg sm:text-xl font-light">
                    <Github className="text-gray-400 w-6 h-6 mr-3" />
                    <span className="text-gray-300">GitHub:</span>
                    <a 
                        href="https://github.com/Mohsen-Malekifard" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-2 font-medium text-blue-400 hover:underline transition-colors duration-200"
                    >
                        github.com/Mohsen-Malekifard
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
