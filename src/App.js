import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AppProvider } from './utils/context';
import { useState } from 'react';
import Layout from './pages/layout';
import Balance from './pages/balance';
import Income from './pages/income';
import Expence from './pages/expence';
import Exchange from './pages/exchange';

function App() {
  const [dateFrom, setDateFrom] = useState('2023-06-01');
  const [dateTill, setDateTill] = useState('2024-01-01');

  return (
    <AppProvider 
      dateFrom={dateFrom}
      dateTill={dateTill}
      setDateFrom={e=>setDateFrom(e?.target ? e.target.value : e)}
      setDateTill={e=>setDateTill(e?.target ? e.target.value : e)}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="balance" element={<Balance 
              dateFrom={dateFrom}
              dateTill={dateTill}
              setDateFrom={e=>setDateFrom(e.target.value)}
              setDateTill={e=>setDateTill(e.target.value)}
            />} />
            <Route path='income' element={<Income 
              dateFrom={dateFrom}
              dateTill={dateTill}
              setDateFrom={e=>setDateFrom(e.target.value)}
              setDateTill={e=>setDateTill(e.target.value)}
            />} />
            <Route path='expence' element={<Expence 
                dateFrom={dateFrom}
                dateTill={dateTill}
                setDateFrom={e=>setDateFrom(e.target.value)}
                setDateTill={e=>setDateTill(e.target.value)}
              />} />
            <Route path='exchange' element={<Exchange 
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
