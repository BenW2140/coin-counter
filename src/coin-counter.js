export const countCoins = (amount, coins) => {
  if (isNaN(amount)) {
    return;
  }
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      const left = (amount - coins[0]);
      return [coins[0]].concat(countCoins(left, coins));
    } else {
      coins.shift();
      return countCoins(amount, coins);
    }
  }
}

const typeOfCoin = (amount) => {
  return (amountOfCoins) => {
    return amount * amountOfCoins;
  }
}

const factorial = (number) => {
  if (isNaN(number)) {
    return;
  }
  if (number === 0) {
    return 1;
  } else {
    return factorial(number - 1) * number;
  }
}