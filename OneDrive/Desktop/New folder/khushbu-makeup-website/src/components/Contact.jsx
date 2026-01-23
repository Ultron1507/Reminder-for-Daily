export default function Contact() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Soft background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/70 via-white/60 to-pink-100/70"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-6xl text-gray-900">
            Book Your <span className="text-[var(--primary)]">Glow</span>
          </h2>
          <p className="mt-5 text-gray-600 max-w-xl mx-auto">
            Luxury bridal & occasion makeup crafted with precision, passion and premium products.
          </p>
        </div>

        {/* CARD */}
        <div className="grid md:grid-cols-2 gap-14 bg-white/70 backdrop-blur-xl rounded-[40px] p-10 shadow-[0_20px_60px_rgba(236,72,153,0.15)]">

          {/* LEFT INFO */}
          <div className="space-y-8">
            <h3 className="font-playfair text-3xl text-gray-900">
              Let’s Talk Beauty ✨
            </h3>

            <p className="text-gray-600">
              Reach out for bridal bookings, party looks or personalized consultations.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <i className="ri-phone-line text-2xl text-pink-500"></i>
                <span className="text-gray-800 font-medium">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center gap-4">
                <i className="ri-whatsapp-line text-2xl text-pink-500"></i>
                <span className="text-gray-800 font-medium">
                  WhatsApp Booking Available
                </span>
              </div>

              <div className="flex items-center gap-4">
                <i className="ri-map-pin-line text-2xl text-pink-500"></i>
                <span className="text-gray-800 font-medium">
                  Jaipur, Rajasthan
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/80 rounded-2xl px-6 py-4 outline-none shadow-sm focus:ring-2 focus:ring-pink-300"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-white/80 rounded-2xl px-6 py-4 outline-none shadow-sm focus:ring-2 focus:ring-pink-300"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your occasion"
              className="w-full bg-white/80 rounded-2xl px-6 py-4 outline-none shadow-sm focus:ring-2 focus:ring-pink-300"
            ></textarea>

            <button className="w-full rounded-full py-4 text-white font-medium tracking-wide bg-gradient-to-r from-pink-500 to-pink-400 hover:opacity-90 transition">
              Book Appointment
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
