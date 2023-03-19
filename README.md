# Week-1-Code-Challenge
## Student Grade Checker
This is a simple JavaScript program that prompts the user to input a student's mark and then outputs the corresponding grade based on the input.

How to use
To use this program, follow these steps:

Open the JavaScript file in a code editor or text editor of your choice.
Run the program in a JavaScript environment, such as the console in your web browser or a Node.js environment.
When prompted, enter a mark between 0 and 100 for the student.
The program will output the corresponding grade for the mark as follows:
A > 79
B > 60 to 79
C > 59 to 49
D > 40 to 49
E > less than 40
How it works
This program uses the prompt() function to display a message to the user and get their input for the student's mark. The input is then stored in the mark variable.

A series of if and else if statements are used to check the value of mark and output the corresponding grade using the console.log() function. We use the >= and <= operators to check if mark falls within certain ranges.

## Speed Detector
The above JavaScript code prompts the user to input the speed of a car in kilometers per hour. It then calculates the number of demerit points that the driver should receive based on their speed and outputs the result to the console.

First, the program uses the prompt() function to display a message to the user and get their input for the car's speed. The value is stored in the speed variable as a string.

Next, the program checks if the speed is less than or equal to 70 km/h. If it is, it outputs "Ok" using the console.log() function. If the speed is greater than 70 km/h, the program calculates the number of demerit points the driver should receive.

To calculate the demerit points, the program subtracts the speed limit of 70 km/h from the current speed and divides the result by 5 (since every 5 km/h over the limit results in one demerit point). The Math.floor() function is used to round down the resulting decimal value to the nearest integer. The calculated number of demerit points is stored in the points variable.

Finally, the program outputs the number of demerit points using the console.log() function. If the number of demerit points is greater than 12, the program outputs "License suspended" as well.

Note that this program assumes that the user enters a valid input for the speed, and that the input is a number. If the input is not a number, the program may produce an error. To handle this case, you can add validation to check if the input is a number using the isNaN() function, and display an error message if it is not.

## Net Salary Calculator
Salary and Benefits Tax Calculator
This is a simple JavaScript program that calculates an employee's tax deductions based on their basic salary and benefits. The program calculates the Pay As You Earn (PAYE), National Hospital Insurance Fund (NHIF), and National Social Security Fund (NSSF) deductions.

Inputs
basicSalary: Replace with the employee's basic salary as a number.
benefits: Replace with the employee's benefits as a number.
Constants
PERSONAL_RELIEF: Personal relief amount set at 2400.
INSURANCE_RELIEF: Insurance relief amount set at 5000.
ALLOWABLE_PENSION_CONTRIBUTION: Allowable pension contribution amount set at 20000.
AFFORDABLE_HOUSING_RELIEF: Affordable housing relief amount set at 9000.
ALLOWABLE_OWNER_OCCUPIER_INTEREST: Allowable owner-occupier interest amount set at 25000.
DISABILITY_EXEMPTION: Disability exemption amount set at 150000.
Calculations
The program calculates the following deductions based on the inputs and constants:

taxableIncome: This is the amount of income that is subject to taxation. It is calculated by subtracting the personal relief, insurance relief, affordable housing relief, allowable owner-occupier interest, and allowable pension contribution from the sum of the basic salary and benefits.
paye: This is the Pay As You Earn tax deduction. It is calculated based on the taxable income using the following brackets:
If taxable income is less than or equal to 24000, paye is 10% of the taxable income.
If taxable income is less than or equal to 32333, paye is 2400 plus 25% of the amount exceeding 24000.
If taxable income is greater than 32333, paye is 2400 plus 2375 plus 30% of the amount exceeding 32333.
nhif: This is the National Hospital Insurance Fund deduction. It is calculated based on the basic salary using a tiered system. The deduction amount varies depending on the basic salary amount.
nssf: This is the National Social Security Fund deduction. It is calculated based on the total pensionable pay, which is the sum of the basic salary and benefits. The deduction amount varies depending on the total pensionable pay amount and is calculated using a tiered system.
Usage
To use the program, replace the basicSalary and benefits values with the employee's respective values. The program will then output the calculated tax deductions.

Note that this program does not take into account any other deductions or allowances that may apply to an employee's taxes.


