import React from 'react';
import Button from "../../components/ui/Button";


export default function ContactCTA() {
  return (
    <section className="py-32 bg-white flex flex-col items-center justify-center text-center px-6">
      {/* Small Badge */}
      <div className="px-6 py-2 border border-gray-200 rounded-full text-xs font-semibold uppercase tracking-widest mb-8">
        WORK WITH US
      </div>

      {/* Headline */}
      <h2 className="text-4xl md:text-6xl font-medium text-gray-900 max-w-2xl mb-16 leading-tight">
        We would love to hear more about your project
      </h2>

      {/* Circular CTA Button */}
      <div className="flex justify-center">
        <Button label="Let's Talk" href="/contact" />
      </div>
    </section>
  );
}