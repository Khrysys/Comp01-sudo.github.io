var Output{
	Display: function(value, type) {
		document.write(value);
		document.write(type);
	},
	Finalize: function(rows) {
		for(i = 0; i < rows.length; i ++) {
			document.write(rows[i]);
		}
	}
};
