import { places } from '../../utils/dummyData';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = places.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
