export const cmsRequest = async (query) => {
    const domain = import.meta.env.TENANT_DOMAIN
    const endpoint = import.meta.env.ENDPOINT
    //console.log(domain, endpoint)
    //console.log(domain)

    const res = await fetch(`${endpoint}${query}`, {
        method: 'GET',
        headers: {
            'X-Tenant-Domain': domain,
            //'Content-Type': 'application/json',
        },
    })
    return await res.json()
}