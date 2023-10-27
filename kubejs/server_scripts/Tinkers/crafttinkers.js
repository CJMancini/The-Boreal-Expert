onEvent('recipes', event => {
  event.remove({output: 'tconstruct:flint_and_brick'})


  //Seared Table

    event.remove({output: 'tconstruct:seared_table'})
    event.shaped('1x tconstruct:seared_table', [
     'SSS',
     'A A',
     'A A'
     ], {
     S: 'tconstruct:seared_bricks',
     A: 'tconstruct:seared_brick'
     }) 
 
      //Faucet
 
    event.remove({output: 'tconstruct:seared_faucet'})
    event.shaped('1x tconstruct:seared_faucet', [
       '   ',
       'A A',
       ' A '
     ], {
       A: 'tconstruct:seared_bricks'
     }) 	 
 
    //Seared Ingot Tank 
 
    //event.remove({output: 'tconstruct:seared_ingot_tank'})
    // event.shaped('1x tconstruct:seared_ingot_tank', [
    //    'AAA',
    //    'ASA',
    //    'AAA'
    //    ], {
    //    A: 'tconstruct:seared_bricks',
    //    S: '#forge:glass'
    //    })  
    
})