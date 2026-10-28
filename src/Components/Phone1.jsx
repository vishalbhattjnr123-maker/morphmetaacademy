
const Phone1 = () => {
  return (
    <>
      <section className="hidedesktop">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide margin-top "
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/11.png"
                className="d-block w-100 position-relative"
                alt="Morph Meta Academy"
              />
              <div className=" position-absolute set-ban text-center">
                <p className="text-white fs-5 mb-1">
                  "Your Animation & VFX Journey Starts Here!"
                </p>
                <h1 className="text-white newfontv">
                  3D Animation & Visual Effects Courses
                </h1>
                <div id="vik-button">
                  <a href="/contact-us">
                    <button className="button mt-3">
                      Click Here
                      <span className="button-span"> ─ Free Demo</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/my2.png"
                className="d-block w-100"
                alt="Morph Meta Academy"
              />
              <div className=" position-absolute set-ban text-center">
                <p className="text-white fs-5 mb-1">"Design Your Future!"</p>
                <h1 className="text-white newfontv">
                  Photography and Film Making & Direction Course{" "}
                </h1>
                <div id="vik-button">
                  <a href="/contact-us">
                    <button className="button mt-3">
                      Click Here
                      <span className="button-span"> ─ Free Demo</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/my4.png"
                className="d-block w-100"
                alt="Morph Meta Academy"
              />
              <div className=" position-absolute set-ban text-center">
                <p className="text-white fs-5 mb-1">
                  "Design the Future, today!"
                </p>
                <h1 className="text-white newfontv">
                  Game Designs, Graphics Design & Video Editing
                </h1>
                <div id="vik-button">
                  <a href="/contact-us">
                    <button className="button mt-3">
                      Click Here
                      <span className="button-span"> ─ Free Demo</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>


  



    </>
  );
};
export default Phone1;
