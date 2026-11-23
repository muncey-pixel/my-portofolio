import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

function Contact() {
  return (
    <section id='contact' className='contact'>
      <h1>
        Contact Me
      </h1>

      <p>
        lets connect with me
      </p>


      <a href="mailto:akuncocakuncoc59@gmail.com">
        <MdEmail></MdEmail>
        akuncocakuncoc59@gmail.com
      </a>
      <a
        href="https://wa.me/6289606299996"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
        +62 896-0629-9996
      </a>

    </section>
  )
}

export default Contact