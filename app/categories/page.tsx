import { format } from "date-fns";

import { CategoryColumn } from "./components/columns";
import { CategoriesClient } from "./components/client";
import { getAllCategories } from "@/actions/category-actions";

const CategoriesPage = async () => {
  const categories = await getAllCategories();

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item._id,
    name: item.name,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
