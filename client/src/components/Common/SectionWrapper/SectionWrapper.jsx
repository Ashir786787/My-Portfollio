import Container from "../Container/Container";

function SectionWrapper({
  id,
  bg = "",
  className = "",
  containerClassName = "",
  children,
}) {
  return (
    <section id={id} className={`section-shell ${bg} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export default SectionWrapper;
