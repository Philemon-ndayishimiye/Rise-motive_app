import {
  useGetAllEGovernmentServicesQuery,
  useGetAllWebServicesQuery,
  useGetAllAppDocServicesQuery,
  useGetAllLegalServicesQuery,
  useGetAllCreativeMediaServicesQuery,
} from "../app/api/spotService/spotService";
import type { ServiceItem } from "../app/api/spotService/spotService";

// For card display: "Rembo Services — 5,000 RWF"
export function toCardItems(items: ServiceItem[]): string[] {
  return items.map((s) => (s.price ? `${s.name}:  ${s.price}FRW` : s.name));
}

// For form dropdowns: { value, label }
export function toOptions(items: ServiceItem[]) {
  return items.map((s) => ({
    value: s.name,
    label: s.price ? `${s.name}:   ${s.price}FRW` : s.name,
  }));
}

export function useEGovernmentOptions() {
  const { data, isLoading } = useGetAllEGovernmentServicesQuery();
  return {
    items: toCardItems(data?.items ?? []),
    options: toOptions(data?.items ?? []),
    isLoading,
  };
}

export function useWebOptions() {
  const { data, isLoading } = useGetAllWebServicesQuery();
  return {
    items: toCardItems(data?.items ?? []),
    options: toOptions(data?.items ?? []),
    isLoading,
  };
}

export function useAppDocOptions() {
  const { data, isLoading } = useGetAllAppDocServicesQuery();
  return {
    items: toCardItems(data?.items ?? []),
    options: toOptions(data?.items ?? []),
    isLoading,
  };
}

export function useLegalOptions() {
  const { data, isLoading } = useGetAllLegalServicesQuery();
  return {
    items: toCardItems(data?.items ?? []),
    options: toOptions(data?.items ?? []),
    isLoading,
  };
}

export function useCreativeOptions() {
  const { data, isLoading } = useGetAllCreativeMediaServicesQuery();
  return {
    items: toCardItems(data?.items ?? []),
    options: toOptions(data?.items ?? []),
    isLoading,
  };
}
