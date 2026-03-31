import React from 'react';
import Button from "../components/ui/Button"; 
import Footer from "../components/layout/Footer";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <h1 className="text-7xl md:text-8xl font-bold text-black leading-none">
            Let’s get in <br /> touch
          </h1>
          <div className="flex items-start lg:justify-end">
            <p className="text-gray-600 text-lg max-w-sm">
              Great! We're excited to hear from you and let's start something special together. call us for any inquiry.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-20">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Don't be afraid man ! <br /> say hello
              </h2>
              <div className="space-y-4 text-xl">
                <p className="hover:text-[#7CFC00] transition-colors cursor-pointer">
                  (+1) 708 – 630 – 6059
                </p>
                <p className="hover:text-[#7CFC00] transition-colors cursor-pointer">
                  onepresssolutions@gmail.com
                </p>
                <p className="text-gray-500 max-w-xs">
                  Valentin, Street Road 24, New York, USA – 67452
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            action="https://formspree.io/f/xpqorlzv"
            method="POST"
            className="space-y-10"
          >
            {/* Hidden subject */}
            <input type="hidden" name="_subject" value="New Contact Message" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              <div className="border-b border-gray-300 py-4">
                <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>

              <div className="border-b border-gray-300 py-4">
                <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              <div className="border-b border-gray-300 py-4">
                <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>

              <div className="border-b border-gray-300 py-4">
                <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>

            </div>

            <div className="border-b border-gray-300 py-4">
              <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                Message *
              </label>
              <textarea
                rows="4"
                name="message"
                required
                className="w-full bg-transparent outline-none text-lg resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-10 flex justify-center lg:justify-start">
              <button
                type="submit"
                className="px-8 py-4 bg-black text-white rounded-full text-lg hover:bg-[#7CFC00] hover:text-black transition-all"
              >
                Send Message ↗
              </button>
            </div>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}