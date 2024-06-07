import styled from 'styled-components';
import backgroundImage from 'assets/main-bg.jpg';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;