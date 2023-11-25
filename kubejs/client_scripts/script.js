// priority: 0
onEvent('jei.hide.items', event => {
  const JEI = [
    '@projecte',  //REMOVER
    '@projectexpansion',  //REMOVER
    '@extendedexchange',  //REMOVER
    '@mysticalagriculture', //REMOVER
    '@draconicevolution',  //REMOVER
    '@draconicadditions',  //REMOVER
    '@angelring', //REMOVER
    '@alchemistry', //REMOVER
    '@astral_dimension', //REMOVER
    '@elementalcraft', //REMOVER
    '@ae2things', //REMOVER
    '@ae2additions', //REMOVER
    'cyclic:detector_entity',
    'cyclic:detector_item',
    'cyclic:spawn_inspector',
    'cyclic:ender_item_shelf',
    'cyclic:prospector',
	  'twilightforest:uncrafting_table',
    'telepastries:lost_city_cake',
    'telepastries:custom_cake',
    'telepastries:custom_cake2',
    'telepastries:custom_cake3',
	  '#forge:facade'
    
	];
	
	JEI.forEach(JEIr => {
   event.hide(`${JEIr}`)
	});
}) 

  onEvent('jei.add.items', event => {
    event.add(Item.of('minecraft:player_head', '{RepairCost:0,SkullOwner:"Cidiney",display:{Name:\'{"text":"Credits: Modpack create by Cidiney"}\'}}'))
    event.add(Item.of('ae2:facade', '{item:"minecraft:stone"}').ignoreNBT(),)
  })



  onEvent('jei.remove.categories', event => {
  console.log(event.getCategoryIds())
    
     event.remove('twilightforest:uncrafting')
     event.remove('ftbquests:quest')
  })