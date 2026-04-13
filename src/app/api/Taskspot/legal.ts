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

export interface ServiceRequestsResponse {
  items: ServiceRequest[];
  total: number;
}

export interface UpdateServiceRequestRequest extends Partial<CreateServiceRequestRequest> {
  id: number | string;
}

export interface MessageResponse {
  message: string;
}

export const legalApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllLegalRequests: builder.query<ServiceRequestsResponse, void>({
      query: () => "legal",
      providesTags: ["ServiceRequest"],
    }),

    getLegalRequestById: builder.query<ServiceRequest, number | string>({
      query: (id) => `legal/${id}`,
      providesTags: (_result, _error, id) => [{ type: "ServiceRequest", id }],
    }),

    createLegalRequest: builder.mutation<ServiceRequest, FormData>({
      query: (data) => ({
        url: "legal",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ServiceRequest"],
    }),

    updateLegalRequest: builder.mutation<ServiceRequest, UpdateServiceRequestRequest>({
      query: ({ id, ...data }) => ({
        url: `legal/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "ServiceRequest", id },
        "ServiceRequest",
      ],
    }),

    deleteLegalRequest: builder.mutation<MessageResponse, number | string>({
      query: (id) => ({
        url: `legal/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ServiceRequest"],
    }),

  }),
});

export const {
  useGetAllLegalRequestsQuery,
  useGetLegalRequestByIdQuery,
  useCreateLegalRequestMutation,
  useUpdateLegalRequestMutation,
  useDeleteLegalRequestMutation,
} = legalApi;