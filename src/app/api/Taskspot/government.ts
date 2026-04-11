import { apiSlice } from "../../api/EntryApi";

// Types
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

// API Slice
export const serviceRequestApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // GET /service-requests
    getAllServiceRequests: builder.query<ServiceRequest[], void>({
      query: () => "egov",
      providesTags: ["ServiceRequest"],
    }),

    // GET /service-requests/:id
    getServiceRequestById: builder.query<ServiceRequest, number | string>({
      query: (id) => `egov/${id}`,
      providesTags: (_result, _error, id) => [{ type: "ServiceRequest", id }],
    }),

    // POST /service-requests
    createServiceRequest: builder.mutation<
      ServiceRequest,
      CreateServiceRequestRequest
    >({
      query: (data) => ({
        url: "egov",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ServiceRequest"],
    }),

    // PUT /service-requests/:id
    updateServiceRequest: builder.mutation<
      ServiceRequest,
      UpdateServiceRequestRequest
    >({
      query: ({ id, ...data }) => ({
        url: `egov/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "ServiceRequest", id },
        "ServiceRequest",
      ],
    }),

    // DELETE /service-requests/:id
    deleteServiceRequest: builder.mutation<MessageResponse, number | string>({
      query: (id) => ({
        url: `egov/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ServiceRequest"],
    }),
  }),
});

export const {
  useGetAllServiceRequestsQuery,
  useGetServiceRequestByIdQuery,
  useCreateServiceRequestMutation,
  useUpdateServiceRequestMutation,
  useDeleteServiceRequestMutation,
} = serviceRequestApi;
