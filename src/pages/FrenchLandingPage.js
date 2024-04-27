import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/Frame 1.png'
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import TranslateIcon from '@mui/icons-material/Translate';
import landingImage from '../assets/landingpicture.png';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LandingAvatar1 from '../assets/landingAvatar.png';
import LandingAvatar2 from '../assets/landindAvatar1.png';
import LandingAvatar3 from '../assets/landindAvatar2.png';
import LandingAvatar4 from '../assets/landingAvatar3.png';
import pattern from '../assets/pattern.png'
import ScrollReveal from 'scrollreveal';
import CollapsibleBox from '../components/collapsableBox';


import "../styles/LandingPage.css";
import leftIcon from "../assets/leftIcon.png";
import rightIcon from "../assets/rightIcon.png";
import sectionThreeIconTwo from "../assets/sectionThreeIcontwo.png";
import section3icon from "../assets/section3icon.png";
import section3image from "../assets/section3image.png";
import section3image1 from "../assets/section3image1.png";

import LPtraining from "../assets/LPtraining.png";
import LPTestimonials from "../assets/LPTestimonials.png";
import patternLP from "../assets/patternLP.png";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import communitySection from "../assets/Testimonials.png";
import Industries from '../components/Industries';
import LanguageComponent from '../components/LanguageComponent';
import Resources from '../components/Resources';
import About from '../components/About';
import FrenchLanguageComponent from '../components/FrenchLanguageComponent';

const FrenchLandingPage = () => {

    const [showIndAlert, setShowIndAlert] = useState(false);
    const [showLanguageAlert, setShowLanguageAlert] = useState(false);
    const [showResourceAlert, setShowResourceAlert] = useState(false);
    const [showAboutAlert, setShowAboutAlert] = useState(false);

    const handleVerifyClickL = () => {
        setShowLanguageAlert(true);
    }

    const handleCloseLanguage = () => {
        setShowLanguageAlert(false);
    }

    const handleVerifyClickR = () => {
        setShowResourceAlert(true);
    }

    const handleCLoseResource = () => {
        setShowResourceAlert(false);
    }

    const handleVerifyClickA = () => {
        setShowAboutAlert(true);
    }

    const handleCloseAbout = () => {
        setShowAboutAlert(false);
    }

    const handleVerifyClickI = () => {
        setShowIndAlert(true);
    }

    const handleCloseInd = () => {
        setShowIndAlert(false); // Reset the state back to false when the alert is closed
    };


    const revealRef = useRef(null);

    useEffect(() => {
        // Initialize ScrollReveal when the component mounts
        ScrollReveal().reveal(revealRef.current, {
            duration: 10000,
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)', // Optional easing function
        });
    }, []);



    const [text, setText] = useState('');
    const fullText = 'Restez en sécurité . Restez informé';

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
        return () => clearInterval(typingInterval);
    }, [fullText]);


    return (
        <>

            <div className='landingPageContainer'>

                {/* ==THIS IS THE NAVBAR FOR THE LANDING PAGE== */}
                <nav className="landingnavbar">
                    <div className="landingnavbar-logo"><img src={Logo} /></div>
                    <div className="landingnavbar-links">
                        <a href="#home">Maison</a>
                        <Link onClick={handleVerifyClickR}>Ressources </Link>
                        {/* <select className='selectone' >
                            <option></option>
                            <option></option>
                            <option></option>
                        </select> */}
                        <Link onClick={handleVerifyClickI}>les industries</Link>
                        {/* <select className='selectone'>
                            <option></option>
                        </select> */}
                        <Link onClick={handleVerifyClickA}>À propos de nous</Link>
                        {/* <select className='selectone'>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select> */}
                        <a href="#link">Contact</a>
                    </div>
                    <div className="navbar-links-right">
                        <a href="/loginPage">Se connecter</a>
                        <a href="/getStarted2" className='rightButton'>Rejoignez gratuitement</a>
                        <TranslateIcon className='icons' onClick={handleVerifyClickL} />
                    </div>
                </nav>

                {/* ==THIS IS THE HOME SECTION OF THE LANDING PAGE== */}
                <div className='landingHome'>

                    <div className='landingHomeTextBox'>
                        <h1>{text}</h1>
                        <div ref={revealRef}>
                            <h1>La manière amusante</h1>
                        </div>

                        <p>
                            Percez les secrets de la cybersécurité grâce à l'interactivité
                            des expériences d’apprentissage, des défis engageants et des conseils d’experts.
                        </p>
                        <div className='buttonBox'>
                            <div className='leftButton'><Link to='/challenges'>Commencer à apprendre</Link> <SchoolOutlinedIcon className='icons' /></div>
                            <div className='rightButton'><Link to=''>Démo gratuite des équipes</Link> <CalendarMonthOutlinedIcon className='icons'></CalendarMonthOutlinedIcon></div>
                        </div>
                    </div>
                    <img src={landingImage} />
                </div>

                {/* ==THIS IS THE FEATURES SECTION OF THE LANDING PAGE== */}
                <div className='sectionThree'>
                    <h1 className='headerText'>Ressentez la meilleure expérience<br />  avec nos fonctionnalités</h1>
                    <div className='sectionThreeHorizontalCard'>
                        <div className='sectionThreeHorizontalCardText'>
                            <img src={section3icon} />
                            <h1>Leçons gratuites en bouchées</h1>
                            <p>
                                Avec des leçons rapides et en petits morceaux, vous gagnerez <br />
                                points et débloquez de nouveaux niveaux tout en gagnant <br />
                                compétences pratiques en cybersécurité.
                            </p>
                        </div>
                        <div className='sectionThreeHorizontalCardImage'>
                            <img src={section3image} />
                        </div>
                    </div>
                    <div className='sectionThreeGrid'>
                        <div className='sectionThreeGridCard'>
                            <img src={leftIcon} />
                            <h1>Nous vous gardons motivé</h1>
                            <p>
                                Avec des fonctionnalités de jeu, des défis interactifs et <br />
                                rappels amicaux, nous garantissons cette aventure d’apprentissage.
                            </p>
                            <div className='sectionThreeGridCardRight'>
                                <img src={section3image1} />
                            </div>
                        </div>


                        <div className='sectionThreeGridCard'>
                            <img src={rightIcon} />
                            <h1>Participez et gagnez des récompenses</h1>
                            <p>
                                Suivez vos progrès, relevez des défis et gravissez les échelons. <br />
                                rangs. Voyez comment vous vous comparez à vos pairs lorsque vous <br />
                                maîtrisez les compétences en cybersécurité et gagnez des récompenses.
                            </p>
                            <div className='sectionThreeGridCardRight1'>
                                <img src={sectionThreeIconTwo} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='fullLP'>
                    <div className='card3Container' style={{ backgroundImage: `url(${patternLP})`, backgroundSize: `cover`, backgroundPosition: `center` }}>
                        <div className='header'>
                            <header> Formation en cybersécurité <br />pour chaque département</header>
                        </div>
                        <div className='cardBody'>
                            <div className='rightBody'>
                                <Link><p className='topParagraph'>Département des ventes </p></Link>
                                <h5>Notre formation cybersécurité pour les services commerciaux est <br />
                                    méticuleusement conçu pour remédier aux vulnérabilités <br />
                                    et les menaces auxquelles les équipes commerciales sont confrontées quotidiennement.</h5>
                                <hr />
                                <Link><p className='smallParagraph'>Équipes financières</p></Link>
                                <hr />
                                <Link><p className='smallParagraph'>Ressources humaines</p></Link>
                                <hr />
                                <Link><p className='smallParagraph'>Départements marketing</p></Link>
                                <hr />
                                <Link><p className='smallParagraph'>Équipes d'approvisionnement</p></Link>
                                <hr />
                                <Link><p className='smallParagraph'>Départements juridiques</p></Link>
                                <hr />
                                <Link><p className='smallParagraph'>Équipes de direction</p></Link>

                            </div>
                            <div className='leftBody'>
                                <img src={LPtraining} />
                                <div className='buttonContainer'>
                                    <Link><button className='leftBodyButton1'>Démo gratuite des équipes <h4><EventAvailableOutlinedIcon className='icons' /></h4></button></Link>   <br />
                                    <Link to='/readMore'><button className='leftBodybutton2'>En savoir plus</button></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==THIS IS THE COMMUNITY SECTION== */}
                <div className='communitySection'>
                    <img src={communitySection} />
                </div>

                {/* ==THIS IS THE FREQUENTLY ASKED QUESTIONS SECTION== */}
                <div className='frequentlyAskedQuestions'>
                    <h1>Avoir des questions? Nous sommes heureux de vous aider !</h1>
                    <div className='questionsBox'>
                        <div>
                            <CollapsibleBox title="ShieldEd est-il adapté aux débutants ?">
                                <p>Oui, ShieldEd convient aux débutants et aux utilisateurs de tous niveaux. La plateforme propose des cours d'introduction couvrant les concepts fondamentaux de la cybersécurité de manière accessible et facile à comprendre. L'interface conviviale et l'approche d'apprentissage interactive de ShieldEd le rendent idéal pour les personnes qui débutent en cybersécurité et souhaitent acquérir une base solide de connaissances.</p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Sécurité et confidentialité">
                                <p>Oui, ShieldEd convient aux débutants et aux utilisateurs de tous niveaux. La plateforme propose des cours d'introduction couvrant les concepts fondamentaux de la cybersécurité de manière accessible et facile à comprendre. L'interface conviviale et l'approche d'apprentissage interactive de ShieldEd le rendent idéal pour les personnes qui débutent en cybersécurité et souhaitent acquérir une base solide de connaissances.</p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Fonctionnalités communautaires">
                                <p>Oui, ShieldEd convient aux débutants et aux utilisateurs de tous niveaux. La plateforme propose des cours d'introduction couvrant les concepts fondamentaux de la cybersécurité de manière accessible et facile à comprendre. L'interface conviviale et l'approche d'apprentissage interactive de ShieldEd le rendent idéal pour les personnes qui débutent en cybersécurité et souhaitent acquérir une base solide de connaissances.</p>
                            </CollapsibleBox>
                        </div>
                        <div>
                            <CollapsibleBox title="Formation d'équipe">
                                <p>Oui, ShieldEd convient aux débutants et aux utilisateurs de tous niveaux. La plateforme propose des cours d'introduction couvrant les concepts fondamentaux de la cybersécurité de manière accessible et facile à comprendre. L'interface conviviale et l'approche d'apprentissage interactive de ShieldEd le rendent idéal pour les personnes qui débutent en cybersécurité et souhaitent acquérir une base solide de connaissances.</p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Soutien technique">
                                <p>Oui, ShieldEd convient aux débutants et aux utilisateurs de tous niveaux. La plateforme propose des cours d'introduction couvrant les concepts fondamentaux de la cybersécurité de manière accessible et facile à comprendre. L'interface conviviale et l'approche d'apprentissage interactive de ShieldEd le rendent idéal pour les personnes qui débutent en cybersécurité et souhaitent acquérir une base solide de connaissances.</p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Abonnement et tarifs">
                                <p>Oui, ShieldEd convient aux débutants et aux utilisateurs de tous niveaux. La plateforme propose des cours d'introduction couvrant les concepts fondamentaux de la cybersécurité de manière accessible et facile à comprendre. L'interface conviviale et l'approche d'apprentissage interactive de ShieldEd le rendent idéal pour les personnes qui débutent en cybersécurité et souhaitent acquérir une base solide de connaissances.</p>
                            </CollapsibleBox>
                        </div>
                    </div>
                </div>


                {/* ==THIS IS THE FOOTER== */}
                <div className='footerContainer' style={{ backgroundImage: `url(${pattern})` }}>
                    <div className='linkBox'>
                        <div className='leftLinkBox'>
                            <img src={Logo} />
                            <p>
                            Soyez le premier à recevoir toutes les mises à jour récentes, <br />
                            articles et matériaux de valeur.
                            </p>
                            <div className='leftLinkButtonBox'>
                                <input type='email' placeholder='Adresse e-mail' />
                                <Link>S'abonner</Link>
                            </div>
                        </div>

                        <div className='rightLinkBox'>
                            <div className='rightListBox'>
                                <ul>
                                    <li><span>les industries</span></li>
                                    <li>Services financiers</li>
                                    <li>Gouvernement</li>
                                    <li>Entreprises</li>
                                    <li>Travailleurs à distance</li>
                                    <li>Éducation</li>
                                    <li>Soins de santé</li>
                                </ul>
                            </div>

                            <div className='rightListBox'>
                                <ul>
                                    <li><span>Ressources</span></li>
                                    <li>Blog</li>
                                    <li>Salle de presse</li>
                                    <li>Cours intensif en famille</li>
                                    <li>Cybernaire</li>
                                    <li>Événements et webinaires</li>
                                    <li>Affiches de sensibilisation gratuites</li>
                                </ul>
                            </div>

                            <div className='rightListBox'>
                                <ul>
                                    <li><span>Plus</span></li>
                                    <li>À propos de nous</li>
                                    <li>Initiative pour la sécurité des aînés</li>
                                    <li>Programme d'affiliation</li>
                                    <li>Communauté</li>
                                    <li>Contactez-nous</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='lowerFooterText'>
                        <div className='lowerFooterLeft'>
                            <li><Link to='' className='footerLink'>Conditions d'utilisation</Link></li>
                            <li><Link to='/privacypolicy' className='footerLink'>politique de confidentialité</Link></li>
                            <li><Link to='' className='footerLink'>Déclaration d'accessibilité</Link></li>
                        </div>
                        <div className='lowerFooterRight'>
                            <li>&copy; 2024 ShieldEd. Tous droits réservés.</li>
                        </div>
                    </div>
                </div>

            </div>
            {showIndAlert && <Industries onClose={handleCloseInd} />}
            {showLanguageAlert && <FrenchLanguageComponent onClose={handleCloseLanguage} />}
            {showResourceAlert && <Resources onClose={handleCLoseResource} />}
            {showAboutAlert && <About onClose={handleCloseAbout} />}
        </>
    );
}

export default FrenchLandingPage;
