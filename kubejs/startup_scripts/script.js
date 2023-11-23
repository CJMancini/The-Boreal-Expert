priority: 0
// Platform.mods.kubejs.name = 'The Boreal Expert'
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



onEvent('item.registry', e => {
	// Register new items here
	e.create('the_boreal').displayName('The Boreal')
	e.create('obsidian_shard').displayName('Obsidian Shard')
})

