const formatPrice = (value: any) => {

  const x = parseFloat(value)
  const valueFormated = x.toLocaleString('pt-br',{style: 'currency', currency: 'BRL',  minimumFractionDigits: 2})

  return valueFormated
}

export default formatPrice