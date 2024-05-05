const botTypeClasses = {
	Support: 'icon plus circle',
	Medic: 'icon ambulance',
	Assault: 'icon military',
	Defender: 'icon shield',
	Captain: 'icon star',
	Witch: 'icon magic',
};

function BotCard({ bot, handleAdd, handleDelete, removeBotFromArmy }) {
	return (
		<div className='ui column'>
			<div className='ui card' key={bot.id} onClick={() => handleAdd(bot)}>
				<div className='image'>
					<img alt='oh no!' src={bot.avatar_url} />
				</div>
				<div className='content'>
					<div className='header'>
						{bot.name}
						<i className={botTypeClasses[bot.bot_class]} />
					</div>
					<div className='meta text-wrap'>
						<small>{bot.catchphrase}</small>
					</div>
				</div>
				<div className='extra content'>
					<span>
						<i className='icon heartbeat' />
						{bot.health}
					</span>

					<span>
						<i className='icon lightning' />
						{bot.damage}
					</span>
					<span>
						<i className='icon shield' />
						{bot.armor}
					</span>
					<span>
						<div className='ui center aligned segment basic'>
							<button
								className='ui mini red button'
								onClick={() => handleDelete(bot)}
							>
								x
							</button>
						</div>
					</span>
				</div>
			</div>
		</div>
	);
}

export default BotCard;