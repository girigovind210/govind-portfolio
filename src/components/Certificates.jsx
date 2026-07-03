import {
  FaAws,
  FaJava,
  FaMicrosoft,
  FaCloud,
} from "react-icons/fa";

const certificates = [
  {
    title: "Deloitte Data Analytics",
    issuer: "Forage",
    icon: <FaMicrosoft size={40} className="text-blue-400" />,
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Cloud Clubs",
    icon: <FaAws size={40} className="text-orange-400" />,
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
    title: "AICTE ATAL Training",
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
    <section id="certificates" className="bg-[#050816] py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition-all hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;