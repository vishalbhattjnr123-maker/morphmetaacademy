export function sendMail() {

  
    var params = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }


    const serviceId = "service_v6m01tl";
    const templateId = "template_pz1gqmh";

    emailjs.send(serviceId, templateId, params).then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your Message Sent Successfully!")
        })
        .catch((err) => {
            console.error("Error:", err);
            alert("Failed to send the message. Please try again later.");
        });
}

export function sendEmail() {

    var params = {
        name: document.getElementById("first-name").value,
        lastname: document.getElementById("last-name").value,
        email: document.getElementById("mail").value,
        phone: document.getElementById("mobile").value,
        message: document.getElementById("note").value,
    }

    // console.log(params)

    const serviceId = "service_v6m01tl";
    const templateId = "template_pz1gqmh";

    emailjs.send(serviceId, templateId, params).then(
        res => {
            document.getElementById("first-name").value = "";
            document.getElementById("last-name").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("note").value = "";
            console.log(res);
            alert("Your Message Sent Successfully!")
        })
        .catch((err) => {
            console.error("Error:", err);
            alert("Failed to send the message. Please try again later.");
        });
}


