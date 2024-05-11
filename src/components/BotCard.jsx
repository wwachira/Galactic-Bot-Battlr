import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function BotCard({ bot, onEnlist }) {
  const handleEnlistClick = () => {
    onEnlist(bot.id);
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleEnlistClick}>Enlist</button>
      <Link to={`/bots/${bot.id}`}>View Details</Link>
    </div>
  );
}

export default BotCard;