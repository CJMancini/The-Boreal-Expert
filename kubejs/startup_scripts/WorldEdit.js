onEvent('worldgen.remove', event => {
    event.removeOres(props => {
        props.blocks =
            [
                'minecraft:obsidian',
                'minecraft:spawner'
            ];
    })

    event.removeSpawnsByID(spawns => {
        spawns.entities.values = [
          'kiwiboi:kiwi'
        ]
      })
})