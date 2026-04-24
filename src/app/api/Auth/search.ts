import { apiSlice } from "../../api/EntryApi";

export interface SearchResult {
  type: string;
  data: {
    id: number;
    trackingCode: string;
    customerName?: string;
    customerPhone?: string;
    customerEmail?: string;
    service?: string;
    status?: string;
    createdAt?: string;
    [key: string]: unknown;
  };
}

export interface SearchResponse {
  found: boolean;
  total: number;
  results: SearchResult[];
}

export const searchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchByTrackingCode: builder.query<SearchResponse, string>({
      query: (code) => `search/tracking/${code}`,
    }),
  }),
});

export const { useLazySearchByTrackingCodeQuery } = searchApi;
