    number = [-2, 3, -5, 6, 5, 2, -4];
    // var y = 0;
    // number.forEach(element => {
    //     // console.log(element)
    //     if (element > 0) {
    //         y += element;
    //     }
    // });
    // console.log(y)


    // var x = 0;
    // number.map((index) => {

    //     // console.log(index)

    //     return index > 0 ? x += index : 0;
    // });
    // console.log(x)


    var z = 0;
    for (i = 0; i < number.length; i++) {
        // console.log(number[i])
        number[i] > 0 ? z += number[i] : 0;
    }

    console.log(z)