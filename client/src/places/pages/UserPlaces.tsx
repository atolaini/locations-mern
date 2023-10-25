import { places } from '../../utils/dummyData';
import PlaceList from '../components/PlaceList';

const UserPlaces = () => {
  return <PlaceList items={places} />;
};

export default UserPlaces;
