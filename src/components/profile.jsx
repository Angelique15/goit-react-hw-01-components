import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 650px;
  margin-top: 100px;
  margin-left: 32%;
  background-color: #C5D7DC;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

const DescriptionContainer = styled.div`
  display: flex;
  width: 500px;
  height:400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Tag = styled.p`
  font-size: 16px;
  color: gray;
  margin-bottom: 5px;
`;

const Location = styled.p`
  font-size: 16px;
  color: gray;
  margin-bottom: 20px;
`;

const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  background-color: #CDDDE1;
  padding: 10px;
  border-radius: 10px;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatsLabel = styled.span`
  font-size: 14px;
  color: gray;
  margin-bottom: 5px;
`;

const StatsQuantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;


function Profile({ username, tag, location, avatar, stats }) {
    return (
        <ProfileContainer>
            <DescriptionContainer>
                <Avatar src={avatar} alt="User avatar" />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </DescriptionContainer>

            <StatsList>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{stats.followers}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{stats.views}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{stats.likes}</StatsQuantity>
                </StatsItem>
            </StatsList>
        </ProfileContainer>
    );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

