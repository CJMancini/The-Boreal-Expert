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
    
})