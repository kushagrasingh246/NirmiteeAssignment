import Comments from "./comments/Comments";

const App = () => {
  return (
    
    <section className='section'>
      <div >
        <h1 id='underline'>Stories</h1>  
      </div>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </section>
  );
};

export default App;
