import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form className="w-full">
      <div className="form-group mb-8 w-full">
        <label htmlFor="name" className="text-xl">
          Your Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-2xl p-3 text-gray-600 bg-gray-900 outline-none border-none rounded-lg mt-4"
          />
        </label>
      </div>
      <div className="form-group mb-8 w-full">
        <label htmlFor="email" className="text-xl">
          Your Email
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-2xl p-3 text-gray-600 bg-gray-900 outline-none border-none rounded-lg mt-4"
          />
        </label>
      </div>
      <div className="form-group mb-8 w-full">
        <label htmlFor="message" className="text-xl">
          Your message
          <textarea
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full text-2xl p-3 text-gray-600 bg-gray-900 outline-none border-none rounded-lg mt-4 min-h-[250px] resize-y"
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-gray-600 text-black text-2xl inline-block outline-none border-none px-16 py-3 rounded-lg cursor-pointer"
      >
        Send
      </button>
    </form>
  );
}
