pragma solidity ^0.5.0;

contract Ride {
    uint256 public rideNo = 1;

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
        string car;
        mapping(uint256 => Route) routes;
    }

    struct Route {
        uint256 id;
        string origin;
        string destination;
        string estimatedTimeDep;
        string estimatedTimeArr;
    }
}
