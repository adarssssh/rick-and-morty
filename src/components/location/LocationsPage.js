// src/components/LocationsPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import getLocations from '../../apiServices/getLocations';
import LocationList from './LocationList';
import Pagination from '../Pagination';
import LocationCard from './LocationCard';
import styles from '../../styles/LocationsPage.module.css';

const LocationsPage = () => {
    const [locations, setLocations] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); // Adjust according to the API

    const navigate = useNavigate();
    
    const { pageNumber } = useParams();
    const page = parseInt(pageNumber) || 1;
  
    
  
    useEffect(() => {
        const fetchLocations = async () => {
            console.log(page)
            const data = await getLocations(page);
            setLocations(data.results);
            setTotalPages(data.info.pages); // Assuming your API returns total pages
          };
          console.log(`Page is called ${page}`)
          fetchLocations();
    }, [page]);
  
    const handlePageChange = (newPage) => {
        console.log(`/location/page/${newPage}`)
        navigate(`/location/page/${newPage}`);
    };
  
    return (
      <div className={styles.locationsContainer}>
        <h1>Locations</h1>
        <div className={styles.locationsGrid}>
        <LocationList locations={locations} />
        </div>
        <Pagination 
        currentPage={page} 
        totalPages={totalPages}
        onPageChange={handlePageChange} 
      />
      </div>
    );
  };
  
  export default LocationsPage;
