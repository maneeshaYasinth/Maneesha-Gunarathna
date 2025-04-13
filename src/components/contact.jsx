import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import TrailingDotGrid from './TrailingDotGrid';

export default function Connect() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { name, email, subject, message },
      import.meta.env.VITE_EMAILJS_USER_ID
    ).then(() => {
      alert("Message sent successfully!");
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setLoading(false);
    }).catch((err) => {
      console.error("Email send error:", err);
      alert("Failed to send message.");
      setLoading(false);
    });
  };

  return (
    <div id='Connect' className="relative min-h-screen text-white bg-black overflow-hidden flex flex-col items-center justify-center pt-16 px-4">
      <div className="absolute inset-0 z-1 pointer-events-none">
        <TrailingDotGrid className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-orange-500">Connect</h1>
        <p className="text-xl text-center mb-12">Connect with me through social media and other communication channels.</p>

        {/* Form and Social Links Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-xl mb-4">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-lg p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xl mb-4">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-lg p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="subject" className="block text-xl mb-4">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter your subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full text-lg p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-xl mb-4">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-lg p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition min-h-[200px] resize-y"
              />
            </div>

            <div className="flex justify-center md:justify-start mb-4">
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading ? 'bg-gray-500' : 'bg-orange-500 hover:bg-orange-600'
                } text-black font-bold text-xl px-12 py-4 rounded-lg cursor-pointer transition duration-300 transform hover:scale-105`}
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <SocialLink platform="Email" value="maneeshayasinthgunarthna@gmail.com" href="mailto:maneeshayasinthgunarthna@gmail.com" icon="✉️" />
            <SocialLink platform="GitHub" value="maneeshaYasinth" href="https://github.com/maneeshaYasinth" icon="💻" />
            <SocialLink platform="LinkedIn" value="Maneesha Gunarthna" href="#" icon="🔗" />
            <SocialLink platform="X (Twitter)" value="Maneesha Gunarthna" href="#" icon="🐦" />
            <SocialLink platform="Instagram" value="Maneesha Gunarthna" href="#" icon="📷" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ platform, value, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition duration-300 hover:text-orange-400"
    >
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-bold">{platform}</div>
      <div className="text-sm opacity-80">{value}</div>
    </a>
  );
}
