import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { backdrop } from '../../../utils/motion';

const BackDrop = ({ onClick }: { onClick?: () => void }) => {
  const content = (
    <AnimatePresence>
      <motion.div
        variants={backdrop}
        initial='hide'
        exit='hide'
        animate='show'
        className='absolute top-0 left-0 h-full w-full bg-charcoal/50 backdrop-blur-md z-10'
        onClick={onClick}
      ></motion.div>
    </AnimatePresence>
  );
  return createPortal(
    content,
    document.getElementById('backdrop-hook') as HTMLElement
  );
};

export default BackDrop;
