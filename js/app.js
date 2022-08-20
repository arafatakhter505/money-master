const incomeField = document.getElementById("income-field");
const foodField = document.getElementById("food-field");
const rentField = document.getElementById("rent-field");
const clothField = document.getElementById("cloth-field");
const calculateBtn = document.getElementById("calculate-btn");
const totalExp = document.getElementById("total-expenses");
const balance = document.getElementById("balance");
const saveField = document.getElementById("save-field");
const saveBtn = document.getElementById("save-btn");
const saveAmount = document.getElementById("save-amount");
const remainingBalance = document.getElementById("remaining-balance");

calculateBtn.addEventListener("click", function () {
  const incomeFieldNum = parseFloat(incomeField.value);
  const foodFieldNum = parseFloat(foodField.value);
  const rentFieldNum = parseFloat(rentField.value);
  const clothFieldNum = parseFloat(clothField.value);
  if (
    isNaN(incomeFieldNum) ||
    isNaN(foodFieldNum) ||
    isNaN(rentFieldNum) ||
    isNaN(clothFieldNum)
  ) {
    alert("Enter Valid Number");
  } else if (
    incomeFieldNum < 0 ||
    foodFieldNum < 0 ||
    rentFieldNum < 0 ||
    clothFieldNum < 0
  ) {
    alert("Enter Only Positive Number");
  } else {
    const totalExpenses = foodFieldNum + rentFieldNum + clothFieldNum;
    if (totalExpenses > incomeFieldNum) {
      alert("Cannot spend more than the income");
    } else {
      totalExp.innerText = totalExpenses;
      balance.innerText = incomeFieldNum - totalExpenses;
    }
  }
});

saveBtn.addEventListener("click", function () {
  const incomeFieldNum = parseFloat(incomeField.value);
  const balanceNum = parseFloat(balance.innerText);
  const saveFieldNum = parseFloat(saveField.value);
  const saving = (saveFieldNum / 100) * incomeFieldNum;
  if (isNaN(saveFieldNum)) {
    alert("Enter Valid Number");
  } else if (saveFieldNum < 0) {
    alert("Enter Only Positive Number");
  } else if (saveFieldNum > 100) {
    alert("You cannot save more than 100%");
  } else if (saving > balanceNum) {
    saveAmount.innerText = saving;
    alert("Your savings balance is more than this");
  } else {
    saveAmount.innerText = saving;
    remainingBalance.innerText = balanceNum - saving;
  }
});
