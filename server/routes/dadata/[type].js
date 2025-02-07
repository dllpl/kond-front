export default defineEventHandler(async (event) => {

    const { type } = event.context.params
    const daDataToken = 'bd29736c81efb7e182758027c63fb2871e5d7e3d'
    const body = await readBody(event)

    const uri = `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/${type}`
    console.log(body, type)
    const data = await $fetch(uri, {
        method: 'POST', body,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Token ${daDataToken}`
        }
    })

    let array = []
    if (type === 'address') {
        for (let item in data.suggestions) {
            array.push({
                fias_id: data.suggestions[item].data.fias_id,
                name: data.suggestions[item].value
            })
        }
    }
    console.log(array)
    return array
})
