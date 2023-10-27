onEvent('recipes', event => {

//Remover ligas
event.remove({id: 'taiga:smeltery/alloys/triberium1'})
event.remove({id: 'taiga:smeltery/alloys/triberium'})
event.remove({id: 'tconstruct:smeltery/alloys/molten_slimesteel'})
event.remove({id: 'tconstruct:smeltery/alloys/molten_queens_slime'})
event.remove({id: 'taiga:smeltery/alloys/nucleum'})
event.remove({id: 'taiga:smeltery/alloys/nucleum1'})
event.remove({id: 'taiga:smeltery/alloys/nucleum2'})
    



event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "'minecraft:crying_obsidian'"
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

