onEvent('recipes', event => {

    event.remove({input: 'immersiveengineering:ingot_steel'})
    //Steel Ingot

    event.remove({output: '#forge:ingots/steel'}) 
    event.recipes.immersiveengineeringBlastFurnace('mekanism:ingot_steel', 'minecraft:iron_ingot', 'immersiveengineering:slag')

    //Steel Block

    event.remove({output: 'immersiveengineering:storage_steel'})
    event.recipes.immersiveengineeringBlastFurnace('mekanism:block_steel', 'minecraft:iron_block', 'immersiveengineering:slag')




})