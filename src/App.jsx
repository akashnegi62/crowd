import {
  Search,
  ArrowRight,
  Hammer,
  Wrench,
  Factory,
  Building2,
  Layers,
  Home,
  Ellipsis,
} from "lucide-react";

// Combined single default export — HomePage
export default function HomePage() {
  const stats = [
    { label: "No. of Projects", value: "5000" },
    { label: "Years of Expertise", value: "15+" },
    { label: "Customer Reviews", value: "★★★★☆" },
  ];

  const categories = [
    { label: "Carpenter", icon: <Hammer className="h-8 w-8" /> },
    { label: "Plumber", icon: <Wrench className="h-8 w-8" /> },
    { label: "Fabricator", icon: <Factory className="h-8 w-8" /> },
    { label: "Civil", icon: <Building2 className="h-8 w-8" /> },
    { label: "Tiles", icon: <Layers className="h-8 w-8" /> },
    { label: "Terrace Design", icon: <Home className="h-8 w-8" /> },
    { label: "Interior", icon: <Home className="h-8 w-8" /> },
    { label: "Others", icon: <Ellipsis className="h-8 w-8" /> },
  ];

  const projectStages = [
    { label: "Consultation", img: "/pro1.jpg" },
    { label: "Design & Planning", img: "/pro2.jpg" },
    { label: "Execution", img: "/pro3.jpg" },
    { label: "Final Review & Handover", img: "/pro4.jpg" },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between py-6 px-8 shadow-sm bg-white">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-green-700">✦</span> Shapeurvision
        </div>
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-700">
            Home
          </a>
          <a href="#" className="hover:text-green-700">
            About Us
          </a>
          <a href="#" className="hover:text-green-700">
            Services
          </a>
          <a href="#" className="hover:text-green-700">
            Blogs
          </a>
        </nav>
        <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 px-70 py-20 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-snug">
            Crafting Spaces. Building Trust.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We provide complete carpentry, plumbing, fabrication, civil work,
            tile installation, and interior solutions with precision,
            reliability, and unmatched craftsmanship.
          </p>
          <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-800 inline-flex items-center gap-2">
            Get Started →
          </button>
        </div>

        <div className="h-[40vh] w-[30vw] bg-amber-100 mt-5 rounded-xl overflow-hidden">
          <img className="h-full w-full object-cover" src="/hero.jpg" alt="" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto mt-10 py-10 px-6 rounded-2xl bg-gray-100 grid md:grid-cols-3 gap-6 text-center">
        {stats.map((s, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold">{s.label}</h3>
            <p className="text-xl mt-2 font-bold">{s.value}</p>
          </div>
        ))}
      </section>

      {/* Search */}
      <section className="max-w-xl mx-auto mt-12 flex items-center gap-3 justify-center">
        <Search className="h-6 w-6 text-gray-600" />
        <input
          type="text"
          placeholder="Enter Pincode"
          className="border px-4 py-2 rounded-lg w-48 focus:outline-none"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          Go <ArrowRight className="h-5 w-5" />
        </button>
      </section>

      {/* Category Grid */}
      <section className="max-w-5xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
        {categories.map((c, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md transition cursor-pointer"
          >
            {c.icon}
            <span className="mt-3 font-medium text-lg">{c.label}</span>
          </div>
        ))}
      </section>

      {/* Project Journey */}
      <section className="max-w-6xl mx-auto mt-20 px-4 py-30">
        <h2 className="text-3xl font-bold text-center mb-10">
          Project Journey
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projectStages.map((stage, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl h-[40vh] flex items-center justify-center bg-gray-100 shadow-sm overflow-hidden"
            >
              <img
                className="h-full w-full object-cover"
                src={stage.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
