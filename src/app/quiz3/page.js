/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const QuestionForm = () => {
    const axiosPublic = useAxiosPublic()
  
    const [formData, setFormData] = useState({
      category:'',
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
  
  
  
      axiosPublic.post('/quiz4', discusItem)
        .then(res => {
          console.log(res.data)
          if (res.data.__v === 0) {
            toast.success("The question has been posted");
          }
        })
        .catch(error => {
          console.error('Error posting :', error);
        });
      // console.log(formData);
    };
  

  return (
    <div className="container  mt-[100px]  mx-auto ">

          <form onSubmit={handleSubmit} className="lg:w-[800px] md:w-[600px]  sm:w-[500px] lg:ml-[100px] md:ml-[50px] sm:ml-[0px] mx-auto bg-[#F5F5F4] p-8 rounded shadow-2xl">
            
          <div className="mb-12">
              <label className="block text-[#4f675b] text-[22px] mb-2">
                Category
              </label>
              <select
                type="text" name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-4 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="CSS">CSS</option>
                <option value="HTML">HTML</option>
                <option value="React">React</option>
                {/* <option value="Next.js">Next.js</option>
                <option value="MongoDB">MongoDB</option>
                <option value="Node.js">Node.js</option>
                <option value="Tailwind">Tailwind</option>
                <option value="Express.js">Express.js</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Material UI">Material UI</option>
                <option value="Firebase">Firebase</option> */}
              </select>
            </div>

            <div className="mb-6 mt-[50px]">
              <label className="block text-[#4f675b] text-[22px] mb-2">
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
            <div className="mb-6">
              <label className="block text-[#4f675b] text-[22px] mb-2">
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
            <div className="mb-6">
              <label className="block text-[#4f675b] text-[22px] mb-2">
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
            <div className="mb-6">
              <label className="block text-[#4f675b] text-[22px] mb-2">
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

            <div className="mb-6">
              <label className="block text-[#4f675b] text-[22px] mb-2">
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
              <label className="block text-[#4f675b] text-[22px] mb-2">
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
                className="bg-[#4f675b] text-white py-2 px-4 w-[150px] h-[50px] rounded hover:bg-[#87CEEB] focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>



  );
};

export default QuestionForm;