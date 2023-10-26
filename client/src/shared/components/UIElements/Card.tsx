import { IGenerics } from '../../../utils/interfaces';

interface ICardProps extends IGenerics {
  className?: string;
}

const Card = ({ children, className }: ICardProps) => {
  return (
    <div className={`bg-midnightPurple/20 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
