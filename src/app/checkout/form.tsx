"use client";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { client } from "@/sanity/lib/client";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { BreadcrumbCollapsed } from "@/components/Breadcrumb";
import { removeOrderFromLocalStorage } from "../Redux/features/cart";
import { useRouter } from "next/navigation";

// Form schema with validations
const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{10,}$/, "Phone number must be at least 10 digits"), // Correct Regex
});
type FormdType = z.infer<typeof formSchema>;

function Checkout() {
  const dispatch = useDispatch();
  const router = useRouter();

  interface CartItem {
    name: string;
    price: number;
    discount: number;
    qty: number;
    image: string;
  }

  const cartArray: CartItem[] = useSelector((state: { cart: CartItem[] }) => state.cart);

  const total = cartArray.reduce((total: number, arr: CartItem) => {
    const discountedPrice = arr.discount > 0 ? arr.price - (arr.price * arr.discount) / 100 : arr.price;
    return total + discountedPrice * arr.qty;
  }, 0);

  const notifySuccess = () =>
    toast.success("Order placed successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const notifyError = (error: string) =>
    toast.error(error, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const form = useForm<FormdType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
  });
  const onSubmit = () => {
    notifySuccess();
    form.reset();
    router.push("/payment"); 
    notifyError("Failed to place the order. Please try again.");
  };


  return (
    <main className="mt-28 lg:mt-36">
      <BreadcrumbCollapsed />
      <div className="flex flex-col md:flex-row space-y-5 sm:space-y-0 p-5 justify-center items-start lg:space-x-6">
        {cartArray.length <= 0 && (
          <div className="w-full lg:w-[600px] flex justify-center items-center pt-2">
            <p>No items in your cart.</p>
          </div>
        )}
        {cartArray.length >= 1 && (
          <div className="w-full lg:w-[600px] space-y-4 border rounded-[20px] pt-2">
            <h1 className="text-2xl font-bold px-5">Order Summary</h1>
            {cartArray.map((data: any, index: any) => {
              return (
                <div className="flex justify-between items-start px-5" key={index}>
                  <div className="flex items-start space-x-2">
                    <Image src={data.image} alt={data.name} className="w-[80px]" width={100} height={100} />
                    <h1 className="sm:font-bold text-sm md:text-xl mt-3">{data.name}</h1>
                  </div>
                  <p className="font-bold mt-3">${data.price}</p>
                </div>
              );
            })}
            <div className="flex w-full justify-between p-5">
              <h1 className="font-bold">Total</h1>
              <h1 className="font-bold">${total}</h1>
            </div>
          </div>
        )}

        <div className="rounded-[20px] border p-5 w-full lg:w-[50%]">
          <h1 className="text-2xl font-bold mb-4">Contact Details</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full" type="submit">
                Place Order
              </Button>
            </form>
          </Form>

          {/* Toastify container */}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </div>
      </div>
    </main>
  );
}

export default Checkout;
