onEvent('recipes', event => {

    event.campfireCooking('minecraft:iron_nugget', 'minecraft:raw_iron')
    event.campfireCooking('minecraft:stone', 'minecraft:cobblestone')


})




// onEvent('item.tooltip', tooltip => {

// tooltip.addAdvanced('minecraft:bedrock', (item, advanced, text) => {
//     text.add(0, Text.of('Hello')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
//   })

// })