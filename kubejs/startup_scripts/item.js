onEvent('item.registry.tool_tiers', e => {
    
    e.add('redstone_cluster', tier => {
        tier.uses = 64
        tier.speed = 0.0
        tier.attackDamageBonus = 0
    })

})

onEvent('item.registry', e => {

	e.create('the_boreal').displayName('The Boreal')
	e.create('obsidian_shard').displayName('Obsidian Shard')
	e.create("redstone_cluster", "pickaxe").displayName('Redstone Cluster').unstackable().tier("redstone_cluster")
    
})
