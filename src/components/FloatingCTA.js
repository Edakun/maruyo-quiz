import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FaqModal from './FaqModal';
/**
 * 画面右下に常時表示される「?」ボタンとFAQモーダルを表示するコンポーネント
 */
const FloatingCTA = () => {
    // FAQモーダルの表示状態
    const [showFaq, setShowFaq] = useState(false);
    // FAQモーダルを開く
    const openFaq = () => {
        setShowFaq(true);
    };
    // FAQモーダルを閉じる
    const closeFaq = () => {
        setShowFaq(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(motion.button, { className: "fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white text-xl font-bold shadow-lg z-50 flex items-center justify-center", whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: openFaq, "aria-label": "\u63A1\u7528FAQ\u3092\u958B\u304F", children: "?" }), _jsx(AnimatePresence, { children: showFaq && _jsx(FaqModal, { onClose: closeFaq }) })] }));
};
export default FloatingCTA;
