import Form2 from "./Form2";

export default function Info() {
    return (
        <>

            <div className="container-fluid bg-black ">
                <div className="container">

                <div className="row align-items-center justify-content-between">
                    {/* Form Column */}
                    <div className="col-12 col-lg-4 order-1 order-lg-2 mt-5 mb-lg-0 mb-5 mt-lg-0">
                        <Form2 />
                    </div>

                    {/* Text Content Column */}
                    <div className="col-12 col-lg-7 order-2 order-lg-1 hidden_mobile">
                        <h3 className="text-white">
                            Leading animation, VFX, Game, Filmmaking & Multimedia institutes in India.
                        </h3>
                        <p>
                            Morph Academy is one of India's top institutes for Animation, VFX, Game Design, and Multimedia.
                            We offer job-ready professional courses, including 3D Modeling, Visual Effects Production, and
                            more, for students after 10th and 12th grade.
                        </p>
                        <p>
                            Our specialized programs in Animation, VFX, Graphics, Photography, Filmmaking, Game Development,
                            and AR/VR prepare you for a successful career. Learn skills like character animation, cinematography,
                            modeling, rigging, and compositing. Our studios are equipped with everything you need to bring your
                            creations to life.
                        </p>
                        <p>
                            Morph Academy provides career-oriented courses focusing on lighting, texturing, rendering, and 3D animation
                            principles. Visual Effects artists are always in demand, and we help you master these skills. Join Morph Academy
                            for a future in Animation, VFX, Game Design, and more.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
