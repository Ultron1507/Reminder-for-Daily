import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // 🔒 Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${open ? "bg-softBg" : "bg-softBg/80 backdrop-blur-md"} shadow-sm`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

          {/* LOGO */}
          <h1 className="font-playfair text-xl md:text-2xl text-gray-800">
            Khushbu Dua
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 font-poppins text-sm text-gray-700">
            {["Home", "About", "Services", "Portfolio", "Reviews", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-primary cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* DESKTOP CTA */}
          <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-full text-sm bg-pink-500">
            Book Appointment
          </button>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-2xl text-gray-800 z-50"
            onClick={() => setOpen(!open)}
          >
            <i className={open ? "ri-close-line" : "ri-menu-3-line"}></i>
          </button>
        </div>
      </nav>

      {/* BACKDROP OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[72px] left-0 w-full bg-softBg z-50
        transition-all duration-300 ease-in-out
        ${open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col gap-5 px-6 py-6 font-poppins text-gray-700">
          {["Home", "About", "Services", "Portfolio", "Reviews", "Contact"].map(
            (item) => (
              <li
                key={item}
                className="text-lg hover:text-primary cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {item}
              </li>
            )
          )}

          <button className="mt-4 bg-primary text-white py-3 rounded-full">
            Book Appointment
          </button>
        </ul>
      </div>
    </>
  )
}
