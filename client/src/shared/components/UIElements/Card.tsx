import { IGenerics } from '../../../utils/interfaces';

interface ICardProps extends IGenerics {
  className?: string;
}

const Card = ({ children, className }: ICardProps) => {
  return (
    <div
      className={`bg-midnightPurple/20 rounded-lg hover:bg-slateGray/20 transition-all ease-in-out p-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
