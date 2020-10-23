var World = {
	Gravity: {
		const constant = 0.00000000006673,
		value = 0,
		Calculate: function(m1, m2, dist) {
			Force = ((constant * value) * m1 * m2) / (dist * dist);
			return Force;
		},
		EscapeVelocityPlanet: function(planetMass, distance) {
			Force = Math.sqrt((2 * constant * planetMass) / dist);
			return Force;
		},
	},
	AirResistance: {
		Calculate: function(Length, densityFluid, viscosity, velocity) {
			Force = (Length * densityFluid * velocity) / viscosity;
			return Force;
		}
	}
};
