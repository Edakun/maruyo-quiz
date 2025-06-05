import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useQuiz } from '../App';
const Hero = () => {
    const { setCurrentQuestion } = useQuiz();
    // クイズを開始する関数
    const startQuiz = () => {
        setCurrentQuestion(1);
    };
    return (_jsxs("div", { className: "relative w-full h-screen overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 z-0", children: _jsx("div", { className: "w-full h-full bg-cover bg-center", style: {
                        backgroundImage: "url('./assets/hero-loop.gif')",
                        filter: "brightness(0.7)"
                    } }) }), _jsx("div", { className: "absolute top-4 left-4 z-20", children: _jsx(motion.img, { src: "/assets/h-logo.png", alt: "\u4E38\u6D0B\u5EFA\u8A2D\u30ED\u30B4", className: "h-16 md:h-20 lg:h-24", initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.3 } }) }), _jsx("div", { className: "relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-white", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-center", children: [_jsxs("h1", { className: "mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl", children: ["\u3042\u306A\u305F\u306E", _jsx("span", { className: "text-secondary-400", children: "\u5EFA\u8A2D\u696D\u9069\u6027" }), "\u3092\u8A3A\u65AD"] }), _jsx("p", { className: "max-w-lg mx-auto mb-8 text-xl", children: "\u4E38\u6D0B\u5EFA\u8A2D\u306E\u5F69\u5148\u8F29\u3068\u4E00\u7DD2\u306B\u3001\u3042\u306A\u305F\u306E\u5EFA\u8A2D\u696D\u3078\u306E\u5411\u304D\u4E0D\u5411\u304D\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u307F\u307E\u3057\u3087\u3046\uFF01" }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: startQuiz, className: "btn btn-secondary text-lg px-8 py-4", "aria-label": "\u8A3A\u65AD\u3092\u958B\u59CB\u3059\u308B", children: "\u8A3A\u65AD\u30B9\u30BF\u30FC\u30C8" })] }) })] }));
};
export default Hero;
