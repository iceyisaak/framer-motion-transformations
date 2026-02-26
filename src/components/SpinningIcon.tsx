import { motion } from "framer-motion";
import pizzaImg from "../assets/pizza.jpg";

const SpinningIcon = () => (
  <motion.img
    src={pizzaImg}
    className="w-20 h-20"
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  />
);

export default SpinningIcon;
