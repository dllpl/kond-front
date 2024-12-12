export const { format: formatNumber } = Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 0,
    style: 'currency', currency: 'RUB',
})