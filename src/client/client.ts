import fetch from 'cross-fetch'

export interface NHLApiResponse<T> {
    [key: string]: T
}

export const baseUrl = 'https://statsapi.web.nhl.com/api/v1'

export const client = {
    get: async <T>(resource: string, params?: string): Promise<NHLApiResponse<T>> => {
        const config = {
            headers: {
                'Cache-Control': 'max-age=3600',
                'Content-Type': 'application/json',
            },
            method: 'GET',
        }
    
        return fetch(`${baseUrl}/${resource}?${params}`, config)
            .then(async (response) => {
                if (response.ok) {
                    return await response.json()
                }
    
                const error = await response.json()
                return Promise.reject(new Error(error.message))
            })
    },
};
