// Utils
import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion } = framerMotionComponents;

// Types
type SectionsLinksProps = {
  linkVariants: {
    hidden: { opacity: number; y: number };
    visible: (i: number) => {
      opacity: number;
      y: number;
      transition: { duration: number; ease: string };
    };
  };
  closeMenu: () => void;
};

const sections = ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function SectionsLinks({ linkVariants, closeMenu }: SectionsLinksProps) {
  return (
    <motion.ul
      className={`absolute -left-[15px] top-[80px] z-20 w-[108%] flex-col items-center rounded-xl bg-[#121212d8] text-center text-base tracking-[0.3em] shadow-md md:static md:flex md:w-fit md:flex-row md:gap-5 md:bg-transparent md:p-0 md:shadow-none`}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: innerWidth > 767 ? 0.6 : 0.2,
      }}
    >
      {sections.map((section, index) => (
        <motion.li
          key={section}
          custom={index}
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          className="border-y border-[#6767671e] md:border-none"
          onClick={closeMenu}
        >
          <a
            href={`#${section.toLowerCase()}`}
            className="relative inline-block w-full py-3 transition-all duration-300 before:left-0 before:top-3/4 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:rounded before:bg-gradient-to-r before:from-[#fd47b4] before:to-[#3bb5e6] before:transition-all before:duration-300 hover:text-slate-100 hover:before:scale-x-75 md:before:absolute"
          >
            {section}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default SectionsLinks;
