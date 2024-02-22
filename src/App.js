import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AppProvider } from './utils/context';
import Layout from './pages/layout';
import Balance from './pages/balance';
import { useState } from 'react';

function App() {
  const [dateFrom, setDateFrom] = useState(new Date(new Date()-30*24*60*60*1000).toISOString().substr(0,10));
  const [dateTill, setDateTill] = useState(new Date().toISOString().substr(0,10));

  return (
    <AppProvider>
      <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="finance" element={<Balance 
            dateFrom={dateFrom}
            dateTill={dateTill}
            setDateFrom={e=>setDateFrom(e.target.value)}
            setDateTill={e=>setDateTill(e.target.value)}
          />} />
        </Route>
      </Routes>
      </div>
    </AppProvider>    
  );
}

export default App;
