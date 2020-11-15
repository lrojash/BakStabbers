import ApiClient from './ApiClient'

export const __UploadPost = async (formData, userId) => {
    try { 
        const res = await ApiClient.post(`/posts/${userId}?active=true`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetPosts = async () => {
    try {
        const res = await ApiClient.get(`/posts`)
        return res.data
    } catch(error) {
        throw error 
    }
}

