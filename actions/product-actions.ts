import { BASE_URL, TOKEN } from "@/constants/data";
import { Product } from "@/models/product.interface";
import axios, { AxiosResponse } from "axios";

const PRODUCT_URL = BASE_URL + "/products";

export const getAllProducts = async () => {
  const { data: products }: AxiosResponse<Product[]> = await axios.get(
    PRODUCT_URL,
    {
      headers: { Authorization: `Bearer ${TOKEN}` },
    }
  );

  return products;
};

export const getProductById = async (productId: string): Promise<Product> => {
  const { data: product }: AxiosResponse<Product> = await axios.get(
    `${PRODUCT_URL}/${productId}`,
    {
      headers: { Authorization: `Bearer ${TOKEN}` },
    }
  );

  return product;
};

interface createProductItem {
  name: string;
  quantity: number;
  price: number;
  category: string;
  description: string;
  images: string[];
  isFeatured?: boolean;
}

interface CreateProductProps {
  products: createProductItem[];
}

export const createProduct = async (data: CreateProductProps) => {
  const { data: products }: AxiosResponse<Product[]> = await axios.post(
    PRODUCT_URL,
    data,
    {
      headers: { Authorization: `Bearer ${TOKEN}` },
    }
  );

  return products;
};

interface UpdateProductProps {
  name?: string;
  quantity?: number;
  price?: number;
  category?: string;
  description?: string;
  images?: string[];
}

export const updateProduct = async (id: string, data: UpdateProductProps) => {
  const { data: updatedProduct }: AxiosResponse<Product> = await axios.patch(
    `${PRODUCT_URL}/${id}`,
    data,
    {
      headers: { Authorization: `Bearer ${TOKEN}` },
    }
  );

  return updatedProduct;
};

export const removeProductById = async (productId: string) => {
  const { data }: AxiosResponse<Product> = await axios.delete(
    `${PRODUCT_URL}/${productId}`,
    {
      headers: { Authorization: `Bearer ${TOKEN}` },
    }
  );

  return data;
};
