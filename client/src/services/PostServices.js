import ApiClient from './ApiClient'

export const __UploadPost = async (formData, userId) => {
    console.log(formData, userId)
    try {
        const res = await ApiClient.post(`/posts/${userId}/`, formData)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}


export const __GetPost = async (postId) => {
    try {
        const res = await ApiClient.get(`/posts/${postId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __UpdatePost = async (formData, postId) => {
    try {
        const res = await ApiClient.put(`/posts/update/${postId}`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __DeletePost = async (postId) => {
    try {
        const res = await ApiClient.delete(`/posts/delete/${postId}`)
        return res
    } catch (error) {
        throw error
    }
}
