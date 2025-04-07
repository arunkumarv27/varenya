/* eslint-disable */
import React, { useState } from "react";

export default function NavContentPartnership({ slug }: { slug: string }) {
    const [activeTab, setActiveTab] = useState("solutions");


    const contentBySlug = {
        "migration-planning-and-strategy": {
            solutions: "At Varenya, ."
        },
        "accenture": {
            solutions: "Our partnership with Accenture enables us to deliver comprehensive digital solutions that drive innovation and efficiency. Together, we leverage advanced technologies, including AI and cloud computing, to help clients transform their business models and improve customer experiences in a rapidly evolving marketplace."
        },
        "deloitte": {
            solutions: "In partnership with Deloitte, Varenya provides strategic consulting services that align technology with business objectives. Our collaboration focuses on digital transformation, operational efficiency, and risk management, enabling organizations to navigate change and achieve sustainable growth."
        },
        "github": {
            solutions: "As a GitHub partner, we support software development teams in leveraging the platform's collaborative features for version control and code management. Varenya helps organizations integrate GitHub into their development workflows, promoting efficiency, collaboration, and innovation in software projects."
        },
        "microsoft": {
            solutions: "As a Microsoft partner, Varenya leverages the power of Microsoft Azure to deliver scalable cloud solutions that drive business transformation. Our collaboration enables us to provide clients with robust enterprise solutions, including data analytics, AI, and machine learning capabilities that enhance operational efficiency and improve decision-making."
        },
        "amazon-web-services-aws": {
            solutions: "Through our partnership with AWS, we offer clients access to a comprehensive suite of cloud services that enable agility and scalability. Varenya utilizes AWS solutions for cloud migration, storage, and machine learning, helping businesses innovate and reduce time-to-market while maintaining the highest standards of security and compliance."
        },
        "docker": {
            solutions: "Our collaboration with Docker allows us to provide containerization solutions that enhance application development and deployment. Varenya leverages Docker's technology to help organizations improve scalability, portability, and resource efficiency, enabling faster and more reliable software delivery."
        },
        "google-cloud": {
            solutions: "Our partnership with Google Cloud allows us to deliver advanced data analytics and machine learning solutions. Varenya integrates Google's powerful cloud tools to help clients harness their data, improve customer experiences, and enhance operational efficiency, driving growth and innovation in their respective industries."
        },
        "atlassian": {
            solutions: "Through our partnership with Atlassian, we help teams collaborate more effectively using tools like Jira, Confluence, and Trello. Varenya leverages these platforms to enhance project management, improve communication, and streamline workflows, enabling organizations to achieve their goals efficiently."
        },
        "equinix": {
            solutions: "Our collaboration with Equinix enables us to provide clients with secure and reliable data center solutions. Varenya utilizes Equinix's global interconnection platform to enhance network performance, improve connectivity, and support hybrid cloud strategies, driving operational efficiency for organizations."
        },
        "jenkins": {
            solutions: "Through our partnership with Jenkins, we enable continuous integration and continuous delivery (CI/CD) for our clients. Varenya utilizes Jenkins' automation capabilities to streamline software development processes, enhance deployment efficiency, and improve product quality."
        }
    };


    const cleanSlug = slug ? slug.replace(/\/$/, "").toLowerCase() : "";

    const currentContent = contentBySlug[cleanSlug as keyof typeof contentBySlug] || {
        solutions: "Solutions not available for this service."
    };

    const tabContent = {
        solutions: (
            <div style={{ opacity: 1, transition: "opacity 0.5s ease" }}>
                {currentContent.solutions.split('\n\n').map((paragraph, index) => (
                    <p 
                        key={index} 
                        style={{ 
                            marginBottom: "16px", 
                            fontSize: "18px",
                            color: "#444"
                        }}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        ),
    };


    const getServiceName = () => {
        if (!cleanSlug) return "Partnership";
        
        const parts = cleanSlug.split('-');
        return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    };


    const bannerStyles = {
        backgroundImage: "url('/aboutus.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "28px",
        position: "relative",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderBottom: "3px solid #007bff"
    };

    const containerStyles = {
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        backgroundColor: "#ffffff",
        color: "#333",
        lineHeight: 1.6
    };

    const sectionStyles = {
        padding: "40px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
        borderRadius: "8px",
        backgroundColor: "#fff"
    };

    const tabsContainerStyles = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        borderBottom: "2px solid #eaeaea",
        backgroundColor: "#f8f9fa"
    };

    const contentStyles = {
        padding: "40px 30px",
        maxWidth: "900px",
        margin: "0 auto",
        fontSize: "18px",
        lineHeight: "1.6",
        color: "#444",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: "8px",
        backgroundColor: "#fff",
        transition: "all 0.3s ease"
    };

    return (
        <div style={containerStyles}>
            
            <section style={{ ...bannerStyles, position: "relative" as const, textAlign: "center" as const }} aria-label="Banner">
                <div>
                    <h1 style={{ marginBottom: "8px", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}>
                        {getServiceName()}
                    </h1>
                    <p style={{ fontSize: "16px" }}>
                        Comprehensive IT services tailored for your business success
                    </p>
                </div>
            </section>

            
            {/* <section style={sectionStyles} aria-label="Overview">
                <h2 style={{ 
                    borderBottom: "2px solid #007bff", 
                    paddingBottom: "10px", 
                    color: "#007bff",
                    fontSize: "24px",
                    fontWeight: "600"
                }}>
                    Overview
                </h2>
            </section> */}

            
            {/* <nav style={tabsContainerStyles} aria-label="Content Navigation">
                {[
                    { key: "solutions", label: "Our Solutions" },
                ].map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        style={getTabButtonStyles(activeTab === tab.key)}
                        aria-selected={activeTab === tab.key}
                        role="tab"
                        onMouseOver={(e) => {
                            if (activeTab !== tab.key) {
                                e.target.style.backgroundColor = "rgba(0, 123, 255, 0.1)";
                            }
                        }}
                        onMouseOut={(e) => {
                            if (activeTab !== tab.key) {
                                e.target.style.backgroundColor = "transparent";
                            }
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav> */}

            
            <section style={contentStyles} aria-label={`${activeTab} Content`}>
                {tabContent[activeTab as keyof typeof tabContent]}
            </section>
        </div>
    );
}