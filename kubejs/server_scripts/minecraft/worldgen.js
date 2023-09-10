
onEvent('worldgen.remove', event => {
  console.info('HELP')
  //console.debugEnabled = true;

  // print all features for a given biome filter
  event.printFeatures('', 'minecraft:plains')

  event.removeOres(props => {
    // much like ADDING ores, this supports filtering by worldgen layer...
    props.worldgenLayer = 'strongholds'
    // ...and by biome
    props.biomes = [
      { category: 'icy' },
      { category: 'savanna' },
      { category: 'taiga' },
      { category: 'extreme_hills' },
      { category: 'jungle' },
      { category: 'mesa' },
      { category: 'plains' },
      { category: 'icy' },
      { category: 'the_end' },
      { category: 'beach' },
      { category: 'forest' },
      { category: 'desert' },
      { category: 'river' },
      { category: 'swamp' },
      { category: 'mushroom' },
      { category: 'nether' },
      { category: 'mesa' }
    ]

    // BlockStatePredicate to remove iron and copper ores from the given biomes
    // Note tags may NOT be used here, unfortunately...
    props.blocks = ['minecraft:spawner', 'minecraft:copper_ore']
  })

  // remove features by their id (first argument is a generation step)
  event.removeFeatureById('strongholds', ['minecraft:spawner', 'minecraft:ore_coal_lower'])
})
