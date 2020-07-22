import styled from 'styled-components';

export const FormWrap = styled.div`
    .form-row {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .halfwidth{
        width: 50%;
    }
    .error{
        margin-top: 10px;
        display: block;
        color: red;
    }
    .form-output{
        margin-top: 10px;
    }
    .success{
        color: green;
    }
`;