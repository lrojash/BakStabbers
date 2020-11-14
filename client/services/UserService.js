import ApiClient from './ApiClient'

export const __GetProfile = async (userId) => {
    try {
        const res = await ApiClient.get(`/users/${userId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __RegisterUser = async (formData) => {
    try {
        const res = await ApiClient.post(`/users/register`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __LoginUser = async (userData) => {
    try {
        const res = await ApiClient.post(`/users/login`, userData)
        return res.data
    } catch (error) {
        throw error
    }
}