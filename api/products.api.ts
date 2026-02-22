import { api } from '@/lib/axios';
import { IProduct } from '@/types/products.types';
import { isAxiosError } from 'axios';

export const getProductsApi = async (): Promise<IProduct[]> => {
  try {
    const { data } = await api.get<IProduct[]>('/products');
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch products");
    }
    throw new Error("An unexpected error occurred");
  }
};