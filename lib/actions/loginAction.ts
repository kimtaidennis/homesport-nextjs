"use server";

import { resolve } from "path";

export const loginAction = async (formdata: FormData) => {
    await new Promise( (resolve) => {
        setTimeout(() => {
            resolve(console.log(formdata))
        }, 2000);
    })
}