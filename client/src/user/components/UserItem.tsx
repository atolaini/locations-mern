import { Link } from 'react-router-dom';
import { IUserItems } from '../../utils/interfaces';

import Card from '../../shared/components/UIElements/Card';
import Avatar from '../../shared/components/UIElements/Avatar';

const UserItem = ({ name, image, placeCount, id }: IUserItems) => {
  return (
    <li className='flex flex-row justify-center'>
      <Card className='hover:bg-slateGray/20 transition-all ease-in-out p-5'>
        <Link
          to={`/${id}/places`}
          className='flex flex-1 flex-row items-center gap-4'
        >
          <Avatar
            image={image}
            name={name}
          />

          <div>
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
