import UsersList from '../components/UsersList';
import { users } from '../../utils/dummyData';

const Users = () => {
  return <UsersList items={users} />;
};

export default Users;
