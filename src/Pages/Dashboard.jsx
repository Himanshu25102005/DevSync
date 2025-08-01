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
            <section className='h-[80vh]'>
                <div id='hero' className="text-center rounded-xl w-full ml-8 px-15 py-50  flex justify-center font-semibold items-center flex-wrap text-6xl md:text-7xl" style={{ fontFamily: 'Fira Code, monospace' }}>
                    <span className="text-[#0e0f0f]">Organize.</span>
                    <RotatingText
                        texts={['Focus', 'Sprint', 'Build']}
                        mainClassName="px-2 sm:px-2 md:px-3 text-[#a259f7] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                    <span className="text-[#19191a]">. Deliver.</span>

                    <div className='text-center  font-semibold text-lg m-5 p-0'>
                        <p>A productivity cockpit for devs—tasks, timers, goals, synced in one sleek dashboard</p>
                    </div>
                </div>
            </section>

            {/* compass */}
            <section className='h-[75vh]' id='compass'>
                <div className='flex justify-center items-center'>
                    <motion.div
                        ref={compassRef}
                        initial={{ opacity: 0, y: 60 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.0, ease: 'easeOut' }}
                        className="
                            rounded-3xl 
                            w-full 
                            max-w-3xl 
                            min-w-[350px] 
                            p-12 
                            mr-16 
                            
                            flex flex-col justify-center
                        "
                        style={{ letterSpacing: '0.06em' }}
                    >
                        <h1 className='text-6xl text-center font-extrabold text-[#7c3aed] drop-shadow-lg mb-4 tracking-widest'>Compass</h1>
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
                    <div>
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
                    </div>
                </div>
            </section>
            {/* Codewatch */}
            <section className='h-[75vh]' id='CodeWatch'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className="mb-8 md:mb-0 md:mr-12">
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
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1.0, ease: 'easeOut' }}
                        className="
                            rounded-3xl 
                            w-full 
                            max-w-3xl 
                            min-w-[350px] 
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
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1.0, ease: 'easeOut' }}
                        className="
                            rounded-3xl 
                            w-full 
                            max-w-3xl 
                            min-w-[350px] 
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
                    <div className='ml-10'>
                        <TiltedCard
                            imageSrc="src\assets\codealong.png"
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="By DevSync"
                            containerHeight="340px"
                            containerWid h="340px"
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
                    </div>
                </div>
            </section>

        </main>
    )
}

export default dashboard