import { v4 as uuidv4 } from 'uuid';
import HttpError from '../models/http-error';

export const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Adam Tolaini',
    email: 'at@test.com',
    password: 'test',
  },
];

export const getAllUsers = (req, res, next) => {
  res.status(200).json({ users: DUMMY_USERS });
};

export const createUser = (req, res, next) => {
  const { name, email, password } = req.body;
  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  //@ts-ignore
  DUMMY_USERS.push(createdUser);

  res.status(201).json({ message: 'new user created', user: createdUser });
};

export const logUserIn = (req, res, next) => {
  const { email, password } = req.body;

  const verifiedUser = DUMMY_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!verifiedUser || verifiedUser.password !== password) {
    throw new HttpError(
      'colud not log you in, please check your credentials',
      401
    );
  }

  res.status(200).json({ message: 'user logged in', user: verifiedUser });
};
