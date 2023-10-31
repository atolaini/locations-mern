import HttpError from '../models/http-error';
import { v4 as uuidv4 } from 'uuid';

let DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u1',
  },
];

export const getPlaceById = (req, res, next) => {
  console.log(req);
  const placeId = req.params.placeid;
  const places = DUMMY_PLACES.filter((p) => p.id === placeId);

  if (!places || places.length === 0) {
    const error = new HttpError(
      'Could not find a place for the provided id.',
      404
    );
    throw error;
  }

  res.status(200).json({ places });
};

export const getPlacesByUserId = (req, res, next) => {
  const placeId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => p.creator === placeId);

  if (!place) {
    next(
      new HttpError('Could not find a place for the provided user id.', 404)
    );
  }

  return res.status(200).json({ place });
};

export const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;

  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  //@ts-ignore
  DUMMY_PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};

export const updatePlace = (req, res, next) => {
  const { title, description } = req.body;
  const placeId = req.params.placeid;
  const updatedPlace = { ...DUMMY_PLACES.find((p) => p.id === placeId) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);
  updatedPlace.title = title;
  updatedPlace.description = description;
  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

export const deletePlace = (req, res, next) => {
  const placeId = req.params.placeid;
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id != placeId);

  res.status(200).json({ message: 'Deleted place.' });
};
