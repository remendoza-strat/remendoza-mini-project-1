'use client';
import {useEffect, useRef} from 'react';
import {useForm} from '@formspree/react';
import {inter} from '@/src/app/layout';
import Title from "@/src/components/Title";
import {Button} from '@/components/ui/button';

export default function About(){

    const [state, handleSubmit] = useForm("xqabjlpd");

    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
    if(state.succeeded){
        if(emailRef.current) emailRef.current.value = '';
        if(messageRef.current) messageRef.current.value = '';
    }}, [state.succeeded]);

    return(
        <>
            <div className="animate-fade-up">
                <Title text="Get in Touch"/>

                <div className="py-8 px-4 mx-auto max-w-screen-md">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div>
                            <label htmlFor="email" className={`block mb-2 text-xl text-white font-bold border-b-4 border-red-400 ${inter.className}`}>Your Email</label>
                            <input 
                            id="email" type="email" name="email" required ref={emailRef}
                            className="bg-white border text-base rounded-lg w-full p-3"
                            placeholder="email@address.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className={`block mb-2 text-xl text-white font-bold border-b-4 border-red-400 ${inter.className}`}>Your Message</label>
                            <textarea
                            id="message" name="message" required rows={5} ref={messageRef}
                            className="bg-white border text-base rounded-lg w-full p-3"
                            placeholder="Leave a message..."
                            />
                        </div>

                        {state.succeeded && (<p className="text-red-400 text-center font-bold text-xl">Thanks for reaching out!</p>)}

                        <Button disabled={state.submitting} className="cursor-pointer p-5 text-sm text-center font-bold text-white rounded-lg bg-red-400">Send Message</Button>
                    </form>
                </div>
            </div>
        </>
    );

}