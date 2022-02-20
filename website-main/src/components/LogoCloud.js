import React from "react";

import CoinMetricsLogo from '../images/companies/coinmetrics.png'
import A16Z from '../images/companies/a16z.svg'
import BEN from '../images/companies/ben.svg'
import BAF from '../images/companies/baf.png'
import ENCODE from '../images/companies/encode.png'

const LOGOS = [
    CoinMetricsLogo,
    A16Z,
    BEN,
    BAF,
    ENCODE
];

const LogoCloud = () => {
    return (
            <div class="grid  md:grid-cols-2 gap-10 sm:grid-cols-1 lg:grid-cols-3">
                {LOGOS.map((logo) => 
                    <div class="w-60 flex items-center justify-center p-6 col-span-1">
                        <img src={logo}></img>
                    </div>
                    
                )}

            </div>
    );
}


export default LogoCloud