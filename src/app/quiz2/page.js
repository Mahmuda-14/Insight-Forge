/* eslint-disable react-hooks/rules-of-hooks */
"use client"



import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Mercury', 'Venus', 'Earth', 'Jupiter'],
    correctAnswer: 'Jupiter',
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'NaCl', 'C6H12O6'],
    correctAnswer: 'H2O',
  },
  {
    question: 'What is the tallest mammal?',
    options: ['Giraffe', 'Elephant', 'Hippopotamus', 'Rhinoceros'],
    correctAnswer: 'Giraffe',
  },
];

const Quiz = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

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
    router.push('/result'); 
  };

  return (
    <div className="container mx-auto">
      {showScore ? (
        <div className="text-center m-[200px]">
          <Image className='flex justify-center items-center mx-auto' src="https://i.ibb.co/31FQ0LM/unnamed.gif" alt="ok" width={300} height={200}></Image>
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
            {questions[currentQuestion].question}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`p-4 bg-gray-200 rounded-md ${
                  selectedOption === option ? 'bg-[#006A4E] text-white' : ''
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="mt-[100px] p-2 bg-[#006A4E] text-white rounded-md w-[150px] h-[50px]"
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