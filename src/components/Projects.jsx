import { useState } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Ecommerce Dashboard',
            category: 'web',
            image: '/assets/images/Ems_Project.png',
            description:
                'A modern e-commerce admin dashboard built with React and Redux for managing products, orders, and customer data.',
            technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 2,
            title: 'Health & Fitness App',
            category: 'mobile',
            image: '/assets/images/Flerts_Project.png',
            description:
                'Cross-platform mobile application for health tracking and fitness routines with personalized workout plans.',
            technologies: ['React Native', 'Firebase', 'Redux'],
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 3,
            title: 'Real-time Chat Application',
            category: 'web',
            image: '/assets/images/Spincabs.png',
            description: 'Real-time messaging app with features like group chats, file sharing, and read receipts.',
            technologies: ['Angular', 'Socket.io', 'Express', 'MongoDB'],
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 4,
            title: 'Task Management System',
            category: 'web',
            image: '/assets/images/Oohray.png',
            description:
                'Comprehensive task management system with features like task assignment, progress tracking, and reporting.',
            technologies: ['React', 'Node.js', 'PostgreSQL'],
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 5,
            title: 'Weather Forecast App',
            category: 'mobile',
            image: '/assets/images/project5.jpg',
            description: 'Mobile app providing real-time weather forecasts and alerts based on user location.',
            technologies: ['Flutter', 'Dart', 'Weather API'],
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 6,
            title: 'Personal Finance Tracker',
            category: 'web',
            image: '/assets/images/project6.jpg',
            description:
                'Web application for tracking personal finances, expenses, and investments with visual reports.',
            technologies: ['React', 'Chart.js', 'Express', 'MongoDB'],
            demoLink: '#',
            codeLink: '#',
        },
    ];

    // Filter projects based on category
    const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

    return (
        <div className='py-20 bg-gray-900'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-2'>
                        My <span className='text-blue-500'>Projects</span>
                    </h2>
                    <div className='w-20 h-1 bg-blue-500 mx-auto mb-6'></div>
                    <p className='text-gray-300 max-w-2xl mx-auto'>
                        Explore some of my recent work and personal projects showcasing my technical skills and
                        capabilities
                    </p>
                </div>

                {/* Filter buttons */}
                <div className='flex flex-wrap justify-center gap-4 mb-12' data-aos='fade-up'>
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                            filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        All Projects
                    </button>
                    <button
                        onClick={() => setFilter('web')}
                        className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                            filter === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        Web Apps
                    </button>
                    <button
                        onClick={() => setFilter('mobile')}
                        className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                            filter === 'mobile'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        Mobile Apps
                    </button>
                </div>

                {/* Projects grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className='bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2'
                            data-aos='fade-up'
                            data-aos-delay={(project.id - 1) * 100}
                        >
                            {/* Project image */}
                            <div className='relative group h-48 overflow-hidden'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4'>
                                    <div className='flex gap-3'>
                                        <a
                                            href={project.demoLink}
                                            className='bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors duration-300'
                                            title='Live Demo'
                                        >
                                            <i className='fas fa-external-link-alt'></i>
                                        </a>
                                        <a
                                            href={project.codeLink}
                                            className='bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2 transition-colors duration-300'
                                            title='View Code'
                                        >
                                            <i className='fas fa-code'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project details */}
                            <div className='p-6'>
                                <h3 className='text-xl font-bold mb-2 text-white'>{project.title}</h3>
                                <p className='text-gray-400 text-sm mb-4'>{project.description}</p>

                                {/* Technologies used */}
                                <div className='flex flex-wrap gap-2'>
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className='bg-gray-700 text-xs text-blue-300 px-2 py-1 rounded'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More projects CTA */}
                <div className='text-center mt-12' data-aos='fade-up'>
                    <a
                        href='https://github.com/anirudhadey'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium py-2 px-6 rounded-full transition duration-300'
                    >
                        <i className='fab fa-github'></i>
                        View More On GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
