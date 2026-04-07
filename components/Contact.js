export default function Contact({ heading, email, phone, address }) {
  return (
    <section id="contact" className="py-20 px-6 bg-stone-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">{heading}</h2>
        <div className="flex flex-col gap-4 text-lg text-stone-300">
          {email && (
            <p>
              <span className="text-amber-400 font-semibold">Email: </span>
              <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                {email}
              </a>
            </p>
          )}
          {phone && (
            <p>
              <span className="text-amber-400 font-semibold">Phone: </span>
              <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                {phone}
              </a>
            </p>
          )}
          {address && (
            <p>
              <span className="text-amber-400 font-semibold">Address: </span>
              {address}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
