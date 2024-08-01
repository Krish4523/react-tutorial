/* pass color red, bgColor: yellow, fontSize: 25px, fontStyle: italic as properties
to component to "LJ Student" text in <p> using props  */
export function Task6({
  color = "red",
  bgColor = "yellow",
  fontSize = "25px",
  fontStyle = "italic",
}) {
  return (
    <p
      style={{
        color: color,
        backgroundColor: bgColor,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontWeight: "bold",
      }}
    >
      LJ Student
    </p>
  );
}
