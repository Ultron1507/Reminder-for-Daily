export default function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="absolute inset-0 bg-gradient-to-t from-pink-100/60 to-transparent"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-14 text-center">

        <h3 className="font-playfair text-3xl text-gray-900 mb-4">
          Khushbu Dua
        </h3>

        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Luxury bridal & occasion makeup — crafted to enhance your natural elegance.
        </p>

        <div className="flex justify-center gap-8 text-xl text-gray-700 mb-8">
          <i className="ri-instagram-line hover:text-pink-500 transition cursor-pointer"></i>
          <i className="ri-whatsapp-line hover:text-pink-500 transition cursor-pointer"></i>
          <i className="ri-facebook-circle-line hover:text-pink-500 transition cursor-pointer"></i>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Khushbu Dua. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
