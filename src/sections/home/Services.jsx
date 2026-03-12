import React, { useState } from "react";
import Button from "@/components/ui/Button"; 
export default function Services() {
  const services = [
    {
      id: "01",
      title: "Web Development",
      desc: "We build fast, responsive, and modern websites using React, Vite, and Tailwind CSS.",
      image: "/servicesImages/web.webp",
    },
    {
      id: "02",
      title: "UI/UX Design",
      desc: "We create intuitive and beautiful interfaces that users love to interact with.",
      image: "/servicesImages/uiux.webp",
    },
    {
      id: "03",
      title: "Digital Marketing",
      desc: "We boost your brand presence online with effective marketing strategies.",
      image: "/servicesImages/digital-marketing.webp",
    },
    {
      id: "04",
      title: "Branding",
      desc: "We develop strong brand identities that resonate with your audience.",
      image: "/servicesImages/branding.webp",
    },
  ];

  const [activeImage, setActiveImage] = useState("/servicesImages/web.webp");

  return (
    
    <section id="services" className="relative py-20 bg-black text-white px-8 md:px-20">

      {/* TOP HEADER ROW */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
        {/* Left: Heading */}
        <div className="lg:w-1/4 text-left">
          <h2 className="text-4xl font-bold">
            Solution we <span className="text-green-500">provide</span>
          </h2>
        </div>

        {/* Center: Description */}
        <div className="lg:w-2/4 text-center">
          <p className="text-gray-300 text-lg md:text-xl">
            With every single one of our clients we bring forth a deep passion
            for creative problem solving, innovations, forward-thinking brands, and pushing boundaries.
          </p>
        </div>

        {/* Right: Reusable GSAP Button */}
        <div className="lg:w-1/4 flex justify-end">
          <Button label="View All Services" />
        </div>
      </div>

      {/* MAIN SERVICES GRID */}
      <div className="grid lg:grid-cols-[30%_70%] gap-12 items-start">

        {/* LEFT IMAGE */}
        <div className="sticky top-28">
          <img
            src={activeImage}
            alt="Service"
            className="w-[250px] md:w-[300px] rounded-lg object-cover shadow-lg transition-all duration-300"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-8">

          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-2 cursor-pointer"
              onMouseEnter={() => setActiveImage(service.image)}
              onMouseLeave={() => setActiveImage("/servicesImages/web.webp")}
            >
              {/* Horizontal line */}
              <div className="w-full h-[1px] bg-gray-600"></div>

              {/* Service Row */}
              <div className="grid grid-cols-[1fr_1fr] gap-6 items-center py-2">
                <h3 className="text-2xl font-bold">
                  <span className="opacity-50 mr-2">{service.id}</span>
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            </div>
          ))}

          {/* Optional: Line after last service */}
          <div className="w-full h-[1px] bg-gray-600"></div>

        </div>

      </div>

    </section>
  );
}