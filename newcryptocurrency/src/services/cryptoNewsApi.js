import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'
import { cryptoApi } from './cryptoApi';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
    }
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder )=> ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/coins?LImit=${count}`)
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoApi;