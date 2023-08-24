onEvent('recipes', event => {

   // event.remove({mod: 'mysticalagradditions'})
   // event.remove({mod: 'mysticalagriculture'})
   // event.remove({type: 'mysticalagriculture:infusion'})
   event.recipes.immersiveengineeringBlastFurnaceFuel('mysticalagradditions:insanium_coal').time(115200)

   event.remove({output: 'mysticalagriculture:infusion_altar'})
   event.shaped('1x mysticalagriculture:infusion_altar', [
    'ABA',
    ' C ',
    'CCC'
  ], {
    A: 'extendedcrafting:redstone_ingot_block',
    B: 'minecraft:gold_ingot',
    C: 'the_boreal:niobium_ingot'
  })
  
  event.remove({output: 'mysticalagriculture:infusion_pedestal'})
  event.shaped('1x mysticalagriculture:infusion_pedestal', [
   'ABA',
   ' C ',
   ' C '
 ], {
   A: 'extendedcrafting:redstone_ingot_block',
   B: 'minecraft:gold_ingot',
   C: 'the_boreal:niobium_ingot'
 })   



//teste


   event.custom({
        "type": "mysticalagriculture:infusion",
        "input": {
          "item": "minecraft:apple"
        },
        "ingredients": [
          {
            "item": "minecraft:carrot"
          },
          {
            "item": "minecraft:carrot"
          },
          {
            "item": "minecraft:carrot"
          },
          {
            "item": "minecraft:carrot"
          },
          {
            "item": "minecraft:carrot"
          }
        ],
        "result": {
          "item": "minecraft:potato"
        }

  });

  event.custom({
      "type": "powah:energizing",
      "ingredients": [
      {"item": "minecraft:blaze_powder"},
      {"item": "minecraft:blaze_powder"},
      {"item": "minecraft:blaze_powder"},
      {"item": "minecraft:blaze_powder"}
      ],
      "energy": 120000,
      "result": {
      "item": "minecraft:stone"
      }
    
  })


})    

