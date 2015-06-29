describe("Formula", function() {
	var formulaModule = require('../../../CognismApp.ver2.0/forms/Fundamentals/Module/Formula.js');
	
	describe("Invalid Formula", function() {
		var ff; 
		beforeEach(function() {
	        
	    });

	    it("Should throw 'Formula is empty' exeption", function() {
	    	ff = new formulaModule.bfFormulaModule.Formula();				
			expect(function() { ff.Validate(); }).toThrow(new Error("Formula is empty"));
	    });

	    it("Should throw 'Formula does not start with equal sign", function() {
	    	ff = new formulaModule.bfFormulaModule.Formula();		
	    	var m1 = new formulaModule.bfFormulaModule.Member("(", 3);		
	    	ff.AddMember(m1);
			expect(function() { ff.Validate(); }).toThrow(new Error("Formula does not start with equal sign"));
	    });
		
		it("Should throw '1. Invalid formula' exeption", function() {
			ff = new formulaModule.bfFormulaModule.Formula();	
			var m1 = new formulaModule.bfFormulaModule.Member("=");
			var m2 = new formulaModule.bfFormulaModule.Member("CostValue");
			var m3 = new formulaModule.bfFormulaModule.Member("CostValue");
			var m4 = new formulaModule.bfFormulaModule.Member("*");
			var m5 = new formulaModule.bfFormulaModule.Member(")");
			ff.AddMember(m1);
			ff.AddMember(m2);
			ff.AddMember(m3);
			ff.AddMember(m4);
			ff.AddMember(m5);
			expect(function() { ff.Validate(); }).toThrow(new Error("1. Invalid formula"));
		});

		it("Should throw '2. Invalid formula' exeption", function() {
			ff = new formulaModule.bfFormulaModule.Formula();	
			var m1 = new formulaModule.bfFormulaModule.Member("=");
			var m2 = new formulaModule.bfFormulaModule.Member("(");
			var m3 = new formulaModule.bfFormulaModule.Member("CostValue");
			var m4 = new formulaModule.bfFormulaModule.Member("*");
			var m5 = new formulaModule.bfFormulaModule.Member("CostValue");			
			var m6 = new formulaModule.bfFormulaModule.Member(")");
			var m7 = new formulaModule.bfFormulaModule.Member("CostValue");
			ff.AddMember(m1);
			ff.AddMember(m2);
			ff.AddMember(m3);
			ff.AddMember(m4);
			ff.AddMember(m5);	
			ff.AddMember(m6);
			ff.AddMember(m7);		
			expect(function() { ff.Validate(); }).toThrow(new Error("2. Invalid formula"));
		});

		it("Should throw '3. Invalid formula' exeption", function() {
			ff = new formulaModule.bfFormulaModule.Formula();	
			var m1 = new formulaModule.bfFormulaModule.Member("=");
			var m2 = new formulaModule.bfFormulaModule.Member("CostValue");
			var m3 = new formulaModule.bfFormulaModule.Member("(");
			var m4 = new formulaModule.bfFormulaModule.Member("CostValue");
			var m5 = new formulaModule.bfFormulaModule.Member("*");
			var m6 = new formulaModule.bfFormulaModule.Member("1.258");
			var m7 = new formulaModule.bfFormulaModule.Member("*");
			var m8 = new formulaModule.bfFormulaModule.Member(")");
			ff.AddMember(m1);
			ff.AddMember(m2);
			ff.AddMember(m3);
			ff.AddMember(m4);
			ff.AddMember(m5);	
			ff.AddMember(m6);
			ff.AddMember(m7);	
			ff.AddMember(m8);	
			expect(function() { ff.Validate(); }).toThrow(new Error("3. Invalid formula"));
		});

		it("Should throw '4. Invalid formula' exeption", function() {
			ff = new formulaModule.bfFormulaModule.Formula();	
			var m1 = new formulaModule.bfFormulaModule.Member("=");
			var m2 = new formulaModule.bfFormulaModule.Member("(");
			var m3 = new formulaModule.bfFormulaModule.Member("CostValue");
			var m4 = new formulaModule.bfFormulaModule.Member("*");
			var m5 = new formulaModule.bfFormulaModule.Member("1.258");
			var m6 = new formulaModule.bfFormulaModule.Member("*");
			var m7 = new formulaModule.bfFormulaModule.Member(")");
			ff.AddMember(m1);
			ff.AddMember(m2);
			ff.AddMember(m3);
			ff.AddMember(m4);
			ff.AddMember(m5);	
			ff.AddMember(m6);
			ff.AddMember(m7);	
			
			expect(function() { ff.Validate(); }).toThrow(new Error("4. Invalid formula"));
		});

		it("Should throw '5. Brackets is not closed", function() {
			ff = new formulaModule.bfFormulaModule.Formula();	
			var m1 = new formulaModule.bfFormulaModule.Member("=");			
			var m2 = new formulaModule.bfFormulaModule.Member("(");
			var m3 = new formulaModule.bfFormulaModule.Member("CostValue");
			var m4 = new formulaModule.bfFormulaModule.Member("*");
			var m5 = new formulaModule.bfFormulaModule.Member("1.258");
			ff.AddMember(m1);
			ff.AddMember(m2);
			ff.AddMember(m3);
			ff.AddMember(m4);
			ff.AddMember(m5);	
			expect(function() { ff.Validate(true); }).toThrow(new Error("5. Brackets is not closed"));
		});
	});

	describe("Valid Formula", function() {
		var ff; 
		beforeEach(function() {
	        
	    });

	    it("Should not throw exeption", function() {
			ff = new formulaModule.bfFormulaModule.Formula();	
			var m1 = new formulaModule.bfFormulaModule.Member("=");
			var m2 = new formulaModule.bfFormulaModule.Member("(");
			var m3 = new formulaModule.bfFormulaModule.Member("CostValue");
			var m4 = new formulaModule.bfFormulaModule.Member("*");
			var m5 = new formulaModule.bfFormulaModule.Member("1.25");
			var m6 = new formulaModule.bfFormulaModule.Member(")");
			ff.AddMember(m1);
			ff.AddMember(m2);
			ff.AddMember(m3);
			ff.AddMember(m4);
			ff.AddMember(m5);	
			ff.AddMember(m6);	
			expect(ff.Validate()).toEqual(true);
		});	
	});

	describe("Valid Member", function() {
		var ff; 
		beforeEach(function() {
	        
	    });

	    it("Should not throw exeption", function() {

	    	var m1 = new formulaModule.bfFormulaModule.Member("CostValue");

	    	var m2 = new formulaModule.bfFormulaModule.Member("=");

			var m3 = new formulaModule.bfFormulaModule.Member("(");
			var m4 = new formulaModule.bfFormulaModule.Member(")");

			var m5 = new formulaModule.bfFormulaModule.Member("*");
			var m6 = new formulaModule.bfFormulaModule.Member("/");
			var m7 = new formulaModule.bfFormulaModule.Member("+");
			var m8 = new formulaModule.bfFormulaModule.Member("-");			

			var m9 = new formulaModule.bfFormulaModule.Member("1.25");			

			expect(m1.memberType).toEqual(1);
			expect(m2.memberType).toEqual(0);
			expect(m3.memberType).toEqual(3);
			expect(m4.memberType).toEqual(3);
			expect(m5.memberType).toEqual(2);
			expect(m6.memberType).toEqual(2);
			expect(m7.memberType).toEqual(2);
			expect(m8.memberType).toEqual(2);
			expect(m9.memberType).toEqual(4);
		});	
	});

});