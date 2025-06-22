import { useEffect, useState } from 'react';

const Hero = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = ['Software Developer', 'Fullstack Developer', 'Frontend Developer', 'Backend Developer'];

    useEffect(() => {
        const typeSpeed = 100;
        const deleteSpeed = 50;
        const pauseTime = 1500;

        const type = () => {
            const currentRole = roles[currentIndex];

            if (isDeleting) {
                setCurrentText(currentRole.substring(0, currentText.length - 1));

                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }
            } else {
                setCurrentText(currentRole.substring(0, currentText.length + 1));

                if (currentText === currentRole) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                    return;
                }
            }
        };

        const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentIndex, roles]);

    return (
        <div className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16'>
            {/* Background gradient */}
            <div className='absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'></div>

            {/* Animated background particles */}
            <div className='absolute inset-0'>
                <div className='stars'></div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col md:flex-row-reverse items-center justify-between min-h-[calc(100vh-4rem)]'>
                {/* Left content - Text */}
                <div className='w-full md:w-1/2 text-center md:text-left order-2 md:order-1' data-aos='fade-right'>
                    <h1 className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight'>
                        <span className='text-white'>Hi, I'm</span>
                        <br className='block xs:hidden' />
                        <span className='text-blue-500 block xs:inline'> Anirudha Dey</span>
                    </h1>

                    <div className='text-lg xs:text-xl sm:text-2xl md:text-3xl mb-6 min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center md:justify-start'>
                        <span className='text-white'>I'm a </span>
                        <span className='text-blue-400 font-semibold ml-2 min-w-0 flex items-center'>
                            <span className='break-words'>{currentText}</span>
                            <span className='text-blue-400 font-semibold animate-pulse ml-1 flex-shrink-0'>|</span>
                        </span>
                    </div>

                    <p className='text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 text-sm sm:text-base leading-relaxed px-2 sm:px-0'>
                        Passionate about building exceptional digital experiences with modern technologies. Specialized
                        in JavaScript frameworks and cross-platform mobile development.
                    </p>

                    <div className='flex flex-wrap justify-center md:justify-start gap-4 mb-8'>
                        <a
                            href='#contact'
                            className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1 text-center text-sm sm:text-base'
                        >
                            Contact Me
                        </a>
                        <a
                            href='#projects'
                            className='bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1 text-center text-sm sm:text-base'
                        >
                            View Projects
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className='flex justify-center md:justify-start space-x-6 mb-8'>
                        <a href='#' className='text-gray-400 hover:text-blue-500 transition-colors duration-300 p-2'>
                            <i className='fab fa-linkedin text-xl sm:text-2xl'></i>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-blue-500 transition-colors duration-300 p-2'>
                            <i className='fab fa-github text-xl sm:text-2xl'></i>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-blue-500 transition-colors duration-300 p-2'>
                            <i className='fab fa-twitter text-xl sm:text-2xl'></i>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-blue-500 transition-colors duration-300 p-2'>
                            <i className='fas fa-envelope text-xl sm:text-2xl'></i>
                        </a>
                    </div>
                </div>

                {/* Right content - Image */}
                <div
                    className='w-full md:w-1/2 flex justify-center mt-4 md:mt-0 order-1 md:order-2'
                    data-aos='fade-left'
                >
                    <div className='relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80'>
                        <div className='absolute inset-0 rounded-full bg-blue-500/20 animate-pulse'></div>
                        <img
                            src='/assets/images/profile.jpg'
                            alt='Anirudha Dey'
                            className='w-full h-full object-cover rounded-full border-4 border-blue-500/50 shadow-lg shadow-blue-500/30'
                        />
                        {/* Floating tech icons - Hidden on very small screens */}
                        <div className='absolute -top-4 -right-4 bg-gray-800 rounded-full p-2 shadow-lg animate-bounce'>
                            <i className='fab fa-react text-blue-400 text-2xl'></i>
                        </div>
                        <div className='absolute -bottom-2 -left-4 bg-gray-800 rounded-full p-2 shadow-lg animate-bounce delay-200'>
                            <i className='fab fa-angular text-red-500 text-2xl'></i>
                        </div>
                        <div className='absolute top-1/2 -right-8 bg-gray-800 rounded-full p-2 shadow-lg animate-bounce delay-300'>
                            <i className='fab fa-node-js text-green-500 text-2xl'></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll down indicator - Better positioning */}
            {/* <div className='absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20'>
                <a
                    href='#about'
                    className='flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors p-2'
                >
                    <span className='mb-1 text-xs sm:text-sm whitespace-nowrap'>Scroll Down</span>
                    <i className='fas fa-chevron-down text-sm'></i>
                </a>
            </div> */}
        </div>
    );
};

export default Hero;
