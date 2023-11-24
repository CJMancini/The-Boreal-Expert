onEvent('recipes', event => {

    //BOOMERANG CARRY
    event.remove({output: 'cyclic:boomerang_carry'})
    event.custom({
    "type": "cyclic:solidifier",
        "ingredients": [ 
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
  }).id('the_boreal:boomerang_carry');
    //BOOMERANG STUN
    event.remove({output: 'cyclic:boomerang_stun'}) 
    event.custom({
    "type": "cyclic:solidifier",
        "ingredients": [    
    {
      "item": "twilightforest:triple_bow"
    }
  ],
    "mix": {
      "fluid": "kubejs:red_gold_fluid",
      "count": 2000
    },
    "result": {
      "item": "cyclic:boomerang_stun", 
        "count": 1
    },
      "energy": {
          "rfpertick": 60000,
          "ticks": 1 
      },
  }).id('the_boreal:boomerang_stun');
  //OBSIDIAN SHARD
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

}).id('the_boreal:obsidian_shard');
//OBSIDIAN
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
}).id('the_boreal:obsidian');
//GRAPHITE ELECTRODE
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
}).id('the_boreal:graphite_electrode');


})