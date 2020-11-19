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
        const res = await ApiClient.post('/users/register', formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __CheckSession = async () => {
    try {
        const res = await ApiClient.get('/users/refresh/session')
        return res.data
    } catch (error) {
        throw error
    }
}

export const __LoginUser = async (userData) => {
    try {
        const res = await ApiClient.post('/users/login', userData)
        localStorage.setItem('token', res.data.token)
        return res.data
    } catch (error) {
        throw error
    }
}
export const __ModPassword = async (userId) => {
    try {
        const res = await ApiClient.put(`/users/${userId}/update`)
        return res.data
    } catch(error) {
        throw error 
    }
}
export const __ModUsername = async (userId, formData) => {
    try {
        const res = await ApiClient.put(`/users/${userId}/update_username`, formData)
        return res.data
    } catch(error) {
        throw error 
    }
}

export const __DeleteUser = async (userId) => {
    try {
        const res = await ApiClient.put(`/users/${userId}/delete`)
        return res
    } catch(error) {
        throw error 
    }
}