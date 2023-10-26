import { useState } from 'react';

import { IPlaceItem } from '../../utils/interfaces';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/formElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';

const PlaceItem = ({
  imageURL,
  title,
  address,
  description,
  id,
  coordinates,
}: IPlaceItem) => {
  const [showMap, setShowMap] = useState(false);

  const showMapHandler = () => setShowMap(true);
  const closeMapeHandler = () => setShowMap(false);

  const long = coordinates?.lng;
  const lat = coordinates?.lat;

  console.log(long, lat);

  return (
    <>
      {showMap && (
        <Modal
          children={
            <Map
              lat={lat}
              long={long}
            />
          }
          show={showMap}
          onCancel={closeMapeHandler}
        />
      )}

      <li>
        <Card className='w-full max-w-2xl p-5 pb-10'>
          <figure>
            <img
              className='rounded-md w-full mb-5'
              src={imageURL}
              alt={title}
            />
          </figure>
          <div className='mb-10'>
            <h2 className='text-lg mb-5'>{title}</h2>
            <h3 className='text-sm'>{address}</h3>
            <p>{description}</p>
          </div>
          <div className='flex flex-row flex-1 gap-4 justify-center'>
            <Button
              onClick={showMapHandler}
              inverse
            >
              View on Map
            </Button>
            <Button to={`/places/${id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
