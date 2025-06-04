import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// モーダルプロップス型定義
type FaqModalProps = {
  onClose: () => void
}

// FAQ項目の型定義
type FaqItem = {
  question: string
  answer: string
}

// FAQ項目のデータ
const faqItems: FaqItem[] = [
  {
    question: '丸洋建設ではどのような仕事がありますか？',
    answer: '丸洋建設では、建築工事、土木工事、設備工事など多岐にわたる分野で活躍できます。未経験からスタートして専門知識を身につけながら成長できる環境を整えています。'
  },
  {
    question: '未経験でも応募できますか？',
    answer: 'はい、もちろん可能です。丸洋建設では人柄や成長意欲を重視しています。入社後の研修制度も充実していますので、建設業が初めての方でも安心して働き始められます。'
  },
  {
    question: '働き方改革にはどのように取り組んでいますか？',
    answer: '週休二日制の導入、ICT技術の活用による業務効率化、残業時間の削減など、ワークライフバランスを重視した職場環境づくりに積極的に取り組んでいます。'
  },
  {
    question: 'キャリアパスについて教えてください',
    answer: '入社後は現場作業からスタートし、経験を積みながら施工管理や専門技術者へとステップアップできます。また、マネジメント職や専門分野のエキスパートなど、多様なキャリアパスを用意しています。'
  },
  {
    question: '会社説明会や現場見学はできますか？',
    answer: '定期的に会社説明会や現場見学会を開催しています。実際の職場環境や雰囲気を感じていただくことで、より具体的な仕事のイメージを持っていただけます。詳細は採用サイトをご確認ください。'
  }
]

/**
 * 採用FAQをモーダルで表示するコンポーネント
 */
const FaqModal: React.FC<FaqModalProps> = ({ onClose }) => {
  // モーダル内部の参照
  const modalRef = useRef<HTMLDivElement>(null)

  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // モーダル外クリックで閉じる
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
      aria-modal="true"
      role="dialog"
      aria-label="採用FAQ"
    >
      <motion.div
        ref={modalRef}
        className="w-11/12 max-w-2xl max-h-[80vh] overflow-y-auto bg-white rounded-lg shadow-xl p-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">採用FAQ</h2>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={onClose}
            aria-label="閉じる"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">さらに詳しい情報は採用サイトをご覧ください</p>
          <a
            href="https://www.maruyoukensetu.jp/recruit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-secondary-500 text-white rounded-full hover:bg-secondary-600 transition-colors font-medium"
          >
            採用サイトを見る
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default FaqModal
