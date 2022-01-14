export default function Technology({ technologies }) {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {technologies.map((tech) => (
        <span key={tech.id} className="text-white m-1 py-1 px-3 rounded-lg" style={{backgroundColor: tech.colour}}>{tech.label}</span>
      ))}
    </div>
  );
}
