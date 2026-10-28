import { useLocation } from "react-router-dom";
import MetaSeo from "../Components/MetaSEO";

const ResultDetail = () => {
  const { state } = useLocation();
  const student = state?.student;

  if (!student) {
    return (
      <p className="text-center mt-20 text-red-500 text-lg font-semibold">
        No student data found.
      </p>
    );
  }

  const seo = {
    title: `${student.Name} | Result Details`,
    description: `View detailed result for ${student.Name}, Roll No: ${student.Rollno}`,
  };

  // Print function
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <MetaSeo meta={seo} />

      {/* Print Button (Top Right Corner, hidden when printing) */}
      <div className="absolute top-30 right-6 print:hidden z-50">
        <button
          onClick={handlePrint}
          className="bg-violet-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-violet-700 transition"
        >
         <i class="fa-solid fa-print"></i> Print Result
        </button>
      </div>

      <section className="bg-gradient-to-t from-black to-[#7f22fe8c] min-h-screen py-30 px-6 flex justify-center print:bg-white relative">
        <div className="bg-white w-full max-w-4xl shadow-2xl rounded-2xl border border-gray-200 overflow-hidden print:shadow-none print:border-none">

          {/* Header / Institute Branding */}
          <div className="bg-violet-600 text-white py-6 px-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-wide">Morph Meta Academy</h1>
              <p className="text-sm text-violet-200">Examination Result Report</p>
            </div>
            {student.Photo && (
              <img
                src={student.Photo}
                alt={student.Name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
              />
            )}
          </div>

          {/* Student Info Section */}
          <div className="px-8 py-6 grid grid-cols-2 gap-6 bg-gray-50">
            <div>
              <h2 className="text-xl font-extrabold text-black">
                {student.Name} {student.lname}
              </h2>
              <p className="text-base font-bold text-black mt-1">
                Roll No: {student.Rollno}
              </p>
              <p className="text-sm text-black mt-1">
                Father’s Name: {student.Fathername}
              </p>
              <p className="text-sm text-black mt-1">Gender: {student.Gender}</p>
            </div>
            <div className="text-sm text-black">
              <p className="mt-1">
                <strong>Course:</strong> {student.Course}
              </p>
              <p className="mt-1">
                <strong>Other Course:</strong> {student.Otherc}
              </p>
              <p className="mt-1">
                <strong>Duration:</strong> {student.Duration} ({student.durationy})
              </p>
              <p className="mt-1">
                <strong>Exam Date:</strong> {student.Examdate}
              </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t-2 border-violet-600 my-4 mx-8" />

          {/* Result Section */}
          <div className="px-8 py-6">
            <h3 className="text-lg font-semibold text-black mb-4">Result Summary</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg shadow-sm">
                <p className="text-sm text-black">Grade</p>
                <h2 className="text-2xl font-bold text-green-800">{student.Grade}</h2>
              </div>
              <div
                className={`p-4 rounded-lg shadow-sm border-l-4 ${
                  student.Status === "Pass"
                    ? "bg-blue-50 border-blue-500"
                    : "bg-red-50 border-red-500"
                }`}
              >
                <p className="text-sm text-black">Status</p>
                <h2
                  className={`text-2xl font-bold ${
                    student.Status === "Pass" ? "text-blue-700" : "text-red-700"
                  }`}
                >
                  {student.Status}
                </h2>
              </div>
            </div>
          </div>

          {/* Footer / Authentication */}
          <div className="bg-gray-100 py-6 px-8 flex justify-between items-center text-sm text-black border-t">
            <p>Issued by Morph Meta Academy | Verified Result Portal</p>
            <p className="italic">Authorized Signature</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultDetail;
