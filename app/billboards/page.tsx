import { format } from "date-fns";

import { BillboardColumn } from "./components/columns";
import { BillboardClient } from "./components/client";
import { getAllBillboards } from "@/actions/billboard-actions";
import { Billboard } from "@/models/billboard.interface";
import { BaseActions } from "@/actions/base-actions";
import { BASE_URL, TOKEN } from "@/constants/data";

const BillboardsPage = async () => {
  const billboards: Billboard[] = await getAllBillboards();

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item._id,
    label: item.label,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
