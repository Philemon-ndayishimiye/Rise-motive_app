
import { apiSlice } from "../../api/EntryApi";

export interface ServiceRequest {
  id: number | string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  service: string;
  description: string;
  documentUrl: string;
  preferredDate: string;
  tasker: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateServiceRequestRequest {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  service: string;
  description: string;
  documentUrl: string;
  preferredDate: string;
  tasker: string;
}

export interface UpdateServiceRequestRequest extends Partial<CreateServiceRequestRequest> {
  id: number | string;
}

export interface ServiceRequestsResponse {
  items: ServiceRequest[];
  total: number;
}

export interface MessageResponse {
  message: string;
}

export const creativeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllCreativeRequests: builder.query<ServiceRequestsResponse, void>({
      query: () => "creative-media",
      providesTags: ["ServiceRequest"],
    }),

    getCreativeRequestById: builder.query<ServiceRequest, number | string>({
      query: (id) => `creative-media/${id}`,
      providesTags: (_result, _error, id) => [{ type: "ServiceRequest", id }],
    }),

    createCreativeRequest: builder.mutation<ServiceRequest, FormData>({
      query: (data) => ({
        url: "creative-media",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ServiceRequest"],
    }),

    updateCreativeRequest: builder.mutation<ServiceRequest, UpdateServiceRequestRequest>({
      query: ({ id, ...data }) => ({
        url: `creative-media/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "ServiceRequest", id },
        "ServiceRequest",
      ],
    }),

    deleteCreativeRequest: builder.mutation<MessageResponse, number | string>({
      query: (id) => ({
        url: `creative-media/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ServiceRequest"],
    }),

  }),
});

export const {
  useGetAllCreativeRequestsQuery,
  useGetCreativeRequestByIdQuery,
  useCreateCreativeRequestMutation,
  useUpdateCreativeRequestMutation,
  useDeleteCreativeRequestMutation,
} = creativeApi;