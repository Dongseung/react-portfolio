import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../asset/css/Visual.css";

const Visual = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });

  return (
    <section ref={ref} className="visual en">
      <div className="mainText">
        <motion.p
          initial={{ opacity: 0, y: -90, skewY: -10 }}
          animate={inView ? { opacity: 1, y: 0, skewY: 0 } : { opacity: 0 }}
          transition={{ duration: 1.8 }}
        >
          <span>FE Developer</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -90, skewY: -10 }}
          animate={inView ? { opacity: 1, y: 0, skewY: 0 } : { opacity: 0 }}
          transition={{ duration: 1.7 }}
        >
          <span className="en2">Shin DongSeung</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -90, skewY: -10 }}
          animate={inView ? { opacity: 1, y: 0, skewY: 0 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <span>Portfolio</span>
        </motion.p>
      </div>
      <div className="subText">
        <motion.p
          key={inView}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2.3 }}
        >
          With many years of experience in digital product development,
          <br className="mo" />
          we understand how to create user-friendly and
          <br className="mo" />
          memorable interfaces for the leading world companies.
          <br className="mo" />
          Properly and harmoniously, we integrate modern
          <br className="mo" />
          technologies into the classical graphic design aesthetics.
        </motion.p>
      </div>
      <div className="svgAni">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          key={inView}
          viewBox="0 0 1489.009 912.236"
          style={{ enableBackground: "new 0 0 759.09 580.68" }}
          xmlSpace="preserve"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <defs>
            <style>
              {`
                #svgAni01, #svgAni02, #svgAni03, #svgAni04, #svgAni05 {
                  fill: none;
                  stroke: #999999;
                  stroke-width: 7;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 10;
                }
              `}
            </style>
          </defs>
          <g transform="translate(-212.739 -59.717)">
            <path
              id="svgAni01"
              className={inView ? "animate-path" : ""}
              d="M274.005,444.177s236.51-74.991,398.029,475.9"
              transform="translate(0 -18.973)"
            />
            <path
              id="svgAni02"
              className={inView ? "animate-path" : ""}
              d="M219.348,703.6s331.46-486,658.045-519.357S409.45,965.654,409.45,965.654s1028.5-805.24,1291.72-824.3"
              transform="translate(0 0)"
            />
            <path
              id="svgAni03"
              className={inView ? "animate-path" : ""}
              d="M1096.74,141.358S978.79,236.152,961.7,345.684s161.578-147.6,211.294-137.5S1002.87,522.8,1002.87,522.8"
            />
            <path
              id="svgAni04"
              className={inView ? "animate-path" : ""}
              d="M1169.89,53.6s65.453,236.808,63.247,259.606,13.238-176.5,25-163.265,69.868,152.233,88.987,130.174,41.92-140.467,25.74-172.09,30.887,154.44,40.448,119.139,19.856-144.144,22.059-136.79-8.826,140.467,0,108.843,22.059-131.641,36.771-124.287,14.708,130.906,26.475,98.548,17.651-49.274,17.651-49.274"
              transform="matrix(0.999, -0.035, 0.035, 0.999, -11.397, 67.343)"
            />
            <path
              id="svgAni05"
              className={inView ? "animate-path" : ""}
              d="M1369.21,56.7c2.476-.124,4.085-2.724,7.3.867s3.59,8.79-.743,9.78c-.082.019,1.127-.083.743,0-4,.886-6.963.625-8.542-5.447-.042-.161.6,3.929.5,3.466C1367.15,59.736,1366.8,56.82,1369.21,56.7Z"
              transform="translate(-19 36)"
            />
          </g>
        </motion.svg>
      </div>
      <div className="scroll">Scroll Down</div>
    </section>
  );
};

export default Visual;
