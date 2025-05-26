import { Calendar, Clock, MapPin } from "lucide-react";

function HeroSection() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-5xl font-bold">kembangkan skill ngodingmu, bersama kami di SINTAK POLTEK </h1>
          <p className="text-gray-600 text-2xl"> kalau penasaran klik di bawah ini !</p>
          <div className="flex gap-4 flex-col text-center lg:flex-row">
            <a href="" className="bg-red-500 px-4 py-2 text-white rounded-md">
              pelajari selengkapnya
            </a>
            <a href="" className="bg-red-500 border border-gray-400 px-4 py-2 rounded-md text-white">
              sign in
            </a>
          </div>
          <div className="flex gap-2">
            <Calendar />
            <p>rabu, 21 MEI 2025</p>
            <Clock />
            <p>13.30-15.30</p>
            <MapPin />
            <p>kampus polsri</p>
          </div>
        </div>
        <img className="w-80" src="adit.png" alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
