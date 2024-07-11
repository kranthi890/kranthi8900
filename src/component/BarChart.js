import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { deepPurple, lightBlue, pink, purple, teal, lime } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import Footer from '../components/Footer';
import NavMain from '../components/NavMain';


Chart.register(BarElement, CategoryScale, LinearScale);

const CoinList = ({ coins, handleCoinClick }) => {
    return (
        <>
        <h1>Bitcoin Price Dashboard</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {coins.map((coin) => (
          <div
            key={coin.id}
            onClick={() => handleCoinClick(coin.id)}
            style={{
              backgroundColor: '#f5f5f5',
              padding: '10px',
              marginBottom: '10px',
              marginRight: '10px',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={coin.image}
                alt={coin.name}
                style={{ width: '30px', height: '30px', marginRight: '10px' }}
              />
              <span>{coin.name}</span>
            </div>
            <div style={{ fontWeight: 'bold' }}>${coin.current_price.toFixed(2)}</div>
          </div>
        ))}
      </div>
      </>
    );
  };  
  
  const CoinChart = ({ coinData }) => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });
  
    const timeIntervals = ['24h'];
  
    const data = {
      labels: timeIntervals,
      datasets: [
        {
          label: 'Price Change',
          data: timeIntervals.map((interval) => {
            const coin = coinData[0];
            return coin[`price_change_percentage_${interval}`] || 0;
          }),
          backgroundColor: '#283b63'
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          display: isMd ? true : false,
          color:
            theme.palette.mode === 'dark'
              ? theme.palette.text.primary
              : theme.palette.text.secondary,
          anchor: 'end',
          align: 'top',
          labels: {
            title: {
              font: {
                weight: 'bold',
                size: 13,
              },
              padding: 10,
            },
          },
          formatter: (value) => numeral(value).format('0.0%'),
        },
      },
      scales: {
        x: {
          ticks: {
            color: theme.palette.text.primary,
            maxRotation: 0,
            minRotation: 0,
          },
          title: {
            display: true,
            text: 'Time Interval',
            color: theme.palette.text.primary,
            font: {
              weight: 'bold',
              size: 18,
            },
            padding: 10,
          },
        },
        y: {
          ticks: {
            color: theme.palette.text.primary,
            padding: 10,
            callback: (value) => numeral(value).format('0.0%'),
          },
          display: true,
          borderDash: [5, 5],
          title: {
            display: true,
            text: 'Price Change',
            color: theme.palette.text.primary,
            font: {
              weight: 'bold',
              size: 18,
            },
            padding: 10,
          },
        },
      },
    };
  
    return (
      <>
      <div style={{ width: '30%', paddingTop: '10%' }}>
        {/* <CardContent> */}
          <Box sx={{ height: '100vh', position: 'relative' }}>
            <Bar data={data} options={options} plugins={[ChartDataLabels]} />
          </Box>
        {/* </CardContent> */}
      </div>
      </>
    );
  };
  
  
  
  
  

const App = () => {
    const [coinData, setCoinData] = useState([]);
    const [selectedCoinId, setSelectedCoinId] = useState(null);
  
    useEffect(() => {
      fetchCoinData();
    }, []);
  
    const fetchCoinData = () => {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false',
          {
            headers: {
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          setCoinData(response.data);
        })
        .catch((error) => console.log(error));
    };
  
    const handleCoinClick = (coinId) => {
      setSelectedCoinId(coinId);
    };
  
    return (
        <>
        <NavMain/>
        <Nav/>
        <NavBar1/>
      <div style={{ display: 'flex', height: '100vh',paddingBottom:'70%' }}>
        <div style={{ flex: '0 0 30%', padding: '20px' }}>
          <CoinList coins={coinData} handleCoinClick={handleCoinClick} />
        </div>
        <div style={{ flex: '1', padding: '20px' }}>
          {selectedCoinId ? (
            <CoinChart coinData={coinData.filter((coin) => coin.id === selectedCoinId)} />
          ) : (
            <h1>Click on a coin to display the chart</h1>
          )}
        </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default App;