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
    },
    {
        id: 4,
        text: '新しい建設技術を導入するチャンス。あなたの選択は？',
        choices: [
            {
                text: '事前に勉強して準備し、積極的に取り入れたい',
                score: 3,
                reaction: '向上心があって素晴らしい！新しい技術への適応力は大切だね！'
            },
            {
                text: '専門家に意見を聞いて、段階的に導入していく',
                score: 2,
                reaction: '堅実なアプローチだね！慎重さも大事な資質だよ！'
            },
            {
                text: '従来のやり方に自信があるので、様子を見てから判断する',
                score: 1,
                reaction: '経験を重視するのは良いけど、時には新しいことにチャレンジすることも大切かも！'
            }
        ]
    },
    {
        id: 5,
        text: '地域の方から工事についての質問を受けた。あなたならどうする？',
        choices: [
            {
                text: '丁寧に説明し、地域との良好な関係構築を心がける',
                score: 3,
                reaction: '素晴らしい！地域との信頼関係は丸洋建設の大切な価値観だよ！'
            },
            {
                text: '分かりやすく説明し、不安や疑問に答える',
                score: 2,
                reaction: 'コミュニケーション能力が高いね！現場での対応力は重要だよ！'
            },
            {
                text: '上司や担当者に取り次いで対応してもらう',
                score: 1,
                reaction: '責任感は大事だけど、自分でも対応できる力を身につけるともっと素晴らしいね！'
            }
        ]
    },
    {
        id: 6,
        text: '工事現場で安全性を確保するために必要な措置は？',
        choices: [
            {
                text: '安全ヘルメットや安全靴を着用する',
                score: 3,
                reaction: '安全第一！現場では常に危険を意識することが大切だよ！'
            },
            {
                text: '作業前に安全点検を行う',
                score: 2,
                reaction: '安全点検は必須！しかし、常に安全を意識することも大事だよ！'
            },
            {
                text: '作業中はスマートフォンを使用しない',
                score: 1,
                reaction: 'スマートフォンの使用は作業中には避けた方が良いね！'
            }
        ]
    },
    {
        id: 7,
        text: '工事現場で環境への配慮は？',
        choices: [
            {
                text: '廃棄物を適切に処理する',
                score: 3,
                reaction: '環境への配慮は大切！廃棄物の適切な処理は必須だよ！'
            },
            {
                text: 'エネルギーを効率的に使用する',
                score: 2,
                reaction: 'エネルギー効率化は重要！しかし、廃棄物処理も忘れないでね！'
            },
            {
                text: '工事に伴う騒音を最小限に抑える',
                score: 1,
                reaction: '騒音対策は必要！しかし、廃棄物処理やエネルギー効率化も大事だよ！'
            }
        ]
    },
    {
        id: 8,
        text: '工事現場で発生した問題を解決するために必要なスキルは？',
        choices: [
            {
                text: '問題解決能力',
                score: 3,
                reaction: '問題解決能力は現場では必須のスキルだよ！'
            },
            {
                text: 'コミュニケーション能力',
                score: 2,
                reaction: 'コミュニケーション能力はチームワークを高めるために重要だよ！'
            },
            {
                text: 'リーダーシップ',
                score: 1,
                reaction: 'リーダーシップはチームをまとめるために必要だよ！しかし、問題解決能力も大事だよ！'
            }
        ]
    },
    {
        id: 9,
        text: '工事現場で安全性を確保するために必要な措置は？',
        choices: [
            {
                text: '安全教育',
                score: 3,
                reaction: '安全教育は安全意識を高めるために必須だよ！'
            },
            {
                text: '安全点検',
                score: 2,
                reaction: '安全点検は安全を確保するために重要だよ！'
            },
            {
                text: '安全機器の使用',
                score: 1,
                reaction: '安全機器の使用は安全を確保するために必要だよ！しかし、安全教育も大事だよ！'
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
