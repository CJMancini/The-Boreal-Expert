onEvent('recipes', event => {

// event.recipes.immersiveengineeringMetalPress('immersiveengineering:component_steel', '#forge:plates/steel', 'immersiveengineering:mold_plate')

// event.recipes.immersiveengineeringMetalPress('immersiveengineering:plate_steel', '#forge:ingots/steel', 'immersiveengineering:mold_plate')

// event.recipes.immersiveengineeringMetalPress('immersiveengineering:plate_steel', '#forge:ingots/steel', 'minecraft:wooden_pickaxe')

// event.recipes.immersiveengineeringMetalPress('immersiveengineering:stick_iron', '#forge:ingots/iron', 'immersiveengineering:mold_rod')

event.remove({tag: '#forge:dusts/fluorite'})
event.custom({
"type":"immersiveengineering:crusher",
"secondaries":[],
"result":{"item":"mekanism:dust_fluorite","count":1},
"input":{"tag":"#forge:ingots/gold"},
"energy":1600
})
// event.remove({tag: '#forge:dusts/gold'})

event.custom({
"type":"immersiveengineering:crusher","secondaries":[],"result":{"item":"immersiveengineering:dust_gold","count":6},"input":{"item":"minecraft:gold_ingot"},"energy":1600
})
})