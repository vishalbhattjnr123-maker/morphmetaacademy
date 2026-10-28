export default function D1({ data }) {
  console.log(data);
  return (
    <>
      <div id="d1">
        <div className="">
          <h1 className="text-white fs-3  fw-semibold">{data?.heading} </h1>
          <h3 className="text-secondary fw-medium fs-3 py-3">
           {data?.duration}
          </h3>
          <h3 className="text-secondary fs-4">
            For More Info :
            <a className="text-info text-decoration-none" href="/contact-us">
              {" "}
              Contact us
            </a>
          </h3>
        </div>

        <p className="text-secondary mb-3 fw-semibold pt-2">
        {data?.description}
        </p>
        <p className="text-secondary mb-3 fw-semibold pt-2">
        {data?.description2|| ""}
        </p>

        <h3 className="text-white mb-3">
          Our <span className="text-warning">Objectives :</span>{" "}
        </h3>
        <h2 className="fs-3">
        {data?.qualification1|| ""}
        </h2>
        <h2 className="fs-3 py-2">
        {data?.qualification2|| ""}
        </h2>
        <h2 className="fs-3 ">
        {data?.qualification3|| ""}
        </h2>
        <ul className="text-secondary list-unstyled fw-semibold ">
          {data?.objectives?.map((item, ani) => {
            return (
              <li key={ani} className="mb-3 row ">
                <span className="p-0  col-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="currentColor"
                    className="bi bi-check-circle text-success"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                </span>
                <span className="col">{item}</span>
                
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
