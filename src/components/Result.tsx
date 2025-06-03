import React from 'react'
import { motion } from 'framer-motion'
import { FaTwitter } from 'react-icons/fa'
import { RiLineFill } from 'react-icons/ri'

interface ResultProps {
  totalScore: number
}

const Result = ({ totalScore }: ResultProps) => {
  // 最大可能スコア: 3問 × 最大3点 = 9点
  // スコアに基づいて星評価を計算（5段階または3段階）
  const starRating = totalScore >= 7 ? 5 : 3

  // シェアテキスト
  const shareText = `丸洋建設の適性診断クイズで私の建設業適性度は${starRating}つ星でした！ #丸洋建設 #適性診断 #新卒採用`
  
  // シェアURL（実際のURLに置き換えてください）
  const shareUrl = 'https://maruyo-construction.co.jp/quiz'

  // Twitterシェア
  const shareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    window.open(url, '_blank')
  }

  // LINEシェア
  const shareLine = () => {
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
    window.open(url, '_blank')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="mb-6 text-2xl font-bold text-center md:text-3xl">
          診断結果
        </h2>
        
        <div className="mb-6 text-center">
          <p className="mb-2 text-lg">あなたの建設業適性度</p>
          <div className="flex justify-center mb-4 text-3xl text-secondary-500">
            {[...Array(starRating)].map((_, i) => (
              <span key={i} role="img" aria-label="星">★</span>
            ))}
          </div>
          
          <p className="text-lg">
            {starRating === 5 
              ? '素晴らしい！あなたは建設業に非常に向いています！' 
              : 'あなたは建設業の素質があります！'}
          </p>
        </div>

        <div className="mb-8 p-4 bg-gray-100 rounded-md">
          <p className="text-center">
            {starRating === 5 
              ? '問題解決能力と先見性を持ち、チームワークも大切にできるあなたは、建設業で大いに活躍できるでしょう！' 
              : '建設業ではチームワークと問題解決能力が大切です。あなたの素質をさらに伸ばしてみませんか？'}
          </p>
        </div>

        <div className="mb-8">
          <a 
            href="https://maruyo-construction.co.jp/recruit/entry" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full btn btn-primary text-center"
            aria-label="丸洋建設の会社説明会に申し込む"
          >
            丸洋建設の会社説明会に申し込む
          </a>
        </div>

        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={shareTwitter}
            className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md"
            aria-label="Twitterでシェア"
          >
            <FaTwitter className="mr-2" />
            シェア
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={shareLine}
            className="flex items-center px-4 py-2 text-white bg-green-500 rounded-md"
            aria-label="LINEでシェア"
          >
            <RiLineFill className="mr-2" />
            LINE
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Result
