"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const App_1 = require("../App");
const Hero = () => {
    const { setCurrentQuestion } = (0, App_1.useQuiz)();
    // クイズを開始する関数
    const startQuiz = () => {
        setCurrentQuestion(1);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative w-full h-screen overflow-hidden", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 z-0", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full h-full bg-cover bg-center", style: {
                        backgroundImage: "url('./assets/hero-loop.gif')",
                        filter: "brightness(0.7)"
                    } }) }), (0, jsx_runtime_1.jsx)("div", { className: "relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-white", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-center", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl", children: ["\u3042\u306A\u305F\u306E", (0, jsx_runtime_1.jsx)("span", { className: "text-secondary-400", children: "\u5EFA\u8A2D\u696D\u9069\u6027" }), "\u3092\u8A3A\u65AD"] }), (0, jsx_runtime_1.jsx)("p", { className: "max-w-lg mx-auto mb-8 text-xl", children: "\u4E38\u6D0B\u5EFA\u8A2D\u306E\u5F69\u5148\u8F29\u3068\u4E00\u7DD2\u306B\u3001\u3042\u306A\u305F\u306E\u5EFA\u8A2D\u696D\u3078\u306E\u5411\u304D\u4E0D\u5411\u304D\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u307F\u307E\u3057\u3087\u3046\uFF01" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: startQuiz, className: "btn btn-secondary text-lg px-8 py-4", "aria-label": "\u8A3A\u65AD\u3092\u958B\u59CB\u3059\u308B", children: "\u8A3A\u65AD\u30B9\u30BF\u30FC\u30C8" })] }) })] }));
};
exports.default = Hero;
