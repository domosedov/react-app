import React, {useEffect, useState} from 'react';
// import { useCookies } from 'react-cookie';

const Posts = () => {
  // const [cookie] = useCookies(["reactJwtToken"]);
  // const cookie = {reactJwtToken: 'blablabla'}
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const url = "http://wpgraphql.local/graphql";
  const query = `
    query GET_POSTS {
      posts {
        edges {
          node {
            title
          }
        }
      }
    }
  `;


  useEffect(() => {
    const doRequest = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${cookie.reactJwtToken}`,
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        if (result.errors) {
          setError(
            result.errors.reduce(
              (acc, current) => acc + "\n" + current.message,
              ""
            )
          );
        } else {
          const {edges} = result.data.posts
          setPosts(edges)
          setLoading(false);
        }
      } catch (e) {
        setError(e.message);
      }
    };

      doRequest();
  }, [query])

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify(posts, null, 4)}</pre>
    </div>
  );
}

export default Posts;