"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

const updates = [
    {
        version: "v2.0",
        date: "December 2024",
        tag: "Major Release",
        title: "Version 2.0 is here",
        description:
            "A complete redesign with faster performance, new analytics dashboard, and improved mobile experience.",
        highlights: [
            "New analytics dashboard",
            "50% faster load times",
            "Redesigned mobile app",
            "Dark mode support",
        ],
    },
    {
        version: "v1.5",
        date: "September 2024",
        tag: "Feature Update",
        title: "Team collaboration tools",
        description:
            "Introducing real-time collaboration features, shared workspaces, and team activity tracking.",
        highlights: [
            "Real-time collaboration",
            "Shared workspaces",
            "Team activity log",
            "Role-based permissions",
        ],
    },
    {
        version: "v1.2",
        date: "June 2024",
        tag: "Improvement",
        title: "Integrations & API",
        description:
            "Connect with your favourite tools. We now support Slack, Notion, Google Drive, and many more.",
        highlights: [
            "Slack integration",
            "Google Drive sync",
            "Notion import",
            "Public API access",
        ],
    },
];

export default function UpdatesPage() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <div ref={sectionRef}>
            {/* Hero */}
            <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] py-24 overflow-x-clip">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">What&apos;s new</div>
                        </div>
                        <h1 className="section-title mt-5">Latest updates</h1>
                        <p className="section-description mt-5">
                            We are constantly improving. Here&apos;s what we have shipped
                            recently.
                        </p>
                    </div>
                </div>
            </section>

            {/* Updates List */}
            <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip relative">
                <div className="container">
                    {/* Floating assets */}
                    <motion.img
                        src={cylinderImage.src}
                        alt="Cylinder"
                        width={160}
                        height={160}
                        className="hidden lg:block absolute right-28 top-0"
                        style={{ translateY }}
                    />
                    <motion.img
                        src={noodleImage.src}
                        alt="Noodle"
                        width={160}
                        className="hidden lg:block absolute left-28 bottom-10 rotate-[30deg]"
                        style={{ translateY }}
                    />

                    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
                        {updates.map((update, index) => (
                            <motion.div
                                key={index}
                                className="card"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center justify-between flex-wrap gap-3">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-black text-white text-xs px-3 py-1 rounded-full font-medium">
                                            {update.version}
                                        </span>
                                        <span className="text-black/40 text-xs">{update.date}</span>
                                    </div>
                                    <span className="text-xs text-black/50 border border-black/20 px-3 py-1 rounded-full">
                                        {update.tag}
                                    </span>
                                </div>
                                <h3 className="font-bold text-lg tracking-tight mt-4">
                                    {update.title}
                                </h3>
                                <p className="text-black/60 text-sm mt-2 leading-relaxed">
                                    {update.description}
                                </p>
                                <ul className="mt-4 flex flex-col gap-2">
                                    {update.highlights.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="text-sm text-black/70 flex items-center gap-2"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: i * 0.08 }}
                                            viewport={{ once: true }}
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-black/40 flex-shrink-0" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}