
import React, { useState } from 'react';
import { validateEmail, validatePhone } from '../utils/validators';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'email':
        if (!value) return "Email is required.";
        if (!validateEmail(value)) return "Please enter a valid email address.";
        return undefined;
      case 'phone':
        if (!value) return "Phone number is required.";
        if (!validatePhone(value)) return "Enter a valid SA number (e.g. 082 123 4567).";
        return undefined;
      case 'name':
        if (!value.trim()) return "Name is required.";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation
    // We only show errors if the field has been touched or if it's non-empty (user started typing)
    if (touched[name] || value) {
       const error = validateField(name, value);
       setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
        const error = validateField(key, formData[key as keyof FormData]);
        if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
          name: true,
          email: true,
          phone: true,
          message: true
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTouched({});
      setErrors({});
    }, 1500);
  };

  return (
    <section id="contact-form" className="bg-[#333] rounded-2xl shadow-2xl p-6 md:p-10 mb-16 border border-neutral-700 border-t-[#666] border-b-black/80 no-print scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Context */}
        <div>
          <span className="text-cyan-400 font-bold tracking-wider uppercase text-xs">Professional Service</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">Request Takedown Service</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Don't navigate the legal system alone. Our specialized team offers professional and discreet takedown services to bypass delays and secure your content immediately. We handle the Civil Interdicts and Forensic procedures on your behalf.
          </p>
          
          <div className="bg-[#262626] p-6 rounded-xl border border-neutral-600 shadow-inner">
            <h4 className="text-white font-bold mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Discreet & Confidential
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              We strictly adhere to POPIA regulations. Your case details are encrypted and handled with the utmost sensitivity required for NCII cases.
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          {submitStatus === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center bg-green-900/10 border border-green-900 rounded-xl p-8 text-center animate-fade-in shadow-inner">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Sent</h3>
              <p className="text-gray-400">A takedown specialist will contact you within 2 hours to discuss your case strategy.</p>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="mt-6 text-cyan-400 text-sm hover:text-cyan-300 font-semibold focus:outline-none focus:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name (or Pseudonym)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-[#262626] border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#333] transition-all shadow-inner ${
                    errors.name && touched.name
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-neutral-600 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                  placeholder="Jane Doe"
                />
                {errors.name && touched.name && (
                   <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-[#262626] border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#333] transition-all shadow-inner ${
                      errors.phone && touched.phone
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-neutral-600 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                    placeholder="082 123 4567"
                  />
                  {errors.phone && touched.phone && (
                    <p className="mt-1 text-xs text-red-400 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-[#262626] border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#333] transition-all shadow-inner ${
                      errors.email && touched.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-neutral-600 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Case Brief (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#262626] border border-neutral-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#333] transition-all shadow-inner"
                  placeholder="Describe the nature of the threat or sharing..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all transform flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#333] border-t border-cyan-400/50 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-[0.99]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Request...
                  </span>
                ) : (
                  'Request Takedown Service'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
        