"use client";
import { motion } from "framer-motion";
import { SendIcon, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from 'react'

const testimonials = [
    {
        name: "Jane Doe",
        title: "CEO, AwesomeCo",
        description: "This developer transformed our project and exceeded expectations.",
    },
    {
        name: "John Smith",
        title: "Product Manager, TechCorp",
        description: "Highly recommend! Excellent communication and fast delivery.",
    },
    {
        name: "Jane Doe",
        title: "CEO, AwesomeCo",
        description: "This developer transformed our project and exceeded expectations.",
    },
    {
        name: "John Smith",
        title: "Product Manager, TechCorp",
        description: "Highly recommend! Excellent communication and fast delivery.",
    },
    {
        name: "Jane Doe",
        title: "CEO, AwesomeCo",
        description: "This developer transformed our project and exceeded expectations.",
    },
    {
        name: "John Smith",
        title: "Product Manager, TechCorp",
        description: "Highly recommend! Excellent communication and fast delivery.",
    },
]


function Testimonials() {
    // const [feedback, setFeedback] = useState("");
    const [formDisplay, setFormDisplay] = useState(false);
    const [feedbackCredForms, setFeedbackCredForms] = useState<{ name?: string, company?: string, role?: string, feedback?: string, label: string }[]>([
        { label: "name", name: "" },
        { label: "role", role: "" },
        { label: "company", company: "" },
        { label: "feedback", feedback: "" }
    ]);

    const handleFieldUpdate = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        setFeedbackCredForms(feedbackCredForms.map((form, i) => i === index ? {
            ...form, [form.label]: e.target.value
        } : form
        ))
    }

    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0">
            <div className="w-[90%] xsm:w-full max-w-[850px] tb:max-w-[1024px] xl:max-w-[1280px] laptop:max-w-[1340px] flex flex-col items-center gap-8 xsm:px-10 mtb:px-6 tb:px-16 lg:px-20 mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.7, ease: "easeInOut" }
                    }}
                    className="w-full text-center text-3xl md:text-4xl font-bold text-white"
                >
                    What Clients Are Saying
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="flex w-[90%] flex-wrap gap-[20px] justify-center items-center"
                >

                    {testimonials.map((testimonial, index) => (
                        < motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 3.0, duration: 0.7, ease: "easeInOut" }
                            }} className="bg-[#27272c] text-white rounded-lg p-7 w-[32%] h-[230px] gap-4 flex flex-col justify-between shadow-[0_4px_8px_#0000001a]"
                            key={index}
                        >
                            <p className="font-light italic text-md">&ldquo;{testimonial.description}&rdquo;</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-500 flex-shrink-0 relative">
                                    <Image src="/photo1.png" alt="image" fill />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-base">{testimonial.name}</h4>
                                    <p className="font-light text-sm italic text-accent">{testimonial.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
                
            
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="flex gap-3 justify-center items-center fixed bottom-12 right-12"
                >
                    <div className={`${formDisplay ? "w-[500px] flex flex-wrap justify-between transition-all duration-600" : "hidden"} gap-3 px-6 pt-6 pb-12 border border-accent rounded-[16px] bg-[#27272c] shadow-[0_4px_8px_#0000001a]`}>
                        {feedbackCredForms.map((feedbackCredForm, index) => (
                            <div className={`${feedbackCredForm.label === "role" ? "w-[48%]" : feedbackCredForm.label === "name" ? "w-[48%]" : "w-full"} flex flex-col gap-2`} key={index}>
                                <label className="capitalize text-[#a1a1a1] text-sm" htmlFor={feedbackCredForm.label}>{feedbackCredForm.label}</label>
                                {feedbackCredForm.label === "feedback" ? (
                                    <textarea rows={6} name={feedbackCredForm.label} id={feedbackCredForm.label} placeholder={`Your ${feedbackCredForm.label}`} value={feedbackCredForm[feedbackCredForm.label as keyof typeof feedbackCredForm] || ''} onChange={(e) => handleFieldUpdate(e, index)} className="w-full border border-[#1c1c1c] outline-none focus:border-accent bg-[#27272c] py-4 pl-6 pr-[130px] text-sm rounded-[8px] " />
                                ) : (
                                    <input name={feedbackCredForm.label} id={feedbackCredForm.label} placeholder={`Your ${feedbackCredForm.label}`} value={feedbackCredForm[feedbackCredForm.label as keyof typeof feedbackCredForm] || ''} onChange={(e) => handleFieldUpdate(e, index)} className={`w-full border border-[#1c1c1c] outline-none focus:border-accent bg-[#27272c] py-4 px-6 text-sm rounded-[8px] `} />
                                )}
                            </div>
                        ))}
                    </div>

                    {formDisplay ? (
                        <span className="flex gap-4 absolute -bottom-5 right-3">
                            <span onClick={() => setFormDisplay(false)} className="px-5 py-4 font-medium h-10 rounded-full text-white hover:text-white/60 text-sm bg-accent hover:bg-accent-hover duration-500 transition-all cursor-pointer flex justify-center gap-2 items-center">
                                <X />
                            </span>
                            <span className="px-5 py-4 font-medium h-10 rounded-full text-white hover:text-white/60 text-base bg-accent hover:bg-accent-hover duration-500 transition-all cursor-pointer flex justify-center gap-2 items-center">
                                <span>Post</span>
                                <SendIcon />
                            </span>
                        </span>
                    ) : (
                        <span onClick={() => setFormDisplay(true)} className="px-8 py-5 font-medium h-10 rounded-full text-white hover:text-white/60 text-base bg-accent hover:bg-accent-hover duration-500 transition-all absolute cursor-pointer -bottom-5 right-3 flex justify-center gap-2 items-center">
                            <span>Send Feedback</span>
                            <SendIcon />
                        </span>
                    )}
                </motion.div>
            </div >
        </section >
    )
}

export default Testimonials;