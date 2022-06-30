import React, { Component } from 'react';

class DriverTable extends Component {
    render() {
        return (
            <div>
                <h2>Drivers</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Driver Name</th>
                            <th scope="col">Seat Size</th>
                            <th scope="col">Driver Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="driverList">
                        {this.props.drivers.map((row, key) => <TableRow row={row} key={key}/>)}
                    </tbody>
                </table>
            </div>
            
        );
    }
}

class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map((val, key) => <td key={key}>{val}</td>)}
            </tr>
        )
    }
}

export default DriverTable;