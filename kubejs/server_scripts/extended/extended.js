onEvent('recipes', event => {

   event.custom({
     type: 'extendedcrafting:shaped_table',
     pattern: [
     'SSS',
     'SSS',
     'SSS'
    ],
       key:{
        S:{
          item:'minecraft:stone'
          }, 
       },
     result:{
        item: 'minecraft:glowstone'
     }

   });




    event.custom({
      type: 'extendedcrafting:shaped_ender_crafter',
      pattern: [
      'SSS',
      'SSS',
      'SSS'
     ],
        key:{
         S:{
           item:'minecraft:stone'
           }, 
        },
      result:{
         item: 'minecraft:glowstone'
      }
 
    });

    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "botania:mana_tablet",
        "nbt": {
            "mana":500000,
            "creative":1
      }},
      "mana": 1000000,
      "ingredients": [
        {
          "item": "botania:creative_pool"
        },
        {
          "item": "botania:creative_pool"
        },
        {
          "item": "botania:creative_pool"
        }
      ]
    })

   })