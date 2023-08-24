onEvent('recipes', event => {

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "tag": "forge:plastic"
              },
              {
                "tag": "industrialforegoing:machine_frame/simple"
              },
              {
                "tag": "forge:plastic"
              },
              {
                "item": "minecraft:netherite_scrap"
              },
              {
                "item": "minecraft:netherite_scrap"
              },
              {
                "tag": "forge:ingots/gold"
              },
              {
                "tag": "forge:gears/diamond"
              },
              {
                "tag": "forge:ingots/gold"
              }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
        "processingTime": 300,
        "output": {
            "item": "minecraft:dirt",
            "count": 1
        }
    
    });
    
    })