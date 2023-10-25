import { IPlaceItem } from '../../utils/interfaces';

import Card from '../../shared/components/UIElements/Card';

const PlaceItem = ({ imageURL, title, address, description }: IPlaceItem) => {
  return (
    <li>
      <Card className='w-full max-w-2xl p-5'>
        <figure>
          <img
            className='rounded-md w-full mb-5'
            src={imageURL}
            alt={title}
          />
        </figure>
        <div>
          <h2 className='text-lg mb-5'>{title}</h2>
          <h3 className='text-sm'>{address}</h3>
          <p>{description}</p>
        </div>
        <div className='flex flex-row flex-1 justify-between'>
          <button>View on Map</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
