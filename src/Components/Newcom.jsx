import Morph from "./Morph";

export default function Newcom() {
  return (
    <section className="bg-neutral-950 text-white py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-extrabold">
              Morph Meta Academy
            </h3>
            <p className="text-gray-100">
              Empowering Creators. Transforming Futures.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold bg-clip-text text-white bg-gradient-to-r from-accent-yellow to-accent-pink">
                  Our Vision
                </h2>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  To become a global hub of excellence in Animation, Metaverse, and Creative Technologies by nurturing industry-ready professionals through innovation-driven education.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold bg-clip-text text-white bg-gradient-to-r from-accent-yellow to-accent-pink">
                  Our Mission
                </h2>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  To deliver skill-based, industry-aligned training in Animation, Film, VFX, AR/VR, Gaming, and Digital Media—empowering students with creativity, confidence, and career readiness.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/images/animation-work.jpg"
              alt="Animation Work"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

            {/* Optional overlay or Morph component */}
            {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Morph />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
