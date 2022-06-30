import React, { Component } from 'react';

class RiderTable extends Component {
    render() {
        return (
            <div>
                <h2>Riders</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Rider Name</th>
                        </tr>
                    </thead>
                    <tbody id="riderList">
                        {this.props.riders.map((row, key) => <TableRow row={row} key={key}/>)}
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

export default RiderTable;