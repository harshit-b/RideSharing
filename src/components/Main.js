import React, { Component } from 'react';
import DriverTable from "./DriverTable";
import RiderTable from "./RiderTable";
import RouteTable from "./RouteTable"

class Main extends Component {

  render() {
    return (
      <div id="content">
        <h1>Add Driver</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.driverName.value
          const size = this.seatSize.value
          const status = this.driverStatus.value
          this.props.driverRegister(name, status, size) 
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="driverName"
              type="text"
              ref={(input) => { this.driverName = input }}
              className="form-control"
              placeholder="Driver Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="seatSize"
              type="text"
              ref={(input) => { this.seatSize = input }}
              className="form-control"
              placeholder="Seat Size"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="driverStatus"
              type="text"
              ref={(input) => { this.driverStatus = input }}
              className="form-control"
              placeholder="Driver Status"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Add Driver</button>
        </form>
        <p> </p>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.riderName.value
          this.props.riderRegister(name) 
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="riderName"
              type="text"
              ref={(input) => { this.riderName = input }}
              className="form-control"
              placeholder="Rider Name"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Add Rider</button>
        </form>
        <p> </p>
        <form onSubmit={(event) => {
          event.preventDefault()
          const driverID = this.driverID.value
          const origin = this.origin.value
          const destination = this.destination.value
          const eta=this.eta.value
          const etd=this.etd.value
          this.props.addRoute(driverID, origin, destination, etd, eta) 
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="driverID"
              type="text"
              ref={(input) => { this.driverID = input }}
              className="form-control"
              placeholder="Driver ID"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="origin"
              type="text"
              ref={(input) => { this.origin = input }}
              className="form-control"
              placeholder="Origin"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="destination"
              type="text"
              ref={(input) => { this.destination = input }}
              className="form-control"
              placeholder="Destination"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="etd"
              type="text"
              ref={(input) => { this.etd = input }}
              className="form-control"
              placeholder="Estimated time of Departure"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="eta"
              type="text"
              ref={(input) => { this.eta = input }}
              className="form-control"
              placeholder="Estimated Time of Arrival"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Add Route</button>
        </form>
        {/* <p> </p>
        <form onSubmit={(event) => {
          event.preventDefault()
          const bookOrigin = this.origin.value
          const bookDestination = this.destination.value
          const eta=this.eta.value
          const etd=this.etd.value
          this.props.addRoute(driverID, origin, destination, etd, eta) 
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="driverID"
              type="text"
              ref={(input) => { this.driverID = input }}
              className="form-control"
              placeholder="Driver ID"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="origin"
              type="text"
              ref={(input) => { this.origin = input }}
              className="form-control"
              placeholder="Origin"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="destination"
              type="text"
              ref={(input) => { this.destination = input }}
              className="form-control"
              placeholder="Destination"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="etd"
              type="text"
              ref={(input) => { this.etd = input }}
              className="form-control"
              placeholder="Estimated time of Departure"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="eta"
              type="text"
              ref={(input) => { this.eta = input }}
              className="form-control"
              placeholder="Estimated Time of Arrival"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Add Route</button>
        </form> */}
        <DriverTable drivers={this.props.drivers[0].map(driver => [driver.id.toString(), driver.name, driver.seatSize.toString(), driver.status])} />
        <RiderTable riders={this.props.riders[0].map(rider => [rider.id.toString(), rider.name])} />
        <RouteTable routes={this.props.routes[0].map(route => [route.routeNo.toString(), route.driverId.toString(), route.origin, route.destination, route.estimatedTimeDep.toString(), route.estimatedTimeArr.toString()])} />
      </div>
    );
  }
}

export default Main;