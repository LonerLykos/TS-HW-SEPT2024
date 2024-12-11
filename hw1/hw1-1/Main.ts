{
    let a: string = 'hello';
    let b: string = 'owu';
    let c: string = 'com';
    let d: string = 'ua';
    let e: number = 1;
    let f: number = 10;
    let g: number = -999;
    let h: number = 123;
    let i: number = 3.14;
    let j: number = 2.7;
    let k: number = 16;
    let l: boolean = true;
    let m: boolean = false;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(i);
    console.log(j);
    console.log(k);
    console.log(l);
    console.log(m);
}

{
    let firstName: string = 'Yurii';
    let middleName: string = 'Ihorovich';
    let lastName: string = 'Kondrashov';

    let person: string = `${firstName} ${middleName} ${lastName}`;
    // let person: string = firstName + ' ' + middleName + ' ' + lastName;
    console.log(person);
}

{
    let a: number = 100;
    let b: string = '100';
    let c: boolean = true;

    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}

{
    let firstName: string = prompt('Your firstName');
    let middleName: string = prompt('Your middleName');
    let lastName: string = prompt('Your lastName');

    let person: string = `${firstName} ${middleName} ${lastName}`;

    console.log(person);
}