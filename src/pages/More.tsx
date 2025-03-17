import React, { useState, useRef } from 'react';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import Accordion from '../components/Accordion';
import GrainBackground from '../components/GrainBackground';
import { faqs } from '../data/faqs';
import type { FormData } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const More: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_g2u22ok',
        'template_heat',
        formRef.current,
        '0lGPf6DVnEGSAjCs3'
      );
      
      toast.success('Message sent successfully!');
      setFormData({ email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative pt-24 px-4 sm:px-6 lg:px-8">
      <GrainBackground />
      <div className="max-w-3xl mx-auto relative z-20">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mt-8 mb-16">
          <h1 className="text-4xl font-Audiowide font-bold mb-2 text-white">
            FAQ
          </h1>
          <div className="w-24 h-1 bg-heat-pink mx-auto rounded-full" />
        </div>

        <div className="text-xl text-white text-center mb-8">
          Everything you need to know about HEAT
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 mb-16">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question}>
              {faq.answer}
            </Accordion>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 mb-16 backdrop-blur-sm rounded-xl border border-white/10 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-white">Contact Us</h2>
            <p className="text-white">Can't find what you're looking for? Send us a message!</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full pl-12 pr-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-heat-pink focus:border-heat-pink text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="block w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-heat-pink focus:border-heat-pink text-white placeholder-gray-400"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-heat-pink rounded hover:bg-white hover:text-heat-pink transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-heat-pink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default More;