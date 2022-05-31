pragma solidity ^0.5.0;

contract Ride {
    string public DAPPname;
    uint256 public driverNo = 0;

    mapping(uint256 => Driver) public drivers;

    struct Rider {
        uint256 id;
        string name;
        uint256 age;
        Route route;
    }

    struct Driver {
        uint256 id;
        string name;
        string status;
        uint256 seatSize;
        mapping(uint256 => Route) routes;
    }

    struct Route {
        uint256 id;
        string origin;
        string destination;
        uint256 estimatedTimeDep;
        uint256 estimatedTimeArr;
    }

    event DriverCreated(
        uint256 id,
        string name,
        string status,
        uint256 seatSize
    );

    constructor() public {
        DAPPname = "Ride Sharing DAPP";
    }

    function driverLogin(
        string memory _name,
        string memory _status,
        uint256 _seatSize
    ) public {
        //Increment Driver No.
        driverNo++;
        //Create a Driver
        drivers[driverNo] = Driver({
            id: driverNo,
            name: _name,
            status: _status,
            seatSize: _seatSize
        });

        //Trigger an event
        emit DriverCreated(driverNo, _name, _status, _seatSize);
    }
}
