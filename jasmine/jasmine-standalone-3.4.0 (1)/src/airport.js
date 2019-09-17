function Airport() {
  var in_airport = false;

  Airport.land = function () {
    in_airport = true;
  }

  Airport.landed = function () {
    return in_airport;
  }

}
