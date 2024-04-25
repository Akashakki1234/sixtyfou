import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
   
    <div  className='mt-3 '>
      <footer>
        <div className="container">
          <div className="row ms-5">
            <div className="col">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
            <div className="col">
              <h3>Contact Us</h3>
              <p>Email: example@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
