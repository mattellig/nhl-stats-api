import fetch from 'cross-fetch'

const baseUrl = 'https://statsapi.web.nhl.com/api/v1'

async function get(resource: string, options?: Record<string, any>, endpoint?: string) {
    let url = resource

    if (options) {
        const { id, ...rest } = options

        if (id) {
            url = `${url}/${id}`
        }

        if (endpoint) {
            url = `${url}/${endpoint}`
        }

        const searchParams = buildSearchParams(rest)
        if (searchParams) {
            url = `${url}?${searchParams}`
        }
    }

    return fetch(`${baseUrl}/${url}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
    }).then(async (response) => {
        if (response.ok) {
            const dataWrapper = await response.json()
            const data = dataWrapper[endpoint ?? resource]

            if (endpoint) {
                // always return full response for endpoints (e.g. /roster, /stats, etc.)
                return data
            }

            // otherwise, if an id is specified then only return the first object
            return options?.id ? data[0] : data
        }

        try {
            const error = await response.json()
            return Promise.reject(new Error(error.message))
        } catch {
            return Promise.reject(new Error(response.statusText))
        }
    })
}

function buildSearchParams(options: Record<string, any>) {
    const searchParams = new URLSearchParams()

    Object.entries(options).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            searchParams.set(key, value.join(','))
        } else {
            searchParams.set(key, String(value))
        }
    })

    return searchParams.toString()
}

export default { get }
