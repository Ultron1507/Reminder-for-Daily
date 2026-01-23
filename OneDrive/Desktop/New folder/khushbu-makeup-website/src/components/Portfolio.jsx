const portfolio = [
  "https://images.unsplash.com/photo-1588776814546-d920b2b7f10b?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1600185365845-99f5f1d28d2e?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60",
]

export default function Portfolio() {
  return (
    <section className="py-20 bg-[var(--soft-bg)]">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <h2 className="font-playfair text-3xl md:text-5xl text-[var(--text-dark)]">
            Our <span className="text-[var(--primary)]">Portfolio</span>
          </h2>
          <p className="font-poppins text-[var(--text-muted)] mt-4 max-w-xl mx-auto">
            See some of our recent makeup transformations and creations.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {portfolio.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={img}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[var(--primary)]/30 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-playfair text-lg">View</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
