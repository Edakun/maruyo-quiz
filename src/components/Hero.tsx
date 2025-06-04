import React from 'react'
import { motion } from 'framer-motion'
import { useQuiz } from '../App'

const Hero = () => {
  const { setCurrentQuestion } = useQuiz()

  // クイズを開始する関数
  const startQuiz = () => {
    setCurrentQuestion(1)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 背景動画/GIF */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('./assets/hero-loop.gif')",
            filter: "brightness(0.7)"
          }}
        />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            あなたの<span className="text-secondary-400">建設業適性</span>を診断
          </h1>
          <p className="max-w-lg mx-auto mb-8 text-xl">
            丸洋建設の彩先輩と一緒に、あなたの建設業への向き不向きをチェックしてみましょう！
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startQuiz}
            className="btn btn-secondary text-lg px-8 py-4"
            aria-label="診断を開始する"
          >
            診断スタート
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
