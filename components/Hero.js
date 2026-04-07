export default function Hero({ heading, subheading, buttonText, image }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white text-center px-6"
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundColor: image ? undefined : '#292524',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          {heading}
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 mb-10">
          {subheading}
        </p>
        {buttonText && (
          <a
            href="#services"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded transition-colors text-lg"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  )
}
