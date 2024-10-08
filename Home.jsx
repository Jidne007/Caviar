import { useEffect } from "react";
import Hero from "../HeroSection/Hero";
import Cavier from "../cavier/cavier";
import SpanishCav from "../SpanishCavier/SpanishCav";
import Premium from "../Premium/Premium";
import Weisser from "../Weisser/Weisser";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Hero />
            <Cavier />
            <SpanishCav />
            <Premium />
            <Weisser/>
        </div>
    );
};

export default Home;