import Container from "../Container/Container";

function SectionWrapper({
  id,
  bg = "bg-[var(--bg-primary)]",
  children,
}) {
  return (
    <section
      id={id}
      className={`py-28 ${bg}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default SectionWrapper;