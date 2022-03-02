import './contact.css'

const Contact = () => {
    const newContact = (event) => {
      event.target.value = ''
      event.preventDefault()
    }

    return (
      <div class="contact-container">
        <div class="contact-container-text">
          <h1>Send a message</h1>
          <p>blurb about messaging</p>
        </div>
        <form onSubmit={newContact} class="contact-container-form">
          <div class="contact-input-container">

            <label for="nature-of-inquiry">Nature of Inquiry</label>
              <select name="nature-of-inquiry" id="select-nature-of-inquiry">
                <option value="pressOrMedia">Press or Media</option>
                <option value="legalOrRegulatory">Legal or Regulatory</option>
                <option value="careers">Careers</option>
                <option value="other">Other</option>
              </select>

            <label for="name">Name</label>
              <input name="name" id="name" placeholder="Name" />

            <label for="email">Email</label>
              <input name="email" id="email" placeholder="Email" />

            <label for="phone">Phone Number</label>
              <input name="phone" id="phone" placeholder="Phone Number" />

            <label for="message">Message</label>
              <textarea name="message" id="message" placeholder="Message" />

            <button type="submit">send</button>
          </div>
        </form>
      </div>
    )
  }
  
  export default Contact