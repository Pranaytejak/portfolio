import React from 'react';
import { Github, Linkedin, Mail, Palette, Code2, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">KUMMARI PRANAY TEJA</h1>
            <p className="text-xl md:text-2xl mb-8">CSE Student at SRM University</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Pranaytejak" target="_blank" rel="noopener noreferrer" 
                 className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/k-pranay-teja-b31866288/" target="_blank" rel="noopener noreferrer"
                 className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            <p>
              I'm a Computer Science Engineering student at SRM University with a passion for technology
              and innovation. My interests span across various domains including Data Structures & Algorithms,
              Web Development, and Artificial Intelligence/Machine Learning.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Code2 className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold">DSA</h3>
              </div>
              <p className="text-gray-600">Strong foundation in Data Structures and Algorithms with problem-solving skills</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Brain className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <p className="text-gray-600">Experience in building responsive and modern web applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Palette className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold">Drawing</h3>
              </div>
              <p className="text-gray-600">Skilled artist with a creative eye for detail and design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Project 1</h3>
              <p className="text-gray-600 mb-4">Description of your first project showcasing your skills in web development or DSA.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800">Learn More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Project 2</h3>
              <p className="text-gray-600 mb-4">Description of your second project demonstrating your AI/ML interests.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 KUMMARI PRANAY TEJA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;