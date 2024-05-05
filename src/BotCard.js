const BotCard = ({ bot, onEnlist, onDelete }) => {
    return (
      <div className="bot-card">
        <h3>{bot.name}</h3>
        <p>Class: {bot.class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <div>
          <button onClick={() => onEnlist(bot)}>Enlist</button>
          <button onClick={() => onDelete(bot)}>x</button>
        </div>
      </div>
    );
  };
  
  export default BotCard;