import { IAvatar } from '../../../utils/interfaces';

const Avatar = ({ image, name }: IAvatar) => {
  return (
    <figure>
      <img
        className='w-20 h-20 md:w-28 md:h-28 lg:max-w-xs lg:max-h-lg object-cover rounded-full p-1 border-copperOrange border-2 overflow-hidden'
        src={image}
        alt={name}
      />
    </figure>
  );
};

export default Avatar;
