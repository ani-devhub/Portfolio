const Experience = () => {
    const experiences = [
        // {
        //   title: "Senior Frontend Developer",
        //   company: "Tech Innovations Inc.",
        //   period: "Jan 2022 - Present",
        //   description: [
        //     "Leading development of React-based web applications for enterprise clients",
        //     "Implementing responsive designs and optimizing application performance",
        //     "Collaborating with cross-functional teams to deliver high-quality software solutions",
        //     "Mentoring junior developers and conducting code reviews"
        //   ],
        //   technologies: ["React", "JavaScript", "Redux", "Tailwind CSS"]
        // },
        {
            title: 'Full Stack Developer',
            company: 'BASSETTI ITES PVT. LTD.',
            period: 'Jul 2023 - Present',
            description: [
                'Developed and maintained RESTful APIs using Node.js and Express',
                'Created responsive user interfaces with Angular framework',
                'Implemented and managed MongoDB database schemas and queries',
                'Participated in agile development processes and sprint planning',
            ],
            technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
        },
        {
            title: 'Developer (Intern)',
            company: 'BASSETTI ITES PVT. LTD.',
            period: 'Sep 2022 - Jun 2023',
            description: [
                'Assisted in developing cross-platform mobile applications using React Native',
                'Implemented UI components based on designer specifications',
                'Fixed bugs and improved application performance',
                'Participated in code reviews and team meetings',
            ],
            technologies: ['React Native', 'JavaScript', 'Android', 'Angular'],
        },
    ];

    return (
        <div className='py-20 bg-gray-800'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-2'>
                        Work <span className='text-blue-500'>Experience</span>
                    </h2>
                    <div className='w-20 h-1 bg-blue-500 mx-auto mb-6'></div>
                    <p className='text-gray-300 max-w-2xl mx-auto'>
                        A summary of my professional journey and the companies I've collaborated with
                    </p>
                </div>

                {/* Timeline */}
                <div className='relative'>
                    {/* Vertical line */}
                    <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/30'></div>

                    {/* Experience items */}
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative flex md:items-center mb-16 ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                            data-aos-delay={index * 100}
                        >
                            {/* Content */}
                            <div
                                className={`w-full md:w-5/12 ${
                                    index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'
                                }`}
                            >
                                <div className='bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300'>
                                    <div className='mb-4'>
                                        <span className='inline-block bg-blue-500/20 text-blue-400 px-3 py-1 text-sm rounded-full mb-2'>
                                            {exp.period}
                                        </span>
                                        <h3 className='text-xl font-bold text-white'>{exp.title}</h3>
                                        <p className='text-blue-400'>{exp.company}</p>
                                    </div>

                                    <ul
                                        className={`text-gray-300 mb-4 space-y-2 ${
                                            index % 2 === 0 ? 'md:text-right' : ''
                                        }`}
                                    >
                                        {exp.description.map((item, i) => (
                                            <li key={i} className='flex items-start'>
                                                <span className='text-blue-500 mr-2 mt-1'>•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='flex flex-wrap gap-2 mt-4'>
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className='bg-gray-800 text-xs text-gray-300 px-2 py-1 rounded'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Timeline dot */}
                            <div className='absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 shadow'></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className='text-center mt-10' data-aos='fade-up'>
                    <p className='text-gray-300 mb-6'>Looking for a talented developer to join your team?</p>
                    <a
                        href='#contact'
                        className='inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-full transition duration-300 transform hover:-translate-y-1'
                    >
                        <i className='fas fa-paper-plane'></i>
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Experience;
