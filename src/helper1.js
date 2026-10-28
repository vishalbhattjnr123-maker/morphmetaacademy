export function sendMail() {
  var params = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    investment: document.getElementById("investment").value,
    message: document.getElementById("message").value,
  };

  const serviceId = "service_v6m01tl";
  const templateId = "template_pz1gqmh";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      // Reset form fields
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("city").value = "";
      document.getElementById("investment").value = "";
      document.getElementById("message").value = "";

      console.log(res);
      alert("✅ Your Franchise Enquiry has been sent successfully!");
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("❌ Failed to send enquiry. Please try again later.");
    });
}
