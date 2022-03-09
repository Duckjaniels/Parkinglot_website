import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const LeafletMap = () => {
    return(
        <MapContainer center={[50.017720, 19.964310]} zoom={15}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[50.018313, 19.964005]}>
                <Popup>
                    Parking strzeżony 24h <br /> ul Białoruska 45, 30-633 Kraków.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
export {LeafletMap}