import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { deepPurple } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import NavMain from '../components/NavMain';
import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import Footer from '../components/Footer';

Chart.register(...registerables);

const DoughnutChart = () => {
    const theme = useTheme();
  
    const [chartData, setChartData] = useState([]);
  
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
  
    const data = {
      labels: chartData
        .sort((a, b) => a.current_price - b.current_price)
        .filter((coin) => coin.current_price > 100)
        .slice(0, 20)
        .map((coin) => coin.name),
      datasets: [
        {
          data: chartData
            .sort((a, b) => (a.current_price > b.current_price ? 1 : -1))
            .filter((coin) => coin.current_price > 100)
            .slice(0, 20)
            .map((coin) => coin.current_price),
          backgroundColor: [
            theme.palette?.customYellow?.dark || '#FFD600',
            theme.palette?.error?.dark || '#B00020',
            theme.palette?.primary?.main || '#1976D2',
            theme.palette?.success?.dark || '#388E3C',
            deepPurple[600],
          ],
          borderWidth: 1,
          borderColor: colors.common.white,
        },
      ],
    };
  

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
    },
    cutout: '50%',
    plugins: {
      legend: {
        display: true,
        padding: 30,
        labels: {
          color: theme.palette.text.primary,
          font: {
            size: 14,
          },
        },
      },
      datalabels: {
        display: true,
        color: colors.common.white,
        align: 'center',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 13,
            },
          },
        },
        formatter: (value) => numeral(value).format('$0,0.00'),
      },
    },
  };

  return (
    <>
    <NavMain/>
    <Nav/>
    <NavBar1/>
    <div style={{textAlign:'center',fontSize:'50px',}}>
      <CardHeader
        title='Top 20 Cheapest Cryptocurrencies'
        subheader='Top 20 Cheapest Cryptocurrencies Above $100 Measured By Their Market Price'
      />
      <Divider />
      <CardContent>
        <Box sx={{ height: '100vh', position: 'relative' }}>
          <Pie data={data} options={options} plugins={[ChartDataLabels]} />
        </Box>
      </CardContent>
    </div>
    <Footer/>
    </>
  );
};

export default DoughnutChart;