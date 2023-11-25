onEvent('recipes', event => {   
    //AQUI SERÁ REMOVIDO RECIPES DE ITENS/MODS/TAGS
    const RCM = [ //Mods
    'projecte', //REMOVER
    'projectexpansion', //REMOVER
    'extendedexchange', //REMOVER
    'mysticalagriculture', //REMOVER
    'angelring', //REMOVER
    'alchemistry', //REMOVER
    'astral_dimension', //REMOVER
    'draconicevolution', //REMOVER
    'elementalcraft', //REMOVER
    'ae2things', //REMOVER
    'ae2additions', //REMOVER
    'bloodmagic', //REMOVER
    ];
    const RCI = [ //Itens
    'cyclic:detector_entity',
    'cyclic:detector_item',
    'cyclic:spawn_inspector',
    'cyclic:ender_item_shelf',
    'cyclic:prospector',
    'ironchest:dirt_chest',
    'ironchest:wood_to_iron_chest_upgrade',
    'ironchest:diamond_to_crystal_chest_upgrade',
    'ironfurnaces:upgrade_gold2',
    'ironfurnaces:upgrade_crystal',
    'ironfurnaces:obsidian_furnace',
    'ironfurnaces:netherite_furnace',
    'ironfurnaces:augment_blasting',
    'ironfurnaces:augment_smoking',
    'ironfurnaces:augment_factory',
    'ironfurnaces:augment_generator',
    'ironfurnaces:augment_speed',
    'ironfurnaces:augment_fuel'
    ];
    const RCT = [ //Tags
        // 'minecraft:stone',
        // 'netherite'
    ];
    const RCID = [ //ID
    'cyclic:crafting/chest'
    ];
    const RCITP = [ //TYPE
    'cyclic:solidifier'
    ];
    const RCIP = [ //INPUT

    ];
      
    RCM.forEach(RCMR => { //MODS
    event.remove({mod: `${RCMR}`})
    });
    RCI.forEach(RCIR => { //ITENS
    event.remove({output: `${RCIR}`})
    });
    RCT.forEach(RCTR => { //TAGS
    event.remove({output: `${RCTR}`})
    });
    RCID.forEach(RCIDR => { //ID
    event.remove({id: `${RCIDR}` })
    });
    RCITP.forEach(RCITPr => { //TYPE
    event.remove({type: `${RCITPr}` })
    });
    RCIP.forEach(RCIPR => { //INPUT
    event.remove({input: `${RCIPR}` })
    });
  







    
})   