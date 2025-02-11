import AR from '../assets/AR.webp';
import VR from '../assets/VR.webp';
import MR from '../assets/MR.webp';
import Meta from '../assets/ab1.webp';
import DT from '../assets/DT.webp';
import Three from '../assets/threesixty.webp';
import Card from './HomeCard';
import BackGround from '../assets/BG.gif';
import "@fontsource/raleway";
import "@fontsource/roboto";
const Home = () => {
    return (
           <div>
                    <div className="lg:h-200 width-1/1 md:h-100">
              <img style={{width:"100%"}} src={BackGround}></img>
            </div>
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 home-content">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#232627] tracking-wider border-b-2 border-gray-500 pb-6 font-raleway">
                        Welcome to Centre for Immersive Technologies
                    </h1>
                    <p className="mt-2 text-[#2D2D2D] p-4 text-xl text-justify font-roboto">
                        Our research centre is dedicated to conducting cutting-edge research and exploring
                        the possibilities of immersive technologies such as Extended Reality (XR) that encompasses
                        Augmented Reality (AR), Virtual Reality (VR), Mixed Reality (MR), Digital Twin and
                        Metaverse. We strive to push the boundaries of these technologies to create new experiences,
                        applications, and opportunities for researchers and industries. We believe that these
                        technologies have the potential to revolutionise industries such as education, healthcare,
                        entertainment, and more. we also develop immersive educational content to transform the
                        way we learn and teach. This centre is an initial step in establishing Anna University’s
                        leadership in the emerging Metaverse/Virtual space.<br></br><br></br>
                    </p>
                </div>

                <div className="grid grid-cols-3 justify-items-center">
                    <div></div>
                    <div>
                        <h1 className="text-3xl text-center font-bold text-[#232627] tracking-wider border-b-2 pb-6 font-raleway">
                            Area of Focus
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
                    <Card backgroundImage={AR} text="Augmented Reality" />
                    <Card backgroundImage={VR} text="Virtual Reality" />
                    <Card backgroundImage={MR} text="Mixed Reality" />
                    <Card backgroundImage={Meta} text="Metaverse" />
                    <Card backgroundImage={DT} text="Digital Twin" />
                    <Card backgroundImage={Three} text="360° Content" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;
