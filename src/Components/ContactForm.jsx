const ContactForm = () => {

    return (
        <>
        <div id="">

        <div className="card smooth-shadow-md " style={{ zIndex: 1 }}>
  <div className="card-body p-xl-w">

  <h1 className="mb-4 lh-1 text-dark fw-bold h2">Get in touch</h1>

    <form className="needs-validation" noValidate="">

        <div className="d-flex gap-3">
        <div className="mb-3">
        <label htmlFor="fname" className="form-label visually-hidden">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          className="form-control"
          name="fname"
          placeholder="First Name"
          required=""
        />
        <div className="invalid-feedback">Please enter valid First Name.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="fname" className="form-label visually-hidden">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          className="form-control"
          name="lname"
          placeholder="Last Name"
          required=""
        />
        <div className="invalid-feedback">Please enter valid Last Name.</div>
      </div>
        </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label visually-hidden">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          name="email"
          placeholder="Email"
          required=""
        />
        <div className="invalid-feedback">Please enter valid Email.</div>
      </div>

      
      <div className="mb-3">
        <label htmlFor="number" className="form-label visually-hidden">
          Phone Number
        </label>
        <input
          type="number"
          id="number"
          className="form-control"
          name="number"
          placeholder="Phone Number"
          required=""
        />
        <div className="invalid-feedback">Please enter valid Number.</div>
      </div>
     
      <div className="mb-3">
        <label htmlFor="nessage" className="form-label visually-hidden">
          Message
        </label>
         <textarea className="form-control" id="message" name="message" placeholder="Message..."></textarea>
        <div className="invalid-feedback">Please enter valid Message.</div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary btn-lg">
          Start Learning
        </button>
      </div>
    </form>
  </div>
  {/* <div className="card-footer px-3 py-4">
    <p className="mb-0 small">
      By continuing you accept the
      <a href="#" className="text-inherit fw-semibold ms-1">
        Terms of Use
      </a>,
      <br/>
      <a href="#" className="text-inherit fw-semibold">
        Privacy Policy
      </a>
      , and 
      <a href="#" className="text-inherit fw-semibold mx-1">
        Data Policy
      </a>
    </p>
  </div> */}

</div>
        </div>


</>
    )
}

export default ContactForm;