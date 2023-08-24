    
onEvent('recipes', event => {

	event.remove({output: 'mekanism:basic_smelting_factory'})
	event.remove({output: 'mekanism:advanced_smelting_factory'})
	event.remove({output: 'mekanism:elite_smelting_factory'})
	event.remove({output: 'mekanism:ultimate_smelting_factory'})
	event.remove({output: 'mekanism:basic_enriching_factory'})
	event.remove({output: 'mekanism:advanced_enriching_factory'})
	event.remove({output: 'mekanism:elite_enriching_factory'})
	event.remove({output: 'mekanism:ultimate_enriching_factory'})
	event.remove({output: 'mekanism:basic_crushing_factory'})
	event.remove({output: 'mekanism:advanced_crushing_factory'})
	event.remove({output: 'mekanism:elite_crushing_factory'})
	event.remove({output: 'mekanism:ultimate_crushing_factory'})
	event.remove({output: 'mekanism:basic_compressing_factory'})
	event.remove({output: 'mekanism:advanced_compressing_factory'})
	event.remove({output: 'mekanism:elite_compressing_factory'})
	event.remove({output: 'mekanism:ultimate_compressing_factory'})
	event.remove({output: 'mekanism:basic_combining_factory'})
	event.remove({output: 'mekanism:advanced_combining_factory'})
	event.remove({output: 'mekanism:elite_combining_factory'})
	event.remove({output: 'mekanism:ultimate_combining_factory'})
	event.remove({output: 'mekanism:basic_purifying_factory'})
	event.remove({output: 'mekanism:advanced_purifying_factory'})
	event.remove({output: 'mekanism:ultimate_purifying_factory'})
	event.remove({output: 'mekanism:basic_injecting_factory'})
	event.remove({output: 'mekanism:advanced_injecting_factory'})
	event.remove({output: 'mekanism:elite_injecting_factory'})
	event.remove({output: 'mekanism:ultimate_injecting_factory'})
	event.remove({output: 'mekanism:basic_sawing_factory'})
	event.remove({output: 'mekanism:advanced_sawing_factory'})
	event.remove({output: 'mekanism:elite_sawing_factory'})
	event.remove({output: 'mekanism:ultimate_sawing_factory'})
	event.remove({output: 'mekanism:basic_infusing_factory'})
	event.remove({output: 'mekanism:advanced_infusing_factory'})
	event.remove({output: 'mekanism:elite_infusing_factory'})
	event.remove({output: 'mekanism:ultimate_infusing_factory'})

	//Steel Casing

     event.remove({output: 'mekanism:steel_casing'})
	 event.shaped('1x mekanism:steel_casing', [
	  'ASA',
	  'S S',
	  'ASA'
	], {
	  S: 'immersiveengineering:stick_steel',
	  A: 'immersiveengineering:plate_steel'
	})

     //Speed Upgrade

	event.remove({output: 'mekanism:upgrade_speed'})
	event.shaped('1x mekanism:upgrade_speed', [
	 'DBD',
	 'CAC',
	 'EAE'
   ], {
	 A: '#forge:ingots/triberium',
	 B: '#forge:ingots/osmium',
	 C: '#forge:plates/tin',
     D: '#forge:plates/copper',
	 E: '#forge:plates/steel'
	})

     //Speed Upgrade

	 event.remove({output: 'mekanism:upgrade_energy'})
	 event.shaped('1x mekanism:upgrade_energy', [
	  'DBD',
	  'CAC',
	  'EAE'
	], {
	  A: '#forge:ingots/triberium',
	  B: '#forge:ingots/osmium',
	  C: '#forge:plates/tin',
	  D: '#forge:plates/gold',
	  E: '#forge:plates/copper'
	 })	

     //energy tablet

	 event.remove({output: 'mekanism:energy_tablet'})
	 event.shaped('1x mekanism:energy_tablet', [
	  'ABA',
	  'ABA',
	  'CCC'
	], {
	  A: '#forge:plates/steel',
	  B: '#forge:ingots/triberium',
	  C: 'mekanism:basic_control_circuit'
	 })	

     //Basic Tier Installer
	 
	 event.remove({output: 'mekanism:basic_tier_installer'})
	 event.shaped('1x mekanism:basic_tier_installer', [
	  'CBC',
	  'DDD',
	  'DAD'
	], {
	  A: 'the_boreal:hausmannite_ingot',
	  B: '#forge:alloys/advanced',
	  C: '#forge:gears/gold',
	  D: '#forge:plates/iron'
	 })	


	//Steel Casing

	event.remove({output: 'mekanism:steel_casing'})
	event.shaped('1x mekanism:steel_casing', [
	 'ASA',
	 'S S',
	 'ASA'
   ], {
	 S: 'immersiveengineering:stick_steel',
	 A: 'immersiveengineering:plate_steel'
   })

	//Metallurgic Infuser

	event.remove({output: 'mekanism:metallurgic_infuser'})
	event.shaped('1x mekanism:metallurgic_infuser', [
	 'BDB',
	 'CAC',
	 'BDB'
   ], {
	 C: 'minecraft:furnace',
	 B: 'immersiveengineering:plate_steel',
	 A: 'mekanism:steel_casing',
	 D: 'immersiveengineering:ingot_hop_graphite'
   })

	//Advanced circuit

	event.remove({output: 'mekanism:advanced_control_circuit'})
	event.shaped('1x mekanism:advanced_control_circuit', [
	 'CBC',
	 'BAB',
	 'CBC'
   ], {
	 C: 'extendedcrafting:redstone_ingot',
	 B: 'mekanism:alloy_infused',
	 A: 'mekanism:basic_control_circuit'
   })

	//Elite Circuit

	event.remove({output: 'mekanism:elite_control_circuit'})
	event.shaped('1x mekanism:elite_control_circuit', [
	 'CBC',
	 'BAB',
	 'CBC'
   ], {
	C: 'the_boreal:dark_steel_ingot',
	B: 'mekanism:alloy_reinforced',
	A: 'mekanism:advanced_control_circuit'
   })
   
	//Ultimate Circuit

	event.remove({output: 'mekanism:ultimate_control_circuit'})
	event.shaped('1x mekanism:ultimate_control_circuit', [
	 'CBC',
	 'BAB',
	 'CBC'
   ], {
	C: 'mekanism:ingot_refined_obsidian',
	B: 'mekanism:alloy_atomic',
	A: 'mekanism:elite_control_circuit'
   })
})