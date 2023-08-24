onEvent('recipes', event => {


    //powah:energizing_orb
    event.remove({output: 'powah:energizing_orb'})
    event.shaped('1x powah:energizing_orb', [
       'AAA',
       'ABA',
       'CCC'
     ], {
       A: '#forge:glass',
       B: 'the_boreal:hausmannite_ingot',
       C: 'the_boreal:dark_steel_ingot'
     })



    })     