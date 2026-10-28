import { sendMail } from "../helper1";

export default function Form3() {
  const Submit = (e) => {
    e.preventDefault();
    sendMail();
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-neutral-900 p-10 rounded-3xl shadow-2xl border border-gray-800">
      <form className="flex flex-col gap-6" onSubmit={Submit}>
        {/* Title */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white">Franchise Enquiry Form</h3>
          <p className="text-gray-400 mt-2">
            Partner with Morph Academy
          </p>
        </div>

        {/* Full Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["firstname", "lastname"].map((id) => (
            <div key={id} className="relative">
              <input
                type="text"
                id={id}
                required
                placeholder=" "
                className="peer w-full rounded-lg bg-neutral-800 text-white p-4 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-70"
              />
              <label
                htmlFor={id}
                className="absolute left-4 top-4 text-gray-400 text-sm transition-all 
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                  peer-placeholder-shown:text-base peer-focus:top-1 
                  peer-focus:text-accent-blue peer-focus:text-sm"
              >
                {id === "firstname" ? "First Name" : "Last Name"}
              </label>
            </div>
          ))}
        </div>

        {/* Phone */}
        <div className="relative">
          <input
            type="tel"
            id="phone"
            maxLength="10"
            pattern="[0-9]{10}"
            required
            placeholder=" "
            className="peer w-full rounded-lg bg-neutral-800 text-white p-4 
              placeholder-transparent focus:outline-none focus:ring-2 
              focus:ring-accent-blue focus:ring-opacity-70"
          />
          <label
            htmlFor="phone"
            className="absolute left-4 top-4 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base peer-focus:top-1 
              peer-focus:text-accent-blue peer-focus:text-sm"
          >
            Phone Number
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id="email"
            required
            placeholder=" "
            className="peer w-full rounded-lg bg-neutral-800 text-white p-4 
              placeholder-transparent focus:outline-none focus:ring-2 
              focus:ring-accent-blue focus:ring-opacity-70"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base peer-focus:top-1 
              peer-focus:text-accent-blue peer-focus:text-sm"
          >
            Email
          </label>
        </div>

        {/* City */}
        <div className="relative">
          <input
            type="text"
            id="city"
            required
            placeholder=" "
            className="peer w-full rounded-lg bg-neutral-800 text-white p-4 
              placeholder-transparent focus:outline-none focus:ring-2 
              focus:ring-accent-blue focus:ring-opacity-70"
          />
          <label
            htmlFor="city"
            className="absolute left-4 top-4 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base peer-focus:top-1 
              peer-focus:text-accent-blue peer-focus:text-sm"
          >
            City
          </label>
        </div>

        {/* Investment Capacity */}
        <div className="relative">
          <select
            id="investment"
            required
            className="peer w-full rounded-lg bg-neutral-800 text-white p-4 
              focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-70"
          >
            <option value="" disabled selected hidden>
              Select Investment Range
            </option>
            <option value="5-10L">₹5-10 Lakhs</option>
            <option value="10-20L">₹10-20 Lakhs</option>
            <option value="20-30L">₹20-30 Lakhs</option>
            <option value="30L+">₹30 Lakhs & Above</option>
          </select>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="message"
            required
            rows={4}
            placeholder=" "
            className="peer w-full rounded-lg bg-neutral-800 text-white p-4 
              placeholder-transparent focus:outline-none focus:ring-2 
              focus:ring-accent-blue focus:ring-opacity-70"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-4 top-4 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base peer-focus:top-1 
              peer-focus:text-accent-blue peer-focus:text-sm"
          >
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 text-white font-semibold rounded-lg shadow-lg 
            overflow-hidden relative transition-all duration-300 hover:scale-105 
            bg-gradient-to-r from-blue-600 to-violet-600"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}
