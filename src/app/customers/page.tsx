"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

const customers = [
    {
        text: "As a seasoned designer always on the lookout for innovative tools, this app instantly grabbed my attention.",
        name: "Jamie Rivera",
        username: "@jamietechguru00",
        company: "TechCorp",
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this tool.",
        name: "Josh Smith",
        username: "@jjsmith",
        company: "Startup Hub",
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        name: "Morgan Lee",
        username: "@morganleewhiz",
        company: "DesignStudio",
    },
    {
        text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
        name: "Casey Jordan",
        username: "@caseyj",
        company: "BuildFast Inc",
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts.",
        name: "Taylor Kim",
        username: "@taylorkimm",
        company: "EventsPro",
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        name: "Riley Smith",
        username: "@rileysmith1",
        company: "GrowthCo",
    },
];

export default function CustomersPage() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] py-24 overflow-x-clip relative">
                <div className="container">
                    <div className="section-heading relative">
                        <div className="flex justify-center">
                            <div className="tag">Our customers</div>
                        </div>
                        <h1 className="section-title mt-5">Loved by thousands</h1>
                        <p className="section-description mt-5">
                            From freelancers to large teams — our customers trust us to keep
                            them on track every single day.
                        </p>
                        <Image
                            src={starImage}
                            alt="Star"
                            width={300}
                            className="absolute -left-[280px] -top-[100px] hidden md:block"
                        />
                        <Image
                            src={springImage}
                            alt="Spring"
                            width={260}
                            className="absolute -right-[260px] -top-[10px] hidden md:block"
                        />
                    </div>
                </div>
            </section>

            {/* Customers Grid */}
            <section className="bg-white py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {customers.map((customer, index) => (
                            <motion.div
                                key={index}
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-black/80 text-sm leading-relaxed">
                                    {customer.text}
                                </p>
                                <div className="flex items-center gap-3 mt-5">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-b from-black to-[#001E80] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                        {customer.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>
                                    <div>
                                        <div className="font-medium tracking-tight leading-5 text-sm">
                                            {customer.name}
                                        </div>
                                        <div className="text-black/50 text-xs leading-5">
                                            {customer.username} · {customer.company}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}