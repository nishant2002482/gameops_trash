'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 6 characters.",
    }),
})
function Page() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // State variable to store error message
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                router.push('/')
            } else {
                router.push('/login')
            }
        });
    })

    // Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                router.push('/');
            })
            .catch((error) => {
                const errorMessage = error.message; // Get error message from Firebase
                setErrorMessage(errorMessage); // Set error message to state variable
            });

    }

    return (
        <div className='relative flex h-screen w-[100%]'>
            <div className='absolute h-screen w-[100%]'>
                <Image src='/backgoundImage.avif' alt='' className='w-full h-full object-cover' height={1000} width={1000} />
            </div>
            <div className='absolute h-full w-full flex items-center justify-center'>
                <div className='bg-secondary text-black px-10 py-10 rounded-xl w-[28%] h-fit'>
                    <div className='font-bold text-center text-2xl'>Login</div>
                    {errorMessage && ( // Render error message if it exists
                        <div className="text-red-500 text-sm mb-2 text-center">Invalid Username or Password</div>
                    )}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email :</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password :</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your password" type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='mt-6'>
                                <Button type="submit" className='w-full'>Login</Button>
                            </div>

                        </form>
                    </Form>
                    <div className='text-black text-center w-full mt-2 font-normal text-sm'>
                        Dont have an account?
                        <Link className='text-center text-primary ml-1' href="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page