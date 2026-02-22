import { api } from '@/lib/axios';
import { ICategory } from '@/types/categories.types';
import { isAxiosError } from 'axios';

export const getCategoriesApi = async (): Promise<ICategory[]> => {
  try {
    const { data } = await api.get<ICategory[]>('/categories');
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch products");
    }
    throw new Error("An unexpected error occurred");
  }
};