import { useState } from "react";
import Question from "./Question";
import FaqQuestions from "../../data/faqData";

const Faq = () => {
  const [openAnswer, setOpenAnswer] = useState(null);

  return (
    <section className="px-2">
      <h2 className="font-oleo text-white text-2xl mb-6">FAQ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 mb-20">
        <div>
          {FaqQuestions.map((question, index, self) =>
            index < self.length / 2 ? (
              <Question key={question.id} data={question} openAnswer={openAnswer} setOpenAnswer={setOpenAnswer} />
            ) : undefined
          )}
        </div>
        <div>
          {FaqQuestions.map((question, index, self) =>
            index >= self.length / 2 ? (
              <Question key={question.id} data={question} openAnswer={openAnswer} setOpenAnswer={setOpenAnswer} />
            ) : undefined
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
