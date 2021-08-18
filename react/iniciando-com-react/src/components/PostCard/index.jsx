export const PostCard = ({title, cover, body, key, id  }) => {
  
  const {post} = props;
  return (
   
    <div className="post">
                <img src={post.cover} alt={post.title} />
                <div>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
    </div>
  );
}

