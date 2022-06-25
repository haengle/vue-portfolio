<script setup>
    import projectVue from '../project.vue';

   const calcHtml = `
    ...
    <fieldset class="mb-4 border-bottom col-12">
    <legend style="background-color:var(--calc-secondary-color); color:var(--calc-secondary-text-color)">1. Vehicle Info</legend>
    <div class="row">
        <div class="col-md-6 mb-3">
         <label for="negotiatedPrice" class="form-label">What is the purchase price?</label>
         <div class="input-group mb-3">
         <span class="input-group-text">$</span>
         <input type="number" name="negotiatedPrice" id="negotiatedPrice" class="form-control" data-format="money" placeholder="0" value="" oninput="negotiatedPriceRange.value=negotiatedPrice.value;bl.viewChanged()" />
         </div>
         <input id="negotiatedPriceRange" class="form-control-range form-range" type="range" min="0" max="80000" oninput="negotiatedPrice.value=negotiatedPriceRange.value;bl.viewChanged()" />    
         </div>
         <div class="col-md-6 mb-3">
         <label for="downPayment" class="form-label">What is your down payment/trade-in value?</label>
         <div class="input-group mb-3">
         <span class="input-group-text">$</span>
         <input type="number" name="downPayment" id="downPayment" class="form-control" data-format="money" placeholder="0" value="" oninput="downPaymentRange.value=downPayment.value;bl.viewChanged()" />
         </div>
         <input id="downPaymentRange" class="form-control-range form-range" type="range" min="0" max="50000" oninput="downPayment.value=downPaymentRange.value;bl.viewChanged()" />    
         </div>
         <div class="col-md-6 mb-3">
         <label for="salesTax" class="form-label">What is the sales tax rate?</label>
         <div class="input-group mb-3">
         <span class="input-group-text">%</span>
         <input type="number" name="salesTax" id="salesTax" class="form-control" data-format="percent" placeholder="0" value="" step=".01" oninput="salesTaxRange.value=salesTax.value;bl.viewChanged()" />
         </div>
         <input id="salesTaxRange" class="form-control-range form-range" type="range" min="0" max="10.00" step="0.01" oninput="salesTax.value=salesTaxRange.value;bl.viewChanged()" />
         </div>
         </div>
     </fieldset>
     ...
    `;

    const calcJs = `
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    var buylease_form = document.getElementById('buy-lease-form');
    var buylease_elements = buylease_form.elements;
    var buylease_buyCost = document.getElementById('buyingCost');
    var buylease_leaseCost = document.getElementById('leasingCost');

    var bl = {
        viewChanged: function() {
            var negotiatedPrice = buylease_elements.negotiatedPrice.value ? parseFloat(buylease_elements.negotiatedPrice.value) : 0;
            var salesTax = buylease_elements.salesTax.value ? parseFloat(buylease_elements.salesTax.value) : 0;
            var downPayment = buylease_elements.downPayment.value ? parseFloat(buylease_elements.downPayment.value) : 0;
            var annualDep = buylease_elements.annualDep.value ? parseFloat(buylease_elements.annualDep.value) : 0;
            var leaseTermInMonths = buylease_elements.leaseTerm.value ? parseFloat(buylease_elements.leaseTerm.value) : 0;
            var leaseRate = buylease_elements.leaseRate.value ? parseFloat(buylease_elements.leaseRate.value) : 0;
            var residualValuePercentage = buylease_elements.residualValue.value ? parseFloat(buylease_elements.residualValue.value) : 0;
            var securityDeposit = buylease_elements.securityDeposit.value ? parseFloat(buylease_elements.securityDeposit.value) : 0;
            var loanTermInMonths = buylease_elements.loanTerm.value ? parseFloat(buylease_elements.loanTerm.value) : 0;
            var loanRate = buylease_elements.loanRate.value ? parseFloat(buylease_elements.loanRate.value) : 0;
            var otherFees = buylease_elements.otherFees.value ? parseFloat(buylease_elements.otherFees.value) : 0;
            
            bl.updateResult(negotiatedPrice, annualDep, salesTax, downPayment, leaseTermInMonths, leaseRate, residualValuePercentage, securityDeposit, loanTermInMonths, loanRate, otherFees);
        },
        updateResult: function(negotiatedPrice, annualDep, salesTax, downPayment, leaseTermInMonths, leaseRate, residualValuePercentage, securityDeposit, loanTermInMonths, loanRate, otherFees) {
            if (negotiatedPrice == 0 || loanTermInMonths == 0 || leaseTermInMonths == 0) {
                buylease_buyCost.textContent = "$0";
                buylease_leaseCost.textContent = "$0";
                return;
            }

            leaseRate = leaseRate / 100;
            residualValuePercentage = residualValuePercentage / 100;
            salesTax = salesTax / 100;
          
            var residualValue = negotiatedPrice * residualValuePercentage;
            var depreciationOverPeriod = negotiatedPrice - residualValue;
            var depreciationPayment = depreciationOverPeriod / leaseTermInMonths;
            var totalLeaseValue = negotiatedPrice + residualValue;
            var monthlyInterestPayment = totalLeaseValue * ( leaseRate / 12 );
            var monthlyLease = monthlyInterestPayment + depreciationPayment;

            var plusSalesTax = monthlyLease * (1 + salesTax);
            var leaseCost = (plusSalesTax * leaseTermInMonths) + securityDeposit;

            buylease_leaseCost.textContent = formatter.format(leaseCost);
            var loanAmount = negotiatedPrice - downPayment;
            var numPayments = loanTermInMonths;
            var annualDepPerc = annualDep / 100;
            var loanSalesTax = loanAmount * salesTax;

            if (loanRate === 0) {
                monthlyPayment = loanAmount / numPayments;
            } else {
                loanRate = loanRate / 100; 
                var monthlyRate = loanRate / 12;
                monthlyPayment = ( loanAmount * ( monthlyRate * Math.pow( 1 + monthlyRate, numPayments)  ) ) / ( Math.pow( 1 + monthlyRate , numPayments ) - 1 );
            }
            var annualDepCost = negotiatedPrice * (Math.pow(1 - annualDepPerc, (loanTermInMonths / 12)));
            var buyingCost = (monthlyPayment * numPayments + otherFees + loanSalesTax) - annualDepCost;
            buylease_buyCost.textContent = formatter.format(buyingCost);
        }
    }
    `;
</script>

<template>

    <projectVue
        title="Bootstrap Financial Calculators"
        summary="Kasasa offers a default set of templated financial calculators with each website. The original calculators were built entirely with jQuery UI for elements and styling,
                which resulted in a ~65kb file for each calculator. I rebuilt the calculators using HTML templates leveraging Bootstrap classes/elements to reduce the amount of custom CSS, rewrote the calculation functions using only vanilla Javascript, and assigned CSS variables to each site's :root to allow theme customization for individual sites.
                <br/>
                <br/>
                The old Buy vs. Lease calculator in particular provided a confusing user experience - many customers thought it was broken because the result boxes are grayed out when the calculator first loads, and it was not obvious there were additional tabs required to complete the calculations. I solved this problem by revealing all the fields and autofilling some common values for the user to make calculations faster."
        >

        <template #code>
            <h4>Old Calculator</h4>
            <img src="/calc-old.png" alt="Old jQuery UI calculator" class="mb-8" />
            <h4>Bootstrap Calculator</h4>
            <img src="/calc.png" alt="Bootstrap calculator" class="mb-8" />

              <h4>HTML</h4>
               <pre v-highlightjs="calcHtml"><code class="html"></code></pre>
 <h4>Javascript</h4>
               <pre v-highlightjs="calcJs"><code class="javascript"></code></pre>

        </template>
    </projectVue>
    
</template>
