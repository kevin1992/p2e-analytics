const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export const money = (amount: number) => {
  return formatter.format(amount);
};

export const commaSeparated = (amount: number) => {
  return amount.toLocaleString('en-US');
}