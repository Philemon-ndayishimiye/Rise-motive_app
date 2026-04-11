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

export interface MessageResponse {
  message: string;
}

export const applicationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllApplicationRequests: builder.query<ServiceRequest[], void>({
      query: () => "application-docs",
      providesTags: ["ServiceRequest"],
    }),

    getApplicationRequestById: builder.query<ServiceRequest, number | string>({
      query: (id) => `application-docs/${id}`,
      providesTags: (_result, _error, id) => [{ type: "ServiceRequest", id }],
    }),

    createApplicationRequest: builder.mutation<ServiceRequest, CreateServiceRequestRequest>({
      query: (data) => ({
        url: "application-docs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ServiceRequest"],
    }),

    updateApplicationRequest: builder.mutation<ServiceRequest, UpdateServiceRequestRequest>({
      query: ({ id, ...data }) => ({
        url: `application-docs/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "ServiceRequest", id },
        "ServiceRequest",
      ],
    }),

    deleteApplicationRequest: builder.mutation<MessageResponse, number | string>({
      query: (id) => ({
        url: `application-docs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ServiceRequest"],
    }),

  }),
});

export const {
  useGetAllApplicationRequestsQuery,
  useGetApplicationRequestByIdQuery,
  useCreateApplicationRequestMutation,
  useUpdateApplicationRequestMutation,
  useDeleteApplicationRequestMutation,
} = applicationApi;