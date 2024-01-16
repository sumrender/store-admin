import { getAllCategories } from "@/actions/category-actions";
import { ProductForm } from "./components/product-form";
import { getProductById } from "@/actions/product-actions";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  let product = null;
  if (params.productId !== "new") {
    product = await getProductById(params.productId);
  }

  const categories = await getAllCategories();

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm initialData={product} categories={categories} />
      </div>
    </div>
  );
};

export default ProductPage;
