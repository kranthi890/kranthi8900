import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginForm from './component/LoginForm';
// import Home from './components/Home';
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import WatchList from "./components/WatchList";
// import Main from './components/Main';
import NavBar1 from "./components/NavBar1";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";
// import Nav from './components/Nav'

// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Contact from "./components/Contact";
import Content from "./components/Content";
import GetStarted from "./components/GetStarted";
import Cookie from "./component/Cookie";
import Terms from "./component/Terms";
import Privacy from "./component/Privacy";
import Trending from "./component/Trending";
import Converter from "./component/Converter";
import Portfolio from "./components/Portfolio";
import RecentlyAdded from "./component/RecentlyAdded";
import Rules from "./component/Rules";
import Disclaimer from "./component/Disclaimer";
import FAQ from "./component/FAQ";
import LineChart from "./component/LineChart";
import BarChart from "./component/BarChart";
import DoughnutChart from "./component/DoughnutChart";
import Team from "./component/Team";


function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=100&sparkline=true";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/content" element={<Content />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/term" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/rule" element={<Rules />} />
          <Route path="/disc" element={<Disclaimer />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/About" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/list" element={<WatchList />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/trend" element={<Trending />} />
          <Route path="/chart" element={<LineChart />} />
          <Route path="/bar" element={<BarChart/>} />
          <Route path="/nut" element={<DoughnutChart/>} />
          <Route path="/radd" element={<RecentlyAdded />} />
          <Route path="/exchange" element={<Converter />} />
          <Route path="/" element={<Coins coins={coins} />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
