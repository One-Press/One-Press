import React from "react";
import Footer from "../components/layout/Footer";
import ContactCTA from "../sections/home/ContactCTA";

export default function TermsOfService() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-3 h-3 rounded-full bg-indigo-600"></div>

            <p className="text-sm uppercase tracking-widest text-gray-500">
              Terms Of Service
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-10 max-w-5xl">
            Terms & Conditions For Using Our Services.
          </h1>

          <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
            These Terms of Service govern your use of the One Press Solutions
            website and services. By accessing our website or working with us,
            you agree to comply with these terms.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-28 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          {/* LEFT SIDE */}
          <div>
            <p className="text-sm text-gray-500 mb-4">Legal Information</p>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Terms of service
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="border-l border-gray-300 pl-12 text-gray-600 text-lg leading-relaxed space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Acceptance Of Terms
              </h3>

              <p>
                By accessing this website or using our services, you confirm
                that you agree to these Terms of Service and all applicable
                laws and regulations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Services Provided
              </h3>

              <p>
                One Press Solutions provides digital services including web
                development, branding, SEO, UI/UX design, software solutions,
                digital marketing, and related consulting services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Intellectual Property
              </h3>

              <p>
                All website content, branding, graphics, code, and materials
                are the intellectual property of One Press Solutions unless
                otherwise stated. Unauthorized use or reproduction is strictly
                prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Client Responsibilities
              </h3>

              <p>
                Clients are responsible for providing accurate information,
                project materials, approvals, and timely communication required
                for successful project completion.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Payments & Refunds
              </h3>

              <p>
                Payments for services must be completed according to agreed
                project terms. Refund policies may vary depending on the type
                and progress of the project.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Limitation Of Liability
              </h3>

              <p>
                One Press Solutions shall not be held liable for indirect,
                incidental, or consequential damages resulting from the use of
                our website or services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Changes To Terms
              </h3>

              <p>
                We reserve the right to modify or update these Terms of Service
                at any time without prior notice. Continued use of our website
                indicates acceptance of updated terms.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Contact Information
              </h3>

              <p>
                If you have any questions regarding these Terms of Service,
                please contact us at{" "}
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