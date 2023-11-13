onEvent('recipes', event => {

   //Overworld cake
  
   event.remove({output: 'telepastries:overworld_cake'})
   event.shaped('1x telepastries:overworld_cake', [
     'AAA',
     'BSB',
     'BBB'
   ], {
     A: 'minecraft:grass_block',
     B: 'minecraft:dirt_path',
     S: 'thermal:carrot_cake'
   })

   //Nether cake
  
   event.remove({output: 'telepastries:nether_cake'})
   event.shaped('1x telepastries:nether_cake', [
     'BSB',
     'SCS',
     'AAA'
   ], {
     A: 'minecraft:podzol',
     B: 'minecraft:redstone_block',
     C: Item.of('cyclic:boomerang_carry').ignoreNBT(),
     S: 'minecraft:obsidian'
   })
    
})