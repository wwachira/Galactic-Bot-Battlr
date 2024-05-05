const YourBotArmy = ({ army, onRelease }) => {
    return (
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        {army.map(bot => (
          <div key={bot.id} className="bot-card">
            <p>{bot.name}</p>
            <button onClick={() => onRelease(bot)}>Release</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default YourBotArmy; 