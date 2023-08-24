onEvent("lootjs", (event) => {
  event
      .addLootTypeModifier(LootType.CHEST)
      .removeLoot(Ingredient.all)
});