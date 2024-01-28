const Question = ({ data, openAnswer, setOpenAnswer }) => {
  return (
    <div
      className="bg-slate-500 bg-opacity-20 p-3 mb-2 rounded cursor-pointer hover:bg-opacity-70 transition ease-in-out"
      onClick={() => setOpenAnswer(openAnswer === data.id ? null : data.id)}
    >
      <div className="flex justify-between text-white">
        <p>{data.question}</p>
        {openAnswer !== data.id ? <p>+</p> : <p>-</p>}
      </div>

      {openAnswer === data.id && <p className="text-slate-300 mt-2">{data.answer}</p>}
    </div>
  );
};

export default Question;
