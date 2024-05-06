import s from "./Options.module.css";

const Options = ({ updateFeedback, feedback, total, onReset }) => {
  return (
    <div>
      <ul className={s.list}>
        {Object.keys(feedback).map((item) => {
          return (
            <li className={s.item} key={item}>
              <button className={s.btn} onClick={() => updateFeedback(item)}>
                {item}
              </button>
            </li>
          );
        })}
        {total > 0 && (
          <li>
            <button className={s.btn} onClick={onReset}>
              reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Options;