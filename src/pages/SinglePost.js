import { useParams } from "react-router";

import styled from "styled-components";

const DUMMY_POSTS = [
  {
    id: "p1",
    title: "Consecuencias de haber pasado por un tca",
    image:
      "https://images.unsplash.com/photo-1551499779-ee50f1aa4d25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis scelerisque sapien, at feugiat nisl egestas eget. Vivamus eu risus hendrerit, egestas ante pretium, ornare sem. Phasellus vel ligula odio. Proin molestie varius turpis, a mattis purus dictum quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id justo imperdiet, laoreet metus eget, iaculis diam. Aliquam risus ante, fringilla eu enim ac, aliquam malesuada dolorLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis scelerisque sapien, at feugiat nisl egestas eget. Vivamus eu risus hendrerit, egestas ante pretium, ornare sem. Phasellus vel ligula odio. Proin molestie varius turpis, a mattis purus dictum quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id justo imperdiet, laoreet metus eget, iaculis diam. Aliquam risus ante, fringilla eu enim ac, aliquam malesuada dolor",
  },
];

const SinglePostWrapper = styled.section`
  display: grid;
  grid-template-areas:
    ". title ."
    "image image image"
    "content content content";
  justify-items: center;
  padding: 0 2.5em;

  h1 {
    text-align: center;
    grid-area: title;
  }
  img {
    border: solid 3px ${(p) => p.theme.bodyFontColor};
    grid-area: image;
    max-height: 50vh;
    object-fit: cover;
    width: 80vw;
    margin-bottom: 2em;
  }
  p {
    grid-area: content;
  }
`;

const SinglePost = () => {
  const { postId } = useParams();
  console.log(postId);

  const post = DUMMY_POSTS.find((p) => p.id === postId);

  return (
    <SinglePostWrapper>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt="" />
          <p>{post.content}</p>
        </>
      ) : (
        <h1>No se encontró ese post.</h1>
      )}
    </SinglePostWrapper>
  );
};

export default SinglePost;
