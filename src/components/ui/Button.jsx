import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "../../styles/button.css";

export default function Button({ label = "Click", href = "/", className = "" }) {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const button = buttonRef.current;
      const flair = flairRef.current;
      if (!button || !flair) return;

      const xSet = gsap.quickSetter(flair, "xPercent");
      const ySet = gsap.quickSetter(flair, "yPercent");

      const getXY = (e) => {
        const { left, top, width, height } = button.getBoundingClientRect();
        const x = gsap.utils.clamp(
          0, 100,
          gsap.utils.mapRange(0, width, 0, 100, e.clientX - left)
        );
        const y = gsap.utils.clamp(
          0, 100,
          gsap.utils.mapRange(0, height, 0, 100, e.clientY - top)
        );
        return { x, y };
      };

      const enter = (e) => {
        const { x, y } = getXY(e);
        xSet(x);
        ySet(y);
        gsap.to(flair, { scale: 1, duration: 0.4, ease: "power2.out" });
      };

      const leave = (e) => {
        const { x, y } = getXY(e);
        gsap.to(flair, {
          xPercent: x,
          yPercent: y,
          scale: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1,0.4)",
        });
      };

      const move = (e) => {
        const { x, y } = getXY(e);
        gsap.to(flair, {
          xPercent: x,
          yPercent: y,
          duration: 0.4,
          ease: "power2",
        });

        const rect = button.getBoundingClientRect();
        const moveX = (e.clientX - rect.left - rect.width / 2) / 6;
        const moveY = (e.clientY - rect.top - rect.height / 2) / 6;

        gsap.to(button, {
          x: moveX,
          y: moveY,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      button.addEventListener("mouseenter", enter);
      button.addEventListener("mouseleave", leave);
      button.addEventListener("mousemove", move);
    }, buttonRef);

    return () => ctx.revert();
  }, []);

  return (
    <Link
      ref={buttonRef}
      to={href}
      className={`button button--stroke magnetic-button ${className}`}
    >
      <span ref={flairRef} className="button__flair"></span>
      <span className="button__label">{label}</span>
    </Link>
  );
}