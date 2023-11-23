onEvent('recipes', event => {   

    //AQUI SERÁ REMOVIDO RECIPES DE ITENS/MODS/TAGS

    const RCM = [ //Mods
    'projecte', //REMOVER
    'projectexpansion', //REMOVER
    'extendedexchange', //REMOVER
    'mysticalagriculture', //REMOVER
    '@angelring', //REMOVER
    'draconicevolution', //REMOVER
    'elementalcraft', //REMOVER
    ];
    const RCI = [ //Itens
    // 'immersiveengineering:graphite_electrode'
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