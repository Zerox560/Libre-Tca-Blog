import { useState } from 'react';
import styled from 'styled-components';

import Input from './Input';

const PasswordInputWrapper = styled.div`
    display: flex;
    ~div {
        margin-bottom: 8px;
    }
`

const InputStyled = styled(Input).attrs(() => ({
    type: 'password',
    placeholder: 'Password'
}))`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
    cursor: pointer;
    height: 40px;
    border: solid 1px #ccc;
    box-sizing: border-box;
    font-size: 0.9em;
    display: flex;
    padding: 8px;
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: white;
    font-weight: bold;
    user-select: none;
    color: black;
`;

const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    
    const toggleShowPasswordHandler = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <>
            <PasswordInputWrapper>
                <InputStyled {...props} />
                <ToggleButton onClick={toggleShowPasswordHandler}>
                    {showPassword ? 'Hide' : 'Show'}
                </ToggleButton>
            </PasswordInputWrapper>
            <div>
                {showPassword ? props.value : ''}
            </div>
        </>
    )
};

export default PasswordInput;