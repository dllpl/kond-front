export default (uri, method = 'GET', body = null, headers = {}) => {

    const {public: config} = useRuntimeConfig()

    const authToken = useCookie('auth_token').value;

    if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`
    }

    headers = {
        ...headers,
        'Accept': 'application/json'
    }

    return useFetch(`${config.backOptions.api}/${uri}`, {headers, method, body})
}