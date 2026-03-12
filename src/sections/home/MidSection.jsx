import Button from "../../components/ui/Button";

function MidSection() {
  return (
    <section className="relative py-16 bg-white">
      {/* Grid container: 1 column on mobile, 3 columns on large screens */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] items-center gap-8">
        
        {/* Left Image */}
        <div className="w-full">
          <img
            src="/images/midleft.webp"
            alt="Team Left"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Center Content */}
        <div className="w-full text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            We unlock the potential of your business with creative design
          </h2>
          <p className="text-gray-600 mb-8">
            From traditional PR and thought leadership campaigns to storytelling
            and creative social media management, we’ve got you covered.
          </p>
          <Button label="Get Started" />
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src="/images/meeting.jpg"
            alt="Team Right"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>

      </div>
    </section>
  );
}

export default MidSection;