function calculateUpToTwoDecimals(price, shipping) {
  price = 100 * price;
  shipping = 100 * shipping;

  return (price + shipping)/100;
}

const price = 25.65
const shipping = 4.15
const total = calculateUpToTwoDecimals(price, shipping)

console.log(total)

// https://jqtwrpw1.r.eu-central-1.awstrack.me/L0/https:%2F%2Fcodisity.pl%2F100-bugow-js/1/010701885a0e104c-ec10f55a-2aeb-4d1d-916c-46f42534ee43-000000/7QWpXpGccWhJ4VDylV5AiphYGXQ=104