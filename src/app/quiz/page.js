
/* eslint-disable react-hooks/rules-of-hooks */
"use client"


import { useState } from 'react';
// import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosPublic from '../hooks/useAxiosPublic';

const QuestionForm = () => {


  // const { user } = useAuth();
  const axiosPublic = useAxiosPublic()


  const [formData, setFormData] = useState({
    category: '',
    questions: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      questions: updatedQuestions,
    }));
  };

  const addQuestion = () => {
    setFormData((prevData) => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        {
          question: '',
          options: ['', '', '', ''],
          correctAnswer: '',
        },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const discusItem = {
      // email: user?.email,
      formData
    }

    console.log('discusItem:', discusItem);


    axiosPublic.post('/quiz3',discusItem)
    .then(res => {
      // console.log(res.data)
      if (res.data.__v === 0) {
        toast.success("Your quiz has been posted");
      }
    })
    .catch(error => {
      console.error('Error posting quiz:', error);
    });


    console.log(formData);
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Create Question Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 font-medium">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          {formData.questions.map((question, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Question {index + 1}</h2>
              <div className="mb-4">
                <label htmlFor={`question-${index}`} className="block mb-2 font-medium">
                  Question
                </label>
                <input
                  type="text"
                  id={`question-${index}`}
                  name={`question-${index}`}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={question.question}
                  onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Options</label>
                {question.options.map((option, optionIndex) => (
                  <input
                    key={optionIndex}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    placeholder={`Option ${optionIndex + 1}`}
                    value={option}
                    onChange={(e) =>
                      handleQuestionChange(index, 'options', [
                        ...question.options.slice(0, optionIndex),
                        e.target.value,
                        ...question.options.slice(optionIndex + 1),
                      ])
                    }
                    required
                  />
                ))}
              </div>
              <div className="mb-4">
                <label htmlFor={`correct-answer-${index}`} className="block mb-2 font-medium">
                  Correct Answer
                </label>
                <input
                  type="text"
                  id={`correct-answer-${index}`}
                  name={`correct-answer-${index}`}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={question.correctAnswer}
                  onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
                  required
                />
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Add Question
        </button>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;