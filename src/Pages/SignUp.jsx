import Stepper, { Step } from '../components/ui/Stepper'
import React, { useState } from 'react'
import { motion } from 'framer-motion'


const SignUp = () => {
    const [name, setName] = useState('');
    const [form, setForm] = useState({
        fullname : "",
        email : "",
        password : "", 
        path : "",
        ans1 : "",
        ans2 : "",
        ans3 : "",
    })

    return (
        <section className='min-h-screen flex justify-center items-center bg-gray-100'>
            <div className='flex w-full max-w-7xl mx-auto h-[75vh] shadow-2xl mt-20 rounded-3xl overflow-hidden'>
                <div id='form' className='w-1/2 h-full border-r border-gray-300 p-12 flex flex-col justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden'>
                    {/* Dynamic Grid Background */}
                    <motion.div
                        className="absolute inset-0 opacity-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 2 }}
                    >
                        <div className="grid grid-cols-12 grid-rows-12 h-full w-full gap-2">
                            {[...Array(144)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-blue-500 rounded-sm"
                                    animate={{
                                        opacity: [0, 0.3, 0],
                                        scale: [0.8, 1, 0.8],
                                    }}
                                    transition={{
                                        duration: 2 + Math.random() * 3,
                                        repeat: Infinity,
                                        delay: Math.random() * 4,
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative z-10 text-white">
                        <Stepper
                            hi initialStep={1}
                            onStepChange={(step) => {
                                console.log(step);
                            }}
                            onFinalStepCompleted={() => console.log("All steps completed!")}
                            backButtonText="Previous"
                            nextButtonText="Next"
                        >
                            <Step>
                                <h2>Welcome to DevSync!</h2> 
                                <p>Let's get you started on your coding journey!</p>
                            </Step>
                            <Step>

                                <h2>Personal Information</h2>

                                <input value={form.fullname} onChange={(e) => setForm(prev => ({...prev, fullname: e.target.value}))} className="w-full p-3 border rounded-lg mb-4" name='fullname' placeholder="Full Name" />

                                <input value={form.email} onChange={(e) => setForm(prev => ({...prev, email: e.target.value}))} className="w-full p-3 border rounded-lg mb-4" name='email' type='email' placeholder="Email Address" />

                                <input value={form.password} onChange={(e) => setForm(prev => ({...prev, password: e.target.value}))} className="w-full p-3 border rounded-lg" name='password' type='password' placeholder="Password" />

                                
                            </Step>
                            <Step>
                                <h2>Choose Your Path</h2>
                                <input value={form.path} onChange={(e) => setName(prev => ({...prev, path: e.target.value}))} className="w-full p-3 border rounded-lg" placeholder="What do you want to learn?" />
                            </Step> 

                            <Step>
                                <h2>Question-1</h2>
                                <input value={form.ans1} onChange={(e) => setName(prev => ({...prev, ans1: e.target.value}))} className="w-full p-3 border rounded-lg" placeholder="Answer" />
                            </Step>

                            <Step>
                                <h2>Question-2</h2>
                                <input value={form.ans2} onChange={(e) => setName(prev => ({...prev, ans2: e.target.value}))} className="w-full p-3 border rounded-lg" placeholder="Answer" />
                            </Step>

                            <Step>
                                <h2>Question-3</h2>
                                <input value={form.ans3} onChange={(e) => setName(prev => ({...prev, ans3: e.target.value}))} className="w-full p-3 border rounded-lg" placeholder="Answer" />
                            </Step>
                            
                            <Step>
                                <h2>Almost Done!</h2>
                                <p>Review your information and join the DevSync community!</p>
                            </Step>
                        </Stepper>
                    </div>
                </div>

                {/* Modern Animated Logo Section */}
                <div id='logo' className='w-1/2 h-full flex flex-col justify-center items-center p-12 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden'>
                    {/* Dynamic Grid Background */}
                    <motion.div
                        className="absolute inset-0 opacity-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 2 }}
                    >
                        <div className="grid grid-cols-12 grid-rows-12 h-full w-full gap-2">
                            {[...Array(144)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-blue-500 rounded-sm"
                                    animate={{
                                        opacity: [0, 0.3, 0],
                                        scale: [0.8, 1, 0.8],
                                    }}
                                    transition={{
                                        duration: 2 + Math.random() * 3,
                                        repeat: Infinity,
                                        delay: Math.random() * 4,
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Main Logo Container */}
                    <motion.div
                        className="relative z-10 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                    >
                        {/* Modern Logo Symbol */}


                        {/* Brand Name - Minimal and Clean */}
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <motion.h1
                                className="text-5xl font-bold mb-3"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                <span className="text-white">Dev</span>
                                <span className="text-blue-400">Sync</span>
                            </motion.h1>

                            {/* Simple Underline */}
                            <motion.div
                                className="w-16 h-0.5 bg-blue-400 mx-auto rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "4rem" }}
                                transition={{ duration: 1, delay: 1.5 }}
                            />
                        </motion.div>

                        {/* Tagline with Typewriter Effect */}
                        <motion.div
                            className="text-center mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <motion.p className="text-xl text-gray-300 font-medium leading-relaxed">
                                "You bring the <motion.span
                                    className="text-emerald-400 font-semibold"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >passion</motion.span>,<br />
                                we'll give you the <motion.span
                                    className="text-blue-400 font-semibold"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                >direction</motion.span>"
                            </motion.p>
                        </motion.div>

                        {/* Tech Stack Indicators */}
                        <motion.div
                            className="flex justify-center space-x-6 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 2.5 }}
                        >
                            {['JS', 'TS', 'PY', 'GO'].map((tech, i) => (
                                <motion.div
                                    key={tech}
                                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center text-sm font-bold text-gray-300"
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "#1f2937",
                                        color: "#34d399"
                                    }}
                                    animate={{
                                        borderColor: [
                                            "#374151",
                                            "#34d399",
                                            "#3b82f6",
                                            "#374151"
                                        ]
                                    }}
                                    transition={{
                                        borderColor: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        }
                                    }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Call to Action Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 3 }}
                        >
                            <motion.button
                                className="group relative overflow-hidden px-8 py-4 rounded-2xl font-semibold text-white"
                                style={{
                                    background: "linear-gradient(45deg, #34d399, #3b82f6, #8b5cf6)"
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    boxShadow: [
                                        "0 0 30px rgba(52, 211, 153, 0.3)",
                                        "0 0 50px rgba(59, 130, 246, 0.4)",
                                        "0 0 30px rgba(52, 211, 153, 0.3)"
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Journey
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        🚀
                                    </motion.span>
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ x: [-100, 300] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default SignUp