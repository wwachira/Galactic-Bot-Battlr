import BotCard from './BotCard';

const BotCollection = ({ bots, onEnlist, onDelete }) => {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BotCollection;