"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const App_1 = require("../App");
const QuizCard = ({ question }) => {
    const { score, setScore, currentQuestion, setCurrentQuestion, setShowResult } = (0, App_1.useQuiz)();
    const [selectedAnswer, setSelectedAnswer] = (0, react_1.useState)(null);
    const [showReaction, setShowReaction] = (0, react_1.useState)(false);
    const [reaction, setReaction] = (0, react_1.useState)('');
    // 選択肢を選んだ時の処理
    const handleAnswerClick = (choiceIndex) => {
        if (selectedAnswer !== null)
            return; // 既に選択済みの場合は何もしない
        const selectedChoice = question.choices[choiceIndex];
        setSelectedAnswer(choiceIndex);
        setScore(score + selectedChoice.score);
        setReaction(selectedChoice.reaction);
        setShowReaction(true);
        // 1.5秒後に次の質問へ
        setTimeout(() => {
            if (currentQuestion < 3) {
                setCurrentQuestion(currentQuestion + 1);
            }
            else {
                setShowResult(true);
            }
            setSelectedAnswer(null);
            setShowReaction(false);
        }, 1500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "quiz-card", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-40 h-40 mb-6 overflow-hidden rounded-full md:w-48 md:h-48", children: (0, jsx_runtime_1.jsx)("img", { src: "./assets/aya.png", alt: "\u5F69\u5148\u8F29", className: "object-cover w-full h-full" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 }, className: "max-w-md mb-8 text-xl font-medium text-center md:text-2xl", children: question.text }), (0, jsx_runtime_1.jsx)("div", { className: "w-full max-w-md", children: question.choices.map((choice, index) => ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: index * 0.1 }, onClick: () => handleAnswerClick(index), disabled: selectedAnswer !== null, className: `quiz-option ${selectedAnswer === index ? 'border-2 border-primary-500' : ''}`, whileHover: { scale: selectedAnswer === null ? 1.03 : 1 }, "aria-label": `選択肢: ${choice.text}`, children: choice.text }, index))) }), showReaction && ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-md p-4 mt-6 text-center text-white rounded-lg bg-primary-600", children: reaction }))] }));
};
exports.default = QuizCard;
