onEvent('recipes', e => {

e.remove({output: 'totemic:iron_bells'})
e.custom({
"type":"immersiveengineering:metal_press",
"mold":"thermal:chiller_ball_cast",
"result":{"item":"totemic:iron_bells"},
"input":{"count":4,"base_ingredient":{"item":"minecraft:iron_ingot"}},
"energy":3200
})

})