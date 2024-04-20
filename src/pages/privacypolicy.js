import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/Frame 1.png'
import { Link } from 'react-router-dom';
import '../styles/privacypolicy.css';
import TranslateIcon from '@mui/icons-material/Translate';
import landingImage from '../assets/landingpicture.png';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LandingAvatar1 from '../assets/landingAvatar.png';
import LandingAvatar2 from '../assets/landindAvatar1.png';
import LandingAvatar3 from '../assets/landindAvatar2.png';
import LandingAvatar4 from '../assets/landingAvatar3.png';
import pattern from '../assets/pattern.png'
import ScrollReveal from 'scrollreveal';
import CollapsibleBox from '../components/collapsableBox';
import PopupExample from '../components/Popup';
import section from '../assets/Section.png'
import joinforfree from '../assets/joinforfree.png'
import policyfooter from '../assets/policyfooter.png'
import goggleicon from '../assets/goggleicon.png'
import divicon from '../assets/divicon.png'


import "../styles/privacypolicy.css";
import leftIcon from "../assets/leftIcon.png";
import rightIcon from "../assets/rightIcon.png";
import sectionThreeIcon from "../assets/sectionThreeIcon.png";
import sectionThreeIconTwo from "../assets/sectionThreeIcontwo.png";
import section3icon from "../assets/section3icon.png";
import section3image from "../assets/section3image.png";
import section3image1 from "../assets/section3image1.png";

import LPtraining from "../assets/LPtraining.png";
import LPTestimonials from "../assets/LPTestimonials.png";
import patternLP from "../assets/patternLP.png";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";

const privacypolicy = () => {

    return (
        <>
            <div className='policyPageContainer'>
                <nav className="policynavbar">
                    <div className="policynavbar-logo"><img src={Logo} /></div>
                    <div className="policynavbar-links">
                        <a href="#home">Learn</a>
                        <a href="/resources">Resources</a>
                        <select className='selectone' >
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                        <a href="#link">Industries</a>
                        <select className='selectone'>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                        <a href="#link">About Us</a>
                        <select className='selectone'>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                        <a href="#link">Contact</a>
                    </div>
                    <div className="navbar-links-right">
                        <a href="/loginPage">Login</a>
                        <a href="/getStarted2" className='rightButton'>Join for FREE</a>
                        <TranslateIcon className='icons' />
                    </div>
                </nav>

                <div className='policysign'>
                <p className='update'><CreateOutlinedIcon className='icons' />LATEST UPDATE: April 8, 2024</p>
                <h1 className='policywrite'>Privacy Policy</h1>
                </div>
                <div className='policysection2'>
                    <div className='leftpolicysection2'>
                    <h4>TABLE OF CONTENT</h4>
                    <h5 className='word'>
                     ACCESS CONTROL POLICY <br/> <br/><br/>POLICY <br/><br/><br/> IMPLEMENTATION 
                    <br/><br/><br/>COMPLIANCE <br/><br/><br/> REVIEW AND REVISION <br/><br/><br/> FRAMEWORKS <br/><br/><br/> INCIDENT RESPONSE PLAN <br/><br/><br/> INCIDENT RESPONSE PROCEDURES 
                    <br/> <br/><br/>DATA PRIVACY POLICY <br/><br/><br/> WEB APPLICATION SECURITY <br/> <br/><br/>THREAT REPORT
                    </h5>
                    </div>
                    <div className='rightpolicysection2'>
                        <h6 className='word2'>
                        This ShieldEd, Inc. (“ShieldEd”, “us” or “our”) Privacy Policy (“Privacy Policy”) explains our practices,
                        defines our users’ (“you” or “your”) privacy options, and describes how your information is collected
                        and used by ShieldEd. This Privacy Policy, along with our <u>Terms of Service</u>, applies to your use of all
                        ShieldEd-branded products and services including your use of our website at <u>www.shielded.com </u> (“Site”), any services 
                        provided by ShieldEd any web or mobile applications we develop (collectively, our “Platform”). This Privacy Policy explains:
                        </h6>
                        <h6 className='quote'>
                        the information we collect about you;<br/>
                        how that information may be used;<br/>
                        with whom the information may be shared;<br/>
                        how you may update the information you provide us;<br/>
                        how you may contact us; and<br/>
                        your choices about the information.
                        </h6>
                        <h6 className='word2'>
                        By using the ShieldEd Platform, you agree to the terms of this Privacy Policy and our Terms of Service.
                        </h6>
                        <h1>Access Control Policy</h1>
                        <h3>Purpose</h3>
                        <h6 className='word2'>
                        The purpose of this Access Control Policy is to establish guidelines and procedures for controlling access to the ShieldEd web application. This policy ensures that only authorized individuals have access to sensitive information and resources within the system, thereby reducing the risk of unauthorized access, data breaches, and other security incidents. 
                        </h6>
                        <h3>Scope</h3>
                        <h6 className='word2'>
                        This policy applies to all employees, contractors, and third-party vendors involved in the development, deployment, maintenance, and operation of the cybersecurity awareness training web application. 
                        </h6>
                        <h1>Policy</h1>
                        <h3>User Access</h3>
                        <h6 className='word2'>
                        Access to the ShieldEd web application will be granted based on the principle of least privilege, ensuring that users have the minimum access necessary to perform their job responsibilities.<br/><br/> 
                        Users must authenticate using strong, unique credentials (e.g., username/password, multi-factor authentication) before accessing the application.<br/><br/>
                        User access privileges shall be reviewed and updated regularly to align with changes in job roles or responsibilities.
                        </h6>
                        <h3>Role-Based Access Control (RBAC) </h3>
                        <h6 className='word2'>
                        Access privileges within the web application shall be assigned based on predefined roles and responsibilities.<br/><br/>
                        Roles shall be defined according to job functions (e.g., administrators, trainers, trainees) and access permissions required to fulfill those functions.<br/><br/>
                        Access rights shall be assigned to roles rather than individual users to simplify access management and ensure consistency. 
                        </h6>
                        <h3>Access Control Mechanisms</h3>
                        <h6 className='word2'>
                        Access control mechanisms such as firewalls, intrusion detection/prevention systems, and encryption shall be implemented to safeguard the web application from unauthorized access and malicious activities. <br/><br/>
                        Access controls shall be enforced at both the network and application levels to provide defense-in-depth security. 
                        </h6>
                        <h3>Logging and Monitoring </h3>
                        <h6 className='word2'>
                        Access to the web application shall be logged and monitored to detect and respond to suspicious activities, unauthorized access attempts, and security incidents.<br/> <br/>
                        Logs shall include information such as user authentication attempts, access requests, and changes to access control settings. 
                        </h6>
                        <h1>Implementation</h1>
                        <h3>Development Team Responsibilities</h3>
                        <h6 className='word2'>
                        The development team is responsible for implementing access control mechanisms based on the principles outlined in this policy. <br/><br/>
                        Developers shall adhere to secure coding practices and integrate access controls directly into the web application codebase.<br/><br/>
                        Regular code reviews and security assessments shall be conducted to identify and remediate any access control vulnerabilities. 
                        </h6>
                        <h3>Security Team Responsibilities</h3>
                        <h6 className='word2'>
                        The security team is responsible for defining access control requirements, policies, and procedures in collaboration with the development team.<br/><br/>
                        Security analysts shall conduct periodic audits and assessments to ensure compliance with access control policies and identify areas for improvement.<br/> <br/> 
                        The security team shall provide guidance and support to the development team in implementing access control mechanisms effectively. 
                        </h6>
                        <h1>Compliance</h1>
                        <h6 className='word2'>
                        Non-compliance with this Access Control Policy may result in disciplinary action, including but not limited to, revocation of access privileges, termination of employment, or legal consequences as per organizational policies and applicable laws and regulations. 
                        </h6>
                        <h1>Review and Revision</h1>
                        <h6 className='word2'>
                        This Access Control Policy shall be reviewed and revised periodically to reflect changes in technology, business requirements, and regulatory obligations. Updates to the policy shall be communicated to all relevant stakeholders, and training on any policy changes shall be provided as necessary. 
                        </h6>
                        <h1>Frameworks</h1>
                        <h6 className='word2'>
                        In implementing this Access Control Policy, the development team should consider utilizing established frameworks such as: <br/> <br/>
                        OWASP Application Security Verification Standard (ASVS): Provides a basis for testing web application technical security controls and also provides developers with a list of requirements for secure development.  <br/> <br/>
                        NIST Cybersecurity Framework: Offers a framework of cybersecurity standards, guidelines, and best practices to manage and reduce cybersecurity risk.  <br/> <br/>
                        ISO/IEC 27001: Provides a framework for establishing, implementing, maintaining, and continually improving an information security management system (ISMS). <br/><br/>
                        OAuth 2.0 and OpenID Connect: Standards for delegated authorization and identity verification, which can be implemented to enhance authentication and access control mechanisms within the web application. <br/><br/>
                        By incorporating these frameworks into the development process, the team can ensure that the Access Control Policy aligns with industry best practices and standards, thereby enhancing the security posture of the cybersecurity awareness training web application. 
                        </h6>
                        <h1>Incident Response Plan </h1>
                        <h3>Introduction </h3>
                        <h6 className='word2'>
                        The ShieldEd Web App Incident Response Plan outlines the procedures and protocols to be followed in the event of a security incident affecting the web application. The primary goal of this plan is to minimize the impact of incidents, maintain the integrity and availability of the system, and facilitate a swift recovery process. 
                        </h6>
                        <h3>Incident Classification </h3>
                        <h4>Incident Types </h4>
                        <h6 className='word2'>
                        Level 1 (Low): Incidents with minimal impact and limited scope. <br/><br/>
                        Level 2 (Medium): Incidents with moderate impact requiring immediate attention and mitigation efforts. <br/><br/>
                        Level 3 (High): Critical incidents with severe impact on the confidentiality, integrity, or availability of the web application or its data. 
                        </h6>
                        <h3>Incident Response Team</h3>
                        <h4>Core Team Members </h4>
                        <h6 className='word2'>
                        Incident Response Coordinator: Oversees the incident response process and coordinates communication among team members. <br/><br/>
                        IT Security Analysts: Responsible for investigating and mitigating security incidents. <br/><br/>
                        System Administrators: Assist in implementing technical controls and restoring system functionality. <br/><br/>
                        Legal Counsel: Provides guidance on legal and regulatory requirements related to the incident. <br/><br/>
                        Communications Officer: Manages external communications with stakeholders, media, and regulatory bodies. <br/><br/>
                        </h6>
                        <h3>Additional Resources </h3>
                        <h6 className='word2'>
                        Development Team: Provides technical expertise and support in analyzing code vulnerabilities and implementing patches.<br/><br/>
                        External Consultants: Engaged as necessary for specialized expertise in incident response and forensic analysis. <br/><br/>
                        </h6>
                        <h3>Incident Response Procedures </h3>
                        <h4>Detection and Reporting </h4>
                        <h6 className='word2'>
                        Security incidents may be detected through monitoring systems, user reports, or automated alerts. <br/><br/>
                        All incidents, regardless of severity, must be reported to the Incident Response Coordinator immediately upon detection. 
                        </h6>
                        <h3> Initial Assessment </h3>
                        <h6 className='word2'>
                        The Incident Response Coordinator evaluates the reported incident to determine its severity and potential impact on the web application and its users. <br/><br/>
                        If necessary, the Incident Response Team is activated according to the severity level of the incident.<br/><br/>
                        </h6>
                        <h3>Containment and Mitigation </h3>
                        <h6 className='word2'>
                        The IT Security Analysts and System Administrators work together to contain the incident and prevent further damage.<br/><br/>
                        Containment measures may include isolating affected systems, blocking malicious traffic, or applying security patches.
                        </h6>
                        <h3>Investigation and Analysis </h3>
                        <h6 className='word2'>
                        The Incident Response Team conducts a thorough investigation to determine the root cause of the incident. <br/><br/>
                        Forensic analysis tools and techniques may be employed to gather evidence and identify the extent of the compromise. 
                        </h6>
                        <h3>Recovery and Restoration</h3>
                        <h6 className='word2'>
                        Once the incident is contained and analyzed, efforts are made to restore normal operations of the web application. <br/><br/>
                        Backups are utilized to recover any lost or corrupted data, and security controls are strengthened to prevent future incidents. 
                        </h6>
                        <h3>Communication and Notification </h3>
                        <h6 className='word2'>
                        External stakeholders, including customers, regulatory agencies, and law enforcement, are notified as required by applicable laws and regulations. <br/><br/>
                        Transparent communication is maintained throughout the incident response process to keep stakeholders informed of developments and mitigation efforts. 
                        </h6>
                        <h3>Post-Incident Review </h3>
                        <h6 className='word2'>
                        Following the resolution of the incident, a post-incident review meeting is conducted to evaluate the effectiveness of the response and identify areas for improvement. <br/><br/>
                        Lessons learned are documented, and recommendations for enhancing incident response procedures are implemented. 
                        </h6>
                        <h3>Training and Awareness </h3>
                        <h6 className='word2'>
                        Regular training sessions and awareness programs are conducted to educate employees on recognizing and responding to security incidents. <br/><br/>
                        Tabletop exercises and simulations are organized to test the effectiveness of the incident response plan and improve team readiness. 
                        </h6>
                        <h3>Compliance and Documentation </h3>
                        <h6 className='word2'>
                        All incident response activities are documented, including incident reports, investigation findings, and remediation actions taken. <br/><br/>
                        Documentation is maintained in accordance with regulatory requirements and organizational policies. 
                        </h6>
                        <h3>Plan Maintenance and Review </h3>
                        <h6 className='word2'>
                        The Incident Response Plan is reviewed and updated regularly to reflect changes in technology, business processes, and emerging threats. <br/><br/>
                        Updates to the plan are communicated to all relevant stakeholders, and training on any revisions is provided as necessary. 
                        </h6>
                        <h3>Conclusion </h3>
                        <h6 className='word2'>
                        By following the procedures outlined in this Incident Response Plan, the organization can effectively respond to security incidents affecting the cybersecurity awareness training web application, mitigate their impact, and minimize the risk of future incidents. Regular testing, training, and review ensure that the plan remains robust and responsive to evolving cybersecurity threats. 
                        </h6>
                        <h1>Data Privacy Policy</h1> 
                        <h3>Introduction </h3>
                        <h6 className='word2'>
                        Welcome to ShieldEd, the premier online platform for cybersecurity training and awareness. At ShieldEd, we are committed to protecting the privacy and security of your personal information. This Data Privacy Policy outlines how we collect, use, disclose, and protect your information when you interact with our website and use our services.
                        </h6>
                        <h3>Information We Collect </h3>
                        <h6 className='word2'>
                        Personal Information: When you register for an account on ShieldEd, we may collect personal information such as your name, Age, email address, job title, company name, and billing information. <br/><br/>
                        Usage Data: We may collect data about how you interact with our platform, including your browsing activity, courses accessed, progress, and performance. <br/><br/>
                        Device Information: We may collect information about the device you use to access our platform, such as your IP address, browser type, operating system, and device identifiers. 
                        </h6>
                        <h3>How We Use Your Information</h3>
                        <h6 className='word2'>
                        Providing Services: We use your information to provide and personalize our training courses, track your progress, and administer your account. <br/><br/>
                        Communication: We may use your contact information to send you updates, newsletters, marketing materials, and important notifications related to your account. <br/><br/>
                        Analytics: We analyze usage data to improve our services, optimize course content, and enhance the user experience. <br/><br/>
                        Security: We use collected information to detect and prevent fraudulent activity, abuse, and security incidents. 
                        </h6>
                        <h3>Data Sharing and Disclosure </h3>
                        <h6 className='word2'>
                        Third-Party Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services, such as hosting, analytics, payment processing, and customer support. <br/><br/>
                        Legal Compliance: We may disclose your information to comply with legal obligations, enforce our terms of service, or respond to lawful requests from law enforcement agencies or regulatory authorities. 
                        </h6>
                        <h3>Your Rights and Choices </h3>
                        <h6 className='word2'>
                        Access and Correction: You have the right to access and correct inaccuracies in your personal information stored on our platform. <br/><br/>
                        Opt-Out: You may opt-out of receiving marketing communications from us by following the unsubscribe instructions included in our emails or by contacting us directly. <br/><br/>
                        Data Deletion: You may request the deletion of your account and associated data by contacting our support team. However, please note that certain information may be retained for legal or legitimate business purposes. 
                        </h6>
                        <h3>Data Security </h3>
                        <h6 className='word2'>
                        Encryption: We employ industry-standard encryption protocols to protect your information during transmission and storage. <br/><br/>
                        Access Controls: Access to your personal information is restricted to authorized personnel who require it to perform their duties. <br/><br/>
                        Security Audits: We regularly conduct security audits and assessments to identify and address potential vulnerabilities in our systems. 
                        </h6>
                        <h3>Data Retention</h3>
                        <h6 className='word2'>
                        We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law or justified by our legitimate business interests. 
                        </h6>
                        <h3>Updates to this Policy </h3>
                        <h6 className='word2'>
                        We may update this Data Privacy Policy occasionally to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website or by other means as required by law.  
                       </h6>
                        <h3>Contact Us </h3>
                        <h6 className='word2'>
                        If you have any questions, concerns, or requests regarding this Data Privacy Policy or our data practices, please contact us at privacy@womentechsters.org 
                        </h6>
                        <h6 className='word2'>
                        Thank you for entrusting ShieldEd with your cybersecurity training needs. We are committed to safeguarding your privacy and providing you with a secure and valuable learning experience. 
                        </h6>
                        <h1>Web Application Security</h1>
                        <h3>Threat Report </h3>
                        <h6 className='word2'>
                        Introduction: ShieldEd Training Web Application is a critical component of the educational ecosystem, providing users with access to valuable training resources and learning opportunities. However, as with any web application, ShieldEd is susceptible to various security vulnerabilities and threats that could compromise the confidentiality, integrity, and availability of its data and functionalities. In alignment with the OWASP (Open Web Application Security Project) Top Ten Web Application Security Risks, this report aims to identify and assess potential vulnerabilities within ShieldEd, enabling stakeholders to prioritize and implement appropriate security measures to mitigate these risks effectively. By proactively addressing these vulnerabilities, ShieldEd can bolster its defenses against common web application security threats and ensure a secure and resilient learning environment for its users.<br/> 
                        Cross-Site Scripting (XSS) <br/>
                        Threat: Malicious scripts injected into the web application, leading to the execution of unauthorized actions in users' browsers. <br/>
                        Vulnerability: Lack of input validation and output encoding in the application's code. <br/>                        Mitigation: Implement strict input validation and output encoding, use security libraries/frameworks like OWASP ESAPI. 
                        </h6>
                        <h3>SQL Injection</h3>
                        <h6 className='word2'>
                        Threat: Attackers manipulate SQL queries through input fields to gain unauthorized access to the application's database. <br/>
                        Vulnerability: Poorly constructed SQL queries without parameterization. <br/>
                        Mitigation: Use parameterized queries or ORM frameworks, enforce least privilege principles, and regularly update database systems. <br/>
                        </h6>
                        <h3>Cross-Site Request Forgery (CSRF):</h3>
                        <h6 className='word2'> 
                        Threat: Exploiting the trust of authenticated users to perform unintended actions on behalf of them. <br/>
                        Vulnerability: Lack of anti-CSRF tokens or validation of origin in sensitive requests. <br/>
                        Mitigation: Implement anti-CSRF tokens, validate requests' origins, and utilize Same site cookies. 
                        </h6>
                        <h3>Authentication and Session Management Issues </h3>
                        <h6 className='word2'>
                        Threat: Weak or predictable authentication credentials, session fixation, session hijacking. <br/>
                        Vulnerability: Insecure storage of passwords, lack of session expiration, inadequate session token management.<br/> 
                        Mitigation: Enforce strong password policies, use multi-factor authentication, regularly rotate session tokens, implement secure session handling practices. 
                        </h6>
                        <h3>Insecure Direct Object References (IDOR)</h3>
                        <h6 className='word2'>
                        Threat: Unauthorized access to restricted resources by manipulating object references in URLs or parameters. <br/>
                        Vulnerability: Insufficient access controls and direct exposure of internal object references. <br/>
                        Mitigation: Implement proper access controls, use indirect references, and validate user permissions at every access point. 
                        </h6>
                        <h3>Insufficient Transport Layer Protection</h3>
                        <h6 className='word2'>
                        Threat: Man-in-the-middle attacks, eavesdropping, and data tampering during data transmission. <br/>
                        Vulnerability: Lack of HTTPS implementation, weak SSL/TLS configurations. <br/>
                        Mitigation: Enable HTTPS for all communications, use strong SSL/TLS configurations, implement HSTS headers, and regularly update SSL certificates. 
                        </h6>
                        <h3>Security Misconfiguration </h3>
                        <h6 className='word2'>
                        Threat: Exposing sensitive information, default credentials, or unnecessary features due to misconfigured settings. <br/>
                        Vulnerability: Improper server configurations, default accounts/passwords left unchanged, unnecessary services enabled. <br/>                                                                                                                                                                                                                                    
                        Mitigation: Regularly audit and update configurations, follow security best practices, remove unnecessary features, and restrict access to configuration files. 
                        </h6>
                        <h3>Denial of Service (DoS) and Distributed Denial of Service (DDoS) Attacks </h3>
                        <h6 className='word2'>
                        Threat: Overwhelming the application with excessive traffic or resource consumption, rendering it inaccessible to legitimate users. <br/>
                        Vulnerability: Lack of rate limiting, resource exhaustion, and vulnerability to known DoS/DDoS attack vectors. <br/>
                        Mitigation: Implement rate limiting, use web application firewalls (WAFs), employ DDoS protection services, and maintain server scalability. 
                        </h6>
                        <h3>Conclusion</h3>
                        <h6 className='word2'>
                        Shield Web Application faces various potential security threats and vulnerabilities, ranging from common web application vulnerabilities like XSS and SQL injection to more sophisticated attacks such as CSRF and DoS/DDoS. To mitigate these risks, it's crucial to implement a comprehensive security strategy that includes secure coding practices, robust authentication mechanisms, proper access controls, regular security audits, and staying updated on emerging threats and security patches. By proactively addressing these issues, ShieldEd Web Application can enhance its resilience against potential security breaches and safeguard its users' data and privacy. 
                        </h6>
                    </div>
                    <h6>
                    
                    </h6>
                </div>
                <div className='joinforfree'>
                   <div className='leftboxjoinforfree'>
                    <h1>Start learning for free <br/> today</h1>
                    <h6>Join over 3 million enthusiastic and over 1000 SME companies <br/> improving their cybersecurity capabiliy with ShieldEd</h6>
                   </div>
                   <div className='rightboxjoinforfree'> 
                   <h1>create a free account</h1>
                   <div className='leftLinkButtonBox'>
                   <input type='email' placeholder='name@email.com' />
                    <Link>Create a Free Account</Link>
                    </div>
                    <div className='signup'>
                        <h4 className='or'>or sign up with </h4>
                        <img src={goggleicon} className='goggleicon'/>
                    </div>
                    <div className='signin'>
                    <h4>Sign in </h4>
                    <img src={divicon} className='divicon'/>
                    </div>
                   </div>
                </div>
                
                 {/* ==THIS IS THE FOOTER== */}
                 <div className='footerContainer' style={{ backgroundImage: `url(${pattern})` }}>
                    <div className='linkBox'>
                        <div className='leftLinkBox'>
                            <img src={Logo} />
                            <h5 className='footerp'>
                                Be the first to receive all the recent updates, <br />
                                articles, and valuable materials.
                            </h5>
                            <div className='leftLinkButtonBox'>
                                <input type='email' placeholder='Email Address' />
                                <Link>Subscribe</Link>
                            </div>
                        </div>

                        <div className='rightLinkBox'>
                            <div className='rightListBox'>
                                <ul>
                                    <li><span>Industries</span></li>
                                    <li>Financial Services</li>
                                    <li>Government</li>
                                    <li>Enterprises</li>
                                    <li>Remote Workers</li>
                                    <li>Education</li>
                                    <li>Healthcare</li>
                                </ul>
                            </div>

                            <div className='rightListBox'>
                                <ul>
                                    <li><span>Resources</span></li>
                                    <li>Blog</li>
                                    <li>News Room</li>
                                    <li>Family Crash Course</li>
                                    <li>Cybernary</li>
                                    <li>Events and Webinars</li>
                                    <li>Free Awarness Posters</li>
                                </ul>
                            </div>

                            <div className='rightListBox'>
                                <ul>
                                    <li><span>More</span></li>
                                    <li>About Us</li>
                                    <li>SecureSeniors Initiative</li>
                                    <li>Affiliate Program</li>
                                    <li>Community</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='lowerFooterText'>
                        <div className='lowerFooterLeft'>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Accessibility Statement</li>
                        </div>
                        <div className='lowerFooterRight'>
                            <li>&copy; 2024 ShieldEd. All rights reserved.</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default privacypolicy;