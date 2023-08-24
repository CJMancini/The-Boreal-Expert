onEvent('recipes', event => {
	event.remove({mod: 'ae2things'})
	event.remove({mod: 'ae2additions'})
	//INSCRIBER

	event.remove({output: 'ae2:inscriber'})
	event.shaped('1x ae2:inscriber', [
	 'CBC',
	 'C C',
	 'CBC'
   ], {
	 C: 'the_boreal:hausmannite_ingot',
	 B: 'minecraft:sticky_piston'
   })

	//CHARGER

	event.remove({output: 'ae2:charger'})
	event.shaped('1x ae2:charger', [
	 'CBC',
	 'C  ',
	 'CBC'
   ], {
	 C: 'the_boreal:hausmannite_ingot',
	 B: 'thermal:rf_coil'
   })

	//Charger

	event.remove({output: 'ae2:charger'})
	event.shaped('1x ae2:charger', [
	 'CBC',
	 'C  ',
	 'CBC'
   ], {
	 C: 'the_boreal:hausmannite_ingot',
	 B: 'thermal:rf_coil'
   })

	//storage cell casing

	event.remove({output: 'ae2:item_cell_housing'})
	event.shaped('ae2:item_cell_housing', [
	 'CBC',
	 'B B',
	 'AAA'
   ], {
	 C: '#forge:glass',
	 B: 'minecraft:redstone',
	 A: 'the_boreal:hausmannite_ingot'
   })

	//1K STORAGE

	event.remove({output: 'ae2:cell_component_1k'})
	event.shaped('ae2:cell_component_1k', [
	 'CBC',
	 'BAB',
	 'CBC'
   ], {
	 A: 'ae2:logic_processor',
	 C: 'immersiveengineering:plate_steel',
	 B: 'ae2:certus_quartz_crystal'
	})
	
	//4K STORAGE

	event.remove({output: 'ae2:cell_component_4k'})
	event.shaped('ae2:cell_component_4k', [
	 'CBC',
	 'BAB',
	 'CBC'
   ], {
	 A: 'ae2:logic_processor',
	 B: 'ae2:cell_component_1k',
	 C: 'immersiveengineering:plate_steel'
   })
	
	//16K STORAGE

	event.remove({output: 'ae2:cell_component_16k'})
	event.shaped('ae2:cell_component_16k', [
	 'CBC',
	 'BAB',
	 'CBC'
   ], {
	 A: 'ae2:engineering_processor',
	 B: 'ae2:cell_component_4k',
	 C: 'the_boreal:darksteel_plate'
   })   
   













})
