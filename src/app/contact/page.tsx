'use client';
import {Inter} from 'next/font/google';
import {useForm} from '@formspree/react';
import Title from "@/src/components/Title";
import {Button} from '@/components/ui/button';

const inter = Inter({
    subsets: ["latin"],
});

export default function About(){

    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID as string);

    return(
        <>
            <div data-aos="zoom-in">
                <Title text="Get in Touch"/>

                <div className="py-8 px-4 mx-auto max-w-screen-lg">
                    {state.succeeded ? (
                        <p className={`text-red-400 text-center font-bold text-xl py-10 px-5 border border-red-400 ${inter.className}`}>
                            Thanks for reaching out!
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label htmlFor="email" className={`block mb-2 text-xl text-white font-bold border-b-4 border-red-400 ${inter.className}`}>Your Email</label>
                                <input id="email" type="email" name="email" required className="bg-white border text-base rounded-lg w-full p-3" placeholder="email@address.com"/>
                            </div>

                            <div>
                                <label htmlFor="message" className={`block mb-2 text-xl text-white font-bold border-b-4 border-red-400 ${inter.className}`}>Your Message</label>
                                <textarea id="message" name="message" required rows={5} className="bg-white border text-base rounded-lg w-full p-3" placeholder="Leave a message..."/>
                            </div>

                            <Button disabled={state.submitting} className="cursor-pointer p-5 text-sm text-center font-bold text-white rounded-lg bg-red-400">
                                Send Message
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );

}