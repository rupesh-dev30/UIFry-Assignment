export default function Paragraph({ children, title, paragraph }) {
  return (
    <>
      <div className="paragraph_title">
        {children}
        <h4>{title}</h4>
      </div>
      <p>{paragraph}</p>
    </>
  );
}
