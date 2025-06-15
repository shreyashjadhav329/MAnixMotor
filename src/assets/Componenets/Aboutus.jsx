import React from "react";
import CarForm from "./Carform";
import CarList from "./CarList";
import AdminAccess from "./AdminAccess";
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <>
    <div className="my-5 px-3" id="about" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="text-center mb-5">About Manix Motors</h2>

      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src="https://images.jdmagicbox.com/v2/comp/mumbai/a8/022pxx22.xx22.100414105925.j8a8/catalogue/manix-motors-mumbai-aqlhuoyfa8.jpg" 
            alt="Manix Motors" 
            className="img-fluid rounded shadow"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>

        {/* Text Content */}
        <div className="col-md-6">
          <p>
            <strong>Manix Motors</strong> is one of the most trusted names in CNG kit installation, servicing, and re-testing. Established in 2003 and located in Goregaon East, Mumbai, the company has consistently delivered quality automotive services for over two decades.
          </p>
          <p>
            We specialize in the installation of government-certified CNG kits for both light and heavy vehicles, ensuring performance, safety, and compliance. Our services include CNG kit fitting, tank re-testing, performance checks, and after-sales support.
          </p>
          <p>
            Our state-of-the-art service center is equipped with the latest tools and certified professionals to guarantee top-tier service to our customers.
          </p>
          <p>
            <strong>Proprietor:</strong> Mr. Manish Pandey — With years of experience in the automotive sector, Mr. Pandey has led Manix Motors to become a pioneer in clean fuel technology in Mumbai.
          </p>
          <a 
            href="https://www.justdial.com/Mumbai/Manix-Motors-Goregaon-East/022PXX22-XX22-100414105925-J8A8_BZDET#"
            className="btn btn-primary mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Justdial
          </a>
        </div>
      </div>
     </div>
      {/* Admin Panel Section */}
      <div className="mt-5">
        <AdminAccess>
          <CarForm />
          <CarList />
        </AdminAccess>
      </div>
   
    </>
  );
}

export default AboutUs;
