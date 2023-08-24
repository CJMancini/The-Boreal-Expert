onEvent('recipes', event => {

    event.remove({output: 'quark:blossom_chest'})
    event.shaped('1x quark:blossom_chest', [
     'BBB',
     'BAB',
     'BBB'
   ], {
     B: 'quark:blossom_planks',
     A: 'minecraft:chest'
   })   
   
   event.remove({output: 'quark:oak_chest'})
   event.shaped('1x quark:oak_chest', [
    'BBB',
    'BAB',
    'BBB'
  ], {
    B: 'minecraft:oak_planks',
    A: 'minecraft:chest'
  }) 

  event.remove({output: 'quark:dark_oak_chest'})
  event.shaped('quark:dark_oak_chest', [
   'BBB',
   'BAB',
   'BBB'
 ], {
   B: 'minecraft:oak_planks',
   A: 'minecraft:chest'
 }) 
 
  event.remove({output: 'quark:spruce_chest'})
  event.shaped('1x quark:spruce_chest', [
   'BBB',
   'BAB',
   'BBB'
 ], {
   B: 'minecraft:spruce_planks',
   A: 'minecraft:chest'
 })
 
 event.remove({output: 'quark:birch_chest'})
 event.shaped('1x quark:birch_chest', [
  'BBB',
  'BAB',
  'BBB'
], {
  B: 'minecraft:birch_planks',
  A: 'minecraft:chest'
})

event.remove({output: 'quark:jungle_chest'})
event.shaped('quark:jungle_chest', [
 'BBB',
 'BAB',
 'BBB'
], {
 B: 'minecraft:jungle_planks',
 A: 'minecraft:chest'
})

event.remove({output: 'quark:crimson_chest'})
event.shaped('quark:crimson_chest', [
 'BBB',
 'BAB',
 'BBB'
], {
 B: 'minecraft:crimson_planks',
 A: 'minecraft:chest'
})

event.remove({output: 'quark:warped_chest'})
event.shaped('quark:warped_chest', [
 'BBB',
 'BAB',
 'BBB'
], {
 B: 'minecraft:warped_planks',
 A: 'minecraft:chest'
})

event.remove({output: 'quark:nether_brick_chest'})
event.shaped('quark:nether_brick_chest', [
 'BBB',
 'BAB',
 'BBB'
], {
 B: 'minecraft:nether_bricks',
 A: 'minecraft:chest'
})

event.remove({output: 'quark:purpur_chest'})
event.shaped('quark:purpur_chest', [
 'BBB',
 'BAB',
 'BBB'
], {
 B: 'minecraft:purpur_block',
 A: 'minecraft:chest'
})

event.remove({output: 'quark:prismarine_chest'})
event.shaped('quark:prismarine_chest', [
 'BBB',
 'BAB',
 'BBB'
], {
 B: 'minecraft:prismarine',
 A: 'minecraft:chest'
})

event.remove({output: 'quark:acacia_chest'})
event.shaped('quark:acacia_chest', [
 'BBB',
 'BAB',
 'BBB'
], {
 B: 'minecraft:acacia_planks',
 A: 'minecraft:chest'
})


event.remove({output: 'quark:azalea_chest'})
event.shaped('quark:azalea_chest', [
 'BBB',
 'BAB',
 'BBB'
], {
 B: 'quark:azalea_planks',
 A: 'minecraft:chest'
})





})    