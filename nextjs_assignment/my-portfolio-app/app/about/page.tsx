export default function About() {
  const skills = {
    languages: ['Java (Core & Advanced)', 'Python', 'JavaScript (ES6+)'],
    frameworks: ['Spring Boot', 'React', 'Angular', 'Hibernate', 'JPA', 'Thymeleaf'],
    cloud: ['AWS Cloud (EC2, S3, RDS, Lambda)', 'Docker', 'Kubernetes', 'CI/CD Pipelines with Jenkins'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    tools: ['Git & GitHub', 'Maven', 'Gradle', 'IntelliJ IDEA', 'Visual Studio Code', 'Spring Tool Suite']
  };

  const achievements = [
    'Winner of the Drone Innovation Challenge organized by IIT Patna',
    'Finalist in INNOVERSE 2K24 with AgroInnovate project',
    'Recognized for contributions to Unstop AtomQuest 2024',
    'Successfully developed and deployed a blog application using Spring Boot and Thymeleaf'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">About Me</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Passionate learner actively upskilling in Fullstack Development and Data Structures & Algorithms
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">My Story</h3>
            <p className="text-sm text-gray-500 mb-6">
              I am Gautam Govind from Patna, Bihar, India. Currently pursuing my BTech in Computer Science from CVRU Vaishali, Bihar.
              I'm an ambitious and passionate developer specializing in Java Fullstack Development with a strong foundation in Spring Boot, React, Angular, and a keen interest in Cloud Computing and DevOps practices.
              My aim is to create impactful and scalable software solutions that add real value to businesses and individuals.
            </p>

            <h4 className="text-md font-medium text-gray-900 mb-3">Education</h4>
            <p className="text-sm text-gray-500 mb-6">B.Tech in Computer Science Engineering</p>

            <h4 className="text-md font-medium text-gray-900 mb-3">Technical Skills</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Programming Languages</h5>
                <ul className="list-disc list-inside text-sm text-gray-500">
                  {skills.languages.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Frameworks & Technologies</h5>
                <ul className="list-disc list-inside text-sm text-gray-500">
                  {skills.frameworks.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Cloud & DevOps</h5>
                <ul className="list-disc list-inside text-sm text-gray-500">
                  {skills.cloud.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Databases & Tools</h5>
                <ul className="list-disc list-inside text-sm text-gray-500">
                  {[...skills.databases, ...skills.tools].map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h4 className="text-md font-medium text-gray-900 mb-3">Achievements</h4>
            <ul className="list-disc list-inside text-sm text-gray-500">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}