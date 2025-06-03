import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useQuiz } from '../App'
import type { Question } from '../App'

interface QuizCardProps {
  question: Question
}

const QuizCard = ({ question }: QuizCardProps) => {
  const { score, setScore, currentQuestion, setCurrentQuestion, setShowResult } = useQuiz()
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showReaction, setShowReaction] = useState(false)
  const [reaction, setReaction] = useState('')

  // 選択肢を選んだ時の処理
  const handleAnswerClick = (choiceIndex: number) => {
    if (selectedAnswer !== null) return // 既に選択済みの場合は何もしない

    const selectedChoice = question.choices[choiceIndex]
    setSelectedAnswer(choiceIndex)
    setScore(score + selectedChoice.score)
    setReaction(selectedChoice.reaction)
    setShowReaction(true)

    // 1.5秒後に次の質問へ
    setTimeout(() => {
      if (currentQuestion < 3) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResult(true)
      }
      setSelectedAnswer(null)
      setShowReaction(false)
    }, 1500)
  }

  return (
    <div className="quiz-card">
      {/* 彩先輩のイラスト */}
      <div className="w-40 h-40 mb-6 overflow-hidden rounded-full md:w-48 md:h-48">
        <img 
          src="/assets/aya.png" 
          alt="彩先輩" 
          className="object-cover w-full h-full"
        />
      </div>

      {/* 質問テキスト */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mb-8 text-xl font-medium text-center md:text-2xl"
      >
        {question.text}
      </motion.h2>

      {/* 選択肢 */}
      <div className="w-full max-w-md">
        {question.choices.map((choice, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => handleAnswerClick(index)}
            disabled={selectedAnswer !== null}
            className={`quiz-option ${
              selectedAnswer === index ? 'border-2 border-primary-500' : ''
            }`}
            whileHover={{ scale: selectedAnswer === null ? 1.03 : 1 }}
            aria-label={`選択肢: ${choice.text}`}
          >
            {choice.text}
          </motion.button>
        ))}
      </div>

      {/* リアクション */}
      {showReaction && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md p-4 mt-6 text-center text-white rounded-lg bg-primary-600"
        >
          {reaction}
        </motion.div>
      )}
    </div>
  )
}

export default QuizCard
