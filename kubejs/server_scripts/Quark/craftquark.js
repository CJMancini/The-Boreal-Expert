onEvent('recipes', event => {

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