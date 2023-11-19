import Geolocation from 'react-native-geolocation-service';

export function getLocationOnline() {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position?.coords;
        resolve({
          lat: latitude,
          long: longitude,
        });
      },
      error => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  });
}

export function getLocationOffline() {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position?.coords;
        resolve({
          lat: latitude,
          long: longitude,
        });
      },
      error => {
        reject(error);
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 10000,
        forceLocationManager: true,
      },
    );
  });
}
