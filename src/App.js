import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/DashBoard/Dashboard';
import Loading from './components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './Actions/Actions';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{ paddingTop: "10px" }} >
      <Header />
      <hr style={{ marginTop: "10px" }} />
      <Dashboard />
    </div>
  ) : <Loading />
}

export default App