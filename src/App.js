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
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
  };

  const handleFileLoaded = (data, fileInfo) => {
    if (fileInfo.name.split('.').pop() === 'csv') {
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
        onFileLoaded={handleFileLoaded}
        parserOptions={parserOptions}
      />
      {tableVisible ? <Table people={lawyers} /> : <></>}
      {errorVisible ? <div>File format is not correct</div> : <></>}
    </div>
  );
}

export default App;
