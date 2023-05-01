import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FriendListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 100px;
 
  padding: 0;
  align-items: center;
`;

const FriendListItem = styled.li`
  display: flex;
  width: 200px;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 15px;
`;

const FriendListItemStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => props.isOnline ? 'green' : 'red'};
`;

const FriendListItemAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

const FriendListItemName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;



function FriendList({ friends }) {
  return (
    <FriendListContainer>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id}>
          <FriendListItemStatus isOnline={isOnline} />
          <FriendListItemAvatar src={avatar} alt="User avatar" />
          <FriendListItemName>{name}</FriendListItemName>
        </FriendListItem>
      ))}
    </FriendListContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;

