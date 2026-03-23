import React, { useEffect } from "react";
import SocialLinks from "../components/SocialLinks";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div id="Contact">   {/* ✅ IMPORTANT FIX */}

      {/* Page Heading */}
      <div className="text-center lg:mt-[5%] mt-10 mb-8 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Connect With Me
        </h2>

        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-3"
        >
          Feel free to connect with me on LinkedIn or explore my work on GitHub.
        </p>
      </div>

      {/* Social Links Card */}
      <div
        className="flex items-center justify-center px-[5%] md:px-0 pb-16"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10">
          <SocialLinks />
        </div>
      </div>

    </div>
  );
};

export default ContactPage;