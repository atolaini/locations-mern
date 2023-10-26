export const slideIn = {
  open: {
    x: '0%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  closed: {
    x: '-100%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const modal = {
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
      delay: 0.2,
      type: 'spring',
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export const backdrop = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};
