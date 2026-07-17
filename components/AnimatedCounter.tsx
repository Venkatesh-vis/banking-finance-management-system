"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div className="w-full break-words">
            <CountUp
                end={amount}
                prefix="₹"
                separator=","
                decimals={2}
            />
        </div>
    );
};

export default AnimatedCounter;