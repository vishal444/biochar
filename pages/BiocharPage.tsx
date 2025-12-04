import type { CSSProperties } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function BiocharPage() {
  const styles: { [key: string]: CSSProperties } = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(to bottom, #d0f0c0, #e0f5d9, #d0f0c0)',
      padding: 20,
      boxSizing: 'border-box',
    },
    mapCard: {
      width: '100%',
      height: '100%',
      background: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderRadius: 16,
      padding: 24,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      marginBottom: 16,
    },
    h2: { fontSize: 32, fontWeight: 600, color: '#047857', marginBottom: 8, margin: 0 },
    p: { fontSize: 16, color: '#374151', margin: 0 },
    mapWrapper: {
      flex: 1,
      width: '100%',
      minHeight: 0,
    }
  };

  // --- Existing facility locations ---
  const facilities = [
    { id: 1, name: 'ASG Wertstoffhof Wesel', lat: 51.6583, lng: 6.6289 },
    { id: 2, name: 'AEZ Asdonkshof', lat: 51.5056, lng: 6.5389 },
    { id: 3, name: 'ASG Wertstoffhof Wesel', lat: 51.6583, lng: 6.6289 },
    { id: 4, name: 'AEZ Asdonkshof', lat: 51.5056, lng: 6.5389 },
    { id: 5, name: 'Kläranlage Emschermündung', lat: 51.53755, lng: 6.77992 },
    { id: 6, name: 'Kläranlage Wesel', lat: 51.6458, lng: 6.6233 },
    { id: 7, name: 'Kläranlage Moers', lat: 51.4678, lng: 6.6556 },
    { id: 8, name: 'Kläranlage Xanten', lat: 51.6622, lng: 6.4525 },
    { id: 9, name: 'Kläranlage Schermbeck', lat: 51.6833, lng: 6.8667 },
  ];

  // --- Plant locations ---
  const plants = [
    { id: 'p1', name: 'Plant Moers', lat: 51.4678, lng: 6.65 },
    { id: 'p2', name: 'Plant Rheinberg', lat: 51.546, lng: 6.595 },
    { id: 'p3', name: 'Plant Wesel', lat: 51.66, lng: 6.62 },
  ];

  // --- Application endpoints ---
  const endpoints = [
    { id: 'e1', name: 'Endpoint Wesel – Molkereiweg 16', lat: 51.665, lng: 6.625 },
    { id: 'e2', name: 'Endpoint Wesel–Obrighoven (Obrighovener Str. 129)', lat: 51.672, lng: 6.584 },
    { id: 'e3', name: 'Endpoint Wesel–Obrighoven (Obrighovener Str. 121)', lat: 51.6725, lng: 6.583 },
    { id: 'e4', name: 'Endpoint Wesel am Rhein (Am Lippeglacis 14-18)', lat: 51.676, lng: 6.628 },
    { id: 'e5', name: 'Endpoint Wesel – Voßhöveler Str. 24', lat: 51.667, lng: 6.620 },
    { id: 'e6', name: 'Endpoint Moers (Am Steinbrink 24, Schwafheim)', lat: 51.480, lng: 6.668 },
    { id: 'e7', name: 'Endpoint Moers (Holderberger Str. 14)', lat: 51.481, lng: 6.680 },
    { id: 'e8', name: 'Endpoint Moers–Hülsdonk (Am Schürmannshütt 30T)', lat: 51.485, lng: 6.700 },
  ];

  // Icons
  const facilityIcon = new L.DivIcon({
    html: '<div style="font-size: 24px;">🏭</div>',
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const plantIcon = new L.DivIcon({
    html: '<div style="font-size: 26px;">🌱</div>',
    className: '',
    iconSize: [28, 28],
    iconAnchor: [14, 28],
  });

  const endpointIcon = new L.DivIcon({
    html: '<div style="font-size: 26px;">📍</div>',
    className: '',
    iconSize: [28, 28],
    iconAnchor: [14, 28],
  });

  const center: LatLngExpression = [51.6, 6.65];

  return (
    <div style={styles.container}>
      <div style={styles.mapCard}>
        <div style={styles.header}>
          <h2 style={styles.h2}>Facilities, Plants & Application Endpoints</h2>
          <p style={styles.p}>All locations plotted on the map</p>
        </div>

        <div style={styles.mapWrapper}>
          <MapContainer
            center={center}
            zoom={10}
            style={{ width: '100%', height: '100%', borderRadius: 12 }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Facility markers */}
            {facilities.map(f => (
              <Marker
                key={f.id}
                position={[f.lat, f.lng] as LatLngExpression}
                icon={facilityIcon}
              />
            ))}

            {/* Plant markers */}
            {plants.map(p => (
              <Marker
                key={p.id}
                position={[p.lat, p.lng] as LatLngExpression}
                icon={plantIcon}
              />
            ))}

            {/* Application Endpoints */}
            {endpoints.map(ep => (
              <Marker
                key={ep.id}
                position={[ep.lat, ep.lng] as LatLngExpression}
                icon={endpointIcon}
              />
            ))}

          </MapContainer>
        </div>
      </div>
    </div>
  );
}