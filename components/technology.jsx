export default function Technology({ technologies }) {
  return (
    <div>
      {technologies.map((tech) => (
        <p key={tech.id}>{tech.label}</p>
      ))}
    </div>
  );
}
