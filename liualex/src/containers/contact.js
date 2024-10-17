import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formUrl = 'https://formspree.io/f/xgegylkb'; 
    
    const response = await fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div id = "contact" className="relative flex flex-col items-center justify-center min-h-screen">
      {submitted ? (
        <div className="text-cyan-500 text-lg text-center">
          thank you! your message has been sent.
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-md rounded-lg p-8 space-y-4 w-full max-w-lg"
        >
          <div>
            <label htmlFor="name" className="block text-cyan-500">name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-cyan-500">email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-cyan-500">message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-500 text-white px-4 py-2 rounded-md w-full"
          >
            submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
