import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Web3 from "web3";
import Navbar from "./Navbar";
import Ride from "../abis/Ride.json";
import Main from "./Main";

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }

    else if(window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }

    else {
      window.alert("non-ethereum browser detected. You should consider trying Metamask!")
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    this.setState({account: accounts[0]})
    const networkId = await web3.eth.net.getId()
    const networkData = Ride.networks[networkId]
    if (networkData) {
      const ride = web3.eth.Contract(Ride.abi, networkData.address)
      this.setState({ride})
      const driverCount = await ride.methods.driverNo().call()
      const riderCount = await ride.methods.riderNo().call()
      const routeCount = await ride.methods.routeNo().call()
      this.setState({driverCount})
      this.setState({riderCount})
      this.setState({routeCount})
      //Load Drivers
      for (var i=1; i<=driverCount; i++) {
        const driver = await ride.methods.drivers(i).call()
        this.setState({
          drivers: [...this.state.drivers, driver]
        })
      }
      for (var i=1; i<=riderCount; i++) {
        const rider = await ride.methods.riders(i).call()
        this.setState({
          riders: [...this.state.riders, rider]
        })
      }
      for (var i=1; i<=routeCount; i++) {
        const route = await ride.methods.routes(i).call()
        this.setState({
          routes: [...this.state.routes, route]
        })
      }
      this.setState({loading: false})
    
    }
    else {
      window.alert('Ride Sharing contract not deployed to detect network')
    }
  }

  driverRegister(name, status, size) {
    this.setState({loading: true})
    this.state.ride.methods.driverLogin(name, status, size).send({from: this.state.account})
    .once('reciept', (reciept) => {
      this.setState({loading: false})
    })
  }
  
  riderRegister(name) {
    this.setState({loading: true})
    this.state.ride.methods.riderLogin(name).send({from: this.state.account})
    .once('reciept', (reciept) => {
      this.setState({loading: false})
    })
  }

  addRoute(driverID, origin, destination, etd, eta) {
    this.setState({loading: true})
    this.state.ride.methods.addRoute(driverID, origin, destination, etd, eta).send({from: this.state.account})
    .once('reciept', (reciept) => {
      this.setState({loading: false})
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      driverCount: 0,
      riderCount: 0,
      routeCount: 0,
      drivers: [],
      riders: [],
      routes: [],
      loading: true
    }
    this.driverRegister = this.driverRegister.bind(this)
    this.riderRegister = this.riderRegister.bind(this)
    this.addRoute = this.addRoute.bind(this)
  }
  
  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <main role="main" className="col-lg-12 d-flex">
          { this.state.loading
            ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
            : <Main 
              driverRegister={this.driverRegister} 
              drivers={[this.state.drivers]}
              riderRegister={this.riderRegister} 
              riders={[this.state.riders]}
              addRoute={this.addRoute}
              routes={[this.state.routes]}/>

          }
        </main>
      </div>
    );
  }
}

export default App;