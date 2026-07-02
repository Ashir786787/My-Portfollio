import './SocialIcons.css'

const SocialIcons = ({ socials = [] }) => {
  return (
    <div className="social-icons">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialIcons
