onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
      ores.blocks = [
      'dimensionalpocketsii:block_dimensional_ore', 
      'dimensionalpocketsii:block_deepslate_dimensional_ore', 
      'dimensionalpocketsii:block_dimensional_ore_nether', 
      'dimensionalpocketsii:block_dimensional_ore_end'
    ]
    })

})

