"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import CheckIcon from "@/assets/check.svg";

const features = [
    {
        title: "Task Tracking",
        description:
            "Effortlessly track all your tasks and projects in one place. Never miss a deadline again.",
    },
    {
        title: "Progress Analytics",
        description:
            "Visualize your progress with beautiful charts and insights that keep you motivated.",
    },
    {
        title: "Team Collaboration",
        description:
            "Invite your team, assign tasks, and collaborate in real-time without any friction.",
    },
    {
        title: "Integrations",
        description:
            "Connect with your favourite tools — Slack, Notion, Google Drive, and many more.",
    },
    {
        title: "Mobile Ready",
        description:
            "Access your workspace from anywhere. Our app works seamlessly on all devices.",
    },
    {
        title: "Priority Support",
        description:
            "Get help when you need it. Our support team is available 24/7 for all your queries.",
    },
];

export default function FeaturesPage() {
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
                            <div className="tag">What we offer</div>
                        </div>
                        <h1 className="section-title mt-5">Everything you need</h1>
                        <p className="section-description mt-5">
                            From intuitive design to powerful features, our app has everything
                            to supercharge your productivity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip relative">
                <div className="container">
                    {/* Floating assets */}
                    <motion.img
                        src={pyramidImage.src}
                        alt="Pyramid"
                        width={220}
                        height={220}
                        className="hidden lg:block absolute right-28 top-10"
                        style={{ translateY }}
                    />
                    <motion.img
                        src={tubeImage.src}
                        alt="Tube"
                        width={200}
                        height={200}
                        className="hidden lg:block absolute left-28 bottom-10"
                        style={{ translateY }}
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3">
                                    <CheckIcon className="h-6 w-6 flex-shrink-0" />
                                    <h3 className="font-bold tracking-tight text-black">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-black/60 text-sm mt-3 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}