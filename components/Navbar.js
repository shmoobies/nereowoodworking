import Link from 'next/link'

export default function Navbar({ siteTitle }) {
  return (
    <nav className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold tracking-wide">
        {siteTitle || 'Nereo Woodworking'}
      </Link>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
        <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
        <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a></li>
        <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
      </ul>
    </nav>
  )
}
