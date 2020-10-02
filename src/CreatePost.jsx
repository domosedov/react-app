import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [query, setQuery] = useState(null);
  const [cookie] = useCookies(["reactJwtToken"]);

  const url = "http://wpgraphql.local/graphql";

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setQuery({
      query: `
          mutation CREATE_POST($input: CreatePostInput!) {
            createPost(input: $input) {
              post {
                id
                title
                date
                slug
              }
            }
          }
        `,
      operationName: `CREATE_POST`,
      variables: {
        input: {
          clientMutationId: "CreatePost",
          title: `${title}`,
        },
      },
    });
  };

  useEffect(() => {
    const sendData = async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookie.reactJwtToken}`
        },
        body: JSON.stringify(query),
      });

      console.dir(response);

      const data = await response.json();

      console.dir(data);
    };

    if (query) {
      console.log(query);
      sendData();
    }
  }, [cookie.reactJwtToken, query]);

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <button type="submit">Create!</button>
      </form>
    </div>
  );
}

export default CreatePost;