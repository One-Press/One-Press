const STATS = [
  { value: "25", label: "Project completed" },
  { value: "8", label: "Happy customers" },
  { value: "15", label: "Years experiences" },
  { value: "98", label: "Awards achievement" },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((item, i) => (
          <div 
            key={i} 
            className="flex flex-col justify-center items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">{item.value}+</h2>
            <p className="text-gray-500 mt-2 text-sm font-medium uppercase tracking-wide text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}