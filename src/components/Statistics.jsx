import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 20px;
  background-color: ${({ color }) => color};
`;

const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Percentage = styled.span`
  font-size: 16px;
`;

function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map((stat) => (
          <Item key={stat.id} color={getRandomColor()}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
}

function getRandomColor() {
  return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, 0.5)`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;

 