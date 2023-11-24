onEvent('recipes', event => {

// event.recipes.immersiveengineeringMetalPress('immersiveengineering:component_steel', '#forge:plates/steel', 'immersiveengineering:mold_plate')

// event.recipes.immersiveengineeringMetalPress('immersiveengineering:plate_steel', '#forge:ingots/steel', 'immersiveengineering:mold_plate')

// event.recipes.immersiveengineeringMetalPress('immersiveengineering:plate_steel', '#forge:ingots/steel', 'minecraft:wooden_pickaxe')

// event.recipes.immersiveengineeringMetalPress('immersiveengineering:stick_iron', '#forge:ingots/iron', 'immersiveengineering:mold_rod')

//event.remove({tag: '#forge:dusts/fluorite'})
event.custom({
"type":"immersiveengineering:crusher",
"secondaries":[],
"result":{"item":"mekanism:dust_fluorite","count":1},
"input":{"item":"mekanism:fluorite_gem"},
"energy":1600
}).id('the_boreal:dust_fluorite');

//event.remove({tag: '#forge:dusts/gold'})
event.custom({
"type":"immersiveengineering:crusher",
"secondaries":[],
"result":{"item":"mekanism:dust_gold","count":1},
"input":{"item":"minecraft:gold_ingot"},
"energy":1600
}).id('the_boreal:dust_gold');





})