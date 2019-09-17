describe('Plane', function () {

  airport = new Airport;
  plane = new Plane;

  it("expects plane to return if it has landed or not", function () {
    Airport.land(Plane);
    expect(Plane.landed()).toBe(true);
  });
});
