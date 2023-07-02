import { motion } from "framer-motion";
const Education = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="flex flex-row overflow-x-hidden"
    >
      <div className="basis-1/3 bg-educationBg w-full h-screen bg-cover bg-no-repeat bg-center hidden md:block"></div>
      <div className="md:basis-2/3 p-3 md:p-10">
        <div className=" mb-9">
          <h1 className="text-3xl md:text-4xl font-oswald uppercase font-semibold mb-6">
            My Education
          </h1>

          <p className="text-sm font-poppins text-justify md:text-left max-w-xs md:max-w-full">
            I have completed my educational journey with significant
            achievements. I began by successfully completing my Secondary School
            Certificate (SSC) in 2011, which marked the completion of my
            secondary education. Afterward, I continued my academic pursuits and
            completed my Higher Secondary Certificate (HSC) in 2013, indicating
            the successful completion of my higher secondary education.
            <br /> <br /> Building upon my previous accomplishments, I further
            dedicated myself to higher education and obtained a Bachelor of
            Science (BSc) in Computer Science and Engineering degree in 2019 at
            Daffodil International University. This degree reflects my
            specialization and expertise in a specific field of study within the
            sciences. <br /> <br /> Overall, my educational journey encompasses
            a well-rounded academic background, consisting of the completion of
            secondary education, followed by higher secondary education, and
            culminating in a Bachelor of Science degree. These achievements
            demonstrate my commitment to learning and the acquisition of
            knowledge, providing a solid foundation for my future endeavors.
          </p>
          <div className=" flex flex-col md:flex-row gap-8 my-10">
            <div>
              <h6 className="text-lg font-poppins font-semibold">BSc in CSE</h6>
              <p className="font-poppins">Daffodil International University</p>
              <p className="font-poppins text-xs">2014-2019</p>
            </div>
            <div>
              <h6 className="text-lg font-poppins font-semibold">
                Higher Secondary Certificate (HSC)
              </h6>
              <p className="font-poppins">Shahid Smrity Mohabiddaloy</p>
              <p className="font-poppins text-xs">2011-2013</p>
            </div>
            <div>
              <h6 className="text-lg font-poppins font-semibold">
                Secondary School Certificate (SSC)
              </h6>
              <p className="font-poppins">Shahid Smrity Mohabiddaloy</p>
              <p className="font-poppins text-xs">2010-2011</p>
            </div>
          </div>
        </div>
        <div className=" mb-9">
          <h1 className="text-3xl font-oswald uppercase font-semibold mb-4">
            Courses
          </h1>

          <div>
            <h6 className="text-lg font-poppins font-semibold">
              Complete Web Development Course With Jhankar Mahbub
            </h6>
            <p className="font-poppins">Programming Hero</p>
            <p className="font-poppins text-xs">Dec 2022- June 2023</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
