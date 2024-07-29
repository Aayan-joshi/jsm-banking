'use client'

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return <div>
        <CountUp decimal="," prefix="$" end={amount} duration={1.75}/>
    </div>;
};

export default AnimatedCounter;
