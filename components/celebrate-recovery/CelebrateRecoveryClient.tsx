'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

export default function CelebrateRecovery() {
    return (
        <div className="relative min-h-screen">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative h-[60vh] flex items-center justify-center"
            >
                <Image
                    src="/celebrate-recovery/support.webp"
                    alt="Celebrate Recovery"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-4"
                    >
                        CELEBRATE<br />RECOVERY
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                    >
                        Find healing, hope, and freedom in Christ
                    </motion.p>
                </div>
            </motion.section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-4"
                >
                    {/* Help Section */}
                    <motion.div
                        variants={fadeIn}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <h2 className="text-4xl font-bold mb-6">How Can We Help You Today?</h2>
                        <p className="text-xl text-gray-600">
                            Take the first step towards healing. Our team is here to support you on your journey.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                title: "Celebrate Recovery",
                                description: "Our Christ-centered, 12-step program is a safe place to find community and freedom from the hurts and behaviors that are controlling our lives.",
                                icon: "🕊️"
                            },
                            {
                                title: "Counseling",
                                description: "We offer a safe and caring environment for individuals to discover answers to personal struggles and relational challenges.",
                                icon: "❤️"
                            },
                            {
                                title: "Support Groups",
                                description: "Our support groups offer Christ-centered communities to fill you with comfort, strength, and hope. In these groups, you can learn to trust in God as he guides you to wholeness.",
                                icon: "🤝"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                whileHover={{ scale: 1.03 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Meeting Info */}
                    <motion.div
                        variants={fadeIn}
                        className="bg-gray-50 rounded-3xl p-12 mb-20"
                    >
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Join Us</h2>
                                <div className="space-y-4 text-lg">
                                    <p className="flex items-center gap-3">
                                        <span className="text-blue-500">📅</span>
                                        Every Wednesday at 7:00 PM
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="text-blue-500">📍</span>
                                        Upper Room (Enter through main lobby)
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                                <div className="space-y-4 text-lg">
                                    <p className="flex items-center gap-3">
                                        <span className="text-blue-500">📞</span>
                                        (714) 834-9331
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="text-blue-500">✉️</span>
                                        tccr@tcsocal.com
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="text-blue-500">🏢</span>
                                        2501 W 5th St, Santa Ana, CA 92703
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        variants={fadeIn}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Take the first step towards healing. Our team is here to support you on your journey.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="/connect"
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/connect/groups"
                                className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition"
                            >
                                Join a Group
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}