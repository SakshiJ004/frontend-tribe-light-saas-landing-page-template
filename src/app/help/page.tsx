"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import cogImage from "@/assets/cog.png";
import springImage from "@/assets/spring.png";
import ArrowRight from "@/assets/arrow-right.svg";

const faqs = [
    {
        question: "How do I get started for free?",
        answer:
            "Simply click 'Get for free' on the homepage and sign up with your email. No credit card required.",
    },
    {
        question: "Can I upgrade or downgrade my plan anytime?",
        answer:
            "Yes! You can change your plan at any time from your account settings. Changes take effect immediately.",
    },
    {
        question: "How many team members can I add?",
        answer:
            "The Free plan supports up to 5 members. The Pro plan supports up to 50, and Business has no limits.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Absolutely. We use industry-standard encryption and never share your data with third parties.",
    },
    {
        question: "Do you offer a refund?",
        answer:
            "Yes, we offer a 30-day money-back guarantee on all paid plans, no questions asked.",
    },
    {
        question: "How can I contact support?",
        answer:
            "You can reach our support team via email at support@sakshi.com. We typically respond within a few hours.",
    },
];

const AccordionItem = ({
    question,
    answer,
    index,
}: {
    question: string;
    answer: string;
    index: number;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="border border-black/10 rounded-2xl overflow-hidden bg-white"
        >
            {/* Question row */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
                <span className="font-medium tracking-tight text-black text-sm md:text-base">
                    {question}
                </span>
                {/* + / - icon */}
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4 h-6 w-6 rounded-full bg-black flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </motion.div>
            </button>

            {/* Answer — animated open/close */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <p className="px-6 pb-5 text-black/60 text-sm leading-relaxed">
                    {answer}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default function HelpPage() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <div ref={sectionRef}>
            {/* Hero */}
            <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] py-24 overflow-x-clip relative">
                <div className="container">
                    <div className="section-heading relative">
                        <div className="flex justify-center">
                            <div className="tag">Support</div>
                        </div>
                        <h1 className="section-title mt-5">How can we help?</h1>
                        <p className="section-description mt-5">
                            Find answers to the most common questions below. Still need help?
                            Reach out to our team anytime.
                        </p>
                        <motion.div
                            className="hidden md:block absolute -right-[260px] -top-[60px]"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Image src={cogImage} alt="Cog" width={200} />
                        </motion.div>
                        <motion.div
                            className="hidden md:block absolute -left-[260px] -top-[10px]"
                            style={{ translateY }}
                        >
                            <Image src={springImage} alt="Spring" width={220} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">FAQ</div>
                        </div>
                        <h2 className="section-title mt-5">Frequently asked questions</h2>
                    </div>

                    <div className="flex flex-col gap-3 mt-16 max-w-2xl mx-auto">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                index={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-black/60 text-sm">Still have questions?</p>
                        <div className="flex gap-2 justify-center mt-4">
                            <button className="btn btn-primary">Contact Support</button>
                            <button className="btn btn-text gap-1">
                                <span>Email us</span>
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}