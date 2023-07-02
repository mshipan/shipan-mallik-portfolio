import { motion } from "framer-motion";
import { BiPhoneCall } from "react-icons/bi";

import { FiMail, FiMapPin } from "react-icons/fi";

import SocialMedia from "../components/SocialMedia";
const Contact = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="flex flex-row overflow-x-hidden"
    >
      <div className="basis-1/3 bg-contactBg w-full h-screen bg-cover bg-no-repeat bg-center hidden md:block"></div>
      <div className="md:basis-2/3 p-3 md:p-10">
        <div className="w-full mb-9">
          <h1 className="text-3xl md:text-4xl font-oswald uppercase font-semibold mb-6">
            Contact With Me
          </h1>
          <p className="max-w-xs md:max-w-full text-justify md:text-left">
            I am a resident of Dhaka, is easily reachable at my provided contact
            details. You can contact with me by phone or via email. With My
            reliable contact information, I remains accessible for inquiries,
            collaborations, or any relevant communication. Whether it is
            discussing professional opportunities, sharing ideas, or engaging in
            meaningful conversations, connecting with me is just a phone call or
            email away.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-20 w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-oswald text-xl uppercase">Address</h1>
            <div className="flex items-center gap-1">
              <FiMapPin />
              <p className="font-poppins text-sm">
                1216 Mirpur 2, Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-oswald text-xl uppercase">Call Me</h1>
            <div className="flex items-center gap-1">
              <BiPhoneCall />
              <p className="font-poppins text-sm">+880 1622 543390</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-oswald text-xl uppercase">Mail Me</h1>
            <div className="flex items-center gap-1">
              <FiMail />
              <p className="font-poppins text-sm">shipanmallik95@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl md:text-3xl font-oswald uppercase font-semibold mb-6">
            CONNECT ME WITH SOCIAL NETWORKS
          </h1>
          <SocialMedia></SocialMedia>
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-oswald uppercase font-semibold mb-6">
            Leave a message
          </h1>
          <div className="flex flex-row gap-8 mb-10">
            <form className="w-full flex flex-col md:flex-row justify-between gap-3 md:gap-10">
              <div className="w-full flex flex-col gap-3">
                <div className="form-control">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="border border-black"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="border border-black"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    className="border border-black"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="form-control">
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    name="subject"
                    className="border border-black"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    name="message"
                    className="border border-black"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div>
                  <button className="bg-black hover:bg-white px-5 py-2 text-white hover:text-black border border-black">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
