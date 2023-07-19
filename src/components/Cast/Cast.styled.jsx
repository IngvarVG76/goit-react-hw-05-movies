import styled from '@emotion/styled';


export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  background: linear-gradient(to right, #ffffff, #ece9e6);
  border-radius: 4px;
`;

export const ActorName = styled.h3`
  font-size: 16px;
  max-width: 100%;
`;

export const ActorImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 4px;
`;

export const ActorCharacter = styled.p`
  max-width: 100%;
  font-size: 14px;
`;