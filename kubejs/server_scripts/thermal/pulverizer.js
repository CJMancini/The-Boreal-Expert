onEvent('recipes', event => {

// event.recipes.thermal.pulverizer(['2x thermal:iron_dust', Item.of('the_boreal:niobium_ingot').withChance(0.25), Item.of('thermal:nickel_dust').withChance(0.25)], '#forge:ores/iron').energy(2000)

//event.recipes.thermal.pulverizer(['1x mekanism:dust_coal'], '#minecraft:coals').energy(2000)

event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
        "tag": "forge:gems/cinnabar"
      },
    "result": [
      {
        "item": "minecraft:obsidian",
        "count": 1
      }
    ],
    "experience": 0.1,
    "energy": 2000
  })

})