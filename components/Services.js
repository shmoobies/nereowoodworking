export default function Services({ heading, services }) {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-stone-800 text-center mb-14">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services?.map((service, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-md bg-stone-50 flex flex-col">
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 object-cover"
                />
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed flex-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
