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

  // 質問番号に対応する彩先輩の画像を取得
  const getAyaImage = () => {
    return `./assets/aya-q${questionNumber}.png`;
  };

  return (
    <div className="quiz-card relative z-10">
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-200 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* ステータスバー */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mb-8"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-primary-600">第{questionNumber}問</h3>
          <span className="text-sm font-medium px-3 py-1 bg-primary-50 text-primary-700 rounded-full border border-primary-200">全{totalQuestions}問</span>
        </div>
        <div className="w-full h-3 rounded-full bg-gray-200 shadow-inner">
          <motion.div 
            initial={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-3 rounded-full bg-gradient-to-r from-primary-400 to-primary-600"
          />
        </div>
      </motion.div>

      {/* 彩先輩のイラスト */}
      <motion.div 
        className="relative mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-40 h-40 mb-1 overflow-hidden rounded-full border-4 border-primary-100 md:w-48 md:h-48 shadow-lg mx-auto relative z-10">
          <img 
            src={getAyaImage()}
            alt="彩先輩" 
            className="object-cover w-full h-full"
          />
        </div>
        {/* 彩先輩の下の装飾的な影 */}
        <div className="w-32 h-4 bg-gray-200 rounded-full mx-auto -mt-2 opacity-30 blur-sm"></div>
      </motion.div>

      {/* 質問テキスト */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mb-8 p-5 bg-white rounded-xl shadow-lg border-l-4 border-primary-400"
      >
        <h2 className="text-xl font-medium text-gray-800 md:text-2xl">{question.text}</h2>
      </motion.div>

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
            className={`quiz-option relative w-full text-left p-4 mb-4 rounded-xl shadow-md transition-all duration-200 
              ${selectedAnswer === index 
                ? 'border-2 border-primary-500 bg-primary-50' 
                : 'border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/30'
              }`}
            whileHover={{ 
              scale: selectedAnswer === null ? 1.02 : 1,
              boxShadow: selectedAnswer === null ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : ""
            }}
            whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
            aria-label={`選択肢: ${choice.text}`}
          >
            {/* 選択肢前の番号表示 */}
            <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary-100 text-primary-700 font-bold">
              {index + 1}
            </span>
            <span className="text-gray-800">{choice.text}</span>
            
            {/* 選択されたときのチェックマーク */}
            {selectedAnswer === index && (
              <motion.span 
                initial={{ scale: 0, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ duration: 0.3 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-primary-500 text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>

      {/* リアクション */}
      {showReaction && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md p-5 mt-6 text-center text-white rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 shadow-lg border border-primary-300"
        >
          <span className="block text-lg font-medium">{reaction}</span>
        </motion.div>
      )}

      {/* 次へボタン - 回答選択後のみ表示 */}
      {selectedAnswer !== null && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleNextQuestion}
          className="px-8 py-3 mt-8 text-white font-medium transition-all rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center">
            次へ
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </motion.button>
      )}
    </div>
  )
}

export default QuizCard
