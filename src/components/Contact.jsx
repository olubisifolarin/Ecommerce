import React from "react";
import Map from "./Map";

const Contact = () => {
    return(
        <>
        <div className="flex contact">
            <div className="w-1/2">
                <Map />
            </div>
            
            <div className="w-1/2">
                <h1 className="contactUs">Contact Us</h1>
                <form>
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" />

                    <label>Subject</label>
                    <input type="text" placeholder="Subject" />

                    <label>Message</label>
                    <textarea placeholder="Message"></textarea> 
                </form>

                <div className="message-btn text-center p-2">
                    <button>Message</button>
                </div>
            </div>
            
        </div>
        <hr className="mt-[3rem]"/>
    </>
    )
}

export default Contact;