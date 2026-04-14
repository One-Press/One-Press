import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants for floating images
  const floatVariants = {
    animate: {
      y: [0, -15, 0], // smaller movement for subtle floating
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-black overflow-hidden px-6 py-16 lg:px-20">
      
      {/* --- Glass & Gradient Blobs Background --- */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-1/4 w-12 h-12 border-2 border-purple-300 rounded-full opacity-50"
      />
      <div className="absolute top-1/3 right-1/4 w-8 h-4 bg-lime-400 rounded-full rotate-45 blur-[1px]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* --- Left Content: Text --- */}
        <div className="order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white-900 dark:text-white leading-tight mb-4 lg:mb-6">
              Digital <br /> 
              <span className="relative text-purple-600">
                Solution
                <span className="absolute -left-2 top-1/2 w-1 h-1 bg-purple-600 rounded-full" />
              </span>
            </h1>
            
            <div className="flex items-start gap-3 max-w-md">
              <div className="w-12 h-[2px] bg-white-400 mt-2" />
              <p className="text-white-600 dark:text-white-300 text-sm md:text-base leading-relaxed">
                We design digital experiences that enrich human lives and help grow your business globally.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- Right Content: Image Mosaic --- */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2">
          
          {/* Top Left Image */}
          <motion.div 
            variants={floatVariants}
            animate="animate"
            className="absolute top-0 left-0 w-48 h-60 md:w-56 md:h-72 rounded-t-full rounded-bl-full overflow-hidden border-4 border-white shadow-xl z-20"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600" 
              alt="Team Meeting" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Middle Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-1/4 right-0 w-56 h-72 md:w-64 md:h-80 rounded-[60px] overflow-hidden border-4 border-white shadow-lg z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600" 
              alt="Office Space" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Bottom Left Image */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-0 left-8 w-40 h-56 md:w-48 md:h-64 rounded-tr-[80px] rounded-b-2xl overflow-hidden border-4 border-white shadow-xl z-30"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600" 
              alt="Designer working" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Decorative Dotted Grid */}
          <div className="absolute bottom-16 right-1/4 w-16 h-16 bg-grid-slate-200 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))] opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;