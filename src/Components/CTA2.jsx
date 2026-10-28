import { Link } from "react-router-dom";

const CTA_TWO = () => {
  return (
    <>
      <div className="conatiner-fluid bg_gif py-3">
        <section className="position-relative pb-lg-14 py-5">
          <div className="container">
            <div className="row">
              <div className="offset-lg-1 col-lg-10 col-12">
                <div className="bg-transparent  rounded-3 ">
                  <div className="row align-items-center">
                  
                    <div className="col-12 ">
                      <div className=" p-0 text-center">
                        <h2 className="mb-2 text-white">
                          Become part of learners at Morph Academy.
                        </h2>
                        <p >
                          Effective learning begins with assessment. Acquiring a
                          new skill can be <br /> challenging{" "}
                          <span className="text-white fw-bold">
                          Morph Academy
                          </span>{" "}
                          simplifies the process.
                        </p>
                        <div id="cta_btn3">
                          <Link to="/contact-us" className="btn btn-1">
                         Join Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CTA_TWO;
