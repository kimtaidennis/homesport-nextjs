declare type CreateUserParams = {
    clerkId: string;
    email: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
};

declare type UpdateUserParams = {
    firstName: string | null;
    lastName: string | null;
    username: string;
};

declare type CheckoutTransactionParams = {
    plan: string;
    credits: number;
    amount: number;
    buyerId: string;
};

declare type CheckoutTransactionParams1 = {
    plan: string;
    credits: number;
    amount: number;
    buyerId: string;
};
  
declare type CreateTransactionParams = {
    stripeId: string;
    amount: number;
    credits: number;
    plan: string;
    buyerId: string;
    createdAt: Date;
};
