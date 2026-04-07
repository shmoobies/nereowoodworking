export default function About({ heading, text, image }) {
  return (
    <section id="about" className="py-20 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {image && (
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src={image}
              alt="About Nereo Woodworking"
              className="rounded-lg shadow-lg object-cover w-full h-80 md:h-96"
            />
          </div>
        )}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">{heading}</h2>
          <p className="text-stone-600 text-lg leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  )
}
