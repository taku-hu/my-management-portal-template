import defaultAxios from 'axios'

import type { NextApiRequest } from 'next'

export const createAxios = (cookie?: NextApiRequest['headers']['cookie']) => {
  const { create, isAxiosError } = defaultAxios
  const isClientSide = typeof window !== 'undefined'

  const axios = create({
    baseURL: isClientSide ? undefined : process.env.NEXT_PUBLIC_BASE_ENDPOINT,
    withCredentials: true,
    ...(cookie && {
      headers: {
        Cookie: cookie
      }
    })
  })

  return {
    axios,
    isAxiosError
  }
}
