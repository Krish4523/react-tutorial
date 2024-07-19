/* pass T1 & T2 marks of 2 students & read the information & display in table format */
export function Task9({ students }) {
  return (
    <table rules="all" border={1} cellPadding={4}>
      <thead className="border-b-2">
        <tr>
          {Object.keys(students[0]).map((head) => (
            <th key={head}>{head.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            {Object.values(student).map((data, i) => (
              <td key={i}>{data}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
