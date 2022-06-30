import React, { Component } from 'react';

class RouteTable extends Component {
    render() {
        return (
            <div>
                <h2>Routes</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Driver ID</th>
                            <th scope="col">Origin</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Estimated Time Dep </th>
                            <th scope="col">Estimated Time Arr </th>
                        </tr>
                    </thead>
                    <tbody id="routeList">
                        {this.props.routes.map((row, key) => <TableRow row={row} key={key}/>)}
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

export default RouteTable;