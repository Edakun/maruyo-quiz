"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const FaqModal_tsx_1 = __importDefault(require("./FaqModal.tsx"));
/**
 * 画面右下に常時表示される「?」ボタンとFAQモーダルを表示するコンポーネント
 */
const FloatingCTA = () => {
    // FAQモーダルの表示状態
    const [showFaq, setShowFaq] = (0, react_1.useState)(false);
    // FAQモーダルを開く
    const openFaq = () => {
        setShowFaq(true);
    };
    // FAQモーダルを閉じる
    const closeFaq = () => {
        setShowFaq(false);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { className: "fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white text-xl font-bold shadow-lg z-50 flex items-center justify-center", whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: openFaq, "aria-label": "\u63A1\u7528FAQ\u3092\u958B\u304F", children: "?" }), (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: showFaq && (0, jsx_runtime_1.jsx)(FaqModal_tsx_1.default, { onClose: closeFaq }) })] }));
};
exports.default = FloatingCTA;
