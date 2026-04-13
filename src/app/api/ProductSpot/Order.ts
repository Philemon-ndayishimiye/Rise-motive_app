import { apiSlice } from "../../api/EntryApi";
import type { Product } from "./Product";

export interface Order {
  id: number;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  address: string;
  quantity: number;
  paymentMethod: string;
  note: string;
  productId: number;
  product: Product;
  status: string;
  trackingCode: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrdersResponse {
  items: Order[];
  total: number;
}

export interface CreateOrderRequest {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  address: string;
  quantity: number;
  paymentMethod: string;
  note: string;
  productId: number;
}

export interface UpdateOrderRequest extends Partial<CreateOrderRequest> {
  id: number;
}

export interface MessageResponse {
  message: string;
}

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query<OrdersResponse, void>({
      query: () => "orders",
      providesTags: ["Order"],
    }),

    getOrderById: builder.query<Order, number>({
      query: (id) => `orders/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Order", id }],
    }),

    createOrder: builder.mutation<Order, CreateOrderRequest>({
      query: (data) => ({
        url: "orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Order"],
    }),

    updateOrder: builder.mutation<Order, UpdateOrderRequest>({
      query: ({ id, ...data }) => ({
        url: `orders/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Order", id },
        "Order",
      ],
    }),

    deleteOrder: builder.mutation<MessageResponse, number>({
      query: (id) => ({
        url: `orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
