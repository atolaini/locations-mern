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
  id: string;
  creatorId: string;
  coordinates: {
    lat: number;
    lng: number;
  };
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

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  size?: 'small' | 'default' | 'large';
  inverse?: boolean;
  danger?: boolean;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface IModal extends IModalOverlay {
  show: boolean;
  onCancel?: () => void;
}

export interface IModalOverlay extends IGenerics {
  className?: string;
  headerClassName?: string;
  headerTitle?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  contentClassName?: string;
  footClassName?: string;
  footerContent?: React.ReactNode;
  children: React.ReactNode;
}
