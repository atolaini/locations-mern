import { IAvatar } from '../../../utils/interfaces';

const Avatar = ({ image, name }: IAvatar) => {
  return (
    <figure className='h-[120px] w-[120px] p-1 rounded-full border-copperOrange border-2 overflow-hidden'>
      <img
        className='w-full h-full object-cover rounded-full'
        src={image}
        alt={name}
      />
    </figure>
  );
};

export default Avatar;
