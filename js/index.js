console.log('Hello World!')
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
function sendEmail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    const serviceID = "service_xeynjxd"
    const templateID = "template_mq4h247"
    
    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("message").value  
            console.log(res)
            alert("Your message was sent successfully!")  
        })
        .catch((err) => console.log(err))
}
