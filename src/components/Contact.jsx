import React from 'react'
import '../styles/Contact.scss'

function Contact() {
  return (
    <div className='contact'>
        <main>
            <h1>Contact us</h1>
            <form action="">
                <div>
                    <label>Name</label>
                    <input type="text" name="" id="" required placeholder='Name' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="" id="" required placeholder='email' />
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" name="" id="" required placeholder='Write your message here.' />
                </div>
                <button>Submit</button>
            </form>
            
        </main>
    </div>
  )
}

export default Contact