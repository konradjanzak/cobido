import { motion } from 'framer-motion';

const NavLinks = props => {
  const menuVariants = {
    scaleWhileHover: {
      scale: 1.1,
    },
    animateFrom: {
      y: -500,
      opacity: 0,
    },
    animateTo: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <ul className="navigationList">
      <motion.li
        onClick={props.closeMenu}
        variants={menuVariants}
        whileHover="scaleWhileHover"
        initial="animateFrom"
        animate="animateTo"
        transition={{ type: 'spring', delay: 0.05 }}
      >
        <a href="/">Home</a>
      </motion.li>
      <motion.li
        onClick={props.closeMenu}
        variants={menuVariants}
        whileHover="scaleWhileHover"
        initial="animateFrom"
        animate="animateTo"
        transition={{ type: 'spring', delay: 0.1 }}
      >
        <a href="/#about">About</a>
      </motion.li>
      <motion.li
        onClick={props.closeMenu}
        variants={menuVariants}
        whileHover="scaleWhileHover"
        initial="animateFrom"
        animate="animateTo"
        transition={{ type: 'spring', delay: 0.15 }}
      >
        <a href="/#history">History</a>
      </motion.li>
      <motion.li
        onClick={props.closeMenu}
        variants={menuVariants}
        whileHover="scaleWhileHover"
        initial="animateFrom"
        animate="animateTo"
        transition={{ type: 'spring', delay: 0.2 }}
      >
        <a href="/#prices">Prices</a>
      </motion.li>
      <motion.li
        onClick={props.closeMenu}
        variants={menuVariants}
        whileHover="scaleWhileHover"
        initial="animateFrom"
        animate="animateTo"
        transition={{ type: 'spring', delay: 0.25 }}
      >
        <a href="/#plan">Plan your visit</a>
      </motion.li>
      <motion.li
        onClick={props.closeMenu}
        variants={menuVariants}
        whileHover="scaleWhileHover"
        initial="animateFrom"
        animate="animateTo"
        transition={{ type: 'spring', delay: 0.3 }}
      >
        <a href="/#contact">Contact</a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
