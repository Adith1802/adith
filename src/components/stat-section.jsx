import { Star } from "lucide-react"

function Stat() {
    return (
      <section className="py-16">
        <div>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4 items-center text-center mx-auto bg-[url("/BGMI.png")] bg-fixed py-16'>
            <div className="font-bold text-white">
              <h1>90+</h1>
              <p>pendaftar</p>
            </div>
            <div className="font-bold text-white">
              <h1 className="text-5xl">8+</h1>
              <p>Mentor</p>
            </div>
            <div className="font-bold text-white ">
              <div className="flex items-center justify-center">
                <div className="font-bold">
                  <h1 className="flex justify-center">
                    <Star size={25} />
                  </h1>
                </div>
                <h1 className="text-5xl">5</h1>
              </div>
              <p>Review kelulusan</p>
            </div>
            <div className="font-bold text-white">
              <h1>100+</h1>
              <p>Lulusan</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Stat