import { Router } from 'express';
import HttpError from '../models/http-error';

const router = Router();

const DUMMY_PLACES = [
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

router.get('/:placeid', (req, res, next) => {
  const placeId = req.params.placeid;
  const place = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!place) {
    const error = new HttpError(
      'Could not find a place for the provided id.',
      404
    );
    throw error;
  }

  res.status(200).json({ place });
});

router.get('/user/:uid', (req, res, next) => {
  const placeId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => p.creator === placeId);

  if (!place) {
    next(
      new HttpError('Could not find a place for the provided user id.', 404)
    );
  }

  return res.status(200).json({ place });
});

export { router as placesRoutes };
