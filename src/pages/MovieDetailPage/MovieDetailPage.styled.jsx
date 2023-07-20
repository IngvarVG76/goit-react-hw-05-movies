import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Main = styled.main`
  padding: 16px;
`;

export const BackLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 16px;
  display: block;
`;

export const MovieDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  img {
    max-width: 300px;
    margin-right: 16px;
  }

  h1 {
    font-size: 24px;
    margin: 0;
  }
`;

export const Overview = styled.p`
  font-size: 16px;
  font-weight: 200;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: inline;
    margin-right: 8px;
    font-size: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const AdditionalInfo = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 8px;

    a {
      color: #007bff;
      text-decoration: none;
      font-size: 16px;
    }
  }
`;
