import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonNames = ["All", "Game", "Live", "Music", "News", "Sitcom", "Stocks", "Music", "News", "Sitcom", "Stocks"];

  const buttonList = buttonNames.map((name, index) => (
    <Button key={index} name={name} />
  ));

  return (
    <div className="flex">{buttonList}</div>
  );
};


export default ButtonList