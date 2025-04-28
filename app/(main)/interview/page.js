import React from 'react'
import StatsCards from './_components/stats-cards'
import { getAssessments } from '@/actions/interview'
import PerformanceChart from './_components/performace-chart'
import QuizList from './_components/quiz-list'

const InterviewPage = async () => {
  const assessments = await getAssessments()
  return (
    <div>
      <div className='flex gap-5 flex-col'>
        <h1 className='md:text-6xl text-3xl font-bold gradient-title mb-2'>Ace Your Interview</h1>
        <StatsCards assessments={assessments}/>
        <PerformanceChart assessments={assessments}/>
        <QuizList assessments={assessments}/>
      </div>
    </div>
  )
}

export default InterviewPage