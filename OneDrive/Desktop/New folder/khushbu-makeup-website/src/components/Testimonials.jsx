const reviews = [ 
  {
    name: "Anita Sharma",
    feedback: "Khushbu did an amazing bridal makeup for my wedding. Loved the elegance!",
    img: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Riya Patel",
    feedback: "The engagement makeup was flawless and lasted all day. Highly recommend!",
    img: "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Simran Kaur",
    feedback: "Professional, friendly, and very creative. My party look was perfect!",
    img: "https://plus.unsplash.com/premium_photo-1694557636097-5969bae91ba8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-[var(--soft-bg)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <h2 className="font-playfair text-3xl md:text-5xl text-[var(--text-dark)]">
            What <span className="text-[var(--primary)]">Clients Say</span>
          </h2>
          <p className="font-poppins text-[var(--text-muted)] mt-4 max-w-xl mx-auto">
            Hear from our happy clients about their experiences.
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="testimonial-card text-center bg-white"
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="font-poppins text-[var(--text-dark)] mb-3">
                "{review.feedback}"
              </p>
              <h4 className="font-playfair text-[var(--primary)] text-lg">
                {review.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
