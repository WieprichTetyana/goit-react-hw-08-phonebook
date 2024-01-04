import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  background-color: #d4d2d2;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  a {
    text-decoration: none;
    text-transform: capitalize;
    appearance: button;
    background-color: #4d4ae8;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0)
    );
    border: 1px solid #4d4ae8;
    border-radius: 1rem;
    box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset,
      rgba(46, 54, 80, 0.075) 0 1px 1px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: Inter, sans-serif;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
    padding: 10px;
    text-align: center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    &:focus:not(:focus-visible),
    &:focus {
      outline: 0;
      background-color: #413fc5;
      border-color: #3e3bba;
      box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset,
        rgba(46, 54, 80, 0.075) 0 1px 1px, rgba(104, 101, 235, 0.5) 0 0 0 0.2rem;
    }
    &:hover {
      background-color: #3733e5;
      border-color: #3733e5;
    }
  }
`;
export const StyledWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const StyledLoggedInWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
