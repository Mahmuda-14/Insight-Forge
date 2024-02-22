/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';


const QuestionForm = () => {
    const axiosPublic = useAxiosPublic()
  
    const [formData, setFormData] = useState({
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correctAnswer: '',
  
    });
  
    // console.log(formData);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const discusItem = {
        // email: user?.email,
        formData
      }
  
      console.log('discusItem:', discusItem);
  
  
  
      axiosPublic.post('/quiz3', discusItem)
        .then(res => {
          console.log(res.data)
          if (res.data.__v === 0) {
            toast.success("Your job has been posted");
          }
        })
        .catch(error => {
          console.error('Error posting job:', error);
        });
      // console.log(formData);
    };
  

  return (
    <div className="container  mt-8">

          <form onSubmit={handleSubmit} className="lg:w-[800px] md:w-[600px]  sm:w-[500px]  mx-auto bg-white p-8 rounded shadow-md">
            
           
            <div className="mb-12 mt-[80px]">
              <label className="block text-teal-600 text-[22px] mb-2">
                Question:
              </label>
              <input
                type="text"
                name="question"
                value={formData.question}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter Question"
              />
            </div>
            <div className="mb-12">
              <label className="block text-teal-600 text-[22px] mb-2">
                Option 1:
              </label>
              <input
                type="text"
                name="option1"
                value={formData.option1}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Option 1"
              />
            </div>
            <div className="mb-12">
              <label className="block text-teal-600 text-[22px] mb-2">
                Option 2:
              </label>
              <input
                type="text"
                name="option2"
                value={formData.option2}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Option 2"
              />
            </div>
            <div className="mb-12">
              <label className="block text-teal-600 text-[22px] mb-2">
                Option 3:
              </label>
              <input
                type="text"
                name="option3"
                value={formData.option3}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Option 3"
              />
            </div>

            <div className="mb-12">
              <label className="block text-teal-600 text-[22px] mb-2">
                Option 4:
              </label>
              <input
                type="text"
                name="option4"
                value={formData.option4}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Option 4"
              />
            </div>

            <div className="mb-12">
              <label className="block text-teal-600 text-[22px] mb-2">
                Correct Answer
              </label>
              <input
                type="text"
                name="correctAnswer"
                value={formData.correctAnswer}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Correct Answer"
              />
            </div>


            <div className="mb-4">
              <button
                type="submit"
                className="bg-[#87CEEB] text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>



  );
};

export default QuestionForm;
