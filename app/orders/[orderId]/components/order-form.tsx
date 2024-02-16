import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Order,
  OrderStatusEnum,
  orderStatusArray,
} from "@/models/order.interface";
import { updateOrderStatus } from "@/actions/order-actions";

interface OrderFormProps {
  defaultValues: Order;
}

export const OrderForm: React.FC<OrderFormProps> = async ({
  defaultValues,
}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    orderStatus: z.string().min(1),
  });

  type OrderFormValues = z.infer<typeof formSchema>;
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: OrderFormValues) => {
    try {
      setLoading(true);
      const props = {
        orderStatus: data.orderStatus as OrderStatusEnum,
      };
      await updateOrderStatus(defaultValues._id, props);
      router.refresh();
      router.push(`/orders`);
      toast.success("Order updated");
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[70vh] flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-1/2 p-2"
        >
          <FormField
            control={form.control}
            name="orderStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order Status</FormLabel>
                <Select
                  disabled={loading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Select a status"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {orderStatusArray.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="mt-4" type="submit">
            Update Order
          </Button>
        </form>
      </Form>
    </div>
  );
};
