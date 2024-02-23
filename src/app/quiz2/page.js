/* eslint-disable react-hooks/rules-of-hooks */
"use client"


import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Image from 'next/image';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';

const Quiz = () => {
  const router = useRouter();
  const axiosPublic = useAxiosPublic();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [scoreImage, setScoreImage] = useState('https://i.ibb.co/31FQ0LM/unnamed.gif');

  useEffect(() => {
    // Update score image based on score
    if (score < 4) {
      setScoreImage('https://i.ibb.co/Xywycty/1677009437-102953-gif-url.gif');
    } else {
      setScoreImage('https://i.ibb.co/31FQ0LM/unnamed.gif');
    }
  }, [score]);


  useEffect(() => {
   
    axiosPublic.get('/quiz4')
      .then(res => {
        setQuestions(res.data);
      })
      .catch(error => {
        console.error('Error fetching quiz questions:', error);
      });
  }, [axiosPublic]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleFinishQuiz = () => {
    router.push('/'); 
  };

  return (
    <div className="container mx-auto">
       <DrawerAppBar></DrawerAppBar>
      {showScore ? (
        <div className="text-center m-[200px]">
           <Image className='flex justify-center items-center mx-auto' src={scoreImage} alt="ok" width={300} height={200}></Image>
          <h2 className="text-2xl font-semibold mt-[50px]">Your Score: {score}</h2>
          <button
            className="mt-[50px] p-2 bg-[#006A4E] text-white rounded-md"
            onClick={handleFinishQuiz}
          >
            Finish Quiz
          </button>
        </div>
      ) : (
        <div className="text-center m-[200px]">
          <h2 className="text-2xl font-semibold mb-4">
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <h3 className="text-lg font-medium mb-2">
            {questions[currentQuestion]?.question} 
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              className={`p-4 bg-gray-200 rounded-md ${
                selectedOption === questions[currentQuestion]?.option1 ? 'bg-[#4f675b] text-white' : ''
              }`}
              onClick={() => handleOptionSelect(questions[currentQuestion]?.option1)}
            >
              {questions[currentQuestion]?.option1}
            </button>
            <button
              className={`p-4 bg-gray-200 rounded-md ${
                selectedOption === questions[currentQuestion]?.option2 ? 'bg-[#4f675b] text-white' : ''
              }`}
              onClick={() => handleOptionSelect(questions[currentQuestion]?.option2)}
            >
              {questions[currentQuestion]?.option2}
            </button>
            <button
              className={`p-4 bg-gray-200 rounded-md ${
                selectedOption === questions[currentQuestion]?.option3 ? 'bg-[#4f675b] text-white' : ''
              }`}
              onClick={() => handleOptionSelect(questions[currentQuestion]?.option3)}
            >
              {questions[currentQuestion]?.option3}
            </button>
            <button
              className={`p-4 bg-gray-200 rounded-md ${
                selectedOption === questions[currentQuestion]?.option4 ? 'bg-[#4f675b] text-white' : ''
              }`}
              onClick={() => handleOptionSelect(questions[currentQuestion]?.option4)}
            >
              {questions[currentQuestion]?.option4}
            </button>
           
          </div>
          <button
            className="mt-[100px] p-2 bg-[#4f675b] text-white rounded-md w-[150px] h-[50px]"
            onClick={handleNextQuestion}
          >
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
