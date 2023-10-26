onEvent('recipes', event => {

   //Solidifier
  
   event.remove({output: 'cyclic:solidifier'})
   event.shaped('1x cyclic:solidifier', [
     'ACA',
     'DBD',
     'AAA'
   ], {
     A: 'immersiveengineering:plate_iron',
     B: 'minecraft:grindstone',
     C: 'minecraft:lapis_block',
     D: 'thermal:rf_coil'
   })

   //Crusher

   event.remove({output: 'cyclic:crusher'})
   event.shaped('1x cyclic:crusher', [
     'ABA',
     'DCD',
     'AEA'
   ], {
     A: 'immersiveengineering:plate_steel',
     B: 'minecraft:redstone_block',
     C: 'minecraft:stonecutter',
     E: 'cyclic:solidifier',
     D: 'thermal:rf_coil'
   })


})