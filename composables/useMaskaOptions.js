export const useMaskaOptions = () => {
    return {
        date: {
            mask: '##.##.####',
        },
        cyrillic_and_upper_case: {
            preProcess: val => {
                val = val.replace(/[^а-яё ,-]/ig, '')
                return val.charAt(0).toUpperCase() + val.slice(1)
            },
        },
        phone: {
            mask: '+7 (9##) ###-##-##',
        },
    }
}