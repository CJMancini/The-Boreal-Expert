onEvent('recipes', event => {


    event.custom({
    "type":"immersiveengineering:arc_furnace",
    "results":
        [
            {"item":"the_boreal:dark_steel_ingot"}
        ],
    "additives":
        [
            {"tag":"forge:ingots/steel"}
        ],
    "input":
        {
            "item":"immersiveengineering:ingot_hop_graphite"
        },
    // "slag":
    //     {
    //         "tag":"forge:slag"
    //     },
    "time":400,
    "energy":204800
    })

    //Dark Steel Ingot
// event.recipes.immersiveengineeringArcFurnace(['the_boreal:dark_steel_ingot'], 'immersiveengineering:ingot_hop_graphite', '#forge:ingots/steel',)
    
    //hausmannite
// event.recipes.immersiveengineeringArcFurnace(['the_boreal:hausmannite_ingot'], 'mekanism:hdpe_sheet', 'the_boreal:psilomelano_ingot',)

    //psilomelano
// event.recipes.immersiveengineeringArcFurnace(['the_boreal:psilomelano_ingot'], 'mekanism:ingot_refined_glowstone', 'mekanism:ingot_refined_obsidian',)

//.time(360).energy(368640)
})