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
    '@elementalcraft', //REMOVER

	  'twilightforest:uncrafting_table',

    'crystalcraft_unlimited_java:garnet_ore', 
    'crystalcraft_unlimited_java:saphire_ore', 
    'crystalcraft_unlimited_java:ruby_ore', 
    'crystalcraft_unlimited_java:topaz_ore', 
    'crystalcraft_unlimited_java:peridot_ore', 
    'crystalcraft_unlimited_java:spinel_ore', 
    'crystalcraft_unlimited_java:tourmaline_ore', 
    'crystalcraft_unlimited_java:amazonite_ore', 
    'crystalcraft_unlimited_java:alexandrite_ore', 
    'crystalcraft_unlimited_java:opal_ore', 
    'crystalcraft_unlimited_java:jasper_ore', 
    'crystalcraft_unlimited_java:jade_ore', 
    'crystalcraft_unlimited_java:sardonyx_ore', 
    'crystalcraft_unlimited_java:sugillite_ore', 
    'crystalcraft_unlimited_java:malachite_ore', 
    'crystalcraft_unlimited_java:flourite_ore', 
    'crystalcraft_unlimited_java:aquamarine_ore', 
    'crystalcraft_unlimited_java:indigolite_ore', 
    'crystalcraft_unlimited_java:kunzite_ore',
    'crystalcraft_unlimited_java:citrine_ore',  
    'crystalcraft_unlimited_java:tanzanite_ore', 
    'crystalcraft_unlimited_java:chrysolite_ore',
    'crystalcraft_unlimited_java:iolite_ore', 
    'crystalcraft_unlimited_java:ametrine_ore', 
    'crystalcraft_unlimited_java:titanium_ore', 
    'crystalcraft_unlimited_java:uranium_ore',
    'crystalcraft_unlimited_java:enderium_ore',
    'crystalcraft_unlimited_java:bronze_ore',
    'crystalcraft_unlimited_java:silver_ore',  
    'crystalcraft_unlimited_java:platinum_ore', 
    'crystalcraft_unlimited_java:moonstone_ore',
    'crystalcraft_unlimited_java:amber_ore', 
    'crystalcraft_unlimited_java:prism_ore',
    'crystalcraft_unlimited_java:ender_leaves', 
    'crystalcraft_unlimited_java:obsidian_ore', 
    'crystalcraft_unlimited_java:amethyst_ore',
    'crystalcraft_unlimited_java:cobalt_ore', 
    'crystalcraft_unlimited_java:watermelon_tourmaline_ore', 
    'crystalcraft_unlimited_java:tin_ore', 
    'crystalcraft_unlimited_java:chloronium_ore', 
    'crystalcraft_unlimited_java:rose_quartz_ore', 
    'crystalcraft_unlimited_java:onyx_ore', 
    'crystalcraft_unlimited_java:turquoise_ore',
    'crystalcraft_unlimited_java:aluminium_ore', 
    'crystalcraft_unlimited_java:ammolite_ore', 
    'crystalcraft_unlimited_java:rutile_ore', 
    'crystalcraft_unlimited_java:fluorite_ore', 
    'crystalcraft_unlimited_java:iridium_ore', 
    'crystalcraft_unlimited_java:smoky_quartz_ore', 
    'crystalcraft_unlimited_java:peacock_ore_block', 
    'crystalcraft_unlimited_java:peacock_topaz_ore', 
    'crystalcraft_unlimited_java:fire_opal_ore', 
    'crystalcraft_unlimited_java:catseye_ore', 
    'crystalcraft_unlimited_java:rare_tanzanite_ore', 
    'crystalcraft_unlimited_java:sunset_jasper_ore', 
    'crystalcraft_unlimited_java:nickel_ore', 
    'crystalcraft_unlimited_java:vesuvianite_ore', 
    'crystalcraft_unlimited_java:goshenite_ore', 
    'crystalcraft_unlimited_java:hackmantite_ore', 
    'crystalcraft_unlimited_java:rare_sapphire_ore', 
    'crystalcraft_unlimited_java:green_catseye_ore', 
    'crystalcraft_unlimited_java:quicksilver_ore', 
    'crystalcraft_unlimited_java:zinc_ore', 
    'crystalcraft_unlimited_java:cinnabar_ore', 
    'crystalcraft_unlimited_java:white_diamond_ore', 
    'crystalcraft_unlimited_java:pink_diamond_ore', 
    'crystalcraft_unlimited_java:lead_ore', 
    'crystalcraft_unlimited_java:bixbite_ore', 
    'crystalcraft_unlimited_java:purple_diamond_ore', 
    'crystalcraft_unlimited_java:red_diamond_ore', 
    'crystalcraft_unlimited_java:orange_diamond_ore', 
    'crystalcraft_unlimited_java:cyber_crystal_ore',
    'crystalcraft_unlimited_java:tungsten_ore', 
    'crystalcraft_unlimited_java:black_opal_ore', 
    'crystalcraft_unlimited_java:humoranium_ore', 
    'crystalcraft_unlimited_java:anti_humoranium_ore', 
    'crystalcraft_unlimited_java:chrome_ore', 
    'crystalcraft_unlimited_java:magnesium_ore', 
    'crystalcraft_unlimited_java:bismuth_ore', 
    'crystalcraft_unlimited_java:grandidierite_ore', 
    'crystalcraft_unlimited_java:meteorite',
    'dimensionalpocketsii:block_dimensional_ore', 
    'dimensionalpocketsii:block_deepslate_dimensional_ore', 
    'dimensionalpocketsii:block_dimensional_ore_nether', 
    'dimensionalpocketsii:block_dimensional_ore_end',
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