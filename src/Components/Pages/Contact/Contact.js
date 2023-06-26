import React, { useRef, useState } from 'react'
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaRegHandshake } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './Contact.css'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import Metadata from '../../Metadata'


const Contact = () => {

  const alert = useAlert();
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.replace(/\s/g, '').length || !email.replace(/\s/g, '').length || !message.replace(/\s/g, '').length) {
      setName("");
      setEmail(" ");
      setNumber("");
      setMessage("")
      alert.error("please Fill the Entries")
      navigate("/contact")
      return;
    }


    setLoading(true)

    fetch("https://script.google.com/macros/s/AKfycbxnzP9aTHs_fSDsc4fI1-OKPA-080PbgEPchTZvlgN_wUaHiIkCrCwJzFjy2Wxoc8dg/exec", {
      method: 'POST',
      body: new FormData(formRef.current),

    }).then(res => {
      console.log("SUCCESSFULLY SUBMITTED")
      setEmail("")
      setName("")
      setNumber("")
      setMessage("")
      alert.success("SUCCESSFULLY SUBMITTED . Will Contact You Soon!!")
      setLoading(false)
    })
      .catch(err => {
        alert.error(err);
        console.log(err)
      })
  }


  return (
    <section className='contact section'>
    <Metadata pageTitle={"Samoil - Contact"}/>
      <h2 className='sectionTitle'>
        Get In <span>Touch  <FaRegHandshake /></span>
      </h2>


      <div className='contactContainer container grid' >
        <div className='contactData'>
          <h3 className='contactTitle'> Don't be Shy!</h3>
          <p className='contactDescription'> Feel Free to contact me . I am always open to discussing new Projects
            , creative Ideas and Opportunity </p>

          <div className='contactInfo'>
            <div className='infoItem'>
              <FaEnvelopeOpen className='infoIcon' onClick={() => window.location = 'mailto:samoilbarda52@gmail.com'} />
              <div>
                <span className='infoTitle'>Mail me : </span>
                <h4 className='infoDescription'>samoilbarda52@gmail.com</h4>
              </div>
            </div>
            <div className='infoItem'>
              <FaPhoneSquareAlt className='infoIcon' href="tel:+919993523171" />
              <div>
                <span className='infoTitle'>Call me : </span>
                <h4 className='infoDescription'>+919993523171</h4>
              </div>
            </div>
          </div>

          <div className='contactSocials'>
            <a className='contactSocialLink' target='blank' href='https://github.com/samoilbohra'><FaGithub /></a>
            <a className='contactSocialLink' target='blank' href='linkdin.com'><FaLinkedin /></a>
            <a className='contactSocialLink' target='blank' href='instagram.com/samoil_barda_'><FaInstagram /></a>
            <a className='contactSocialLink' target='blank' href='twitter.com'><FaTwitter /></a>
          </div>



        </div>

        <form name="google-sheet" className='contactform' method='POST' onSubmit={handleSubmit} ref={formRef}>
          <div className='formInputGroup'>
            <div className='formInputDiv'>
              <input type='text' name='Name ' value={name} onChange={(e) => setName(e.target.value)} className='formControl' placeholder='Your Name*' />
            </div>

            <div className='formInputDiv'>
              <input type='email' name='Email ' value={email} onChange={(e) => setEmail(e.target.value)} className='formControl' placeholder='Your Email*' />
            </div>

            <div className='formInputDiv'>
              <input type='Number' name='Number' value={number} onChange={(e) => setNumber(e.target.value)} className='formControl' placeholder='Contact Number' />
            </div>

          </div>

          <div className='formInputDiv'>
            <textarea type='Number' name='Message' value={message} onChange={(e) => setMessage(e.target.value)} className='formControl textarea ' placeholder='Your Message *' ></textarea>
          </div>

          <button disabled={loading} style={{ cursor: loading ? "auto" : "pointer" }} className='button'>{loading ? "Sending ... " : "Send Message"} <span className='buttonIcon contactButtonIcon'><FiSend /></span></button>
        </form>

      </div>

    </section>
  )
}

export default Contact
