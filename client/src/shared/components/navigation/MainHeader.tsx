import { IGenerics } from '../../../utils/interfaces';

const MainHeader = ({ children }: IGenerics) => {
  return (
    <header className='bg-slateGray/20 flex flex-row justify-between p-4 items-center'>
      {children}
    </header>
  );
};

export default MainHeader;
