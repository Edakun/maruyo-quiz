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
    
    // 彩先輩の画像を取得
    const getAyaImage = () => {
        return starRating === 5 ? "./assets/aya-q1.png" : "./assets/aya-q3.png";
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-b from-sky-50 to-blue-100">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl border-t-4 border-primary-500"
            >
                {/* ヘッダー部分 - グラデーション背景 */}
                <div className="relative -mt-12 mb-8 p-6 bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl text-white shadow-lg">
                    <h2 className="text-3xl font-bold text-center">診断結果</h2>
                </div>
                
                {/* 彩先輩の画像と吹き出し */}
                <div className="mb-8 relative flex justify-center">
                    {/* 吹き出し */}
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ 
                            y: [0, -10, 0, -8, 0] 
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className="absolute top-1/4 right-3/4 transform -translate-y-full bg-white p-3 rounded-2xl shadow-md border-2 border-primary-300"
                        style={{ minWidth: "140px", zIndex: 10 }}
                    >
                        <p className="text-center text-primary-600 font-medium">
                            {starRating === 5 ? "素晴らしい結果だね！" : "あなたの挑戦待ってるよ！"}
                        </p>
                    </motion.div>
                    
                    {/* 吹き出しの矢印部分 */}
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ 
                            y: [0, -10, 0, -8, 0] 
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className="absolute top-[37%] left-[25%] transform rotate-45 w-5 h-5 bg-white border-b-2 border-r-2 border-primary-300"
                        style={{ zIndex: 5 }}
                    />
                    
                    {/* 彩先輩の画像 */}
                    <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-primary-500 relative z-1 shadow-lg"> 
                        <img 
                            src={getAyaImage()} 
                            alt="彩先輩" 
                            className="object-cover w-full h-full" 
                        />
                    </div>
                </div>
                
                {/* 星評価とメッセージ */}
                <div className="mb-6 text-center">
                    <p className="mb-2 text-lg font-medium text-gray-700">あなたの建設業適性度</p>
                    
                    {/* 星評価のアニメーション表示 */}
                    <div className="flex justify-center mb-4">
                        {[...Array(starRating)].map((_, i) => (
                            <motion.span
                                key={i}
                                role="img"
                                aria-label="星"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1, rotate: [0, 15, 0] }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="text-4xl text-yellow-500"
                                style={{ textShadow: '0 0 5px rgba(250, 204, 21, 0.7)' }}
                            >
                                ★
                            </motion.span>
                        ))}
                    </div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-xl font-bold text-primary-700"
                    >
                        {starRating === 5
                            ? '素晴らしい！あなたは建設業に非常に向いています！'
                            : 'あなたは建設業の素質があります！'}
                    </motion.p>
                </div>
                
                {/* 詳細メッセージ */}
                <motion.div 
                    className="mb-8 p-5 bg-gradient-to-br from-blue-50 to-primary-50 rounded-xl border border-primary-100 shadow-inner"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-center text-gray-800">
                        {starRating === 5
                            ? '問題解決能力と先見性を持ち、チームワークも大切にできるあなたは、建設業で大いに活躍できるでしょう！'
                            : '建設業ではチームワークと問題解決能力が大切です。あなたの素質をさらに伸ばしてみませんか？'}
                    </p>
                </motion.div>
                
                {/* 応募ボタン */}
                <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <a
                        href="https://www.maruyoukensetu.jp/recruit/entry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full btn btn-primary text-center py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        aria-label="丸洋建設の会社説明会に申し込む"
                    >
                        丸洋建設の会社説明会に申し込む
                    </a>
                </motion.div>
                
                {/* シェアボタン */}
                <div className="flex justify-center space-x-6">
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#333" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={shareTwitter}
                        className="flex items-center px-6 py-3 text-white bg-black rounded-full shadow-md transition-all duration-200"
                        aria-label="Xでシェア"
                    >
                        <FaXTwitter className="mr-2 text-lg" />
                        <span className="font-medium">Xでシェア</span>
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#06C755" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={shareLine}
                        className="flex items-center px-6 py-3 text-white bg-green-500 rounded-full shadow-md transition-all duration-200"
                        aria-label="LINEでシェア"
                    >
                        <RiLineFill className="mr-2 text-lg" />
                        <span className="font-medium">LINEでシェア</span>
                    </motion.button>
                </div>
                
                {/* 再挑戦リンク */}
                <div className="mt-8 text-center">
                    <a href="/" className="text-primary-600 hover:underline font-medium">
                        もう一度チャレンジする
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Result;
