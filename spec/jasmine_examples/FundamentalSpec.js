describe("Fundamental", function() {
	var fundamentalProvider = require('../../../CognismApp.ver2.0/forms/Fundamentals/Module/Data/fundamentalDataProviderMock.js');
	var fundamentalModule = require('../../../CognismApp.ver2.0/forms/Fundamentals/Module/module2.js');
	
	describe("Values for autocomplete", function() {
		var autoCompleteValues = [ 'SalesOrRevenue',
								  'CostOfGoodsSold',
								  'SellingGeneralAdministrativeExpenses',
								  'ResearchAndDevelopment',
								  'SellingGeneralAdministrativeExpensesAndOther',
								  'ExtraordinaryGainsOrLossesFromSaleOfAsset',
								  'EBITDA',
								  'DepreciationAmortization',
								  'EBITOperatingIncome',
								  'NetInterestIncome',
								  'PretaxIncome',
								  'MinorityInterestExpense',
								  'Others',
								  'NetIncomePrePreferredDividends',
								  'ProvisionForTaxes',
								  'NetIncomePreExceptionals',
								  'ConsolidatedNetIncome',
								  'PostTaxExceptionals',
								  'EPSBasicBeforeExtraordinaries',
								  'EPSDilutedBeforeUnusualExpense',
								  'EPS',
								  'EPSFullyDiluted',
								  'CashDividendsPaid',
								  'DividendsPerShareSecurity',
								  'DividendPayoutRatio',
								  'SalesNet1YearGrowth',
								  'GrossIncomeMargin',
								  'EBITDAMargin',
								  'EBITMargin',
								  'NetIncome',
								  'DepreciationDepletionAmortizationCashFlow',
								  'MinorityInterestAddBack',
								  'ChangesInWorkingCapital',
								  'OtherOperatingCashFlow',
								  'NetOperatingCashFlow',
								  'CapitalExpenditures',
								  'PurchaseOrSaleOfInvestments',
								  'Divestitures',
								  'NetInvestingCashFlow',
								  'OthersCFS',
								  'DividendsPaidCommonPref',
								  'IssuanceOrReductionOfDebtNet',
								  'NetFinancingActiveOtherCashFlow',
								  'NetFinancingCashFlow',
								  'FreeCashFlow',
								  'CashEquivalentsGeneric',
								  'AccountsReceivablesNet',
								  'Inventories',
								  'OtherAssets',
								  'TotalCurrentAssets',
								  'NetPropertyPlantEquipment',
								  'OtherIntangibleAssets',
								  'TotalAssets',
								  'TotalInvestmentsAndAdvances',
								  'OtherLongTermsAssets',
								  'AccountsPayable',
								  'ShortTermDebt',
								  'OtherCurrentLiabilities',
								  'TotalCurrentLiabilities',
								  'LongTermDebt',
								  'OtherLiabilities',
								  'TotalLiabilities',
								  'PreferredStockCarryingValue',
								  'TotalCommonEquity',
								  'AccumulatedMinorityInterest',
								  'TotalShareholdersEquity',
								  'TotalLiabilitiesEquity',
								  'TotalDebt',
								  'TotalCash',
								  'TotalEquity',
								  'NetDebtEquity',
								  'InterestExpense',
								  'InterestCoverX',
								  'InventoryDays',
								  'ReceivableDays',
								  'PretaxIncome',
								  'PurchaseOrSaleOfInvestments',
								  'SellingGeneralAdministrativeExpensesAndOther',
								  'CapitalExpenditures',
								  'CashDividendsPaid',
								  'ChangesInWorkingCapital',
								  'ConsolidatedNetIncome',
								  'DepreciationAmortization',
								  'DepreciationDepletionAmortizationCashFlow' ]
		beforeEach(function() {
	        
	    });

	    it("Should return all values from server plus the custom values from model", function() {
	    	var companyTicker = "GS";
	    	var email = "gajikdushan@gmail.com";
			fundamentalModule.bfFundamentalModule.GetFundamentalsTable(fundamentalProvider.bfFundamentalProvider, companyTicker, email, function(data) {
               	var acv = data.getAutoComplete(); 
               	for(var i in acv) {
               		if(autoCompleteValues[i] != acv[i].text)
               			this.fail();
               	}
            });
	    });

	    it("Should fail the returned values dont match the ones in the configuration", function() {
	    	var companyTicker = "GS";
	    	var email = "gajikdushan@gmail.com";
	    	autoCompleteValues.pop();
			fundamentalModule.bfFundamentalModule.GetFundamentalsTable(fundamentalProvider.bfFundamentalProvider, companyTicker, email, function(data) {
               	var acv = data.getAutoComplete(); 
               	var areEqual = true;
               	for(var i in acv) {
               		if(autoCompleteValues[i] != acv[i].text)
               			areEqual = false;
               	}
               	if(areEqual)
               		this.fail();
            });
	    });
	});

});