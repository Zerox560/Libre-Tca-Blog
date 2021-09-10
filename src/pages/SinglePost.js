import { useParams } from "react-router";

import styled from "styled-components";

const DUMMY_POSTS = [
  {
    id: "p1",
    title: "Consecuencias de haber pasado por un tca",
    image:
      "https://images.unsplash.com/photo-1551499779-ee50f1aa4d25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis scelerisque sapien, at feugiat nisl egestas eget. Vivamus eu risus hendrerit, egestas ante pretium, ornare sem. Phasellus vel ligula odio. Proin molestie varius turpis, a mattis purus dictum quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id justo imperdiet, laoreet metus eget, iaculis diam. Aliquam risus ante, fringilla eu enim ac, aliquam malesuada dolorLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis scelerisque sapien, at feugiat nisl egestas eget. Vivamus eu risus hendrerit, egestas ante pretium, ornare sem. Phasellus vel ligula odio. Proin molestie varius turpis, a mattis purus dictum quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id justo imperdiet, laoreet metus eget, iaculis diam. Aliquam risus ante, fringilla eu enim ac, aliquam malesuada doloris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id justo imperdiet, laoreet metus eget, iaculis diam. Aliquam risus ante, fringilla eu enim ac, aliquam malesuada dolorLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis scelerisque sapien, at feugiat nisl egestas eget. Vivamus eu risus hendrerit, egestas ante pretium, ornare sem. Phasellus vel ligula odio. Proin molestie varius turpis, a mattis purus dictum quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id justo imperdiet, laoreet metus eget, iaculis diam. Aliquam risus ante, fringilla eu enim ac, aliquam malesuada doloris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id justo imperdiet, laoreet metus eget, iaculis diam. Aliquam risus ante, fringilla eu enim ac, aliquam malesuada dolorLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis scelerisque sapien, at feugiat nisl egestas eget. Vivamus eu risus hendrerit, egestas ante pretium, ornare sem. Phasellus vel ligula odio. Proin molestie varius turpis, a mattis purus dictum quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id justo imperdiet, laoreet metus eget, iaculis diam. Aliquam risus ante, fringilla eu enim ac, aliquam malesuada doloris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id justo imperdiet, laoreet metus eget, iaculis diam. Aliquam risus ante, fringilla eu enim ac, aliquam malesuada dolorLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis scelerisque sapien, at feugiat nisl egestas eget. Vivamus eu risus hendrerit, egestas ante pretium, ornare sem. Phasellus vel ligula odio. Proin molestie varius turpis, a mattis purus dictum quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id justo imperdiet, laoreet metus eget, iaculis diam. Aliquam risus ante, fringilla eu enim ac, aliquam malesuada dolor"
  },
];

const SinglePostWrapper = styled.section`
  display: grid;
  grid-template-areas:
    "title title title"
    "content content image";
  justify-items: center;
  padding: 0 2.5em;

  h1 {
    font-size: 3em;
    text-decoration: underline;
    text-align: center;
    grid-area: title;
    margin-bottom: 2em;
  }
  img {
    grid-area: image;
    width: 40vw;
    object-fit: cover;
  }
  p {
    grid-area: content;
    margin-right: 3em;
  }

  @media(max-width: 768px) {
    grid-template-areas:
    "title title title"
    "image image image"
    "content content content";

    h1 {
      margin-bottom: 1.8em;
      font-size: 1.4em;
    }
    img {
      width: 100%;
      margin-bottom: 1.5em;
    }
    p {
      margin-right: 0;
    }
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
