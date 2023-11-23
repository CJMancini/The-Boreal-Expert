settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true
onEvent('recipes', event => {


  // ╔═╗╔═╗╔══╗╔═╗ ╔╗╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗╔════╗
  // ║║╚╝║║╚╣ ╝║║╚╗║║║╔══╝║╔═╗║║╔═╗║║╔═╗║║╔══╝║╔╗╔╗║
  // ║╔╗╔╗║ ║║ ║╔╗╚╝║║╚══╗║║ ╚╝║╚═╝║║║ ║║║╚══╗╚╝║║╚╝
  // ║║║║║║ ║║ ║║╚╗║║║╔══╝║║ ╔╗║╔╗╔╝║╚═╝║║╔══╝  ║║  
  // ║║║║║║╔╣ ╗║║ ║║║║╚══╗║╚═╝║║║║╚╗║╔═╗║║║     ║║  
  // ╚╝╚╝╚╝╚══╝╚╝ ╚═╝╚═══╝╚═══╝╚╝╚═╝╚╝ ╚╝╚╝     ╚╝  

//CHEST

event.remove({output: '#forge:chest'})
event.shaped('1x minecraft:chest', [
    'ASA',
    'SBS',
    'ASA'
  ], {
    S: '#minecraft:planks',
    B: 'immersiveengineering:plate_iron',
    A: '#minecraft:logs'
  })

event.shaped(Item.of('minecraft:diamond_pickaxe', '{Damage:-100000,RepairCost:0}').enchant('minecraft:silk_touch', 2), [
    'ASA',
    'SBS',
    'ASA'
  ], {
    S: '#minecraft:planks',
    B: 'immersiveengineering:plate_iron',
    A: '#minecraft:logs'
  })

  //WOODEN PICKAXE 

    event.shaped('1x minecraft:wooden_pickaxe', [
    '  S',
    ' B ',
    '   '
  ], {
    S: 'the_boreal:head_wood_pickaxe',
    B: 'the_boreal:tool_rod'
  })
  
   //STONE PICKAXE  

  event.shaped('1x minecraft:stone_pickaxe', [
    '  S',
    ' B ',
    '   '
  ], {
    S: 'the_boreal:head_stone_pickaxe',
    B: 'the_boreal:tool_rod'
  })

   //CRAFITING TABLE
  
  event.remove({output: 'minecraft:crafting_table'})
  event.shaped('1x minecraft:crafting_table', [
    ' BS',
    ' SS',
    '   '
  ], {
    B: 'minecraft:stone_pickaxe',
    S: '#minecraft:logs'
  })

   //STICK
  
  event.remove({output: 'minecraft:stick'})
  event.shaped('minecraft:stick', [
    ' S ',
    ' S ',
    '   '
  ], {
    S: '#minecraft:logs'
  })

  //FLINT AND STEEL

  event.remove({output: 'minecraft:flint_and_steel'})
  event.shaped('1x minecraft:flint_and_steel', [
    '  S',
    ' B ',
    '   '
  ], {
    B: 'mekanism:ingot_steel',
    S: 'minecraft:flint'
  })

//FURNACE

event.remove({output: 'minecraft:furnace'})
event.shaped('1x minecraft:furnace', [
  'AAA',
  'CBC',
  'ADA'
], {
  A: 'quark:sturdy_stone',
  B: 'minecraft:coal_block',
  C: '#forge:rods/iron',
  D: 'immersiveengineering:plate_iron'
  
})

event.remove({output: 'morphtool:tool'})
event.shaped('1x morphtool:tool', [
  ' BC',
  ' AD',
  'A  '
], {
  A: '#forge:rods/steel',
  B: '#forge:dyes/green',
  C: '#forge:dyes/blue',
  D: '#forge:dyes/red'
  
})

event.remove({output: 'minecraft:smithing_table'})
event.shaped('1x minecraft:smithing_table', [
  'AAA',
  'CBC',
  'CCC'
], {
  A: 'the_boreal:hausmannite_ingot',
  B: 'immersiveengineering:hammer',
  C: '#forge:treated_wood'
  
})

event.remove({output: 'minecraft:obsidian'})
event.shaped('1x minecraft:crying_obsidian', [
  'AAA',
  'AAA',
  'AAA'
], {
  A: 'inventorypets:nugget_obsidian'
  
})

// ╔═══╗╔╗  ╔╗╔═══╗╔╗   ╔══╗╔═══╗
// ║╔═╗║║╚╗╔╝║║╔═╗║║║   ╚╣ ╝║╔═╗║
// ║║ ╚╝╚╗╚╝╔╝║║ ╚╝║║    ║║ ║║ ╚╝
// ║║ ╔╗ ╚╗╔╝ ║║ ╔╗║║ ╔╗ ║║ ║║ ╔╗
// ║╚═╝║  ║║  ║╚═╝║║╚═╝║╔╣╗║╚═╝║
// ╚═══╝  ╚╝  ╚═══╝╚═══╝╚══╝╚═══╝

   //SOLIDIFIER
  
   event.remove({output: 'cyclic:solidifier'})
   event.shaped('1x cyclic:solidifier', [
     'ACA',
     'DBD',
     'AAA'
   ], {
     A: 'immersiveengineering:plate_iron',
     B: 'minecraft:grindstone',
     C: 'minecraft:lapis_block',
     D: 'thermal:rf_coil'
   })

   //CRUSHER

   event.remove({output: 'cyclic:crusher'})
   event.shaped('1x cyclic:crusher', [
     'ABA',
     'DCD',
     'AEA'
   ], {
     A: 'immersiveengineering:plate_steel',
     B: 'minecraft:redstone_block',
     C: 'minecraft:stonecutter',
     E: 'cyclic:solidifier',
     D: 'thermal:rf_coil'
   })

  //  ╔══╗ ╔═══╗╔═══╗╔═══╗╔═══╗╔╗   
  //  ║╔╗║ ║╔═╗║║╔═╗║║╔══╝║╔═╗║║║   
  //  ║╚╝╚╗║║ ║║║╚═╝║║╚══╗║║ ║║║║   
  //  ║╔═╗║║║ ║║║╔╗╔╝║╔══╝║╚═╝║║║ ╔╗
  //  ║╚═╝║║╚═╝║║║║╚╗║╚══╗║╔═╗║║╚═╝║
  //  ╚═══╝╚═══╝╚╝╚═╝╚═══╝╚╝ ╚╝╚═══╝

    //TOOL ROD
    event.shaped('1x the_boreal:tool_rod', [
      '  A',
      '  A',
      '   '
    ], {
      A: '#forge:rods/wooden'
    })

   //HEAD STONE PICKAXE
   event.shaped('1x the_boreal:head_stone_pickaxe', [
      ' AA',
      '  A',
      '   '
    ], {
      A: '#forge:cobblestone'
    })

     //SOFT OBSIDIAN

     event.shaped('8x the_boreal:bloody_obsidian', [
       'ASA',
       'SBS',
       'ASA'
     ], {
       B: Item.of('immersiveengineering:hammer').ignoreNBT(),
       S: 'minecraft:crying_obsidian',
       A: 'tconstruct:blood_slime_ball'
     })
    
   //HEAD WOOD PICKAXE
   event.shaped('1x the_boreal:head_wood_pickaxe', [
      ' AA',
      '  A',
      '   '
    ], {
      A: '#minecraft:planks'
    })

    // ╔════╗╔══╗╔═╗ ╔╗╔╗╔═╗╔═══╗╔═══╗╔═══╗
    // ║╔╗╔╗║╚╣ ╝║║╚╗║║║║║╔╝║╔══╝║╔═╗║║╔═╗║
    // ╚╝║║╚╝ ║║ ║╔╗╚╝║║╚╝╝ ║╚══╗║╚═╝║║╚══╗
    //   ║║   ║║ ║║╚╗║║║╔╗║ ║╔══╝║╔╗╔╝╚══╗║
    //   ║║  ╔╣ ╗║║ ║║║║║║╚╗║╚══╗║║║╚╗║╚═╝║
    //   ╚╝  ╚══╝╚╝ ╚═╝╚╝╚═╝╚═══╝╚╝╚═╝╚═══╝

  //CRAFITING STATION
  
  event.remove({output: 'tconstruct:crafting_station'})
  event.shaped('1x tconstruct:crafting_station', [
    ' B ',
    '   ',
    '   '
  ], {
    B: 'minecraft:crafting_table'
  })  
    
    // ╔══╗╔═╗╔═╗╔═╗╔═╗╔═══╗╔═══╗╔═══╗╔══╗╔╗  ╔╗╔═══╗╔═══╗╔═══╗╔══╗╔═╗ ╔╗╔═══╗
    // ╚╣ ╝║║╚╝║║║║╚╝║║║╔══╝║╔═╗║║╔═╗║╚╣ ╝║╚╗╔╝║║╔══╝║╔══╝║╔═╗║╚╣ ╝║║╚╗║║║╔═╗║
    //  ║║ ║╔╗╔╗║║╔╗╔╗║║╚══╗║╚═╝║║╚══╗ ║║ ╚╗║║╔╝║╚══╗║╚══╗║╚═╝║ ║║ ║╔╗╚╝║║║ ╚╝
    //  ║║ ║║║║║║║║║║║║║╔══╝║╔╗╔╝╚══╗║ ║║  ║╚╝║ ║╔══╝║╔══╝║╔╗╔╝ ║║ ║║╚╗║║║║╔═╗
    // ╔╣ ╗║║║║║║║║║║║║║╚══╗║║║╚╗║╚═╝║╔╣ ╗ ╚╗╔╝ ║╚══╗║╚══╗║║║╚╗╔╣ ╗║║ ║║║║╚╩═║
    // ╚══╝╚╝╚╝╚╝╚╝╚╝╚╝╚═══╝╚╝╚═╝╚═══╝╚══╝  ╚╝  ╚═══╝╚═══╝╚╝╚═╝╚══╝╚╝ ╚═╝╚═══╝
 
    let Plate = (material, Plate) => {

      event.remove({output: Plate  })
      event.shapeless(Plate, [
        Item.of('immersiveengineering:hammer').ignoreNBT(),
        material,
        material
    ])
    }
    Plate('#forge:ingots/iron', 'immersiveengineering:plate_iron')
    Plate('#forge:ingots/steel', 'immersiveengineering:plate_steel')
    Plate('#forge:ingots/copper', 'immersiveengineering:plate_copper')
    Plate('the_boreal:dark_steel_ingot', 'the_boreal:darksteel_plate')
    Plate('#forge:ingots/aluminum' , 'immersiveengineering:plate_aluminum')
    Plate('#forge:ingots/lead' , 'immersiveengineering:plate_lead')
    Plate('#forge:ingots/silver' , 'immersiveengineering:plate_silver')
    Plate('#forge:ingots/nickel' , 'immersiveengineering:plate_nickel')
    Plate('#forge:ingots/uranium' , 'immersiveengineering:plate_uranium')
    Plate('#forge:ingots/constantan' , 'immersiveengineering:plate_constantan')
    Plate('#forge:ingots/gold' , 'immersiveengineering:plate_gold')
    Plate('#forge:ingots/electrum' , 'immersiveengineering:plate_electrum')
    Plate('#forge:ingots/signalum' , 'thermal:signalum_plate')
    Plate('#forge:ingots/netherite' , 'thermal:netherite_plate')
    Plate('#forge:ingots/tin' , 'thermal:tin_plate')
    Plate('#forge:ingots/bronze' , 'thermal:bronze_plate')
    Plate('#forge:ingots/invar' , 'thermal:invar_plate')
    Plate('#forge:ingots/lumium' , 'thermal:lumium_plate')
    Plate('#forge:ingots/enderium' , 'thermal:enderium_plate')
    Plate('#forge:ingots/rose_gold' , 'thermal:rose_gold_plate')

    //HAMMER

    event.remove({input: 'immersiveengineering:hammer'})
    event.remove({output: 'immersiveengineering:hammer'})
    event.shaped('1x immersiveengineering:hammer', [
     ' S ',
     ' AS',
     '   '
   ], {
     S: 'minecraft:iron_ingot',
     A: 'the_boreal:tool_rod'
   })

    //BLAST BRICK

    event.remove({output: 'immersiveengineering:blastbrick'})
    event.shaped('1x immersiveengineering:blastbrick', [
     ' SA',
     ' AS',
     '   '
   ], {
     S: 'minecraft:brick',
     A: 'the_boreal:bloody_obsidian'
   })

     //COKE BRICK

     event.remove({output: 'immersiveengineering:cokebrick'})
     event.shaped('1x immersiveengineering:cokebrick', [
      ' SA',
      ' AS',
      '   '
    ], {
      S: 'minecraft:coal',
      A: 'immersiveengineering:blastbrick'
    })

    //KILN BRICK

  event.remove({output: 'immersiveengineering:alloybrick'})
  event.shaped('1x immersiveengineering:alloybrick', [
   ' A ',
   'ASA',
   ' A '
 ], {
   A: 'immersiveengineering:plate_copper',
   S: 'immersiveengineering:cokebrick'
 })



 event.remove({output: 'immersiveengineering:component_steel'})
 event.shaped('1x immersiveengineering:alloybrick', [
  ' A ',
  'ASA',
  ' A '
], {
  A: 'immersiveengineering:plate_copper',
  S: 'immersiveengineering:cokebrick'
})

//IRON ROD

event.remove({output: 'immersiveengineering:stick_iron'})
event.shaped('1x immersiveengineering:stick_iron', [
 ' A ',
 ' A ',
 '   '
], {
 A: 'minecraft:iron_ingot'
})
 event.remove({output: 'tconstruct:crafting_station'})
 event.shaped('1x tconstruct:crafting_station', [
   ' B ',
   '   ',
   '   '
 ], {
   B: 'minecraft:crafting_table'
 }) 
   
//steel mechanical component

event.shaped('1x immersiveengineering:component_steel', [
'A A',
' B ',
'A A'
], {
B: '#forge:plates/copper',
A: '#forge:plates/steel'
})

// ╔═══╗╔╗ ╔╗╔═══╗╔═══╗╔╗╔═╗
// ║╔═╗║║║ ║║║╔═╗║║╔═╗║║║║╔╝
// ║║ ║║║║ ║║║║ ║║║╚═╝║║╚╝╝ 
// ║╚═╝║║║ ║║║╚═╝║║╔╗╔╝║╔╗║ 
// ╚══╗║║╚═╝║║╔═╗║║║║╚╗║║║╚╗
//    ╚╝╚═══╝╚╝ ╚╝╚╝╚═╝╚╝╚═╝

    //CHEST

    let madeira = (bau, madeiraitem) => {

      event.remove({output: bau  })

      event.shaped(bau, [
        'III',
        'IBI',
        'III'
      ], {
        B: '#forge:chests',
        I: madeiraitem
      })
    }
    madeira('quark:oak_chest', 'minecraft:oak_planks')
    madeira('quark:warped_chest', 'minecraft:warped_planks')
    madeira('quark:nether_brick_chest','minecraft:nether_bricks')
    madeira('quark:purpur_chest','minecraft:purpur_block')
    madeira('quark:prismarine_chest','minecraft:prismarine')
    madeira('quark:azalea_chest','quark:azalea_planks')
    madeira('quark:blossom_chest','quark:blossom_planks')
    madeira('quark:spruce_chest','minecraft:spruce_planks')
    madeira('quark:birch_chest','minecraft:birch_planks')
    madeira('quark:jungle_chest','minecraft:jungle_planks')
    madeira('quark:acacia_chest','minecraft:acacia_planks')
    madeira('quark:dark_oak_chest','minecraft:dark_oak_planks')
    madeira('quark:crimson_chest','minecraft:crimson_planks')
    madeira('twilightforest:twilight_oak_chest','twilightforest:twilight_oak_planks')
    madeira('twilightforest:canopy_chest','twilightforest:canopy_planks')
    madeira('twilightforest:mangrove_chest','twilightforest:mangrove_planks')
    madeira('twilightforest:darkwood_chest','twilightforest:dark_planks')
    madeira('twilightforest:time_chest','twilightforest:time_planks')
    madeira('twilightforest:transformation_chest','twilightforest:transformation_planks')
    madeira('twilightforest:mining_chest','twilightforest:mining_planks')
    madeira('twilightforest:sorting_chest','twilightforest:sorting_planks')
    madeira('ae2:sky_stone_chest','ae2:sky_stone_block')
    madeira('ae2:smooth_sky_stone_chest','ae2:smooth_sky_stone_block')
    madeira('ae2:smooth_sky_stone_chest','ae2:smooth_sky_stone_block')

    //FORNALHAS

    let fornalha = (fornalha, fornalhaitem) => {

      event.remove({output: fornalha  })

      event.shaped(fornalha, [
        'III',
        'IBI',
        'III'
      ], {
        B: 'minecraft:furnace',
        I: fornalhaitem
      })
    }
    fornalha('quark:blackstone_furnace','minecraft:blackstone')
    fornalha('quark:deepslate_furnace','minecraft:cobbled_deepslate')









})

