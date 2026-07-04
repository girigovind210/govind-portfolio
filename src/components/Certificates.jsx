import {
  FaAws,
  FaJava,
  FaMicrosoft,
  FaCloud,
} from "react-icons/fa";

const certificates = [
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Cloud Clubs",
    icon: <FaAws size={40} className="text-orange-400" />,
  },
  {
    title: "Deloitte Data Analytics",
    issuer: "Forage",
    icon: <FaMicrosoft size={40} className="text-blue-400" />,
  },
  {
    title: "SAP ABAP Programming",
    issuer: "SAP",
    icon: <FaCloud size={40} className="text-cyan-400" />,
  },
  {
    title: "Java Programming",
    issuer: "MKCL",
    icon: <FaJava size={40} className="text-red-400" />,
  },
  {
    title: "AICTE ATAL FDP",
    issuer: "AICTE",
    icon: <FaCloud size={40} className="text-green-400" />,
  },
  {
    title: "Campus Ambassador",
    issuer: "Smarted",
    icon: <FaCloud size={40} className="text-purple-400" />,
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-4">
          Certifications
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Professional certifications and achievements that strengthen my
          technical expertise.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.issuer}
              </p>

              <div className="mt-6">
                <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                  Verified Certificate
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;