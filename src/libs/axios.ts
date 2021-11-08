import defaultAxios from 'axios'

export const axios = defaultAxios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_ENDPOINT })
export const { isAxiosError } = defaultAxios
