onEvent('recipes', event => {
    event.remove({output: 'cyclic:boomerang_carry'})
    event.custom({
    "type": "cyclic:solidifier",
        "ingredients": [ 
    // {
    //         "tag": "forge:string"
    // },   
    {
      "item": "totemic:baykok_bow"
    }
  ],
    "mix": {
      "fluid": "immersiveengineering:biodiesel",
      "count": 10000
    },
    "result": {
      "item": "cyclic:boomerang_carry",
        "count": 1
    },
      "energy": {
          "rfpertick": 60000,
          "ticks": 1 
      },
      // "conditions": [
      //     {
      //         "values": [
      //             {
      //                 "modid": "liquidblocks",
      //                 "type": "forge:mod_loaded"
      //             }
      //         ],
      //         "type": "forge:and"
      //     }
      //   ]
  })
  event.remove({output: 'crystalcraft_unlimited_java:obsidian_shard'})
  event.custom({
  "type": "cyclic:solidifier",
      "ingredients": [ 
   
  {
    "item": "inventorypets:nugget_obsidian"
  },
  {
    "item": "inventorypets:nugget_obsidian"
  },
  {
    "item": "inventorypets:nugget_obsidian"
  }
],
  "mix": {
    "fluid": "tconstruct:molten_obsidian",
    "count": 1000
  },
  "result": {
    "item": "crystalcraft_unlimited_java:obsidian_shard",
      "count": 1
  },
    "energy": {
        "rfpertick": 10000,
        "ticks": 5
    },

})

event.remove({output: 'crystalcraft_unlimited_java:obsidian_shard'})
event.custom({
"type": "cyclic:solidifier",
    "ingredients": [  
{
  "item": "crystalcraft_unlimited_java:obsidian_shard"
},
{
  "item": "crystalcraft_unlimited_java:obsidian_shard"
},
{
  "item": "crystalcraft_unlimited_java:obsidian_shard"
}
],
"mix": {
  "fluid": "tconstruct:molten_obsidian",
  "count": 10000
},
"result": {
  "item": "minecraft:obsidian",
    "count": 1
},
  "energy": {
      "rfpertick": 10000,
      "ticks": 5
  },
})

})