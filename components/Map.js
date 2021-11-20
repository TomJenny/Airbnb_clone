import { LocationMarkerIcon } from "@heroicons/react/solid";
import getCenter from "geolib/es/getCenter";
import Image from "next/image";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/vulanpro9x/ckw7woh7w5erx15o4p9ggc0v8"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
      className="rounded-xl"
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              aria-label="push-pin"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer animate-bounce text-lg"
            >
              <LocationMarkerIcon className="h-7 text-red-400 " />
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="z-50 text-red-500 text-sm font-bold"
            >
              <div className="relative">
                <Image
                  src={result.img}
                  height={100}
                  width={220}
                  className="rounded-lg"
                />
                <div className="">
                  <p className="text-red-500 text-xs ">{result.title}</p>
                  <p className="text-black font-semibold text-xs">
                    {result.price}
                  </p>
                </div>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
