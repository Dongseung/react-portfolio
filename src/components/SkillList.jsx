import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../asset/css/Skills.css";

const SkillList = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const listElement = listRef.current;

    // GSAP를 사용하여 리스트의 무한 스크롤 애니메이션 구현
    if (listElement) {
      const totalWidth = listElement.scrollWidth / 2; // 리스트 전체의 절반 길이 계산
      gsap.to(listElement, {
        x: `-=${totalWidth}`, // 리스트의 절반 길이만큼 왼쪽으로 이동
        duration: 30, // 애니메이션 지속 시간 (더 길게 설정하면 느리게 이동)
        ease: "linear", // 선형 이동으로 부드럽게
        repeat: -1, // 무한 반복
      });
    }
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="con03 animate" data-animate="motion">
      <div className="textWrap">
        <div className="title en">
          <p>
            My <span className="en2">Skill</span>
          </p>
        </div>
        <ul>
          <li>
            <motion.p
              initial={{ opacity: 0, y: -90, skewY: -10 }}
              animate={inView ? { opacity: 1, y: 0, skewY: 0 } : { opacity: 0 }}
              transition={{ duration: 1.8 }}
            >
              <span>Photoshop</span>
            </motion.p>
          </li>
          <li className="en2">
            <motion.p
              initial={{ opacity: 0, y: -90, skewY: -10 }}
              animate={inView ? { opacity: 1, y: 0, skewY: 0 } : { opacity: 0 }}
              transition={{ duration: 1.7 }}
            >
              <span className="en2">Figma</span>
            </motion.p>
          </li>
          <li>
            <motion.p
              initial={{ opacity: 0, y: -90, skewY: -10 }}
              animate={inView ? { opacity: 1, y: 0, skewY: 0 } : { opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <span>Html/CSS/SCSS</span>
            </motion.p>
          </li>
          <li className="en2">
            <motion.p
              initial={{ opacity: 0, y: -90, skewY: -10 }}
              animate={inView ? { opacity: 1, y: 0, skewY: 0 } : { opacity: 0 }}
              transition={{ duration: 1.3 }}
            >
              <span>JavaScript</span>
            </motion.p>
          </li>
          <li>
            <motion.p
              initial={{ opacity: 0, y: -90, skewY: -10 }}
              animate={inView ? { opacity: 1, y: 0, skewY: 0 } : { opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <span>JQuery</span>
            </motion.p>
          </li>
          <li className="en2">
            <motion.p
              initial={{ opacity: 0, y: -90, skewY: -10 }}
              animate={inView ? { opacity: 1, y: 0, skewY: 0 } : { opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <span>React</span>
            </motion.p>
          </li>
        </ul>
      </div>
      <ul className="list" ref={listRef}>
        <li>
          <img src="/images/img1.jpg" alt="Skill 1" />
        </li>
        <li>
          <img src="/images/img2.jpg" alt="Skill 2" />
        </li>
        <li>
          <img src="/images/img3.jpg" alt="Skill 3" />
        </li>
        <li>
          <img src="/images/img4.jpg" alt="Skill 4" />
        </li>
        <li>
          <img src="/images/img5.jpg" alt="Skill 5" />
        </li>
        <li>
          <img src="/images/img6.jpg" alt="Skill 6" />
        </li>
        <li>
          <img src="/images/img7.jpg" alt="Skill 7" />
        </li>
        {/* 리스트 아이템을 두 번 복제하여 자연스러운 무한 스크롤을 구현 */}
        {/* <li><img src="/images/img1.jpg" alt="Skill 1" /></li>
        <li><img src="/images/img2.jpg" alt="Skill 2" /></li>
        <li><img src="/images/img3.jpg" alt="Skill 3" /></li>
        <li><img src="/images/img4.jpg" alt="Skill 4" /></li>
        <li><img src="/images/img5.jpg" alt="Skill 5" /></li>
        <li><img src="/images/img6.jpg" alt="Skill 6" /></li>
        <li><img src="/images/img7.jpg" alt="Skill 7" /></li> */}
      </ul>
      <div className="btnWrap">
        <a href="/">
          <img src="/images/readMore1.png" alt="Read More 1" />
          <img src="/images/readMore2.png" alt="Read More 2" />
        </a>
      </div>
    </section>
  );
};

export default SkillList;
