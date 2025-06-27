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
  }

  // 次の問題へ進む処理
  const handleNextQuestion = () => {
    if (currentQuestion < 3) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
    setSelectedAnswer(null)
    setShowReaction(false)
  }

  // 総問題数
  const totalQuestions = 3;
  
  // 現在の問題番号（1-indexed） - currentQuestionは1からスタートするので修正不要
  const questionNumber = currentQuestion;

  return (
    <div className="quiz-card">
      {/* ステータスバー */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mb-8"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-primary-600">第{questionNumber}問</h3>
          <span className="text-sm text-gray-600">全{totalQuestions}問</span>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-200">
          <div 
            className="h-2 rounded-full bg-primary-500"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </motion.div>

      {/* 彩先輩のイラスト */}
      <div className="w-40 h-40 mb-6 overflow-hidden rounded-full md:w-48 md:h-48">
        <img 
          src="./assets/aya.png" 
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

      {/* 次へボタン - 回答選択後のみ表示 */}
      {selectedAnswer !== null && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleNextQuestion}
          className="px-6 py-2 mt-6 text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          次へ
        </motion.button>
      )}
    </div>
  )
}

export default QuizCard
