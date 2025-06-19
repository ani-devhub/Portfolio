import { useState } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .send('service_s0wsybe', 'template_jxr7ict', formData, '4yT0nAU8p5Z1-7-4N')
            .then(() => {
                setIsSubmitting(false);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });

                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setIsSubmitting(false);
                setSubmitStatus('error');
            });
    };

    return (
        <div className='py-20 bg-gray-800'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-2'>
                        Get In <span className='text-blue-500'>Touch</span>
                    </h2>
                    <div className='w-20 h-1 bg-blue-500 mx-auto mb-6'></div>
                    <p className='text-gray-300 max-w-2xl mx-auto'>
                        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                    </p>
                </div>

                <div className='flex flex-col md:flex-row gap-10'>
                    {/* Contact information */}
                    <div className='w-full md:w-5/12' data-aos='fade-right'>
                        <div className='bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700 h-full'>
                            <h3 className='text-2xl font-bold mb-6 text-white'>Contact Information</h3>

                            <div className='space-y-6'>
                                <div className='flex items-start'>
                                    <div className='bg-blue-500/20 p-3 rounded-full mr-4'>
                                        <i className='fas fa-map-marker-alt text-blue-400'></i>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-white mb-1'>Location</h4>
                                        <p className='text-gray-400'>Kolkata, India</p>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div className='bg-blue-500/20 p-3 rounded-full mr-4'>
                                        <i className='fas fa-envelope text-blue-400'></i>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-white mb-1'>Email</h4>
                                        <a
                                            href='mailto:anirudha.dey.official@gmail.com'
                                            className='text-gray-400 hover:text-blue-400 transition-colors'
                                        >
                                            anirudha.dey.official@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div className='bg-blue-500/20 p-3 rounded-full mr-4'>
                                        <i className='fas fa-phone text-blue-400'></i>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-white mb-1'>Phone</h4>
                                        <a
                                            href='tel:+916296582411'
                                            className='text-gray-400 hover:text-blue-400 transition-colors'
                                        >
                                            +91 6296582411
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className='mt-10'>
                                <h4 className='font-semibold text-white mb-4'>Connect With Me</h4>
                                <div className='flex space-x-4'>
                                    <a
                                        href='#'
                                        className='bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full text-gray-400 hover:text-blue-400 transition-all duration-300'
                                    >
                                        <i className='fab fa-linkedin-in'></i>
                                    </a>
                                    <a
                                        href='#'
                                        className='bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full text-gray-400 hover:text-blue-400 transition-all duration-300'
                                    >
                                        <i className='fab fa-github'></i>
                                    </a>
                                    <a
                                        href='#'
                                        className='bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full text-gray-400 hover:text-blue-400 transition-all duration-300'
                                    >
                                        <i className='fab fa-twitter'></i>
                                    </a>
                                    <a
                                        href='#'
                                        className='bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full text-gray-400 hover:text-blue-400 transition-all duration-300'
                                    >
                                        <i className='fab fa-dribbble'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className='w-full md:w-7/12' data-aos='fade-left'>
                        <div className='bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700'>
                            <h3 className='text-2xl font-bold mb-6 text-white'>Send Me A Message</h3>

                            {submitStatus === 'success' && (
                                <div className='mb-6 bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded'>
                                    <div className='flex items-center'>
                                        <i className='fas fa-check-circle mr-2'></i>
                                        <span>Thank you for your message! I'll get back to you soon.</span>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div className='form-group'>
                                        <label htmlFor='name' className='block text-gray-400 mb-2'>
                                            Your Name
                                        </label>
                                        <input
                                            type='text'
                                            id='name'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='email' className='block text-gray-400 mb-2'>
                                            Your Email
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='subject' className='block text-gray-400 mb-2'>
                                        Subject
                                    </label>
                                    <input
                                        type='text'
                                        id='subject'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        required
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='message' className='block text-gray-400 mb-2'>
                                        Your Message
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows='5'
                                        className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none'
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type='submit'
                                        disabled={isSubmitting}
                                        className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 flex items-center ${
                                            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <circle
                                                        className='opacity-25'
                                                        cx='12'
                                                        cy='12'
                                                        r='10'
                                                        stroke='currentColor'
                                                        strokeWidth='4'
                                                    ></circle>
                                                    <path
                                                        className='opacity-75'
                                                        fill='currentColor'
                                                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                                    ></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <i className='fas fa-paper-plane mr-2'></i>
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
