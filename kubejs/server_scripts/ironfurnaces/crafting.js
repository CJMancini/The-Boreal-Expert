onEvent('recipes', event => {

    event.remove({output: 'ironfurnaces:upgrade_gold2'})
    event.remove({output: 'ironfurnaces:upgrade_crystal'})
    event.remove({output: 'ironfurnaces:obsidian_furnace'})
    event.remove({output: 'ironfurnaces:netherite_furnace'})
    event.remove({output: 'ironfurnaces:augment_blasting'})
    event.remove({output: 'ironfurnaces:augment_smoking'})
    event.remove({output: 'ironfurnaces:augment_factory'})
    event.remove({output: 'ironfurnaces:augment_generator'})
    event.remove({output: 'ironfurnaces:augment_speed'})
    event.remove({output: 'ironfurnaces:augment_fuel'})
 
 
    //Copper Furnace
    event.remove({output: 'ironfurnaces:copper_furnace'})
    event.shaped('ironfurnaces:copper_furnace', [
     'BBB',
     'BAB',
     'BBB'
   ], {
     B: '#forge:ingots/copper',
     A: 'minecraft:furnace'
   })

    //Iron Furnace
    event.remove({output: 'ironfurnaces:iron_furnace'})
    event.shaped('ironfurnaces:iron_furnace', [
     'BBB',
     'BAB',
     'BBB'
   ], {
     B: '#forge:plates/iron',
     A: 'ironfurnaces:copper_furnace'
   })

    //Silver Furnace
    event.remove({output: 'ironfurnaces:silver_furnace'})
    event.shaped('ironfurnaces:silver_furnace', [
     'BBB',
     'BAB',
     'BBB'
   ], {
     B: '#forge:plates/silver',
     A: 'ironfurnaces:iron_furnace'
   })

    //Gold Furnace
    event.remove({output: 'ironfurnaces:gold_furnace'})
    event.shaped('ironfurnaces:gold_furnace', [
     'BBB',
     'BAB',
     'BBB'
   ], {
     B: '#forge:plates/gold',
     A: 'ironfurnaces:silver_furnace'
   })   

    //Diamond Furnace
    event.remove({output: 'ironfurnaces:diamond_furnace'})
    event.shaped('ironfurnaces:diamond_furnace', [
     'BBB',
     'BAB',
     'BBB'
   ], {
     B: 'minecraft:diamond',
     A: 'ironfurnaces:gold_furnace'
   })

    //Emerald Furnace
    event.remove({output: 'ironfurnaces:emerald_furnace'})
    event.shaped('ironfurnaces:emerald_furnace', [
     'BBB',
     'BAB',
     'BBB'
   ], {
     B: 'minecraft:emerald',
     A: 'ironfurnaces:diamond_furnace'
   })

    //Crystal Furnace
    event.remove({output: 'ironfurnaces:crystal_furnace'})
    event.shaped('ironfurnaces:crystal_furnace', [
     'BBB',
     'BAB',
     'BBB'
   ], {
     B: '#forge:glass',
     A: 'ironfurnaces:emerald_furnace'
   })            
})   