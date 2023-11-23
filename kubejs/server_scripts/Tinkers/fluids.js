onEvent('recipes', event => {

//Remover ligas

    



event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "minecraft:crying_obsidian"
    },
    "result": {
      "fluid": "tconstruct:molten_obsidian",
      "amount": 1000
    },
    "temperature": 1000,
    "time": 100,
    // "byproducts": [
    //   {
    //     "fluid": "tconstruct:molten_glass",
    //     "amount": 5000
    //   }
    // ]
  }).id('kubejs:molten_obsidian');



event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "the_boreal:red_gold"
    },
    "result": {
      "fluid": "kubejs:red_gold_fluid",
      "amount": 90
    },
    "temperature": 800,
    "time": 100,
  }).id('kubejs:red_gold_fluid');


})

