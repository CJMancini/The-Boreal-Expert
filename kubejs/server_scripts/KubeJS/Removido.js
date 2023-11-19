onEvent('recipes', event => {   

    //AQUI SERÁ REMOVIDO RECIPES DE ITENS/MODS/TAGS

    const RCM = [ //Mods
    'projecte',
    'projectexpansion',
    'mysticalagriculture',
    'draconicevolution'
    ];
    const RCI = [ //Itens
        'quark:deepslate_furnace',
        'quark:blackstone_furnace'
    ];
    const RCT = [ //Tags
        // 'minecraft:stone',
        // 'netherite'
    ];
    const RCID = [ //ID
        'cyclic:crafting/chest'
    ];
    const RCITP = [ //ID
        'cyclic:solidifier'
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
    RCITP.forEach(RCITPr => { //ID
    event.remove({type: `${RCITPr}` })
    });
  







    
})   