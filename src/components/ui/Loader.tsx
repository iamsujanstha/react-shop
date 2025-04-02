import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledLoader />
  )
}

export default Loader

const StyledLoader = styled.div`
    width: 40px;
    height: 40px;
    border: 5px solid #333;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
  `