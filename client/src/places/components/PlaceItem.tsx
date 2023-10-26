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
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const showMapHandler = () => setShowMap(true);
  const closeMapeHandler = () => setShowMap(false);

  const showDeletePlaceHandler = () => setShowConfirmDelete(true);
  const closeDeletePlaceHandler = () => setShowConfirmDelete(false);
  const confirmDeletHandler = () => {
    console.log('DELETING...');
    setShowConfirmDelete(false);
  };

  const long = coordinates?.lng;
  const lat = coordinates?.lat;

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

      {showConfirmDelete && (
        <Modal
          show={showConfirmDelete}
          onCancel={closeDeletePlaceHandler}
          headerTitle='Are you sure?'
          footClassName='flex justify-center gap-4'
          footerContent={
            <>
              <Button
                inverse
                onClick={closeDeletePlaceHandler}
              >
                Cancel
              </Button>
              <Button
                danger
                onClick={confirmDeletHandler}
              >
                Confirm
              </Button>
            </>
          }
        />
      )}

      <li>
        <Card className='w-full max-w-2xl p-5 pb-10'>
          <figure>
            <img
              className='rounded-md w-full mb-5'
              src={imageURL}
              alt={title}
              width={640}
              height={425}
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
            <Button
              danger
              onClick={showDeletePlaceHandler}
            >
              Delete
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
