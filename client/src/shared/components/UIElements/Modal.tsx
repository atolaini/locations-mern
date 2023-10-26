import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IModal, IModalOverlay } from '../../../utils/interfaces';
import { modal } from '../../../utils/motion';

import BackDrop from './BackDrop';
import Card from './Card';

const ModalOverlay = ({
  className,
  headerClassName,
  headerTitle,
  onSubmit,
  contentClassName,
  children,
  footClassName,
  footerContent,
}: IModalOverlay) => {
  const content = (
    <motion.div
      variants={modal}
      initial='hide'
      animate='show'
      exit='hide'
      className='relative z-20'
    >
      <Card
        className={`${className} w-full max-w-4xl h-auto fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  p-5 shadow-2xl`}
      >
        <header className={`${headerClassName} flex justify-center mb-5`}>
          <h2>{headerTitle}</h2>
        </header>
        <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault}>
          <div className={`${contentClassName}`}>{children}</div>
          <footer className={`${footClassName}`}>{footerContent}</footer>
        </form>
      </Card>
    </motion.div>
  );

  return createPortal(
    <AnimatePresence>{content}</AnimatePresence>,
    document.getElementById('modal-hook') as HTMLElement
  );
};

const Modal = ({ show, onCancel, ...props }: IModal) => {
  return (
    <>
      {show && <BackDrop onClick={onCancel} />}
      <ModalOverlay {...props} />
    </>
  );
};

export default Modal;
