'use server';

import { redirect } from "next/navigation";

export default async function addTodo(formData) {

    const inputValue = formData.get('input_key');
    if (!inputValue) {
        // redirect ?
        console.log('ko');
        return;
    }
    console.log(`ok ${inputValue}`);
    redirect(`/blog/${inputValue}`);
}