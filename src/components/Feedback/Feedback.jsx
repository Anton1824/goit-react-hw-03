import s from "./Feedback.module.css";

const Feedback = ({ data, total, positive }) => {
  return (
    <div>
      <ul className={s.list}>
        {Object.entries(data).map(([name, number]) => {
          return (
            <li className={s.item} key={name}>
              {name}: {number}
            </li>
          );
        })}
      </ul>

      <p className={s.item}>Total points: {total}</p>

      <p className={s.item}>Positive: %{positive} </p>
    </div>
  );
};
export default Feedback;
