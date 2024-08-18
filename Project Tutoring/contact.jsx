import React from 'react'
import 'contact.css'

const Contact = () => {

    // Insert data submission data here

    return(
        <section className="contact">
            <form>
                <h2>Contact Form</h2>
                <div className="input-box">
                    <label>Full name</label>
                    <input type="text" className="field" placeholder='Enter your name' required/>
                </div>
                <div className="input-box">
                    <label for="email">Email:</label>
                    <input type="email" className="field" placeholder="Enter your email address" required/>
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name="" id="" placeholder='Enter your message' required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
} 

export default Contact