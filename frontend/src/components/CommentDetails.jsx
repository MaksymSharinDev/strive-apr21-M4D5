import faker from "faker";

const CommentDetails = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          Mike
        </a>
        <div className="metadata">
          <span className="date">Today at 11:00AM</span>
        </div>
        <div className="text">Eww it tastes like Bootstrap</div>
      </div>
    </div>
  );
};
