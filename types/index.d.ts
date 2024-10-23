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
