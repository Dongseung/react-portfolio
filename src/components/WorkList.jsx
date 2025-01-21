import React, { useEffect, useRef } from 'react'
import "../asset/css/WorkList.css"
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const WorkList = ({ data }) => {
    const sectionRef = useRef(null);
    const workListRef = useRef(null);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: '0% 100%',
                end:'0% 20%',
                scrub:1
            }
        })
        .fromTo('.con02 .title .a', {x:'-100%'}, {x:'0%', ease:'none', duration:5},0)
        .fromTo('.con02 .title .b', {x:'100%'}, {x:'0%', ease:'none', duration:5},0)

        gsap.timeline({
            scrollTrigger: {
                trigger: workListRef.current,
                start:'0% 100%',
                end:'0% 100%',
                scrub:1,
            }
        })
        .to('.imgBox', { opacity: 1, zIndex: 2, ease: 'none', duration: 5 })
        .to('.wrap', {backgroundColor:'#000', color:'#fff', ease:'none', duration:5}, 0)
    
        //title 글자 position:fixed 적용
        .to('.con02 .title', {position:'fixed', ease: 'none', left:'0', top:'0', width:'100%', duration:5},0)
    
        // .work_list에 margin-top을 적용해서 애니를 자연스럽게 작성
        .fromTo('.workList',{margin:'0vh auto'}, {position:'relative',zIndex:'10', margin:'100vh auto 0', duration:1},0)

        gsap.utils.toArray('.animation').forEach((imgBox) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: imgBox,
                    start: '20% 100%',
                    toggleClass: {
                        'targets': imgBox,
                        className: 'active'
                    },
                    scrub:1,
                }
            });
        });
        gsap.timeline({
            scrollTrigger:{
                trigger:workListRef.current,
                start:'100% 50%',
                end:'100% 0%',
                scrub:1,
                // markers:true
            }
        })
        .to('.con02 .title .a', {x:'-100%', ease:'none', duration:5},0)
        .to('.con02 .title .b', {x:'100%', ease:'none', duration:5},0)
    });
    
  return (
    <section className="con02" ref={sectionRef}>
        <div className="title en">
            <p className="a">My</p>
            <p className="b en2">Work</p>
        </div>
        <ul className="workList" ref={workListRef}>
            {data.map((work) => (
                <li key={work.id}>
                    <a href={work.link} className="animation">
                        <div className="imgBox">
                            <img src={work.image} alt={work.title} />
                        </div>
                        <div className="textBox">
                            <h3>{work.title}</h3>
                            <div className="info">
                                <p>{work.title}</p>
                                <p>{work.year}</p>
                            </div>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    </section>
  );
};

export default WorkList
