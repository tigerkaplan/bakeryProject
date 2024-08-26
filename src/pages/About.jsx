// import Motion
import { motion } from "framer-motion";
// import variants
import { plateVariants, staggerContainer, fadeIn } from "../assets/data/Variants.js";
// import image
import AboutImg from '../assets/img/about/plate.png';

export default function About() {
  const aboutData = {
    pretitle: "our story",
    title: "who we are",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur, quasi minima molestiae ex exercitationem culpa quisquam architecto quaerat, iusto dolores labore, sapiente magni rem commodi aperiam ad dolorem neque ducimus. Placeat vel non quod quis pariatur a aperiam, aliquam adipisci voluptatum voluptatem sit cupiditate dolore natus beatae earum omnis.",
    btnText: "find out more",
    image: AboutImg
  };

  // Destructure data
  const { pretitle, title, subtitle, btnText, image } = aboutData;

  return (
    <section className="min-h-[620px]">
      <div className="container mx-auto min-h-[620px]">
        {/* text & image wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="min-h-[620px] flex flex-col lg:flex-row items-center"
        >
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <div className="pretitle">
              {pretitle}
            </div>
            <h2 className="h2 capitalize">
              {title}
            </h2>
            <p className="mb-8 max-w-[560px]">
              {subtitle}
            </p>
            <button className="btn capitalize mx-auto lg:mx-0">
              {btnText}
            </button>
          </motion.div>
          {/* image */}
          <motion.div 
            variants={plateVariants}
            className="-mb-[300px] -mr-[186px] z-10"
          >
            <img src={image} alt="About" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

