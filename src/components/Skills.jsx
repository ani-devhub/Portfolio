const Skills = () => {
    const technicalSkills = [
        {
            category: 'Frontend',
            skills: [
                { name: 'JavaScript', level: 90, icon: 'fab fa-js' },
                { name: 'Angular', level: 90, icon: 'fab fa-angular' },
                { name: 'React', level: 85, icon: 'fab fa-react' },
                { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
                { name: 'CSS3/SCSS', level: 85, icon: 'fab fa-css3-alt' },
                { name: 'Tailwind CSS', level: 80, icon: 'fab fa-css3' },
            ],
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
                { name: 'Express.js', level: 75, icon: 'fas fa-server' },
                { name: 'MongoDB', level: 85, icon: 'fas fa-database' },
            ],
        },
        {
            category: 'Mobile',
            skills: [
                { name: 'React Native', level: 75, icon: 'fab fa-react' },
                { name: 'Android', level: 65, icon: 'fab fa-android' },
                { name: 'Flutter', level: 40, icon: 'fas fa-mobile-alt' },
            ],
        },
        {
            category: 'Others',
            skills: [
                { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
                { name: 'Webpack', level: 70, icon: 'fas fa-cube' },
                { name: 'Jest', level: 65, icon: 'fas fa-vial' },
            ],
        },
    ];

    return (
        <div className='py-20 bg-gray-900'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-2'>
                        My <span className='text-blue-500'>Skills</span>
                    </h2>
                    <div className='w-20 h-1 bg-blue-500 mx-auto mb-6'></div>
                    <p className='text-gray-300 max-w-2xl mx-auto'>
                        Technical skills and technologies I've been working with throughout my career
                    </p>
                </div>

                {/* Skills Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {technicalSkills.map((category, index) => (
                        <div
                            key={index}
                            className='bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700'
                            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                            data-aos-delay={index * 100}
                        >
                            <h3 className='text-xl md:text-2xl font-semibold mb-6 flex items-center'>
                                <span className='text-blue-500 mr-2'>
                                    <i
                                        className={
                                            category.category === 'Frontend'
                                                ? 'fas fa-laptop-code'
                                                : category.category === 'Backend'
                                                ? 'fas fa-server'
                                                : category.category === 'Mobile'
                                                ? 'fas fa-mobile-alt'
                                                : 'fas fa-tools'
                                        }
                                    ></i>
                                </span>
                                {category.category} Technologies
                            </h3>

                            <div className='space-y-6'>
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className='mb-4'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <div className='flex items-center'>
                                                <i className={`${skill.icon} text-blue-400 mr-3 text-lg`}></i>
                                                <span className='font-medium'>{skill.name}</span>
                                            </div>
                                            <span className='text-blue-400'>{skill.level}%</span>
                                        </div>
                                        <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                            <div
                                                className='bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full'
                                                style={{ width: `${skill.level}%` }}
                                                data-aos='slide-right'
                                                data-aos-delay={index * 100 + skillIndex * 50}
                                                data-aos-duration='500'
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Section */}
                <div className='mt-16' data-aos='fade-up'>
                    <h3 className='text-xl md:text-2xl font-semibold mb-8 text-center'>Other Professional Skills</h3>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                        {[
                            { name: 'Problem Solving', icon: 'fas fa-puzzle-piece' },
                            { name: 'Teamwork', icon: 'fas fa-users' },
                            { name: 'Communication', icon: 'fas fa-comments' },
                            { name: 'Time Management', icon: 'fas fa-clock' },
                            { name: 'Agile/Scrum', icon: 'fas fa-sync' },
                            { name: 'Adaptability', icon: 'fas fa-water' },
                            { name: 'UI/UX Principles', icon: 'fas fa-pencil-ruler' },
                            { name: 'Performance Optimization', icon: 'fas fa-tachometer-alt' },
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className='bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg p-4 text-center transition-all duration-300 transform hover:-translate-y-1'
                                data-aos='fade-up'
                                data-aos-delay={index * 50}
                            >
                                <div className='text-blue-500 text-2xl mb-3'>
                                    <i className={skill.icon}></i>
                                </div>
                                <h4 className='font-medium'>{skill.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
