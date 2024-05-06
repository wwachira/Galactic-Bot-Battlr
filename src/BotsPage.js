import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';
import SortBar from './SortBar';

const BotsPage = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [filteredBots, setFilteredBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => {
        setBots(data);
        setFilteredBots(data);
      });
  }, []);

  const handleEnlist = (bot) => {
    if (!yourBotArmy.find(b => b.class === bot.class)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const handleRelease = (bot) => {
    setYourBotArmy(yourBotArmy.filter(b => b.id !== bot.id));
  };

  const handleDelete = (bot) => {
    setBots(bots.filter(b => b.id !== bot.id));
    setYourBotArmy(yourBotArmy.filter(b => b.id !== bot.id));
  };

  const handleSort = (sortBy) => {
    setSortBy(sortBy);
    setFilteredBots([...bots].sort((a, b) => b[sortBy] - a[sortBy]));
  };

  const handleFilter = (botClass) => {
    setFilteredBots(bots.filter(bot => bot.class === botClass));
  };

  return (
    <div className="bots-page">
      <YourBotArmy army={yourBotArmy} onRelease={handleRelease} />
      <SortBar onSort={handleSort} />
      {selectedBot ? (
        <BotSpecs bot={selectedBot} onEnlist={handleEnlist} />
      ) : (
        <BotCollection bots={filteredBots} onEnlist={handleEnlist} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default BotsPage;
