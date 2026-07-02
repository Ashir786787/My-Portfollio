import './SectionTitle.css'

const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="section-title-wrapper">
      <p className="section-subtitle">{subtitle}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}

export default SectionTitle
