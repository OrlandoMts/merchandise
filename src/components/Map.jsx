import React, { useCallback, useState } from 'react';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';


const Map = ({data}) => {

    const mapStyle = {
        height: '50vh',
        width: '100%'
    }
    
    const defaultCenter = {
        lat: data.lat, 
        lng: data.lng
    }

    return (
        <div className='Map'>
            <LoadScript googleMapsApiKey={process.env.googleMapsId} >
                <GoogleMap
                    mapContainerStyle={mapStyle}
                    zoom={8}
                    center={defaultCenter}
                >
                    <Marker position={defaultCenter}/>
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export { Map }
