import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import NavMain from '../components/NavMain';

Chart.register(...registerables);

const LineChart = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [chartData, setChartData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coinChartData, setCoinChartData] = useState(null);

  const fetchTopCoins = () => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      .then((response) => {
        setChartData(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTopCoins();
  }, []);

  const handleCoinClick = (coin) => {
    setSelectedCoin(coin);
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=USD&days=7&interval=daily`)
      .then((response) => {
        setCoinChartData(response.data);
      })
      .catch((error) => console.log(error));
  };

  if (chartData.length === 0) {
    return <div>Loading chart data...</div>;
  }

  const data = {
    labels: chartData.slice(0, 50).map((coin) => coin.name),
    datasets: [
      {
        label: 'Coin Price',
        data: chartData.slice(0, 50).map((coin) => coin.current_price),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderWidth: 2,
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
        formatter: (value) => numeral(value).format('$0,0.00'),
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme.palette.text.primary,
          maxRotation: 45,
          minRotation: 45,
        },
        grid: {
          color: theme.palette.divider,
        },
      },
      y: {
        ticks: {
          color: theme.palette.text.primary,
          padding: 10,
          callback: (value) => numeral(value).format('$0,0.00'),
        },
        display: true,
        borderDash: [5, 5],
        grid: {
          color: theme.palette.divider,
        },
        color: (context) =>
          context.p0.parsed.y <
          context.p1.parsed.y
            ? colors.grey[500]
            : colors.red[500],
      },
    },
  };

  return (
    <>
      <NavMain/>
      <Nav/>
      <NavBar1/>
      <Card>
        <CardHeader
          title='Crypto Coins Prices Chart'
          subheader='Price Trends of the Top 50 Cryptocurrencies'
        />
        <Divider />
        <CardContent>
          {selectedCoin ? (
            <div>
              <h2>{selectedCoin.name} Price Chart</h2>
              {coinChartData ? (
                <div style={{height:'100vh'}} className="chart-container">
                <Line data={{ labels: coinChartData.prices.map((entry) => entry[0]), datasets: [{ data: coinChartData.prices.map((entry) => entry[1]), fill: false, borderColor: 'rgb(255,255,255)', pointBackgroundColor: 'rgb(255, 99, 132)', pointBorderWidth: 2 }] }} options={options} plugins={[ChartDataLabels]} />
                </div>
              ) : (
                
                <div>Loading chart data...</div>
              )}
            </div>
          ) : (
            <div>
              <h2>Top 50 Coins Price Chart</h2>
              <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}className="coin-select">
                {chartData.slice(0, 50).map((coin) => (
                  <button
                    key={coin.id}
                    onClick={() => handleCoinClick(coin)}
                     style={{backgroundColor:'#283b63',border:'none',padding:'10px 20px',borderRadius:'5px',cursor:'pointer',color:'white'}}className="coin-button">
                    {coin.name}
                  </button>
                ))}
              </div>
              <div style={{height:'100vh'}} className="chart-container">
                <Line data={data} options={options} plugins={[ChartDataLabels]} />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <Footer/>
    </>
  );
};

export default LineChart;
