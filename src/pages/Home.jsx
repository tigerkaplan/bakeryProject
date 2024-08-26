import { motion } from "framer-motion"; // framer motion
import { fadeIn, staggerContainer } from "../assets/data/Variants.js"; // variation
// import image

export default function Home() {
  // Hero data
  const heroData = {
    pretitle: "Nothing brings together like",
    title: "Patisserie 4 you",
    subtitle:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    btnText: "Find out more",
  };

  // Destructure hero data
  const { pretitle, title, subtitle, btnText } = heroData;

  // Render hero section
  return (
    <section className="min-h-[980px] bg-hero bg-cover bg-right">
      {/* Header */}
      <div className="container mx-auto min-h-[980px] flex justify-center items-center">
        {/* Text */}
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="text-center flex flex-col items-center"
        >
          {/* Pretitle */}
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1.1)}
            className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1"
          >
            {pretitle}
          </motion.div>
          {/* Title */}
          <motion.h1
            variants={fadeIn("down", "tween", 0.3, 1.1)}
            className="h1 mb-5 text-[#F55304]"
          >
            {title}
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="text-white max-w-[540px] mb-8"
          >
            {subtitle}
          </motion.p>
          {/* Button */}
          <motion.div variants={fadeIn("down", "tween", 0.5, 1.1)}>
            <button className="btn">
              {btnText}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
