import styled from 'styled-components';

const ToggleWrapper = styled.div`
    width: 50px;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto;
    display: flex;
    background: ${p => p.theme.bodyFontColor};
`;

const Notch = styled.div`
    cursor: pointer;
    height: 21px;
    width: 21px;
    border: 1px solid #666;
    margin-top: 1px;
    background: white;
    border-radius: 50%;
    transition: transform 0.1s linear;
    transform: translate(${p => p.isActive ? '26px' : '1px'});
`;

const Toggle = ({isActive, onToggle}) => {
    return (
        <ToggleWrapper onClick={onToggle} >
            <Notch isActive={isActive}/>
        </ToggleWrapper>
    )
};

export default Toggle;