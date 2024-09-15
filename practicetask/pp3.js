/* Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const laptopTotalPrice = laptopQuantity * laptop;
    const tabletTotalPrice = tabletQuantity * tablet;
    const mobileTotalPrice = mobileQuantity * mobile;

    const totalCost = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;

    return totalCost;
}

const result = calculateElectronicsBudget(1, 1, 0);
console.log('your total budget required to buy electronics is', result, 'bdt');