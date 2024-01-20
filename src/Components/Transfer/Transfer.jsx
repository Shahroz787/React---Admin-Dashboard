import React, { useState } from "react";
import transactionData from "./TransferData";
import { Section } from "./TransferElements";
import { HiArrowNarrowRight } from "react-icons/hi";

const Transfer = () => {
  return (
    <Section>
      <div className="title">
        <h2>Your Transfers</h2>
      </div>

      <div className="transactions">
        {transactionData.map((Data, index) => {
          return (
            <div className="transaction" key={index}>
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <img src={Data.image} alt="transaction img" />
                </div>

                <div className="transaction__title__details">
                  <h3>{Data.name}</h3>
                  <h5>{Data.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{Data.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#" className="view">
        View all <HiArrowNarrowRight />
      </a>
    </Section>
  );
};

export default Transfer;
