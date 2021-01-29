function capital(capitals) {
    return capitals.map(
      c => `The capital of ${c.state || c.country} is ${c.capital}`
    );
  }

state_capitals = [{ state: "Maine", capital: "Augusta" }];
capital(state_capitals); //"The capital of Maine is Augusta");

// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}];
// capital(country_capitals)[0]; //"The capital of Spain is Madrid")

// mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}];
// capital(mixed_capitals)[1]; //"The capital of Spain is Madrid")
