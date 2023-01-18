export const env = {
    isDev: import.meta.env.MODE, // 'development' | 'production'
    baseUrl: import.meta.env.VITE_BASE_URL, // 'http://localhost:3000'
    key: import.meta.env.VITE_KEY, // '123456'
}
export default env