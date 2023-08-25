onEvent("lootjs", (event) => {
  event
      .addLootTypeModifier(LootType.CHEST)
      .removeLoot(Ingredient.all)
});

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