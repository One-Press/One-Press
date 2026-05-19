import React from "react";
import Footer from "../components/layout/Footer";
import ContactCTA from "../sections/home/ContactCTA";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Privacy Policy
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-10 max-w-5xl">
            Your Privacy Matters To Us.
          </h1>

          <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
            At One Press Solutions, we respect your privacy and are committed to
            protecting your personal information when you use our website,
            services, or contact us for business inquiries.
          </p>
        </div>
      </section>

      <section className="py-28 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <p className="text-sm text-gray-500 mb-4">Our Policy</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Privacy policy
            </h2>
          </div>

          <div className="border-l border-gray-300 pl-12 text-gray-600 text-lg leading-relaxed space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Information We Collect
              </h3>
              <p>
                We may collect your name, email address, phone number, company
                details, project requirements, and any other information you
                provide through our contact forms or direct communication.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                How We Use Your Information
              </h3>
              <p>
                We use your information to respond to inquiries, provide our
                services, improve our website, communicate project updates, and
                deliver a better client experience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Data Protection
              </h3>
              <p>
                We take reasonable steps to protect your personal information
                from unauthorized access, misuse, loss, or disclosure. However,
                no online platform can guarantee complete security.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sharing Information
              </h3>
              <p>
                We do not sell or rent your personal information. We may share
                limited information only when required to deliver services,
                comply with legal obligations, or protect our business rights.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cookies
              </h3>
              <p>
                Our website may use cookies or similar technologies to improve
                performance, analyze traffic, and enhance user experience. You
                can disable cookies through your browser settings.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Contact Us
              </h3>
              <p>
                If you have any questions about this Privacy Policy, you can
                contact us at{" "}
                <a
                  href="mailto:onepresssolutions@gmail.com"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  onepresssolutions@gmail.com
                </a>
                .
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