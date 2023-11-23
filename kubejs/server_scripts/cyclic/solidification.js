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
    "item": "kubejs:obsidian_shard",
      "count": 1
  },
    "energy": {
        "rfpertick": 10000,
        "ticks": 5
    },

})

event.remove({output: 'minecraft:obsidian'})
event.custom({
"type": "cyclic:solidifier",
    "ingredients": [  
{
  "item": "kubejs:obsidian_shard"
},
{
  "item": "kubejs:obsidian_shard"
},
{
  "item": "kubejs:obsidian_shard"
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

event.remove({output: 'immersiveengineering:graphite_electrode' })
event.custom({
"type": "cyclic:solidifier",
    "ingredients": [  
{
  "item": "immersiveengineering:dust_hop_graphite"
},
{
  "item": "immersiveengineering:dust_hop_graphite"
},
{
  "item": "immersiveengineering:dust_hop_graphite"
}
],
"mix": {
  "fluid": "tconstruct:molten_steel",
  "count": 1000
},
"result": {
  "item": "immersiveengineering:graphite_electrode",
    "count": 1
},
  "energy": {
      "rfpertick": 10000,
      "ticks": 5
  },
})


})