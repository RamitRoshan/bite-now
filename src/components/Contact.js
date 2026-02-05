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

 

const Contact = () => {
    
  return (
    <div className="max-w-[800px] mx-auto my-10 p-5 font-sans leading-relaxed text-gray-800 bg-white rounded-lg shadow-md md:p-6 sm:mx-5">
      
      <h1 className="text-4xl font-bold text-gray-800 mb-5 border-b-4 border-orange-500 inline-block">
        Get in Touch
      </h1>

      <p className="mb-5 text-lg">
        <strong>We’d love to hear from you.</strong> Whether you’re looking to
        book a table for a special anniversary, have questions about our
        seasonal ingredients, or want to host a private event, our team is
        ready to help make your experience exceptional.
      </p>

      <p className="mb-5 text-lg">
        At <strong>Bite Now</strong>, we believe great service starts long before
        you sit down at your table. <br />
        <b>Drop us a message,</b> give us a call, or simply swing by — we’re
        always happy to chat about good food and great company.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Contact Details */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">
          Contact Information
        </h3>

        <ul className="space-y-3">
          <li>
            <b>Phone :</b> +91 9931970143
          </li>
          <li>
            <b>Email :</b> hello@bitenow.com
          </li>
          <li>
            <b>Location :</b> 4/91 BTM Layout, Bengaluru
          </li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Hours Section */}
      <section className="bg-gray-100 p-5 rounded-md">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">
          Hours of Operation
        </h3>

        <p className="font-medium">
          <b>Monday - Thursday :</b> 11:00 AM - 10:00 PM
        </p>
        <p className="font-medium">
          <b>Friday - Saturday :</b> 11:00 AM - 11:00 PM
        </p>
        <p className="font-medium">
          <b>Sunday :</b> 10:00 AM - 9:00 PM
        </p>
      </section>
    </div>
  );
};

export default Contact;


//  rafc