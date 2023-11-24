onEvent("lootjs", (event) => {
  event
      .addLootTypeModifier(LootType.CHEST)
      .removeLoot(Ingredient.all)



});

onEvent('entity.loot_tables', event => {
  // Add a loot table for the zombie that will drop 5 of either carrot (25% chance) or apple (75% chance)
  // Because the zombie already has a loot table, this will override the current one
  event.modifyEntity('twilightforest:snow_queen', table => {
    table.addPool(pool => {
      pool.addItem('twilightforest:triple_bow')
    })
  })
})


//   event.addEntity('minecraft:pig', table => {
//     table.addPool(pool => {
//       // Modify pig loot table to *also* drop dirt on top of its regular drops
//       pool.addItem('minecraft:dirt')
//     })
//   })

// LootJS.modifiers((event) => {
//   event
//       .addLootTypeModifier(LootType.CHEST)
//           .pool((pool) => {
//               pool.rolls([1]);
//           })
//               .anyStructure(["minecraft:simple_dungeon"], false)
//                   .addWeightedLoot(50, [
//                       Item.of("minecraft:nether_star").withChance(50)
//                   ]);
// });


// onEvent("lootjs", (event) => {
//   event
//       .addBlockLootModifier("minecraft:gravel")
//       .anyStructure(["minecraft:stronghold", "minecraft:village"], false) 
//       .thenAdd("minecraft:diamond");
// });

// onEvent("lootjs", (event) => {
//   event
//       .addBlockLootModifier("minecraft:gravel")
//       .anyDimension("minecraft:nether") 
//       .thenAdd("minecraft:diamond");
// });


// QUANDO EXPLODE
// onEvent("lootjs", (event) => {
//   event
//       .addBlockLootModifier("minecraft:gravel")
//       .customCondition({
//           condition: "minecraft:survives_explosion"
//       })
//       .thenAdd("minecraft:diamond");
// });


// LOOT TABLES
// https://minecraft.fandom.com/wiki/Structure

// minecraft:chest_minecart 
// minecraft:simple_dungeon
// minecraft:village
