import React from 'react';

const Map = () => {
  return (
    <div className="w-full">
      <section className="body-font pb-0">
        <div className="w-full pt-10 mx-auto">
          <div className="flex flex-wrap mx-auto items-center justify-center w-full mb-4">
            <div className="relative w-3/4 h-64 rounded-lg shadow-lg overflow-hidden border-2 border-[#9fe300]" style={{ paddingTop: '35%' }}>
              <div className="absolute top-0 left-0 w-full h-full bg-[#1e1e1e]/60 z-10 pointer-events-none"></div>
              <iframe
                title='Our Physical Location'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202500.3286274725!2d-77.69073807017963!3d37.529902909072604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b16d7f234f05ff%3A0xa8abb6f08a9e62b5!2s411%20Branchway%20Rd%20%23218%2C%20North%20Chesterfield%2C%20VA%2023236%2C%20EE.%20UU.!5e0!3m2!1ses-419!2scr!4v1722758851836!5m2!1ses-419!2scr"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
