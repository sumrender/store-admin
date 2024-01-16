import prismadb from "@/lib/prismadb";

import { BillboardForm } from "./components/billboard-form";
import { getBillboardById } from "@/actions/billboard-actions";

const BillboardPage = async ({
  params
}: {
  params: { billboardId: string }
}) => {
  let billboard = null;
  if(params.billboardId !== 'new'){
    billboard = await getBillboardById(params.billboardId);
  }

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
}

export default BillboardPage;
