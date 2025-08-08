import { FaChalkboardTeacher } from "react-icons/fa";

function Course_offered() {
  const courses = [
    {
      name: 'Professional certification in Motion graphics (English & Tamil)',
      company: 'Guvi Geek Network Private Limited',
      description: 'Coming soon!',
      link: '#',
      enabled: false,
    },
    {
      name: 'Unity Artist',
      company: 'Scopik Edutech Private Limited',
      description: 'Coming soon!',
      link: '#',
      enabled: false,
    },
    {
      name: 'Augmented Reality and its Applications',
      company: 'Tata Consultancy Services',
      description: 'Coming soon!',
      link: '#',
      enabled: false,
    },
    {
      name: 'Virtual Reality and its Applications',
      company: 'Tata Consultancy Services',
      description: 'Coming soon!',
      link: '#',
      enabled: false,
    },
    {
      name: 'General: AR & VR Developer',
      company: 'Scopik Edutech Private Limited',
      description: 'Coming soon!',
      link: '#',
      enabled: false,
    },
    {
      name: 'Game Development',
      company: 'Scopik Edutech Private Limited',
      description: 'Coming soon!',
      link: '#',
      enabled: false,
    },
    {
      name: 'Metaverse Application Development (Metaverse Fundamental)',
      company: 'Scopik Edutech Private Limited',
      description: 'Coming soon!',
      link: '#',
      enabled: false,
    },
    {
      name: 'Data Modeling & Visualization',
      company: 'Tata Consultancy Services',
      description: 'Coming soon!',
      link: '#',
      enabled: false,
    },
    {
      name: 'NASSCOM: Realtime 3D Certification',
      company: 'Scopik Edutech Private Limited',
      description: 'Coming soon!',
      link: '#',
      enabled: false,
    },
    {
      name: 'Graphic Design',
      company: 'Scopik Edutech Private Limited',
      description: 'Coming soon!',
      link: '#',
      enabled: false,
    },
  ];

  return (
    <>
      <div className="container mx-auto py-7 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center">
        <FaChalkboardTeacher className="text-black text-6xl hover:text-[#2d2f2ef5] transition-colors duration-300 ease-in-out mb-4 md:mb-0 md:mr-4" />
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#232627] text-center underline underline-offset-8 decoration-blue-200 decoration-1 font-raleway tracking-wider">
          ONLINE COURSES
        </h1>
      </div>

      <div className="my-8 mx-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
          {courses.map((course, index) => (
            <div key={index} className="card2">
              <div className="mt-auto">
                <h2 className="text-2xl font-bold mb-2 text-[#191b1c] text-center">
                  {course.name}
                </h2>
              </div>

              {/* Removed company display here */}

              <div className="mt-auto pt-4">
                <p className="text-slate-900 mb-2 mx-auto text-center">
                  {course.description}
                </p>
              </div>

              <div className="access-button-container">
                {course.enabled ? (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="access-button"
                  >
                    Access
                  </a>
                ) : (
                  <span className="access-button disabled">Access</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course_offered;
