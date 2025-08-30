'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We&apos;ll get back to you within 2 business days.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          organization: '',
          projectDetails: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container-section py-16">
      <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
      <p className="mt-2 text-sm text-zinc-600 max-w-2xl">
        Tell us about your project. We&apos;ll get back within 2 business days.
      </p>

      {submitStatus && (
        <div className={`mt-6 p-4 rounded-md ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded-md border border-zinc-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" 
          placeholder="Name *" 
        />
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded-md border border-zinc-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" 
          placeholder="Email *" 
        />
        <input 
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="rounded-md border border-zinc-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:col-span-2" 
          placeholder="Organization (optional)" 
        />
        <textarea 
          rows={5} 
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          required
          className="rounded-md border border-zinc-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:col-span-2" 
          placeholder="Project details *" 
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-600 px-6 text-sm font-medium text-white shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed sm:col-span-2"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}


