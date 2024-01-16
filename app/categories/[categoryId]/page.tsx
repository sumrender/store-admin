import prismadb from "@/lib/prismadb";

import { CategoryForm } from "./components/category-form";
import { getCategoryById } from "@/actions/category-actions";

const CategoryPage = async ({
  params
}: {
  params: { categoryId: string}
}) => {
  let category = null;
  if(params.categoryId !== 'new'){
    category = await getCategoryById(params.categoryId);
  }

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm initialData={category} />
      </div>
    </div>
  );
}

export default CategoryPage;