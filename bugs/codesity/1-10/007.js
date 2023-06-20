function addTax(price, tax) {
  tax = tax ?? 0.23;
  return price + price * tax;
}

const priceWithTax = addTax(100, 0);

console.log(priceWithTax);

// https://jqtwrpw1.r.eu-central-1.awstrack.me/L0/https:%2F%2Fcodisity.pl%2F100-bugow-js%2Fae0d38e8-00ed-416c-b87f-460de2a76ed5/1/0107018830db30c3-b1e2f409-4e68-4295-8e12-5c33f9baadaf-000000/wGfpz7tcP6C4ZSmi_aoIvRQgYSs=103