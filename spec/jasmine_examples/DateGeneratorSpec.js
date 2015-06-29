describe("DateGenerator", function() {

	var dateproviderModule = require('../../../CognismApp.ver2.0/forms/Fundamentals/Module/dateprovider.js');

	

	describe("Valid date array", function() {
		
		beforeEach(function() {
	        
	    });

	    it("Should return first quartal array", function() {
	    	//Sat Jun 24 2000 11:33:30 GMT+0200 (Central Europe Daylight Time)
			var d = new Date(2015,1,15,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesDDMMYYYY(d);
			var expected = [ '12/31/2014', '12/31/2015', '12/31/2016', '12/31/2017' ]
			expect(dates).toEqual(expected);
	    });

	    it("Should return second quartal array", function() {
	    	var d = new Date(2015,4,15,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesDDMMYYYY(d);
			var expected = [ '3/31/2015', '3/31/2016', '3/31/2017', '3/31/2018' ]
			expect(dates).toEqual(expected);
	    });

	    it("Should return third quartal array", function() {
	    	var d = new Date(2015,7,15,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesDDMMYYYY(d);
			var expected = [ '6/30/2015', '6/30/2016', '6/30/2017', '6/30/2018' ]
			expect(dates).toEqual(expected);
	    });

	    it("Should return fourth quartal array", function() {
	    	var d = new Date(2015,10,15,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesDDMMYYYY(d);
			var expected = [ '9/30/2015', '9/30/2016', '9/30/2017', '9/30/2018' ]
			expect(dates).toEqual(expected);
	    });

	});



	describe("On the quarterly days it should return array of the previous quarterly date", function() {
		
		beforeEach(function() {
	        
	    });

	    it("For the first quartal", function() {
	    	var d = new Date(2014,11,31,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesDDMMYYYY(d);
			var expected = [ '9/30/2014', '9/30/2015', '9/30/2016', '9/30/2017' ]
			expect(dates).toEqual(expected);
	    });

	    it("For the second quartal", function() {
	    	var d = new Date(2015,2,31,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesDDMMYYYY(d);
			var expected = [ '12/31/2014', '12/31/2015', '12/31/2016', '12/31/2017' ]
			expect(dates).toEqual(expected);
	    });

	    it("For the third quartal", function() {
	    	var d = new Date(2015,5,30,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesDDMMYYYY(d);
			var expected = [ '3/31/2015', '3/31/2016', '3/31/2017', '3/31/2018' ]
			expect(dates).toEqual(expected);
	    });

	    it("For the fourth quartal", function() {
	    	var d = new Date(2015,8,30,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesDDMMYYYY(d);
			var expected = [ '6/30/2015', '6/30/2016', '6/30/2017', '6/30/2018' ]
			expect(dates).toEqual(expected);
	    });
	    
	});

describe("Valid date array", function() {
		
		beforeEach(function() {
	        
	    });

	    it("Should return first quartal array", function() {
	    	//Sat Jun 24 2000 11:33:30 GMT+0200 (Central Europe Daylight Time)
			var d = new Date(2015,1,15,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesMMYYYY(d);
			var expected = [ '12/2014', '12/2015', '12/2016', '12/2017' ]
			expect(dates).toEqual(expected);
	    });

	    it("Should return second quartal array", function() {
	    	var d = new Date(2015,4,15,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesMMYYYY(d);
			var expected = [ '3/2015', '3/2016', '3/2017', '3/2018' ]
			expect(dates).toEqual(expected);
	    });

	    it("Should return third quartal array", function() {
	    	var d = new Date(2015,7,15,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesMMYYYY(d);
			var expected = [ '6/2015', '6/2016', '6/2017', '6/2018' ]
			expect(dates).toEqual(expected);
	    });

	    it("Should return fourth quartal array", function() {
	    	var d = new Date(2015,10,15,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesMMYYYY(d);
			var expected = [ '9/2015', '9/2016', '9/2017', '9/2018' ]
			expect(dates).toEqual(expected);
	    });

	});

	describe("On the quarterly days it should return array of the previous quarterly date", function() {
		
		beforeEach(function() {
	        
	    });

	    it("For the first quartal", function() {
	    	var d = new Date(2014,11,31,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesMMYYYY(d);
			var expected = [ '9/2014', '9/2015', '9/2016', '9/2017' ]
			expect(dates).toEqual(expected);
	    });

	    it("For the second quartal", function() {
	    	var d = new Date(2015,2,31,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesMMYYYY(d);
			var expected = [ '12/2014', '12/2015', '12/2016', '12/2017' ]
			expect(dates).toEqual(expected);
	    });

	    it("For the third quartal", function() {
	    	var d = new Date(2015,5,30,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesMMYYYY(d);
			var expected = [ '3/2015', '3/2016', '3/2017', '3/2018' ]
			expect(dates).toEqual(expected);
	    });

	    it("For the fourth quartal", function() {
	    	var d = new Date(2015,8,30,11,33,30,0);
			var dates = dateproviderModule.bfDateProvider.getDatesMMYYYY(d);
			var expected = [ '6/2015', '6/2016', '6/2017', '6/2018' ]
			expect(dates).toEqual(expected);
	    });
	    
	});

});