const STATS = [
  { value: "25", label: "Project completed" },
  { value: "8", label: "Happy customers" },
  { value: "15", label: "Years experiences" },
  { value: "98", label: "Awards achievement" },
];

export default function StatsSection() {
  return (
    <section className="flex flex-wrap justify-center py-24 bg-white">
      {STATS.map((item, i) => (
        <div 
          key={i} 
          className={`w-64 h-64 border border-gray-100 rounded-full flex flex-col justify-center items-center bg-white shadow-sm transition-transform hover:-translate-y-2 hover:z-20 ${i !== 0 ? '-ml-16' : ''}`}
        >
          <h2 className="text-5xl font-bold text-gray-800">{item.value}</h2>
          <p className="text-gray-500 mt-2 text-sm">{item.label}</p>
        </div>
      ))}
    </section>
  );
}