import { create } from 'zustand'

export const useAuthStore = create((set) => ({
    auth: {
        user: null,
        token: null,
    },
    login: (response) => set({
        auth: {
            user: {
                id: response.user.id,
                username: response.user.username,
                password: response.user.password,
            },
            token: response.accessToken
        }
    }),
    logout: () => set({
        auth: {
            user: null,
            token: null,
        },
    }),
    // updateToken: (newToken) => set({ bears: newBears }),
}))
