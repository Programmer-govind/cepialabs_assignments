'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Replace with your actual IDs
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'gautamgovind448@gmail.com', // Your email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Let's Connect</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            I'm always open to connecting with like-minded individuals and exploring opportunities to collaborate.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Send a Message</h3>
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your message"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📧</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a href="mailto:gautamgovind448@gmail.com" className="text-sm text-blue-600 hover:text-blue-800">
                      gautamgovind448@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💼</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/gautam-govind-b92036256" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800">
                      linkedin.com/in/gautam-govind-b92036256
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🐦</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Twitter</p>
                    <a href="https://x.com/GautamGovind448?t=Qo5JHUg2vC3Yzi5OlZt74A&s=09" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800">
                      @GautamGovind448
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-500">Patna, Bihar, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}