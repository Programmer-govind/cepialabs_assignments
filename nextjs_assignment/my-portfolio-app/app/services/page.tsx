export default function Services() {
  const services = [
    {
      title: 'Fullstack Development',
      description: 'Building scalable, maintainable, and performance-oriented fullstack applications using Java, Spring Boot, React, and Angular.',
      icon: '🚀',
    },
    {
      title: 'Cloud & DevOps',
      description: 'Hands-on experience with AWS services, Docker, Kubernetes, and CI/CD pipelines to streamline development and deployment.',
      icon: '☁️',
    },
    {
      title: 'Problem Solving & Innovation',
      description: 'A proactive approach to team leadership, collaboration, and delivering impactful results under pressure.',
      icon: '💡',
    },
  ];

  const projects = [
    {
      title: 'Blog Application',
      description: 'A feature-rich blogging platform where users can create, manage, and explore blogs with a responsive and user-friendly UI.',
      tech: 'Spring Boot, Thymeleaf, MySQL, Docker',
      achievement: null,
    },
    {
      title: 'Drone Innovation Project',
      description: 'Developed a fully functional drone that demonstrated technical precision and problem-solving capabilities.',
      tech: null,
      achievement: 'Winner at IIT Patna',
    },
    {
      title: 'AgroInnovate',
      description: 'A project aimed at empowering the agriculture industry with innovative tech-driven solutions.',
      tech: null,
      achievement: 'Finalist at INNOVERSE 2K24',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">What I Offer</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Expertise in building fullstack applications, cloud solutions, and innovative projects.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                  {project.tech && (
                    <p className="mt-2 text-xs text-blue-600 font-medium">Tech: {project.tech}</p>
                  )}
                  {project.achievement && (
                    <p className="mt-2 text-xs text-green-600 font-medium">🏆 {project.achievement}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}