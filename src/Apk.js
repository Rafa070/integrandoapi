import Comments from "./pages/Comments";

const Apk = () => {
  return (
    <div>
      <h1></h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default Apk;