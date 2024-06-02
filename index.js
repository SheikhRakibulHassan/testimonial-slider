const testimonials = [
    {
        name: "Emily Johnson",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am extremely impressed with the innovative design and functionality of Apple's mobile products. They truly redefine convenience and style. I highly recommend Apple to anyone looking for top-notch technology."

    },
    {
        name: "Emily Thompson",
        photoUrl: "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Apple's mobile products are truly innovative and user-friendly. The sleek design and cutting-edge technology make them stand out from the competition. I can't imagine my life without my Apple device."

    },
    {
        name: "Jane Smith",
        photoUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I was blown away by the sleek design and cutting-edge technology of the mobile devices from Apple. The seamless integration of hardware and software truly sets them apart. I highly recommend Apple for anyone looking for quality and innovation."

    },
];

const imgEl = document.querySelector("img");

const textEl = document.querySelector(".text");

const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 10000)
}