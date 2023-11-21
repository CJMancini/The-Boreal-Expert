priority: 0
onEvent('block.loot_tables', event => {

	event.addBlock([
		'minecraft:obsidian',
		'minecraft:obsidian'
	], table => {
		table.addPool(pool => {
			pool.rolls = [1, 2] // Roll the pool instead of individual items
			pool.survivesExplosion()
			pool.addItem('inventorypets:nugget_obsidian', 1)
		})
	})
})



onEvent('item.registry', event => {
	// Register new items here
	event.create('the_boreal').displayName('The Boreal')
})

