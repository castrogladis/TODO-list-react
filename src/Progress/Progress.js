import "./Progress.css"

function Progress( {progress}) {
  return (
      <span className="progreso">Tareas completadas: { progress }%</span>
  )
}

export { Progress }