import defaultAxios from 'axios'
import type { AxiosError } from 'axios'

import type { NextApiRequest } from 'next'

export const createAxios = (cookie?: NextApiRequest['headers']['cookie']) => {
  const { create } = defaultAxios
  const isAxiosError = <T = any>(payload: any): payload is AxiosError<T> => !!payload.isAxiosError
  const isClientSide = typeof window !== 'undefined'
  const baseURL = isClientSide ? undefined : process.env.NEXT_PUBLIC_BASE_ENDPOINT

  const axios = create({
    baseURL,
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
