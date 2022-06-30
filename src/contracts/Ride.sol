pragma solidity ^0.5.0;

contract Ride {
    string public DAPPname;
    uint256 public driverNo = 0;
    uint256 public routeNo = 0;
    uint256 public rideNo = 0;
    uint256 public riderNo = 0;

    mapping(uint256 => Driver) public drivers;
    mapping(uint256 => Route) public routes;
    mapping(uint256 => Rider) public riders;
    mapping(uint256 => Rides) public rides;

    struct Rides {
        uint256 id;
        uint256 riderID;
        uint256 driverID;
        uint256 routeID;
    }

    struct Rider {
        uint256 id;
        uint256 routeNo;
        string name;
    }

    struct Driver {
        uint256 id;
        string name;
        string status;
        uint256 seatSize;
        uint256 routeNo;
        // mapping(uint256 => Route) routes;
    }

    struct Route {
        uint256 routeNo;
        uint256 driverId;
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

    event RiderCreated(uint256 id, string name);

    event RouteAdded(
        uint256 driverID,
        uint256 routeNo,
        string origin,
        string destination,
        uint256 estimatedTimeDep,
        uint256 estimatedTimeArr
    );

    event BookedRide(
        uint256 id,
        uint256 riderID,
        uint256 driverID,
        uint256 routeID
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
            seatSize: _seatSize,
            routeNo: 0
        });

        //Trigger an event
        emit DriverCreated(driverNo, _name, _status, _seatSize);
    }

    function addRoute(
        uint256 _driverID,
        string memory _origin,
        string memory _destination,
        uint256 _etd,
        uint256 _eta
    ) public {
        //Increment Driver No.
        routeNo++;
        //Create a Driver
        routes[routeNo] = Route({
            routeNo: routeNo,
            driverId: _driverID,
            origin: _origin,
            destination: _destination,
            estimatedTimeDep: _etd,
            estimatedTimeArr: _eta
        });

        //Trigger an event
        emit RouteAdded(_driverID, routeNo, _origin, _destination, _etd, _eta);

        // Still have to attempt on this code.
        // Driver storage driver;
        // Route storage route;
        // uint256 routeNo;
        // driver = drivers[_driverID];
        // routeNo = driver.routeNo;
        // route = Route(_driverID, _origin, _destination, _eta, _etd);
        // driver.routes.push(route);
        // driver.routeNo = driver.routeNo + 1;
    }

    function riderLogin(string memory _name) public {
        //Increment Driver No.
        riderNo++;
        //Create a Driver
        riders[riderNo] = Rider({id: riderNo, name: _name, routeNo: 0});

        //Trigger an event
        emit RiderCreated(riderNo, _name);
    }

    // function bookRide(string memory _origin, string memory _destination) public {

    // }
}
