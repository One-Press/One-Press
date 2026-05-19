import React from "react";
import Footer from "../components/layout/Footer";
import ContactCTA from "../sections/home/ContactCTA";

export default function DataDeletion() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-3 h-3 rounded-full bg-indigo-600"></div>

            <p className="text-sm uppercase tracking-widest text-gray-500">
              Data Deletion
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-10 max-w-5xl">
            Data Deletion Instructions
          </h1>

          <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
            At One Press Solutions, users may request deletion of their
            personal data associated with our services, applications, or
            website at any time.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-28 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          
          {/* LEFT SIDE */}
          <div>
            <p className="text-sm text-gray-500 mb-4">
              User Privacy
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Delete your data
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="border-l border-gray-300 pl-12 text-gray-600 text-lg leading-relaxed space-y-8">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Request Data Deletion
              </h3>

              <p>
                If you would like us to delete your personal data,
                please send a request to our support team using
                the contact information below.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Information To Include
              </h3>

              <p>
                Please include your full name, email address,
                and any relevant account or project information
                so we can identify your records correctly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Processing Time
              </h3>

              <p>
                Data deletion requests are typically processed
                within 7–14 business days after verification
                of the request.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Contact Us
              </h3>

              <p>
                Email us at{" "}
                <a
                  href="mailto:onepresssolutions@gmail.com"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  onepresssolutions@gmail.com
                </a>{" "}
                to request deletion of your data.
              </p>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              Last updated: May 19, 2026
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </>
  );
}