onEvent('worldgen.remove', event => {
    event.removeOres(props => {
        props.blocks =
            [
                'minecraft:obsidian',
                'minecraft:spawner'
            ];
    })
})