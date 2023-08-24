onEvent('recipes', event => {

    event.remove({output: 'ironchest:diamond_to_crystal_chest_upgrade'})
    event.remove({output: 'ironchest:wood_to_iron_chest_upgrade'})
    event.remove({output: 'ironchest:dirt_chest'})
 
    //Copper Upgrade
    event.remove({output: 'ironchest:wood_to_copper_chest_upgrade'})
    event.shaped('ironchest:wood_to_copper_chest_upgrade', [
     ' B ',
     'BAB',
     ' B '
   ], {
     B: '#forge:ingots/copper',
     A: '#minecraft:planks'
   })

    //Iron Upgrade
    event.remove({output: 'ironchest:copper_to_iron_chest_upgrade'})
    event.shaped('ironchest:copper_to_iron_chest_upgrade', [
     'BBB',
     'BAB',
     'BBB'
   ], {
     B: '#forge:plates/iron',
     A: '#forge:ingots/copper'
   })
   
     //Gold Upgrade
     event.remove({output: 'ironchest:iron_to_gold_chest_upgrade'})
     event.shaped('ironchest:iron_to_gold_chest_upgrade', [
      'BBB',
      'BAB',
      'BBB'
    ], {
      B: '#forge:plates/gold',
      A: '#forge:ingots/iron'
    })  
   
     //DiamondUpgrade
     event.remove({output: 'ironchest:gold_to_diamond_chest_upgrade'})
     event.shaped('ironchest:gold_to_diamond_chest_upgrade', [
      'BBB',
      'BAB',
      'BBB'
    ], {
      B: 'minecraft:diamond',
      A: '#forge:ingots/gold'
    })

     //DiamondUpgrade
     event.remove({output: 'ironchest:diamond_to_obsidian_chest_upgrade'})
     event.shaped('ironchest:diamond_to_obsidian_chest_upgrade', [
      'BBB',
      'BAB',
      'BBB'
    ], {
      B: 'minecraft:obsidian',
      A: 'minecraft:diamond'
    })

    //Copper Chest
    event.remove({output: 'ironchest:copper_chest'})
    event.shaped('ironchest:copper_chest', [
     ' B ',
     'BAB',
     ' B '
   ], {
     B: '#forge:ingots/copper',
     A: 'minecraft:chest'
   })

   //Iron Chest
   event.remove({output: 'ironchest:iron_chest'})
   event.shaped('ironchest:iron_chest', [
    'BBB',
    'BAB',
    'BBB'
  ], {
    B: '#forge:plates/iron',
    A: 'ironchest:copper_chest'
  })

  //Gold Chest
  event.remove({output: 'ironchest:gold_chest'})
  event.shaped('ironchest:gold_chest', [
   'BBB',
   'BAB',
   'BBB'
 ], {
   B: '#forge:plates/gold',
   A: 'ironchest:iron_chest'
 })

  //Diamond Chest
  event.remove({output: 'ironchest:diamond_chest'})
  event.shaped('ironchest:diamond_chest', [
   ' B ',
   'BAB',
   ' B '
 ], {
   B: 'minecraft:diamond',
   A: 'ironchest:gold_chest'
 })     

  //Obsidian Chest
  event.remove({output: 'ironchest:obsidian_chest'})
  event.shaped('ironchest:obsidian_chest', [
   'BBB',
   'BAB',
   'BBB'
 ], {
   B: 'minecraft:obsidian',
   A: 'ironchest:diamond_chest'
 })
 

  //Crystal Chest
  event.remove({output: 'ironchest:crystal_chest'})
  event.shaped('ironchest:crystal_chest', [
   'BBB',
   'BAB',
   'BBB'
 ], {
   B: '#forge:glass',
   A: 'ironchest:obsidian_chest'
 })
 
 






})