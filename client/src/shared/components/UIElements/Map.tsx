import GoogleMapReact from 'google-map-react';

const Map = ({ long, lat }: { long: number; lat: number }) => {
  const defaultProps = {
    center: {
      lat: lat,
      lng: long,
    },
    zoom: 11,
  };

  const API = import.meta.env.VITE_GOOGLE_MAP_API;

  return (
    // Important! Always set the container height explicitly
    <div className='h-[500px] w-full'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
