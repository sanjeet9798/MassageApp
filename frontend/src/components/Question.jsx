import React, { useEffect, useState } from 'react';
import './Question.css'; // Import the CSS file
import axios from 'axios';

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [faqs,setFaqs] = useState([]);

  const getQuestions = async () => {
    try {
      const QueRes = await axios.get("http://localhost:8000/questionData");
      console.log(QueRes.data);
      setFaqs(QueRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(()=>{
      getQuestions();
  },[]);


  return (

    <>   

    <div className="que_parent">
     <div className="faq-section">
      <div>{
        faqs.map((element, index) => {
        return <h1 key={index}>{element["faq-title"]}</h1>;
        })
      }
      </div>
<br />
      <div className="faq-items">
        {faqs.map((element, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
            
            <div className="faq-question">
              {element.question}
              <span className="faq-icon">{openIndex === index ? '_' : '+'}</span>
            </div>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{element.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Question;
