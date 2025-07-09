import { useState, useEffect, useRef } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const vantaRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Dynamically load Vanta dependencies
    const loadVanta = async () => {
      const THREE = await import('three');
      const VANTA = await import('vanta/dist/vanta.globe.min');
      
      if (!vantaRef.current) {
        vantaRef.current = VANTA.default({
          el: backgroundRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x4a90e2,
          color2: 0x7abfff,
          backgroundColor: 0x1a1a1a,
          size: 1.50,
        });
      }
    };

    loadVanta();

    // Cleanup
    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div ref={backgroundRef} className="fixed top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-2xl shadow-xl">
          {status.message && (
            <div className={`mb-6 p-4 rounded-lg ${
              status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {status.message}
            </div>
          )}

          <h1 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h1>

          <div className="space-y-4 mb-8">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:translate-x-2 transition-transform">
              <svg className="w-6 h-6 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-600">1 800 234 3432</span>
            </div>
            
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:translate-x-2 transition-transform">
              <svg className="w-6 h-6 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-600">hello@interio.com</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="">Select Subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="billing">Billing Question</option>
              <option value="partnership">Partnership Opportunity</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
              rows="4"
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;