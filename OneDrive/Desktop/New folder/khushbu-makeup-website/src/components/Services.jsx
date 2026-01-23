const services = [
  {
    title: "Bridal Makeup",
    desc: "Elegant and flawless bridal looks using premium products.",
    img: "https://images.unsplash.com/photo-1710494421400-50830b0fa15d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "Engagement Makeup",
    desc: "Soft glam makeup to enhance your natural beauty.",
    img: "https://images.unsplash.com/photo-1523264114838-feca761983c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Party Makeup",
    desc: "Bold, trendy looks perfect for parties and events.",
    img: "https://images.unsplash.com/photo-1736849816780-6ca0730061a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HD Makeup",
    desc: "High-definition makeup for camera-perfect results.",
    img: "https://images.unsplash.com/photo-1736849865130-526264fa0067?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
  },
  {
    title: "Hair Styling",
    desc: "Elegant hairstyles to complete your look.",
    img: "https://images.unsplash.com/flagged/photo-1607795206125-96977641af8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "Makeup Consultation",
    desc: "Personalized consultation for your perfect style.",
    img: "https://plus.unsplash.com/premium_photo-1685080293374-e4a97d53c7c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <h2 className="font-playfair text-3xl md:text-5xl text-[var(--text-dark)]">
            Our <span className="text-[var(--primary)]">Services</span>
          </h2>
          <p className="font-poppins text-[var(--text-muted)] mt-4 max-w-xl mx-auto">
            Professional makeup services crafted to bring out your best look
            for every special occasion.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* IMAGE */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              {/* PINK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/60 to-transparent group-hover:from-[var(--primary)]/70 transition-all duration-300"></div>

              {/* TEXT */}
              <div className="absolute inset-0 flex flex-col justify-end items-center p-6 text-center">
                <h3 className="font-playfair text-xl text-white mb-2">
                  {service.title}
                </h3>
                <p className="font-poppins text-white/90 text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
