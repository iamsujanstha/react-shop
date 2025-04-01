export function productStock(stock: number) {
  if (stock < 10) {
    return `left only ${stock}`;
  } else if (stock < 1) {
    return 'Out of Stock'
  }
  else {
    return 'In Stock'
  }
}