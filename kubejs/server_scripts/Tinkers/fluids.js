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
  })


})

