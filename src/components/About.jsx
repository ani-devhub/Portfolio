import { useState } from 'react';

const About = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [isDownloading, setIsDownloading] = useState(false);

    // Method 1: Download from public folder
    const downloadResumeFromPublic = () => {
        setIsDownloading(true);

        const link = document.createElement('a');
        link.href = '/assets/resume/Anirudha_Dey_Resume.pdf'; // Put your resume in public/assets/resume/
        link.download = 'Anirudha_Dey_Resume.pdf';
        link.target = '_blank';

        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => setIsDownloading(false), 1000);
    };
    return (
        <div className='py-20 bg-gray-800'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-2'>
                        About <span className='text-blue-500'>Me</span>
                    </h2>
                    <div className='w-20 h-1 bg-blue-500 mx-auto mb-6'></div>
                    <p className='text-gray-300 max-w-2xl mx-auto'>
                        Get to know me better: who I am, what drives me, and my professional journey as a software
                        developer.
                    </p>
                </div>

                <div className='flex flex-col md:flex-row gap-10 items-center'>
                    {/* Image column */}
                    <div className='w-full md:w-5/12' data-aos='fade-right'>
                        <div className='relative'>
                            <div className='bg-blue-500/20 w-full h-full absolute -top-4 -left-4 rounded-lg'></div>
                            <img
                                src='/assets/images/profile.jpg'
                                alt='Anirudha Dey - About Me'
                                className='w-full rounded-lg shadow-xl relative z-10 object-cover'
                                style={{ height: '500px' }}
                            />
                            <div className='absolute bottom-0 right-0 bg-blue-600 py-2 px-6 rounded-tl-lg rounded-br-lg shadow-lg font-medium z-20'>
                                2+ Years Experience
                            </div>
                        </div>
                    </div>

                    {/* Content column */}
                    <div className='w-full md:w-7/12' data-aos='fade-left'>
                        {/* Tab navigation */}
                        <div className='flex mb-8 border-b border-gray-700'>
                            <button
                                onClick={() => setActiveTab('personal')}
                                className={`py-2 px-4 font-medium text-sm transition-colors duration-300 ${
                                    activeTab === 'personal'
                                        ? 'border-b-2 border-blue-500 text-blue-500'
                                        : 'text-gray-400 hover:text-gray-300'
                                }`}
                            >
                                Personal Info
                            </button>
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`py-2 px-4 font-medium text-sm transition-colors duration-300 ${
                                    activeTab === 'education'
                                        ? 'border-b-2 border-blue-500 text-blue-500'
                                        : 'text-gray-400 hover:text-gray-300'
                                }`}
                            >
                                Education
                            </button>
                            <button
                                onClick={() => setActiveTab('interests')}
                                className={`py-2 px-4 font-medium text-sm transition-colors duration-300 ${
                                    activeTab === 'interests'
                                        ? 'border-b-2 border-blue-500 text-blue-500'
                                        : 'text-gray-400 hover:text-gray-300'
                                }`}
                            >
                                Interests
                            </button>
                        </div>

                        {/* Tab content */}
                        <div className='tab-content text-gray-300'>
                            {activeTab === 'personal' && (
                                <div data-aos='fade-up'>
                                    <h3 className='text-xl font-semibold mb-4 text-white'>Who I Am</h3>
                                    <p className='mb-4'>
                                        I'm Anirudha Dey, a passionate software developer with 2+ years of professional
                                        experience, specializing in web and mobile application development. I thrive on
                                        solving complex problems and building intuitive, user-friendly applications.
                                    </p>
                                    <p className='mb-6'>
                                        My development journey started with JavaScript and has expanded into various
                                        modern frameworks and technologies. I'm constantly learning and adapting to new
                                        technologies to deliver high-quality software solutions.
                                    </p>

                                    <h4 className='font-medium mb-2 text-white'>Personal Details</h4>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                        <div>
                                            <p>
                                                <span className='font-medium text-blue-400'>Name:</span> Anirudha Dey
                                            </p>
                                            <p>
                                                <span className='font-medium text-blue-400'>Email:</span>{' '}
                                                anirudha.dey.official@gmail.com
                                            </p>
                                            <p>
                                                <span className='font-medium text-blue-400'>Location:</span> Kolkata,
                                                India
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <span className='font-medium text-blue-400'>Experience:</span> 2+ Years
                                            </p>
                                            <p>
                                                <span className='font-medium text-blue-400'>Availability:</span>{' '}
                                                Full-time
                                            </p>
                                            <p>
                                                <span className='font-medium text-blue-400'>Languages:</span> English,
                                                Hindi, Bengali
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'education' && (
                                <div data-aos='fade-up'>
                                    <h3 className='text-xl font-semibold mb-4 text-white'>Educational Background</h3>

                                    <div className='mb-6 border-l-2 border-blue-500 pl-4'>
                                        <h4 className='font-semibold text-white'>Secondary Examination</h4>
                                        <p className='text-blue-400 mb-1'>
                                            West Bengal Board of Secondary Education (WBBSE), 2017
                                        </p>
                                        <div className='flex items-center mb-2'>
                                            <span className='bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium'>
                                                78%
                                            </span>
                                        </div>
                                    </div>

                                    <div className='mb-6 border-l-2 border-blue-500 pl-4'>
                                        <h4 className='font-semibold text-white'>Higher Secondary Education</h4>
                                        <p className='text-blue-400 mb-1'>
                                            West Bengal Council of Higher Secondary Education (WBCHSE), 2019
                                        </p>
                                        <div className='flex items-center mb-2'>
                                            <span className='bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium'>
                                                78%
                                            </span>
                                        </div>
                                    </div>

                                    <div className='mb-6 border-l-2 border-blue-500 pl-4'>
                                        <h4 className='font-semibold text-white'>
                                            Bachelor of Technology in Electronics and Communication Engineering
                                        </h4>
                                        <p className='text-blue-400 mb-1'>
                                            Maulana Abul Kalam Azad University of Technology, 2019-2023
                                        </p>
                                        <div className='flex items-center mb-2'>
                                            <span className='bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium'>
                                                9.10 CGPA
                                            </span>
                                        </div>
                                        <p className='text-gray-300'>
                                            Completed B.Tech with excellent academic performance, focusing on digital
                                            electronics, communication systems, and software development. Gained
                                            expertise in programming languages, data structures, algorithms, and
                                            participated in multiple coding competitions and hackathons. Developed
                                            strong foundation in both hardware and software domains.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'interests' && (
                                <div data-aos='fade-up'>
                                    <h3 className='text-xl font-semibold mb-4 text-white'>Beyond Coding</h3>

                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                        <div className='bg-gray-700/30 p-4 rounded-lg'>
                                            <div className='text-blue-500 text-2xl mb-2'>
                                                <i className='fas fa-book-open'></i>
                                            </div>
                                            <h4 className='font-medium mb-2 text-white'>Continuous Learning</h4>
                                            <p>
                                                Always exploring new technologies and taking online courses to enhance
                                                my skills.
                                            </p>
                                        </div>

                                        <div className='bg-gray-700/30 p-4 rounded-lg'>
                                            <div className='text-blue-500 text-2xl mb-2'>
                                                <i className='fas fa-mountain'></i>
                                            </div>
                                            <h4 className='font-medium mb-2 text-white'>Hiking & Nature</h4>
                                            <p>
                                                I enjoy hiking and spending time in nature to disconnect and recharge.
                                            </p>
                                        </div>

                                        <div className='bg-gray-700/30 p-4 rounded-lg'>
                                            <div className='text-blue-500 text-2xl mb-2'>
                                                <i className='fas fa-chess'></i>
                                            </div>
                                            <h4 className='font-medium mb-2 text-white'>Strategic Games</h4>
                                            <p>Chess and strategy games help me develop critical thinking skills.</p>
                                        </div>

                                        <div className='bg-gray-700/30 p-4 rounded-lg'>
                                            <div className='text-blue-500 text-2xl mb-2'>
                                                <i className='fas fa-laptop-code'></i>
                                            </div>
                                            <h4 className='font-medium mb-2 text-white'>Open Source</h4>
                                            <p>Contributing to open source projects and the developer community.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Resume download button */}
                            <div className='mt-8' data-aos='fade-up'>
                                <button
                                    onClick={downloadResumeFromPublic}
                                    disabled={isDownloading}
                                    className='inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 py-2 px-6 rounded-full transition duration-300 transform hover:-translate-y-1 disabled:transform-none'
                                >
                                    {isDownloading ? (
                                        <>
                                            <div className='animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent'></div>
                                            Downloading...
                                        </>
                                    ) : (
                                        <>
                                            <i className='fas fa-file-download'></i>
                                            Download Resume (PDF)
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
