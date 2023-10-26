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
    <AnimatePresence>
      <motion.div
        variants={modal}
        initial='hide'
        animate='show'
        exit='hide'
        className='z-20'
      >
        <div className='flex justify-center items-center'>
          <Card className={`${className} w-full max-w-4xl h-auto`}>
            <header className={`${headerClassName}`}>
              <h2>{headerTitle}</h2>
            </header>
            <form
              onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault}
            >
              <div className={`${contentClassName}`}>{children}</div>
              <footer className={`${footClassName}`}>{footerContent}</footer>
            </form>
          </Card>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(
    content,
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
