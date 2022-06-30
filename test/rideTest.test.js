const { assert } = require('chai')

const rideSharing = artifacts.require('./Ride.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Ride', ([deployer, driver, rider]) => {
  let ride

  before(async () => {
    ride = await rideSharing.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await ride.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await ride.DAPPname()
      assert.equal(name, 'Ride Sharing DAPP')
    })

  })

  describe('drivers', async()=> {
      let result, driverNo

      before(async()=> {
          result = await ride.driverLogin("Harshit", "Active-fixed", "4")
          driverNo = await ride.driverNo()
          driver = await ride.drivers(1)
      })

      it('driver logged in', async()=> {
          assert.equal(driver.id, 1)
        //   const event = result.logs[0].args
        //   assert.equal(event.id.toNumber(), driverNo.toNumber(), "id is correct")
        //   assert.equal(event.name, "Harshit", "name is correct")
      })
  })

  describe('routes', async()=> {
      let result, route, origin

      before(async()=> {
          result = await ride.addRoute("1", "Indore", "Pritampur", "0900", "0930")
          route = await ride.routes(1)
          origin = route.origin
      })

      it('added route!', async()=> {
          assert.equal(origin, "Indore")
      })
  })

  describe('riders', async()=> {
    let result, riderNo

    before(async()=> {
        result = await ride.riderLogin("1", "Mudit")
        riderNo = await ride.riderNo()
        rider = await ride.riders(1)
    })

    it('driver logged in', async()=> {
        assert.equal(rider.id, 1)
      //   const event = result.logs[0].args
      //   assert.equal(event.id.toNumber(), driverNo.toNumber(), "id is correct")
      //   assert.equal(event.name, "Harshit", "name is correct")
    })
  })
})