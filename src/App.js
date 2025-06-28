import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// コンポーネントのインポート
import Hero from './components/Hero';
import QuizCard from './components/QuizCard';
import Result from './components/Result';
import FloatingCTA from './components/FloatingCTA';
// クイズのデータ
const quizQuestions = [
    {
        id: 1,
        text: '工事現場で急な雨。あなたならどうする？',
        choices: [
            {
                text: '天気予報を確認していたので、事前に対策をしておいた',
                score: 3,
                reaction: 'さすが！先を読む力は現場では必須だね！'
            },
            {
                text: '雨が降りそうだったので、念のため養生シートを用意していた',
                score: 2,
                reaction: '良い判断だね！不測の事態に備える姿勢は大事！'
            },
            {
                text: 'すぐにみんなで協力して資材を守る行動に移る',
                score: 1,
                reaction: 'チームワークも大切！でも事前準備があるともっといいかも！'
            }
        ]
    },
    {
        id: 2,
        text: 'チームメンバーが作業ミスをしてしまった。あなたなら？',
        choices: [
            {
                text: 'ミスの原因を一緒に分析し、改善策を考える',
                score: 3,
                reaction: '問題解決能力が高いね！建設業ではとても重要だよ！'
            },
            {
                text: '自分の経験を共有し、次に活かせるアドバイスをする',
                score: 2,
                reaction: '経験を共有するのはとても良いことだね！'
            },
            {
                text: '「大丈夫、次頑張ろう」と励ます',
                score: 1,
                reaction: '優しさも大切だけど、具体的な改善も考えると良いかも！'
            }
        ]
    },
    {
        id: 3,
        text: '工期が予定より遅れそう。あなたならどうする？',
        choices: [
            {
                text: '作業の優先順位を見直し、効率的な進め方を再検討する',
                score: 3,
                reaction: 'その判断力と柔軟性、丸洋建設で活かせるね！'
            },
            {
                text: '残業してでも追いつくよう頑張る',
                score: 1,
                reaction: '熱意は素晴らしいけど、働き方改革の時代だからね。効率も大事だよ！'
            },
            {
                text: '応援を頼んで人員を増やし、作業を分担する',
                score: 2,
                reaction: 'チームワークを大事にする考え方、いいね！'
            }
        ]
    }
];
const defaultContext = {
    score: 0,
    setScore: () => { },
    currentQuestion: 0,
    setCurrentQuestion: () => { },
    showResult: false,
    setShowResult: () => { },
    soundEnabled: false,
    setSoundEnabled: () => { }
};
export const QuizContext = createContext(defaultContext);
// カスタムフック
export const useQuiz = () => useContext(QuizContext);
function App() {
    // 状態管理
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(false);
    // コンテキスト値
    const quizContextValue = {
        score,
        setScore,
        currentQuestion,
        setCurrentQuestion,
        showResult,
        setShowResult,
        soundEnabled,
        setSoundEnabled,
    };
    return (_jsx(QuizContext.Provider, { value: quizContextValue, children: _jsxs("div", { className: "relative", children: [currentQuestion === 0 && !showResult && (_jsx(Hero, {})), _jsx(AnimatePresence, { mode: "wait", children: currentQuestion > 0 && !showResult && (_jsx(motion.div, { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '-100%' }, transition: { type: 'tween', duration: 0.5 }, className: "absolute top-0 left-0 w-full h-screen", children: _jsx(QuizCard, { question: quizQuestions[currentQuestion - 1] }) }, `question-${currentQuestion}`)) }), showResult && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 }, className: "min-h-screen", children: _jsx(Result, { totalScore: score }) })), _jsx(FloatingCTA, {})] }) }));
}
export default App;
