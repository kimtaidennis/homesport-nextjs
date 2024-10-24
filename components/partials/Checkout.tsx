'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useEffect } from "react"
import { checkoutCredits } from "@/lib/actions/payment.actions";



const formSchema = z.object({
    amount: z.coerce.number().min(0, {
      message: "Amount greater than 0",
    }),
})

const Checkout = ({ buyerId }: {buyerId: string }) => {
    
    const { toast } = useToast();

    useEffect(() => {
        loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    }, []);

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            toast({
                title: "Order placed!",
                description: "You will receive an email confirmation",
                duration: 5000,
                className: "success-toast",
            });
        }

        if (query.get("canceled")) {
            toast({
                title: "Order canceled!",
                description: "Continue to shop around and checkout when you're ready",
                duration: 5000,
                className: "error-toast",
            });
        }
    }, []);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            amount: 0,
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const transaction = {
            plan: 'deposit',
            credits: 1,
            buyerId,
            amount: values.amount,
            
        };

        await checkoutCredits(transaction);
    }
    
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Amount</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} className="form-control rounded-md"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-yellow text-dark-bg w-full py-3 h-12">Submit</Button>
                </form>
            </Form>
        </>
    )
}

export default Checkout