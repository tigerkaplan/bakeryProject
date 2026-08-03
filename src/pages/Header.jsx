import { motion } from "framer-motion";



// header variants
const headerVariants = {
  hidden: {
    padding : "84px 0 84px 0",
    background: "none",
  },
  show: {
    padding : "14px 0 14px 0",
    background: "#9a3412",
    transition: {
      type: "spring"
    }
  }
}

export default function Header() {
  return (

    <motion.header 
    variants={headerVariants}
    initial="hidden"
    animate="hidden"
    className="bg-pink-200/20 fixed w-full max-w-[1800px] z-50 py-4">Header</motion.header>
  )
}
