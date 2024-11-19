'use client'

function Contact() {
    return (
        <div id="s-contact-section">
            <h1>Contact Me</h1>
            <p>Connect with me if you would like my work, want to be friends with me or work on a web app together.</p>
            <br/><br/>
            <form action="https://formsubmit.co/salitasprogrammingschool@gmail.com" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" id="contact-name" placeholder="Jane Doe" name="name"/>
                <label htmlFor="email">Email</label>
                <input type="text" id="contact-email" placeholder="janedoe@gmail.com" name="email" />
                <label htmlFor="message">Message</label>
                <textarea name="message" style={{height: '200px'}} id="contact-message" placeholder="Hey Sally, let's build a web app together."></textarea>
                <input type="hidden" name="_captcha" value="false"></input>
                <button className="s-main-button" type="submit" id="sendButton">Send</button>
            </form>
        </div>
    )
}            

export default Contact