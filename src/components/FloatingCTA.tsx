import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FaqModal from './FaqModal'
/**
 * 画面右下に常時表示される「?」ボタンとFAQモーダルを表示するコンポーネント
 */
const FloatingCTA: React.FC = () => {
  // FAQモーダルの表示状態
  const [showFaq, setShowFaq] = useState(false)

  // FAQモーダルを開く
  const openFaq = () => {
    setShowFaq(true)
  }

  // FAQモーダルを閉じる
  const closeFaq = () => {
    setShowFaq(false)
  }

  return (
    <>
      {/* 「?」ボタン */}
      <motion.button
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white text-xl font-bold shadow-lg z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openFaq}
        aria-label="採用FAQを開く"
      >
        ?
      </motion.button>

      {/* FAQモーダル */}
      <AnimatePresence>
        {showFaq && <FaqModal onClose={closeFaq} />}
      </AnimatePresence>
    </>
  )
}

export default FloatingCTA
