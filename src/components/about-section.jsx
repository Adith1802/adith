import { Book, BookmarkCheck, Rocket } from 'lucide-react'
import React from 'react'

const datakonten = [
  {
    ikon: Rocket,
        judul: "pembelajaran praktis",
    deskripsi: "dapatkan pengalaman menarik dengan belajar SINTAK"
    },
    {
        ikon: Book,
        judul: "relasi yang luas",
        deskripsi: "Dapatkan teman baru di program sintak."
    },
    {
        ikon: BookmarkCheck,
        judul: "penawaran menarik",
        deskripsi: "dapatkan penawaran menarik di SINTAK."
    }
];

function AboutSection() {
    return (
      <section className="py-32">
        
        <div className="flex  flex-col px-4 items-center justify-center max-w-7xl mx-auto">
          {/* Baggian judul*/}
          <div className="text-center space-y-2">
            <h1 className="font-bold text-6xl md:text-6xl">Mengenal lebih dekat SINTAK</h1>
            <p className="text-gray-500">
              Sintak adalah kelas terbuka yang diselenggarakan oleh hmj
              manajemen informatika dan google developer grup
            </p>
                </div>
                
          {/* Bagian Kotak */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {datakonten.map((data) => (
                <div className="flex items-center flex-col p-4 min-w-sm border border-gray-500 
            rounded-lg shadow-lg bg-white mt-8">
            <div className="bg-red-200 p-4 rounded-full">
              <data.ikon size={32} />
            </div>
                    <h2 className="font-bold text-xl">{data.judul}</h2>
                    <p className='text-gray-500'>{data.deskripsi}</p>
          </div>
            ))}
            
          </div>
        </div>
      </section>
    );
}

export default AboutSection