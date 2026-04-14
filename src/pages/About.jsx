import React from 'react';
import Button from "../components/ui/Button"; 
import StatsSection from "../sections/home/StatsSection";
import TeamSection from "../sections/home/TeamSection";
import BrandLogos from "../sections/home/BrandLogos";
import ContactCTA from "../sections/home/ContactCTA";
import Footer from "../components/layout/Footer";

export default function AgencyHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Top Indicator */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-16 max-w-5xl">
            We’re a Full Service Creative And Digital Agency, Working Globally With Largest Brands.
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Button */}
           <div className="flex-shrink-0">
  {/* Apply the padding directly to the Button component */}
  <Button 
    className="pl-[31px]" 
    label="Trends & Technology ↗" 
    href="/trends" 
  />
</div>

            {/* Description */}
            <div className="max-w-md text-gray-600 text-lg leading-relaxed">
              <p>
                Think of the world's most iconic and successful brands easily findable,
                impactful, interactional and exceptional designs. Our story takes
                beginning in 2013.
              </p>
            </div>

            {/* Award Badge */}
            <div className="ml-auto hidden md:block">
              <div className="border border-gray-200 p-6 rounded-full text-center">
                <span className="block text-xs font-bold uppercase tracking-widest">Best</span>
                <span className="block text-xl font-bold">STUDIO</span>
                <span className="block text-xs font-bold uppercase tracking-widest">Award 2020</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* OUR STORY SECTION (Reference Image Section) */}
      <section className="py-28 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

          {/* Left Side */}
          <div>
            <p className="text-sm text-gray-500 mb-4">Digital Studio</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Our story
            </h2>
          </div>

          {/* Right Side */}
          <div className="border-l border-gray-300 pl-12 text-gray-600 text-lg leading-relaxed space-y-6">
            <p>
              Your brand is the most important asset in your company let our team
              of professionals help you with a good strategy took the runway next
              with an edgy collection featuring dyed denim pieces. The collection
              included patchwork denim, a trend that has recently exploded in
              younger generations.
            </p>

            <p>
              Playing on aspects of sustainability, the pieces appeared to be
              upcycled to establish dimension and flair. This take on grunge and
              streetwear took sustainable fashion to an entirely new level.
              Our specialized team of researchers, strategists, designers,
              developers, and project managers work with streamlined processes
              to break through organizational roadblocks.
            </p>
          </div>

        </div>
      </section>
      
      <StatsSection />
      
      <TeamSection />
      
      <BrandLogos />
        
        <ContactCTA />
        
        <Footer />  
    </>
  );
}