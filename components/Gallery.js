export default function Gallery({ heading, images }) {
  if (!images || images.length === 0) return null

  return (
    <section id="gallery" className="py-20 px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-stone-800 text-center mb-14">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption || `Gallery image ${i + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-4 py-2">
                    {item.caption}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
