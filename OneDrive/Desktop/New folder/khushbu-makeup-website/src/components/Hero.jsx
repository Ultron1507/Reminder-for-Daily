import bride from "../assets/bride.png"; // ✅ adjust path if needed

export default function Hero() {
  return (
    <section className="min-h-screen bg-softBg flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4 pt-28 items-center">

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h2 className="font-playfair text-3xl md:text-6xl text-gray-800 leading-tight">
            Enhancing Your <br />
            <span className="text-primary">Natural Beauty</span>
          </h2>

          <p className="font-poppins mt-4 text-gray-600 max-w-lg mx-auto md:mx-0">
            Professional Bridal, Engagement & Party Makeup using premium products
            for elegant, timeless looks.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start ">
           <button className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-full transition">
  Book Appointment
</button>


            <button className="border border-primary text-primary px-6 py-3 rounded-full">
              View Portfolio
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center">
          <img
            src={bride}
            alt="Bridal Makeup"
            className="rounded-3xl shadow-lg w-full max-w-sm md:max-w-md"
          />
        </div>

      </div>
    </section>
  );
}
