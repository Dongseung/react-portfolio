import React, { useEffect, useRef } from 'react'
import "../asset/css/Video.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
    const sectionRef = useRef(null);
    const videoWrapRef = useRef(null);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger:sectionRef.current,
                start: '0% 50%',
                end: '100% 100%',
                scrub: 1,
                // markers: true
            }
        })
        .to('.wrap', { backgroundColor: '#fff', color:'#000', ease:'none', duration: 5}, 0)
        .to('.svgAni path', { stroke:'#000', ease:'none', duration: 4}, 0)
        .to('.scroll', {opacity:'0', duration: 5, ease: 'none'}, 0)
        .fromTo(
            videoWrapRef.current.querySelector('video'),
            { clipPath: 'inset(60% 60% 60% 60% round 30%)'},
            { clipPath: 'inset(0% 0% 0% 0% round 0%)', ease:'none', duration: 10 },
            0
        );
    })

  return (
    <section className="con01" ref={sectionRef}>
      <div className="videoWrap" ref={videoWrapRef}>
        <video autoPlay muted loop playsInline>
          <source src="images/video2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="title en">
        <h2>
          <span className="en">Creativeness</span> is all you need <br /> for{' '}
          <span className="en2">digital design</span>
        </h2>
      </div>
    </section>
  )
}

export default Video
