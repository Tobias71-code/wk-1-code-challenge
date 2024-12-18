function calculateNetSalary() {
    // Prompt user for basic salary and benefits
    let basicSalary = parseFloat(prompt("Enter your basic salary:"));
    let benefits = parseFloat(prompt("Enter your benefits:"));

    // Constants for deductions
    const NSSF_RATE = 0.06;  // 6% of basic salary
    const MAX_NSSF = 1800;   // Max NSSF deduction is KES 1800 based on salary limit
    
    // NHIF Deduction Bands (Approximated)
    const nhifDeduction = calculateNHIF(basicSalary);
    
    // Calculate Gross Salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax) based on KRA's tax bands
    let payee = calculatePAYE(grossSalary);

    // Calculate NSSF Deduction
    let nssfDeduction = Math.min(basicSalary * NSSF_RATE, MAX_NSSF); // NSSF is capped at KES 1800

    // Calculate Total Deductions
    let totalDeductions = payee + nhifDeduction + nssfDeduction;

    // Calculate Net Salary
    let netSalary = grossSalary - totalDeductions;

    // Display the results
    alert("Gross Salary: " + grossSalary);
    alert("PAYE Tax: " + payee);
    alert("NHIF Deduction: " + nhifDeduction);
    alert("NSSF Deduction: " + nssfDeduction);
    alert("Total Deductions: " + totalDeductions);
    alert("Net Salary: " + netSalary);
}

// Function to calculate PAYE tax based on KRA Tax Bands
function calculatePAYE(grossSalary) {
    let tax = 0;

    // KRA Tax Bands (example from the provided link)
    if (grossSalary <= 24000) {
        tax = 0;  // No tax for gross salary <= 24,000
    } else if (grossSalary <= 40000) {
        tax = (grossSalary - 24000) * 0.10;  // 10% tax for 25,001 to 40,000
    } else if (grossSalary <= 60000) {
        tax = (grossSalary - 40000) * 0.15 + 1600;  // 15% tax for 40,001 to 60,000
    } else if (grossSalary <= 80000) {
        tax = (grossSalary - 60000) * 0.20 + 4600;  // 20% tax for 60,001 to 80,000
    } else if (grossSalary <= 100000) {
        tax = (grossSalary - 80000) * 0.25 + 8600;  // 25% tax for 80,001 to 100,000
    } else {
        tax = (grossSalary - 100000) * 0.30 + 13600;  // 30% tax for over 100,000
    }

    return tax;
}

// Function to calculate NHIF Deduction (Approximated based on KRA)
function calculateNHIF(basicSalary) {
    let nhif = 0;

    if (basicSalary <= 5999) {
        nhif = 150;  // KES 150 for salaries <= 5,999
    } else if (basicSalary <= 7999) {
        nhif = 300;  // KES 300 for salaries between 6,000 and 7,999
    } else if (basicSalary <= 11999) {
        nhif = 400;  // KES 400 for salaries between 12,000 and 14,999
    } else if (basicSalary <= 14999) {
        nhif = 500;  // KES 500 for salaries between 15,000 and 19,999
    } else if (basicSalary <= 19999) {
        nhif = 600;  // KES 600 for salaries between 20,000 and 24,999
    } else if (basicSalary <= 24999) {
        nhif = 750;  // KES 750 for salaries between 25,000 and 29,999
    } else if (basicSalary <= 29999) {
        nhif = 850;  // KES 850 for salaries between 30,000 and 34,999
    } else if (basicSalary <= 34999) {
        nhif = 900;  // KES 900 for salaries between 35,000 and 39,999
    } else if (basicSalary <= 39999) {
        nhif = 950;  // KES 950 for salaries between 40,000 and 44,999
    } else if (basicSalary <= 44999) {
        nhif = 1000;  // KES 1000 for salaries between 45,000 and 49,999
    } else {
        nhif = 1500;  // KES 1500 for salaries above 50,000
    }

    return nhif;
}
