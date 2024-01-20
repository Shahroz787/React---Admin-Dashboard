import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Section } from "./FaqElements";
import FaqsData from "./FaqsData";

const FAQ = () => {
  const [Data, setData] = useState(FaqsData);

  return (
    <Section>
      <div className="title">
        <h2>Info for Deliveryman</h2>
      </div>

      <div className="faqs">
        {Data.map((faq, index) => {
          return (
            <div className="faq" key={index}>
              <div className="info">
                {faq.icon}
                <h4>{faq.text}</h4>
              </div>
              <IoIosArrowForward />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQ;
