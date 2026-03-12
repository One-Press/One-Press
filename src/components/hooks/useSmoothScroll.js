// import { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// export default function useSmoothScroll(containerRef) {
//   useEffect(() => {
//     if (!containerRef.current) return;
//     const scroll = new LocomotiveScroll({
//       el: containerRef.current,
//       smooth: true,
//       multiplier: 1,
//     });

//     return () => {
//       scroll.destroy();
//     };
//   }, [containerRef]);
// }