import ReactDOM from 'react-dom';
import { ISideDraw } from '../../../utils/interfaces';
import { motion, AnimatePresence } from 'framer-motion';
import { slideIn } from '../../../utils/motion';

const SideDraw = ({ children, isOpen }: ISideDraw) => {
  const content = isOpen && (
    <motion.aside
      variants={slideIn}
      animate='open'
      initial='closed'
      exit='closed'
      className='fixed top-[62px] bg-slateGray/40 backdrop-blur h-full w-10/12 p-5 block sm:hidden'
    >
      {children}
    </motion.aside>
  );

  return ReactDOM.createPortal(
    <AnimatePresence> {content} </AnimatePresence>,
    document.getElementById('drawer-hook')!
  );
};

export default SideDraw;
