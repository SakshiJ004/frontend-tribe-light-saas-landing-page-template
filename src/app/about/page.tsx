"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50+", label: "Countries" },
    { value: "4.9★", label: "Average Rating" },
    { value: "99%", label: "Uptime" },
];

const team = [
    { initials: "SJ", name: "Sakshi Jadhav", role: "Founder & CEO" },
    { initials: "RK", name: "Rohan Kulkarni", role: "Head of Design" },
    { initials: "PM", name: "Priya Mehta", role: "Lead Engineer" },
];

export default function AboutPage() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <div ref={sectionRef}>
            {/* Hero Section */}
            <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] py-24 overflow-x-clip relative">
                <div className="container">
                    <div className="section-heading relative">
                        <div className="flex justify-center">
                            <div className="tag">Who we are</div>
                        </div>
                        <h1 className="section-title mt-5">About Us</h1>
                        <p className="section-description mt-5">
                            We are a team of passionate builders dedicated to helping people
                            achieve more every day. Our app tracks your progress, motivates
                            your efforts, and celebrates your successes.
                        </p>
                        {/* Floating assets */}
                        <motion.div
                            className="absolute -left-[300px] -top-[100px] hidden md:block"
                            style={{ translateY }}
                        >
                            <Image src={starImage} alt="Star" width={300} />
                        </motion.div>
                        <motion.div
                            className="absolute -right-[280px] -top-[10px] hidden md:block"
                            style={{ translateY }}
                        >
                            <Image src={springImage} alt="Spring" width={280} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-16">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="card text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                                    {stat.value}
                                </div>
                                <p className="text-black/60 mt-2 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip relative">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">Our mission</div>
                        </div>
                        <h2 className="section-title mt-5">Why we built this</h2>
                        <p className="section-description mt-5">
                            Celebrate the joy of accomplishment with an app designed to track
                            your progress, motivate your efforts, and celebrate your
                            successes. We believe productivity should feel rewarding, not
                            exhausting.
                        </p>
                    </div>

                    {/* Cylinder floating */}
                    <div className="relative mt-16 flex justify-center">
                        <motion.div
                            className="hidden lg:block absolute -right-24 -top-16"
                            style={{ translateY }}
                        >
                            <Image src={cylinderImage} alt="Cylinder" width={180} height={180} />
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6 w-full">
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    className="card text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="h-14 w-14 rounded-full bg-gradient-to-b from-black to-[#001E80] flex items-center justify-center text-white font-bold mx-auto">
                                        {member.initials}
                                    </div>
                                    <h3 className="font-bold tracking-tight mt-4">{member.name}</h3>
                                    <p className="text-black/60 text-sm mt-1">{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}