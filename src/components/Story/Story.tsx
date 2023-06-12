const Story: React.FC<any> = ({ children, auth, className }) => {
  return (
    <div className={`story-container ${className ? className : null}`}>
      <div className="img-container">{children}</div>
    </div>
  );
};

export default Story;
