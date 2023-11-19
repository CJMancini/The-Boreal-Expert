// priority: 0
onEvent('recipes', event => {
  });


onEvent('jei.hide.items', event => {
  const JEI = [
    '@projecte',
    '@projectexpansion',
    '@mysticalagriculture',
    '@draconicevolution',
	  'twilightforest:uncrafting_table',
	  '#forge:facade'
	];
	
	RCM.forEach(RCMB => {
   event.hide(`${RCMB}`)
	});
}) 

  onEvent('jei.add.items', event => {
    event.add(Item.of('minecraft:player_head', '{RepairCost:0,SkullOwner:"Cidiney",display:{Name:\'{"text":"Credits: Modpack create by Cidiney"}\'}}'))
    event.add(Item.of('ae2:facade', '{item:"minecraft:stone"}').ignoreNBT(),)
  })
  


  onEvent('jei.remove.categories', event => {
  console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
    
     event.remove('twilightforest:uncrafting')
     event.remove('ftbquests:quest')
  })