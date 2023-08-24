onEvent('recipes', event => {

  //RF COIL

  event.remove({output: 'thermal:rf_coil'})
  event.shaped('1x thermal:rf_coil', [
    '  A',
    ' B ',
    'A  '
  ], {
    A: '#forge:dusts/redstone',
    B: '#forge:gears/gold'
    
  })

  //FRACTIONTING STIIL

  event.remove({output: 'thermal:machine_refinery'})
  event.shaped('1x thermal:machine_refinery', [
    ' E ',
    'BAB',
    'DCD'
  ], {
    A: 'the_boreal:machineframe_1',
    B: 'minecraft:bucket',
    C: 'thermal:rf_coil',
    D: '#forge:gears/invar',
    E: '#forge:storage_blocks/iron'
  })

  //SAWMILL

  event.remove({output: 'thermal:machine_sawmill'})
  event.shaped('1x thermal:machine_sawmill', [
    ' E ',
    'BAB',
    'DCD'
  ], {
    A: 'the_boreal:machineframe_1',
    B: '#forge:rods/iron',
    C: 'thermal:rf_coil',
    D: '#forge:gears/invar',
    E: '#forge:storage_blocks/iron'
  })

  //PULVERIZER

  event.remove({output: 'thermal:machine_pulverizer'})
  event.shaped('1x thermal:machine_pulverizer', [
    ' E ',
    'BAB',
    'DCD'
  ], {
    A: 'the_boreal:machineframe_1',
    B: 'minecraft:flint',
    C: 'thermal:rf_coil',
    D: '#forge:gears/invar',
    E: '#forge:storage_blocks/iron'
  })

  //MAGMA CRUCIBLE

  event.remove({output: 'thermal:machine_crucible'})
  event.shaped('1x thermal:machine_crucible', [
    ' E ',
    'BAB',
    'DCD'
  ], {
    A: 'the_boreal:machineframe_1',
    B: 'minecraft:lava_bucket',
    C: 'thermal:rf_coil',
    D: '#forge:gears/invar',
    E: '#forge:storage_blocks/iron'
  })

  //PYROLYZER

  event.remove({output: 'thermal:machine_pyrolyzer'})
  event.shaped('1x thermal:machine_pyrolyzer', [
    ' E ',
    'BAB',
    'DCD'
  ], {
    A: 'the_boreal:machineframe_1',
    B: 'minecraft:coal',
    C: 'thermal:rf_coil',
    D: '#forge:gears/invar',
    E: '#forge:storage_blocks/iron'
  })

  //MULT SERVO

  event.remove({output: 'thermal:machine_press'})
  event.shaped('1x thermal:machine_press', [
    ' E ',
    'BAB',
    'DCD'
  ], {
    A: 'the_boreal:machineframe_1',
    B: '#forge:plates/iron',
    C: 'thermal:rf_coil',
    D: '#forge:gears/invar',
    E: '#forge:storage_blocks/iron' 
  })

  //SMELTER

  event.remove({output: 'thermal:machine_smelter'})
  event.shaped('1x thermal:machine_smelter', [
    ' E ',
    'BAB',
    'DCD'
  ], {
    A: 'the_boreal:machineframe_1',
    B: '#forge:ingots/iron',
    C: 'thermal:rf_coil',
    D: '#forge:gears/invar',
    E: '#forge:storage_blocks/iron' 
  })

  })
  