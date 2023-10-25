import ReactDOM from 'react-dom';
import { ISideDraw } from '../../../utils/interfaces';
import { motion, AnimatePresence } from 'framer-motion';
import { slideIn } from '../../../utils/motion';

const SideDraw = ({ children, isOpen }: ISideDraw) => {
  const content = isOpen && (
    <AnimatePresence>
      <motion.aside
        key='side-nav'
        variants={slideIn}
        animate='open'
        initial='closed'
        exit='closed'
        className='fixed top-[62px] bg-midnightPurple/20 backdrop-blur h-full w-10/12 p-5 block sm:hidden'
      >
        {children}
      </motion.aside>
    </AnimatePresence>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('drawer-hook')!
  );
};

export default SideDraw;
