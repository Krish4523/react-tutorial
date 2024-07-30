/* WAP having an array of strings & convert in uppercase using map method */
const movies = [
  "the prestige",
  "memento",
  "interstellar",
  "oppenheimer",
  "tenet",
  "the dark knight",
];

export function Task1 () {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">List of Movies</h3>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
}
