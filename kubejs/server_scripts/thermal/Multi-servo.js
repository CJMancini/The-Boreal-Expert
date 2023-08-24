onEvent('recipes', event => {


 event.remove({input: 'thermal:press_unpacking_die'}) // Remove all multi-servo
 event.remove({input: 'thermal:press_packing_2x2_die'}) // Remove all multi-servo
 event.remove({input: 'thermal:press_packing_3x3_die'}) // Remove all multi-servo
 event.remove({input: 'thermal:press_coin_die'}) // Remove all multi-servo
 event.remove({input: 'thermal:press_gear_die'}) // Remove all multi-servo
 //event.remove({type: 'thermal:press'}) // Remove all campfire cooking recipes

  event.recipes.thermal.press('minecraft:iron_nugget', ['#forge:dusts/iron', 'thermal:press_coin_die'])






    })