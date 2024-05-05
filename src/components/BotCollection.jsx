import BotCard from './BotCard';


function BotCollection({ botList, addBotToArmy, deleteBot }) {

	const mappedBots = botList.map((bot) => {
		return <BotCard bot={bot} key={bot.id} handleAdd={addBotToArmy} handleDelete={deleteBot} />;
	});

	return (
		<div className='ui four column grid'>
			Collection of all bots
			<div className='row'>{mappedBots}</div>
		</div>
	);
}

export default BotCollection;