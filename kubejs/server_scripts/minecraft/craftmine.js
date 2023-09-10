settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true
onEvent('recipes', event => {


//RECIPES MINECRAFT

//Chest

event.remove({output: '#forge:chest'})
event.shaped('1x minecraft:chest', [
    'ASA',
    'SBS',
    'ASA'
  ], {
    S: '#minecraft:planks',
    B: 'immersiveengineering:plate_iron',
    A: '#minecraft:logs'
  })

event.shaped(Item.of('minecraft:diamond_pickaxe', '{Damage:-100000,RepairCost:0}').enchant('minecraft:silk_touch', 2), [
    'ASA',
    'SBS',
    'ASA'
  ], {
    S: '#minecraft:planks',
    B: 'immersiveengineering:plate_iron',
    A: '#minecraft:logs'
  })

  //Wooden Pickaxe 

    event.shaped('1x minecraft:wooden_pickaxe', [
    '  S',
    ' B ',
    '   '
  ], {
    S: 'the_boreal:head_wood_pickaxe',
    B: 'the_boreal:tool_rod'
  })
  
   //Stone Pickaxe  

  event.shaped('1x minecraft:stone_pickaxe', [
    '  S',
    ' B ',
    '   '
  ], {
    S: 'the_boreal:head_stone_pickaxe',
    B: 'the_boreal:tool_rod'
  })

   //Crafiting Table
  
  event.remove({output: 'minecraft:crafting_table'})
  event.shaped('1x minecraft:crafting_table', [
    ' BS',
    ' SS',
    '   '
  ], {
    B: 'minecraft:stone_pickaxe',
    S: '#minecraft:logs'
  })

  //Flint And Steel

  event.remove({output: 'minecraft:flint_and_steel'})
  event.shaped('1x minecraft:flint_and_steel', [
    '  S',
    ' B ',
    '   '
  ], {
    B: 'mekanism:ingot_steel',
    S: 'minecraft:flint'
  })


     
//Furnace

event.remove({output: 'minecraft:furnace'})
event.shaped('1x minecraft:furnace', [
  'AAA',
  'CBC',
  'ADA'
], {
  A: '#forge:cobblestone',
  B: 'minecraft:coal_block',
  C: '#forge:rods/iron',
  D: '#forge:plates/iron'
  
})

event.remove({output: 'morphtool:tool'})
event.shaped('1x morphtool:tool', [
  ' BC',
  ' AD',
  'A  '
], {
  A: '#forge:rods/steel',
  B: '#forge:dyes/green',
  C: '#forge:dyes/blue',
  D: '#forge:dyes/red'
  
})

event.remove({output: 'minecraft:smithing_table'})
event.shaped('1x minecraft:smithing_table', [
  'AAA',
  'CBC',
  'CCC'
], {
  A: 'the_boreal:hausmannite_ingot',
  B: 'immersiveengineering:hammer',
  C: '#forge:treated_wood'
  
})

event.remove({output: 'minecraft:obsidian'})
event.shaped('1x minecraft:crying_obsidian', [
  'AAA',
  'AAA',
  'AAA'
], {
  A: 'inventorypets:nugget_obsidian'
  
})








})

