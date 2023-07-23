"use client"
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect } from 'react';
import "./map.css"
import Image from 'next/image';

const Map = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map-container');
    mapboxgl.accessToken =
      'pk.eyJ1Ijoiam9lbGs5ODk1IiwiYSI6ImNsa2ZkZ2N3dzBqb2szcnFzc3ExZDdiNWkifQ.ZUv2wUOnnUmL090YwmKDgQ';

    const map = new mapboxgl.Map({
      container: mapContainer ? mapContainer : '',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [ 76.6927,8.9698], // center map on Chad
      zoom: 11, // pitch in degrees
    });
    
    // Optionally, add a cleanup function to remove the map when the component unmounts
    return () => map.remove();
  }, []);

  return (
    <main className= "map">
      <div id="map-container" className='map-container' />
      <div className="map-overlay"></div>
      <div className="map-image-overlay">
        <Image src="https://play-lh.googleusercontent.com/rCtjtoA6Fe3plDTg46E5vcDMBpwehjz-m1_5pfLNcQM-R4v4yJnNiCFEsiUIxXtTYrE" alt="map" width={50} height={50} />
      </div>
    </main>
  );
};

export default Map;
