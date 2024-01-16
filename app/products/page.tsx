import { format } from "date-fns";

import { ProductsClient } from "./components/client";
import { ProductColumn } from "./components/columns";
import { getAllProducts } from "@/actions/product-actions";

const ProductsPage = async () => {
  const products = await getAllProducts();

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item._id,
    name: item.name,
    price: item.price.toString(),
    category: item.category,
    description: item.description,
    images: item.images,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
