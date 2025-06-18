const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-gray-900 pt-10 border-t border-gray-800'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 pb-10'>
                    {/* About column */}
                    <div className='md:col-span-2'>
                        <h3 className='text-xl font-bold mb-4 text-white'>Anirudha Dey</h3>
                        <p className='text-gray-400 mb-4'>
                            Passionate software developer focused on creating efficient, scalable, and user-friendly
                            applications with modern technologies. Always eager to tackle new challenges and learn new
                            skills.
                        </p>
                        <div className='flex space-x-4 mb-4'>
                            <a href='#' className='text-gray-400 hover:text-blue-400 transition-colors'>
                                <i className='fab fa-linkedin-in'></i>
                            </a>
                            <a href='#' className='text-gray-400 hover:text-blue-400 transition-colors'>
                                <i className='fab fa-github'></i>
                            </a>
                            <a href='#' className='text-gray-400 hover:text-blue-400 transition-colors'>
                                <i className='fab fa-twitter'></i>
                            </a>
                            <a href='#' className='text-gray-400 hover:text-blue-400 transition-colors'>
                                <i className='fab fa-instagram'></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4 text-white'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a href='#home' className='text-gray-400 hover:text-blue-400 transition-colors'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='#about' className='text-gray-400 hover:text-blue-400 transition-colors'>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href='#skills' className='text-gray-400 hover:text-blue-400 transition-colors'>
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href='#experience' className='text-gray-400 hover:text-blue-400 transition-colors'>
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href='#projects' className='text-gray-400 hover:text-blue-400 transition-colors'>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href='#contact' className='text-gray-400 hover:text-blue-400 transition-colors'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4 text-white'>Contact Info</h3>
                        <ul className='space-y-3'>
                            <li className='flex items-start'>
                                <i className='fas fa-map-marker-alt text-blue-400 mt-1 mr-3'></i>
                                <span className='text-gray-400'>Kolkata, India</span>
                            </li>
                            <li className='flex items-start'>
                                <i className='fas fa-envelope text-blue-400 mt-1 mr-3'></i>
                                <a
                                    href='mailto:anirudha.dey@example.com'
                                    className='text-gray-400 hover:text-blue-400 transition-colors'
                                >
                                    anirudha.dey@example.com
                                </a>
                            </li>
                            <li className='flex items-start'>
                                <i className='fas fa-phone-alt text-blue-400 mt-1 mr-3'></i>
                                <a
                                    href='tel:+919876543210'
                                    className='text-gray-400 hover:text-blue-400 transition-colors'
                                >
                                    +91 9876 543 210
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright bar */}
                <div className='py-6 border-t border-gray-800 text-center'>
                    <p className='text-gray-500'>
                        © {currentYear} Anirudha Dey | Software Developer. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:transform hover:scale-110 z-50'
                aria-label='Scroll to top'
            >
                <i className='fas fa-arrow-up'></i>
            </button>
        </footer>
    );
};

export default Footer;
