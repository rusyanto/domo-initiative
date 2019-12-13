import React from 'react';
import { useParams } from 'react-router-dom';

function Workbook() {
  let { id } = useParams();

  return (
    <div>Workbook {id}</div>
  );
}

export default Workbook;
