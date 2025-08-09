import React from 'react'
import RotatingText from '../animations/RotatingText'
import TiltedCard from '../components/TiltedCard'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';






const dashboard = () => {
    const compassRef = useRef(null);
    const isInView = useInView(compassRef, { once: true, margin: '-100px' });
    return (
        <main className="pt-40">
            {/* Hero Section */}
            <section className='h-[80vh]'>
                <motion.div
                    id='hero'
                    className="text-center rounded-xl w-full ml-8 px-15 py-80 flex justify-center font-semibold items-center flex-wrap text-6xl md:text-7xl relative overflow-hidden"   
                    style={{ fontFamily: 'Fira Code, monospace' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    {/* Subtle animated background waves */}
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        style={{
                            background: "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)"
                        }}
                        animate={{
                            background: [
                                "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)",
                                "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)",
                                "radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.15) 0%, transparent 50%)",
                                "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)"
                            ]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Organic flowing elements that blend with background */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)"
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)"
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                    <motion.div
                        className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%)"
                        }}
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.25, 0.55, 0.25]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />

                    {/* Subtle ambient glow behind text */}
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.03) 0%, transparent 70%)"
                        }}
                        animate={{
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <motion.span
                        className="text-[#0e0f0f] relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                        whileHover={{
                            y: -2,
                            transition: { duration: 0.3 }
                        }}
                    >
                        Organize.
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <RotatingText
                            texts={['Focus', 'Sprint', 'Build']}
                            mainClassName="px-2 sm:px-2 md:px-3 text-[#a259f7] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg relative z-10"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </motion.div>

                    <motion.span
                        className="text-[#19191a] relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 1.1 }}
                        whileHover={{
                            y: -2,
                            transition: { duration: 0.3 }
                        }}
                    >
                        . Deliver.
                    </motion.span>

                    <motion.div
                        className='text-center font-semibold text-lg m-5 p-0 relative z-10'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 1.4 }}
                        whileHover={{
                            y: -1,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <p className="text-[#4b5563]">
                            A productivity cockpit for devs—tasks, timers, goals, synced in one sleek dashboard
                        </p>
                    </motion.div>

                    {/* Subtle breathing effect at the bottom */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-px"
                        style={{
                            background: "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), transparent)"
                        }}
                        animate={{
                            opacity: [0.2, 0.6, 0.2],
                            scaleX: [0.8, 1.2, 0.8]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </section>
            {/* compass */}
            <section className='h-[75vh]' id='compass'>
                <div className='flex justify-center items-center'>
                    <motion.div
                        ref={compassRef}
                        initial={{ opacity: 0, y: 80, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, type: 'spring', bounce: 0.25 }}
                        className="
                            rounded-3xl 
                            w-full
                             max-w-4xl 
                            min-w-[360px]
                            p-12 
                            mr-16 
                            
                            flex flex-col justify-center
                        "
                        style={{ letterSpacing: '0.06em' }}
                    >
                        <h1 className='text-5xl md:text-6xl text-center md:text-left font-extrabold text-[#7c3aed] drop-shadow-lg mb-4 tracking-widest'>Compass</h1>
                        <p className='mt-5 text-2xl tracking-wide text-[#3b0764] font-medium mb-6'>Like a real compass for developers—guiding you with personalized roadmaps tailored to your skills and goals, keeping your learning journey on the right path.</p>
                        <ul className='text-2xl tracking-wider space-y-3 mt-4'>
                            <li className="flex items-center gap-3 font-semibold text-[#a259f7]">
                                <span className="inline-block w-4 h-4 bg-[#a259f7] rounded-full mr-2 animate-pulse"></span>
                                Personalized Roadmaps
                            </li>
                            <li className="flex items-center gap-3 font-semibold text-[#7c3aed]">
                                <span className="inline-block w-4 h-4 bg-[#7c3aed] rounded-full mr-2 animate-bounce"></span>
                                Modular & Trackable
                            </li>
                            <li className="flex items-center gap-3 font-semibold text-[#3b0764]">
                                <span className="inline-block w-4 h-4 bg-[#3b0764] rounded-full mr-2 animate-pulse"></span>
                                Integrated Learning Resources
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 60, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, type: 'spring', bounce: 0.2, delay: 0.2 }}
                    >
                        <TiltedCard
                            imageSrc="src\assets\compass.png"
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="By DevSync"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="290px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text text-sm text-gray-200 ml-10 mt-2">
                                    Compass
                                </p>
                            }
                        />
                    </motion.div>
                </div>
            </section>
            {/* Codewatch */}
            <section className='h-[75vh]' id='CodeWatch'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -60, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, type: 'spring', bounce: 0.2 }}
                        className="mb-8 md:mb-0 md:mr-12"
                    >
                        <TiltedCard
                            imageSrc="src\assets\codewatch.png"
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="By DevSync"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="290px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text text-sm text-gray-200 ml-10 mt-2">
                                    CodeWatch
                                </p>
                            }
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 80, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, type: 'spring', bounce: 0.25, delay: 0.2 }}
                        className="
                            rounded-3xl 
                            w-full 
                            max-w-4xl 
                            min-w-[360px]
                            p-10 
                           
                            flex flex-col justify-center
                        "
                        style={{ letterSpacing: '0.04em' }}
                    >
                        <h1 className='text-5xl md:text-6xl text-center md:text-left font-extrabold text-[#23272f] mb-4 tracking-widest'>CodeWatch</h1>
                        <p className='mt-3 text-xl md:text-2xl tracking-wide text-[#4b5563] font-medium mb-6'>Smartly curates the most relevant coding videos from YouTube based on your current roadmap—so you can skip the search and dive straight into learning.</p>
                        <ul className='text-xl md:text-2xl tracking-wider space-y-3 mt-4'>
                            <li className="flex items-center gap-3 font-semibold text-[#6366f1]">
                                <span className="inline-block w-3 h-3 bg-[#6366f1] rounded-full mr-2 animate-pulse"></span>
                                Curated Content
                            </li>
                            <li className="flex items-center gap-3 font-semibold text-[#818cf8]">
                                <span className="inline-block w-3 h-3 bg-[#818cf8] rounded-full mr-2 animate-bounce"></span>
                                Save Time
                            </li>
                            <li className="flex items-center gap-3 font-semibold text-[#64748b]">
                                <span className="inline-block w-3 h-3 bg-[#64748b] rounded-full mr-2 animate-pulse"></span>
                                Focused Learning
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>
            {/* Codealong */}
            <section className='h-[75vh]' id='CodeAlong'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 80, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, type: 'spring', bounce: 0.25 }}
                        className="
                            rounded-3xl 
                            w-full 
                            max-w-4xl 
                            min-w-[360px]
                            p-10 
                            
                            
                            flex flex-col justify-center
                            md:mr-15
                            mb-8 md:mb-0
                        "
                        style={{ letterSpacing: '0.05em' }}
                    >
                        <h1 className='text-5xl md:text-6xl text-center md:text-left font-extrabold text-[#0e7490] mb-4 tracking-widest'>CodeAlong</h1>
                        <p className='mt-3 text-xl md:text-2xl tracking-wide text-[#334155] font-medium mb-6'>A real-time code editor designed to let developers write and practice code while watching video tutorials side-by-side—bridging theory and hands-on execution effortlessly.</p>
                        <ul className='text-xl md:text-2xl tracking-wider space-y-3 mt-4'>
                            <li className="flex items-center gap-3 font-semibold text-[#14b8a6]">
                                <span className="inline-block w-3 h-3 bg-[#14b8a6] rounded-full mr-2 animate-pulse"></span>
                                No tab switching
                            </li>
                            <li className="flex items-center gap-3 font-semibold text-[#6366f1]">
                                <span className="inline-block w-3 h-3 bg-[#6366f1] rounded-full mr-2 animate-bounce"></span>
                                Learn, Write, and Run
                            </li>
                            <li className="flex items-center gap-3 font-semibold text-[#0e7490]">
                                <span className="inline-block w-3 h-3 bg-[#0e7490] rounded-full mr-2 animate-pulse"></span>
                                Learn Along
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 60, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, type: 'spring', bounce: 0.2, delay: 0.2 }}
                        className='ml-10'
                    >
                        <TiltedCard
                            imageSrc="src\assets\codealong.png"
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="By DevSync"
                            containerHeight="340px"
                            containerWidth="340px"
                            imageHeight="320px"
                            imageWidth="400px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text text-sm text-gray-200 ml-10 mt-2">
                                    CodeAlong
                                </p>
                            }
                        />
                    </motion.div>
                </div>
            </section>
            {/* and many more */}
            <section className='h-[75vh]' id='ManyMore'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -60, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, type: 'spring', bounce: 0.2 }}
                        className="mb-8 md:mb-0 md:mr-12"
                    >
                        <TiltedCard
                            imageSrc="src\assets\manyMore.png"
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="By DevSync"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="290px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text text-sm text-gray-200 ml-10 mt-2">
                                    And Many More
                                </p>
                            }
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 80, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, type: 'spring', bounce: 0.25, delay: 0.2 }}
                        className="
                            rounded-3xl 
                            w-full 
                            max-w-4xl 
                            min-w-[360px]
                            p-12 
                            flex flex-col justify-center
                        "
                        style={{ letterSpacing: '0.05em' }}
                    >
                        <h1 className='text-5xl md:text-6xl text-center md:text-left font-extrabold text-[#6b7280] mb-4 tracking-widest'>And Many More...</h1>
                        <p className='mt-3 text-xl md:text-2xl tracking-wide text-[#4b5563] font-medium mb-6'>Always leveling up! DevSync comes packed with powerful tools like a built-in Pomodoro timer (FocusSync), a smart To-Do List, and an integrated AI Assistant — all designed to keep you focused, organized, and supported on your learning journey</p>
                        <ul className='text-xl md:text-2xl tracking-wider space-y-3 mt-4'>
                            <li className="flex items-center gap-3 font-semibold text-[#8b5cf6]">
                                <span className="inline-block w-3 h-3 bg-[#8b5cf6] rounded-full mr-2 animate-pulse"></span>
                                Boost focus & retention
                            </li>
                            <li className="flex items-center gap-3 font-semibold text-[#06b6d4]">
                                <span className="inline-block w-3 h-3 bg-[#06b6d4] rounded-full mr-2 animate-bounce"></span>
                                Stay organized
                            </li>
                            <li className="flex items-center gap-3 font-semibold text-[#10b981]">
                                <span className="inline-block w-3 h-3 bg-[#10b981] rounded-full mr-2 animate-pulse"></span>
                                Learn smarter, not harder
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>
            {/* How we Work */}
            <section className='h-[75vh] mb-20' id='Process'>
                <motion.div
                    className='text-center mb-12'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <motion.h2
                        className='text-5xl md:text-6xl font-extrabold mb-4'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            The Process
                        </span>
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.p
                        className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Less chaos, more clarity. Here's how we work.
                    </motion.p>
                </motion.div>

                <div className="relative w-full h-[500px] flex justify-center items-center overflow-hidden">
                    {/* Modern Roadmap Background */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />

                    {/* Connection Line */}
                    <motion.div
                        className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    />

                    {/* Step Indicators */}
                    <div className="absolute top-1/2 left-0 w-full flex justify-between items-center px-8">
                        {[1, 2, 3, 4].map((step, index) => (
                            <motion.div
                                key={step}
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                            >
                                <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-lg border-2 border-white transform -translate-y-2"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Steps Container */}
                    <div className="relative w-full h-full flex items-center justify-between px-12">
                        {/* Step 1: Define Goals */}
                        <motion.div
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-64 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                                        <span className="text-2xl">🎯</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">Define Goals</h3>
                                        <p className="text-sm text-purple-600 font-medium">Step 1</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Set clear learning objectives and milestones for your development journey with smart goal tracking.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 2: Use Compass */}
                        <motion.div
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-64 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                                        <span className="text-2xl">🧭</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">Use Compass</h3>
                                        <p className="text-sm text-purple-600 font-medium">Step 2</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Navigate personalized learning roadmaps tailored to your skills and career goals.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 3: CodeWatch */}
                        <motion.div
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-64 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                                        <span className="text-2xl">📺</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">CodeWatch</h3>
                                        <p className="text-sm text-purple-600 font-medium">Step 3</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Curated coding videos and tutorials that match your current learning roadmap.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 4: StreakSync */}
                        <motion.div
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-64 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                                        <span className="text-2xl">🔥</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">StreakSync</h3>
                                        <p className="text-sm text-purple-600 font-medium">Step 4</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Build consistent learning habits with streak tracking and motivation systems.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Floating Elements for Dev Aesthetic */}
                    <motion.div
                        className="absolute top-4 right-8 text-xs text-gray-400 font-mono"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        <span className="text-purple-500">const</span> journey = <span className="text-blue-500">'success'</span>;
                    </motion.div>

                    <motion.div
                        className="absolute bottom-4 left-8 text-xs text-gray-400 font-mono"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 2.2 }}
                    >
                        <span className="text-green-500">function</span> <span className="text-purple-500">learn</span>() {'{'}
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-500">return</span> <span className="text-orange-500">'growth'</span>;
                        <br />
                        {'}'}
                    </motion.div>
                </div>

                {/* Get Started CTA */}

            </section>

            {/* End Section */}
            <section className='h-[80vh] flex items-center justify-center relative overflow-hidden'>
                {/* Background Elements */}
                <motion.div
                    className="absolute inset-0 "
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                />



                {/* Main Content */}
                <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                    {/* Title */}
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        The difference between a dev and a great dev?{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Direction.
                        </span>
                        <br />
                        <span className="text-2xl md:text-3xl font-semibold text-gray-700">
                            DevSync gives you that.
                        </span>
                    </motion.h2>

                    {/* Join DevSync Button */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.button
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg border-0"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🔘 Join DevSync
                        </motion.button>
                    </motion.div>

                    {/* Login Button */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.button
                            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg border border-purple-200 hover:border-purple-300 transition-all duration-200"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Login
                        </motion.button>
                    </motion.div>

                    {/* Tagline */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <motion.div
                            className="w-24 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-4 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "6rem" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                        />
                        <motion.p
                            className="text-lg md:text-xl text-gray-600 font-medium italic"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            The productivity companion built for self-taught and striving developers.
                        </motion.p>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                        className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-30"
                        initial={{ scale: 0, rotate: 0 }}
                        whileInView={{ scale: 1, rotate: 360 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.div
                        className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30"
                        initial={{ scale: 0, rotate: 0 }}
                        whileInView={{ scale: 1, rotate: -360 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.7 }}
                    />
                </div>
            </section>
        </main>
    )
}

export default dashboard