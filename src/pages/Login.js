import PasswordInput from "../components/common/PasswordInput";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Spinner from "../components/common/Spinner";
import { PageLayout } from "../components/common/PageLayout";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: ${p => p.theme.cardColor};
  border: solid 1px rgba(0, 0, 0, .3);
  padding: 16px;
  box-sizing: border-box;
  color: ${p => p.theme.bodyFontColor};
  border-radius: 4px;
  margin: 3em auto;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
  
  >${Input} {
    margin-top: 1.2em;
  }
`;

let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const inputChangeHandler = (ev) => {
    ev.persist();
    setFormFields((s) => ({
      ...s,
      [ev.target.name]: ev.target.value,
    }));
  };

  const formSubmitHandler = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <hr />
      <Form onSubmit={formSubmitHandler}>
        {isLoading ? <Spinner /> : <>
        <span>Login if you already have an account.</span>
        <Input
          name="username"
          type="text"
          value={formFields.username}
          onChange={inputChangeHandler}
          placeholder="Username"
        />
        <PasswordInput
          name="password"
          value={formFields.password}
          onChange={inputChangeHandler}
        />
        </>}
        <Button large type="submit" disabled={isLoading} >
          {isLoading ? 'Loading...' : 'Login'}
        </Button>
        {!isLoading && <>
          <div className="alt-text">or</div>
          <Button secondary type="button">
            Register
          </Button>
        </>}
      </Form>
    </PageLayout>
  );
};

export default Login;
