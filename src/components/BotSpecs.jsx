const BotSpecs = ({ bot, onEnlist }) => {
    return (
      <div className="bot-specs">
        <h3>{bot.name}</h3>
        <p>Class: {bot.class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <button onClick={() => onEnlist(bot)}>Enlist</button>
      </div>
    );
  };
  
  export default BotSpecs;