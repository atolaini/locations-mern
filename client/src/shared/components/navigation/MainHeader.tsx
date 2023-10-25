import { IGenerics } from '../../../utils/interfaces';

const MainHeader = ({ children, className }: IGenerics) => {
  return (
    <header
      className={`bg-charcoal flex flex-row justify-between p-4 items-center ${className}`}
    >
      {children}
    </header>
  );
};

export default MainHeader;
