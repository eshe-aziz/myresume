import './index.css'

const Resume = () => {
    return (
        <div>
            <div className='my-resume'>
                <div className='col-1'>
                    
                    <div className='my-name'>
                    <img src="/images/eshe.png" className='my-image'/>
                    <h1 className='name'>ESHE HALEDH AZIZ</h1>
                    <h3 className='profession'><span style={{color: "#009199"}}>SOFTWARE DEVELOPER</span></h3>
                    </div>

                    <div className='contact'>
                    <h2>CONTACT</h2>
                    <div className='contact-item'>
                        <div className='contact-icon'>
                        <img src='/images/phone.png' />
                        </div>
                        <div className='contact-info'>
                        <h5 className='contact-weight'>+254 716 752 733</h5>
                        </div>
                    </div>
                    <div className='contact-item'>
                        <div className='contact-icon'>
                        <img src='/images/email.png' />
                        </div>
                        <div className='contact-info'>
                        <h5 className='contact-weight'>eshehaledhaziz@gmail.com</h5>
                        </div>
                    </div>
                    <div className='contact-item'>
                        <div className='contact-icon'>
                        <img src='/images/linkedin.png' />
                        </div>
                        <div className='contact-info'>
                        <h5 className='contact-weight'><a href="https://www.linkedin.com/in/eshe-aziz/">Eshe Aziz</a></h5>
                        </div>
                    </div>

                    <div className='education-section'>
                        <h2>EDUCATION</h2>
                        <h4>AkiraChix</h4>
                        <h5>codeHive- Diploma in Information Technology</h5>
                        <h5>(February-November, 2025)</h5>
                    </div>
                    </div>
                 
                </div>

                <div className='col-2'>
                    <h2>PROFILE SUMMARY</h2>
                    <h5 className='text-weight'>The infusion of artificial intelligence (AI) into the entrepreneurial landscape marks a transformative era where value creation through innovation <br></br>is not just an aspiration but a tangible reality. As a software developer with a keen interest in exploring AI's multifaceted role in empowering <br></br>entrepreneurial ventures, Eshe aims to optimize operational efficiencies, enhance customer experiences, and unlock new markets. Her goal is to <br></br>harness AI's potential to drive strategic decision-making, foster adaptive business models, and ultimately, catalyze sustainable growth in dynamic, <br></br>competitive markets.</h5>

                    <div className='skills-section'>
                        <h2>SKILLS</h2>
                        <ul className='skills-list'>
                        <li>Skilled in interacting with RESTful APIs to fetch, update, and manage data within web applications.</li>
                        <li>Skilled in creating sketches, low-fidelity and high-fidelity wireframes, mockups, and user interfaces using Figma, Adobe Illustrator, and Photoshop.</li>
                        <li>Knowledge of selecting and applying appropriate research methodologies, encompassing primary and secondary research, quantitative and <br></br>qualitative methods, and attitudinal and behavioral research approaches.</li>
                        <li>Ability to leverage popular frameworks like Django to architect scalable backend solutions, ensuring security and seamless API integrations.</li>
                        <li>Ability to demonstrate strong problem-solving skills, leveraging data structures for troubleshooting complex issues.</li>
                        <li>Experienced in implementing RecyclerViews and CardViews in Kotlin to create dynamic lists.</li>
                        <li>Skilled in defining and tracking key metrics to measure product success and iterate based on data-driven insights.</li>
                        <li>Ability to create user personas, design user flows, and develop customer journey maps to deeply understand user needs and behaviors based <br></br>on your feedback.</li>
                        </ul>
                    </div>

                    <div className='relevant-courses'>
                        <h2>RELEVANT COURSES</h2>
                        <ul className='course-list'>
                            <li>Frontend Web Development</li>
                            <li>Frontend Mobile Development</li>
                            <li>Backend Development</li>
                            <li>UI/UX Design</li>
                            <li>UX Research</li>
                            <li>Product Management</li>
                            <li>Data and Software Architecture</li>
                        </ul>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Resume