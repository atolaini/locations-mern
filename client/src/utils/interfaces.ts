export interface IGenerics {
  children: React.ReactNode;
  className?: string;
}

export interface IUser {
  id: string;
  name: string;
  image: string;
  places: number;
}

export interface IUserItems {
  name: string;
  image: string;
  placeCount: number;
  id: string;
}

export interface IAvatar {
  name: string;
  image: string;
}

export interface ISideDraw extends IGenerics {
  isOpen: boolean;
}

export interface IPlaceItem {
  imageURL: string;
  title: string;
  address: string;
  description: string;
}

export interface IPlace {
  id: string;
  title: string;
  description: string;
  address: string;
  imageURL: string;
  location: {
    lat: number;
    lng: number;
  };
  creator: string;
}
