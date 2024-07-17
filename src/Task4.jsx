/* Array[number] & we want to multiply all number by 6  */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function Task4() {
  return (
    <>
      <ol>
        {arr.map((n) => (
          <li key={n}>
            6 * {n} = {6 * n}
          </li>
        ))}
      </ol>
      {/* display numbers > 3 */}
      <ol className="flex gap-2 mb-4">
        {arr.map((n, index) => {
          if (n > 3) return <li key={index}>{n}</li>;
        })}
      </ol>
      {/* skip digit 3 */}
      <ol className="flex gap-2 mb-4">
        {arr
          // .filter((n) => n !== 3)
          .map((n, index) => {
            if (n !== 3) return <li key={index}>{n}</li>;
          })}
      </ol>
    </>
  );
}
