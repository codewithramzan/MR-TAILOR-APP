function renderContact() {
    let contactHTML =`
        <div class="container">
            <h2>Contact Us</h2>
            <p class="subtitle">We would love to hear from you!</p>
            <div id="contact-box">

                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <p><strong>Address:</strong> University Choke, Amangarh,Nowshera</p>
                    <p><strong>Phone:</strong> +92 319 9516475</p>
                    <p><strong>Email:</strong> ramzanktk2024@gmail.com</p>
                    <p><strong>Working Hours:</strong> Mon - Sat (8AM - 10PM)</p>
                </div>

                <div class="contact-form">
                    <h3>Send Message</h3>
                    <form>
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="text" placeholder="Subject">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

            </div>
        </div>

    `;
    document.querySelector('.js-contact-section').innerHTML=contactHTML;
}
renderContact();