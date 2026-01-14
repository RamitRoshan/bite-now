// const Contact = () => {
//     return (
//         <div>
//             <h1>Get in Touch</h1>
//              <p>
//                 <strong>We’d love to hear from you.</strong> Whether you’re looking to book a table for a special anniversary, have questions about our seasonal ingredients, or want to host a private event, our team is ready to help make your experience exceptional.
//             </p>
//             <p>
//                 At <strong>Bite Now</strong>, we believe great service starts long before you sit down at your table. <br/>
//                 <b>Drop us a message,</b> give us a call, or simply swing by - we’re always happy to chat about good food and great company.
//             </p>
           
            
//         </div>
//     );
// };

// export default Contact; 

import "../../contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Get in Touch</h1>
            
            <p>
                <strong>We’d love to hear from you.</strong> Whether you’re looking to book a table for a special anniversary, have questions about our seasonal ingredients, or want to host a private event, our team is ready to help make your experience exceptional.
            </p>
            
            <p>
                At <strong>Bite Now</strong>, we believe great service starts long before you sit down at your table. <br/>
                <b>Drop us a message,</b> give us a call, or simply swing by - we’re always happy to chat about good food and great company.
            </p>

            <hr />

            <section className="contact-details">
                <h3>Contact Information</h3>
                <ul>
                    <li><b>Phone :</b> +91 9931970143</li>
                    <li><b>Email :</b> hello@bitenow.com</li>
                    <li><b>Location :</b> 4/91 BTM Layout, Bengaluru</li>
                </ul>
            </section>

            <hr />

            <section className="hours-operation">
                <h3>Hours of Operation</h3>
                <p><b>Monday - Thursday : </b> 11:00 AM - 10:00 PM</p>
                <p><b>Friday - Saturday : </b> 11:00 AM - 11:00 PM</p>
                <p> <b>Sunday :</b> 10:00 AM - 9:00 PM</p>
            </section>
        </div>
    );
};

export default Contact;

//  rafc