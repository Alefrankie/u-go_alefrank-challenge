export function useCurrencyFormat(num: number) {
  // eslint-disable-next-line prefer-named-capture-group
  return `$${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/gu, '$1,')}`
}
