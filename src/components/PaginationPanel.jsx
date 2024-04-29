import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { TopFilmsContext } from '../contexts/TopFilmsContext';
import { useContext } from 'react';

export default function PaginationPanel() {    
  const { totalPages, currentPage, setPageNumber } = useContext(TopFilmsContext);

  const handlePageChange = (e, page) => {
    setPageNumber(page);
  }

  return (
    <Pagination 
      count={totalPages} 
      page={currentPage} 
      showFirstButton 
      showLastButton 
      onChange={handlePageChange}
    />
  );
} 
