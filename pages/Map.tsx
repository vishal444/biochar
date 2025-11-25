import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { LatLngExpression } from 'leaflet';

export default function CarMap() {
  const [car, setCar] = useState<{ lat: number; lng: number }>({ lat: 51.505, lng: -0.09 });
  const target: { lat: number; lng: number } = { lat: 51.51, lng: -0.1 };

  useEffect(() => {
    const speed = 0.001;
    let animation: number;

    const animate = () => {
      const latDiff = target.lat - car.lat;
      const lngDiff = target.lng - car.lng;

      if (Math.abs(latDiff) < 0.0001 && Math.abs(lngDiff) < 0.0001) return;

      setCar(prev => ({
        lat: prev.lat + latDiff * speed,
        lng: prev.lng + lngDiff * speed,
      }));

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animation);
  }, [car]);

  const center: LatLngExpression = [51.505, -0.09];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[car.lat, car.lng] as LatLngExpression} />
    </MapContainer>
  );
}
