import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { RiLineFill } from 'react-icons/ri';
const Result = ({ totalScore }) => {
    // 最大可能スコア: 3問 × 最大3点 = 9点
    // スコアに基づいて星評価を計算（5段階または3段階）
    const starRating = totalScore >= 7 ? 5 : 3;
    // シェアテキスト
    const shareText = `丸洋建設の適性診断クイズで私の建設業適性度は${starRating}つ星でした！ #丸洋建設 #適性診断 #新卒採用`;
    // シェアURL（実際のURLに置き換えてください）
    const shareUrl = 'https://maruyo-construction.co.jp/quiz';
    // Xシェア
    const shareTwitter = () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
    };
    // LINEシェア
    const shareLine = () => {
        const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        window.open(url, '_blank');
    };
    return (_jsx("div", { className: "flex flex-col items-center justify-center min-h-screen px-4 py-12", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "w-full max-w-lg p-8 bg-white rounded-lg shadow-lg", children: [_jsx("h2", { className: "mb-6 text-2xl font-bold text-center md:text-3xl", children: "\u8A3A\u65AD\u7D50\u679C" }), 
        // 彩先輩の画像と吹き出しを追加
        _jsxs("div", { className: "mb-6 relative flex justify-center", children: [
            // 吹き出し
            _jsx(motion.div, {
                initial: { opacity: 1 },
                animate: { 
                    y: [0, -10, 0, -8, 0] 
                },
                transition: { 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop"
                },
                className: "absolute top-1/4 right-3/4 transform -translate-y-full bg-white p-3 rounded-2xl shadow-md border-2 border-primary-300",
                style: { minWidth: "140px", zIndex: 10 },
                children: _jsx("p", { className: "text-center text-primary-600 font-medium", children: "\u3042\u306A\u305F\u306E\u6311\u6226\u5F85\u3063\u3066\u308B\u3088\uFF01" })
            }),
            // 吹き出しの矢印部分
            _jsx(motion.div, {
                initial: { opacity: 1 },
                animate: { 
                    y: [0, -10, 0, -8, 0] 
                },
                transition: { 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop"
                },
                className: "absolute top-[37%] left-[25%] transform rotate-415 w-5 h-5 bg-white border-t-2 border-r-2 border-primary-300",
                style: { zIndex: 5 }
            }),
            // 彩先輩の画像
            _jsx("div", { className: "w-40 h-40 overflow-hidden rounded-full border-4 border-primary-500 relative z-1", children: 
                _jsx("img", { 
                    src: "./assets/aya-q1.png", 
                    alt: "\u5F69\u5148\u8F29", 
                    className: "object-cover w-full h-full" 
                })
            }),
        ] }),
        _jsxs("div", { className: "mb-6 text-center", children: [_jsx("p", { className: "mb-2 text-lg", children: "\u3042\u306A\u305F\u306E\u5EFA\u8A2D\u696D\u9069\u6027\u5EA6" }), _jsx("div", { className: "flex justify-center mb-4 text-3xl text-secondary-500", children: [...Array(starRating)].map((_, i) => (_jsx("span", { role: "img", "aria-label": "\u661F", children: "\u2605" }, i))) }), _jsx("p", { className: "text-lg", children: starRating === 5
                                ? '素晴らしい！あなたは建設業に非常に向いています！'
                                : 'あなたは建設業の素質があります！' })] }), _jsx("div", { className: "mb-8 p-4 bg-gray-100 rounded-md", children: _jsx("p", { className: "text-center", children: starRating === 5
                            ? '問題解決能力と先見性を持ち、チームワークも大切にできるあなたは、建設業で大いに活躍できるでしょう！'
                            : '建設業ではチームワークと問題解決能力が大切です。あなたの素質をさらに伸ばしてみませんか？' }) }), _jsx("div", { className: "mb-8", children: _jsx("a", { href: "https://www.maruyoukensetu.jp/recruit/entry", target: "_blank", rel: "noopener noreferrer", className: "block w-full btn btn-primary text-center", "aria-label": "\u4E38\u6D0B\u5EFA\u8A2D\u306E\u4F1A\u793E\u8AAC\u660E\u4F1A\u306B\u7533\u3057\u8FBC\u3080", children: "\u4E38\u6D0B\u5EFA\u8A2D\u306E\u4F1A\u793E\u8AAC\u660E\u4F1A\u306B\u7533\u3057\u8FBC\u3080" }) }), _jsxs("div", { className: "flex justify-center space-x-4", children: [_jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: shareTwitter, className: "flex items-center px-4 py-2 text-white bg-black rounded-md", "aria-label": "X\u3067\u30B7\u30A7\u30A2", children: [_jsx(FaXTwitter, { className: "mr-2" }), "X"] }), _jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: shareLine, className: "flex items-center px-4 py-2 text-white bg-green-500 rounded-md", "aria-label": "LINE\u3067\u30B7\u30A7\u30A2", children: [_jsx(RiLineFill, { className: "mr-2" }), "LINE"] })] })] }) }));
};
export default Result;
