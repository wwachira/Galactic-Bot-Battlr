import React, { useEffect, useState } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

function BotsPage() {
	const [botList, setBotList] = useState([]);
	const [botArmy, setBotArmy] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5173//bots')
			.then((response) => response.json())
			.then((data) => setBotList(data))
	}, []);

	function addBotToArmy(singleBotInArmy) {
		if (!botArmy.find((bot) => bot === singleBotInArmy)) {
			const addedBot = botList.find(bot => bot === singleBotInArmy)
			setBotArmy([...botArmy, addedBot]);
		}
		console.log(botArmy);
	}

	function removeBotFromArmy(singleBotInArmy) {
		const filteredArmy = botArmy.filter(bot => bot !== singleBotInArmy);
		setBotArmy(filteredArmy)
	}

	function deleteBot(singleBotInArmy) {
		if (botArmy.find((bot) => bot === singleBotInArmy)) {
			setBotList(botList.filter((bot) => bot !== singleBotInArmy));
			setBotArmy(botArmy.filter((bot) => bot !== singleBotInArmy));

			fetch(`http://localhost:5173//bots/${singleBotInArmy.id}`, {
				method: 'DELETE'
			});
		}
		console.log(botArmy);
	}
	return (
		<div>
			<YourBotArmy
				botArmy={botArmy}
				deleteBot={deleteBot}
				removeBotFromArmy={removeBotFromArmy}
			/>
			<BotCollection
				botList={botList}
				addBotToArmy={addBotToArmy}
				deleteBot={deleteBot}
			/>
		</div>
	);
}

export default BotsPage;