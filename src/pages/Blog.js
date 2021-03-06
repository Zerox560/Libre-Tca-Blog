import { Link } from "react-router-dom";

import styled from "styled-components";
import { PageLayout } from "../components/common/PageLayout";

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

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${(p) => p.theme.bodyFontColor};
`;

const PostsWrapper = styled.section`
  margin-top: 2em;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "image image image"
    "title title title";
  justify-content: center;
  flex-wrap: nowrap;

  ul {
    list-style: none;

    li img {
      cursor: pointer;
      grid-area: image;
      width: 100%;
      border: solid 3px ${(p) => p.theme.bodyFontColor};
    }

    p {
      font-weight: bold;
      grid-area: title;
      text-align: center;
    }
  }
`;

const Blog = () => {
  const posts = DUMMY_POSTS.map((post) => (
    <ul>
      <StyledLink to={`/blog/post/${post.id}`}>
        <li key={post.id}>
          <img src={post.image} alt="" />
          <p>{post.title}</p>
        </li>
      </StyledLink>
    </ul>
  ));

  return (
    <PageLayout>
      <h1>Posts m??s recientes</h1>
      <hr />
      <PostsWrapper>{posts}</PostsWrapper>
    </PageLayout>
  );
};

export default Blog;
