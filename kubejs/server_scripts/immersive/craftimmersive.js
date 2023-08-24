onEvent('recipes', event => {
  event.remove({output: '#forge:plates'})

   //Crafiting station
  
   event.remove({output: 'tconstruct:crafting_station'})
   event.shaped('1x tconstruct:crafting_station', [
     ' B ',
     '   ',
     '   '
   ], {
     B: 'minecraft:crafting_table'
   })  
   
      //Hammer

      event.remove({input: 'immersiveengineering:hammer'})
      event.remove({output: 'immersiveengineering:hammer'})
      event.shaped('1x immersiveengineering:hammer', [
       ' S ',
       ' AS',
       '   '
     ], {
       S: 'minecraft:iron_ingot',
       A: 'the_boreal:tool_rod'
     })

      //Blast Brick
 
      event.remove({output: 'immersiveengineering:blastbrick'})
      event.shaped('1x immersiveengineering:blastbrick', [
       ' SA',
       ' AS',
       '   '
     ], {
       S: 'minecraft:brick',
       A: 'the_boreal:bloody_obsidian'
     })
  
       //coke Brick
 
       event.remove({output: 'immersiveengineering:cokebrick'})
       event.shaped('1x immersiveengineering:cokebrick', [
        ' SA',
        ' AS',
        '   '
      ], {
        S: 'minecraft:coal',
        A: 'immersiveengineering:blastbrick'
      })
  
      //Kiln Brick
  
    event.remove({output: 'immersiveengineering:alloybrick'})
    event.shaped('1x immersiveengineering:alloybrick', [
     ' A ',
     'ASA',
     ' A '
   ], {
     A: 'immersiveengineering:plate_copper',
     S: 'immersiveengineering:cokebrick'
   })
  
   event.remove({output: 'immersiveengineering:component_steel'})
   event.shaped('1x immersiveengineering:alloybrick', [
    ' A ',
    'ASA',
    ' A '
  ], {
    A: 'immersiveengineering:plate_copper',
    S: 'immersiveengineering:cokebrick'
  })

  //Iron Rod
  
  event.remove({output: 'immersiveengineering:stick_iron'})
  event.shaped('1x immersiveengineering:stick_iron', [
   ' A ',
   ' A ',
   '   '
 ], {
   A: 'minecraft:iron_ingot'
 })
   event.remove({output: 'tconstruct:crafting_station'})
   event.shaped('1x tconstruct:crafting_station', [
     ' B ',
     '   ',
     '   '
   ], {
     B: 'minecraft:crafting_table'
   }) 
 

  // IRON PLATE 
 event.shaped('1x immersiveengineering:plate_iron', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: 'minecraft:iron_ingot'
})  
 //dark steel plate

 event.shaped('1x the_boreal:darksteel_plate', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: 'the_boreal:dark_steel_ingot'
})

 //copper plate

 event.remove({output: 'immersiveengineering:plate_copper'})
 event.shaped('1x immersiveengineering:plate_copper', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/copper'
})

 //steel plate

 event.remove({output: 'immersiveengineering:plate_steel'})
 event.shaped('1x immersiveengineering:plate_steel', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/steel'
})

 //aluminum plate

 event.remove({output: 'immersiveengineering:plate_aluminum'})
 event.shaped('1x immersiveengineering:plate_aluminum', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/aluminum'
}) 

 //lead plate

 event.remove({output: 'immersiveengineering:plate_lead'})
 event.shaped('1x immersiveengineering:plate_lead', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/lead'
})    

 //silver plate

 event.remove({output: 'immersiveengineering:plate_silver'})
 event.shaped('1x immersiveengineering:plate_silver', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/silver'
})

 //nickel plate

 event.remove({output: 'immersiveengineering:plate_nickel'})
 event.shaped('1x immersiveengineering:plate_nickel', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/nickel'
})

 //uranium plate

 event.remove({output: 'immersiveengineering:plate_uranium'})
 event.shaped('1x immersiveengineering:plate_uranium', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/uranium'
})

 //constantan plate

 event.remove({output: 'immersiveengineering:plate_constantan'})
 event.shaped('1x immersiveengineering:plate_constantan', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/constantan'
})

 //electrum plate

 event.remove({output: 'immersiveengineering:plate_electrum'})
 event.shaped('1x immersiveengineering:plate_electrum', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/electrum'
})

 //electrum plate

 event.remove({output: 'immersiveengineering:plate_electrum'})
 event.shaped('1x immersiveengineering:plate_electrum', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/electrum'
})

 //gold plate

 event.remove({output: 'immersiveengineering:plate_gold'})
 event.shaped('1x immersiveengineering:plate_gold', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/gold'
})

 //netherite plate

 event.remove({output: 'thermal:netherite_plate'})
 event.shaped('1x thermal:netherite_plate', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/netherite'
})

 //tin plate

 event.remove({output: 'thermal:tin_plate'})
 event.shaped('1x thermal:tin_plate', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/tin'
})

 //bronze plate

 event.remove({output: 'thermal:bronze_plate'})
 event.shaped('1x thermal:bronze_plate', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/bronze'
})

 //invar plate

 event.remove({output: 'thermal:invar_plate'})
 event.shaped('1x thermal:invar_plate', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/invar'
})

 //signalum plate

 event.remove({output: 'thermal:signalum_plate'})
 event.shaped('1x thermal:signalum_plate', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/signalum'
})

 //lumium plate

 event.remove({output: 'thermal:lumium_plate'})
 event.shaped('1x thermal:lumium_plate', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/lumium'
})

 //enderium plate

 event.remove({output: 'thermal:enderium_plate'})
 event.shaped('1x thermal:enderium_plate', [
  'BA',
  'A '
], {
  B: Item.of('immersiveengineering:hammer').ignoreNBT(),
  A: '#forge:ingots/enderium'
})

 //steel mechanical component

 event.shaped('1x immersiveengineering:component_steel', [
  'A A',
  ' B ',
  'A A'
], {
  B: '#forge:plates/copper',
  A: '#forge:plates/steel'
})
})