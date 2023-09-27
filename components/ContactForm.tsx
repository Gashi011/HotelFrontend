'use client'
import React from "react";
import emailjs from "@emailjs/browser";

emailjs.init('695yUx8c09bW8zOzv');

const sendMail = () => {
  const fullNameInput = document.getElementById("fullName") as HTMLInputElement;
  const emailInput = document.getElementById("email_id") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const messageInput = document.getElementById("message") as HTMLInputElement;

  if (fullNameInput && emailInput && messageInput) {
    var params = {
      from_name: fullNameInput.value,
      email_id: emailInput.value,
      phone: phoneInput.value,
      message: messageInput.value,
    };
    emailjs.send("service_1738neg", "template_rwft9bf", params).then(function(res){
      alert("Uspešno ste poslali poruku")
    })
  }
}

const ContactForms = () => {
  return (
    <div className="flex flex-col justify-between gap-20 top-10">
      <div className="text-center pt-10 font-bold text-4xl md:text-5xl ">
        Contact us
      </div>
      <div className="flex flex-col text-xl ps-10 pe-10 gap-10">
        <div>
          <div className="ps-4 pb-4 text-2xl" >Name and surname</div>
          <input type="text" id="fullName" placeholder="  Your name and surname" className="rounded border border-black text-black mx-auto w-full h-14 text-2xl ps-4" />

        </div>
        <div>
          <div className="ps-4 pb-4 text-2xl">Email</div>
          <input type="email" id="email_id" placeholder="  Your email" className="rounded border border-black text-black mx-auto w-full h-14 text-2xl ps-4" />

        </div>
        <div>
          <div className="ps-4 pb-4 text-2xl">Phone number</div>
            <input type="number" id="phone" placeholder="  Your phone number" className="rounded border border-black text-black mx-auto w-full h-14 text-2xl ps-4" />
        </div>
        <div>
          <div className="ps-4 pb-4 text-2xl">Message</div>
          <textarea
  id="message"
  placeholder="  Your message"
  className="rounded border border-black text-black text-2xl w-full h-32 text-left p-5 resize-none overflow-y-auto break-words"
/>

          
        </div>
      </div>
      <div className="ps-10 pe-10">
        <button onClick={sendMail} className="rounded-lg w-full h-10 text-white text-2xl hover:scale-105 hover:border hover:border-black bg-red-500">Send</button>
      </div>
    </div>
  );
};

export default ContactForms;
