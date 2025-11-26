export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://avatars.githubusercontent.com/u/117900869?v=4"
              alt="Gautam Govind"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Hi, I'm Gautam Govind
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Java Fullstack Developer | AWS Cloud Enthusiast | DevOps Practitioner
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Passionate developer specializing in Spring Boot, React, Angular, with expertise in Cloud Computing and DevOps practices.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow mr-4">
              <a
                href="/about"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                About Me
              </a>
            </div>
            <div className="rounded-md shadow">
              <a
                href="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white border-blue-600 hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
