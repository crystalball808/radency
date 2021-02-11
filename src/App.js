import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import Table from './components/Table/Table';
import './App.css';

function App() {
  const [lawyers, setLawyers] = useState([]);
  const [tableVisible, setTableVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  const parserOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) =>
      header.trim().toLowerCase().replace(/\W/g, '_'),
  };

  const handleFileLoaded = (data, fileInfo) => {
    const headers = Object.keys(data[0]);
    if (
      fileInfo.name.split('.').pop() === 'csv' &&
      headers.includes('full_name') &&
      headers.includes('phone') &&
      headers.includes('email')
    ) {
      setLawyers(data);
      setTableVisible(true);
      setErrorVisible(false);
    } else {
      setTableVisible(false);
      setErrorVisible(true);
    }
  };

  return (
    <div className='wrapper'>
      <CSVReader
        cssClass='react-csv-input'
        label='Import users'
        onFileLoaded={handleFileLoaded}
        parserOptions={parserOptions}
      />
      {tableVisible ? <Table lawyers={lawyers} /> : <></>}
      {errorVisible ? (
        <div className='error'>File format is not correct</div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
