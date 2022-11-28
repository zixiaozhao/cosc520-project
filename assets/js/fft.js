class complex{
    constructor(a, b = 0){
        this.x = a;
        this.y = b;
    }
}
 
function product(a, b){
    let c =new complex(0, 0);
    c.x = a.x * b.x - a.y * b.y
    c.y = a.x * b.y + b.x * a.y
    return c
}

function divide(a, b){
    let c =new complex(0, 0);
    c.x = a.x/b
    c.y = a.y/b
    return c
}

function sum(a, b){
    let c = new complex(0, 0);
    c.x = a.x + b.x
    c.y = a.y + b.y
    return c
}
 
function difference(a, b){
    let c =new complex(0, 0);
    c.x = a.x - b.x
    c.y = a.y - b.y
    return c
}

function conjugate(a){
    let c =new complex(0, 0);
    c.x = a.x
    c.y = -a.y
    return c
}


function fft(a)
{
    let n = a.length;
    // if input contains just one element
    if (n == 1)
        return [a[0]]
 
    // For storing n complex nth roots of unity
    let w = new Array(n);
    let alpha = -2 * Math.PI / n;
    for (var i = 0; i < n; i++) {
        w[i] = new complex(Math.cos(alpha * i), Math.sin(alpha * i));
    }

    let A0 = new Array(Math.floor(n / 2));
    let A1 = new Array(Math.floor(n / 2));
    for (var i = 0; i < Math.floor(n / 2); i++) {
 
        // even indexed coefficients
        A0[i] = a[i * 2];
 
        // odd indexed coefficients
        A1[i] = a[i * 2 + 1];
    }
    // Recursive call for even indexed coefficients
    let y0 = fft(A0);
 
    // Recursive call for odd indexed coefficients
    let y1 = fft(A1);
 
    // for storing values of y0, y1, y2, ..., yn-1.
    let y = new Array(n);
 
    for (var k = 0; k < Math.floor(n / 2); k++) {
         
        y[k] =  sum(y0[k], product(w[k], y1[k]));
        y[k + Math.floor(n / 2)] = difference(y0[k], product(w[k], y1[k]));
    }
    return y;
}
let a = [ new complex(1, 0), new complex(2, 0), new complex(3, 0), new complex(4, 0)];
//let x = [ new complex(1, 0), new complex(0, 0), new complex(0, 0), new complex(0, 0)];
let b = fft(a);
console.log(b)
for (var i = 0; i < b.length;i++){
    b[i] = product(b[i], x[i])}
console.log(b)
let c = fft(b)

function multiplyFFT(a, b){
    let a_f = fft(a);
    let b_f = fft(b);
    var c_f = []
    for(var i=0; i < a_f.length; i++){
        c_f[i] = product(a_f[i], b_f[i]);
    }
    console.log(c_f)
    let c = fft(c_f)
    console.log(c)
    for(var i=0; i<a_f.length; i++){
        c[i] = divide(c_f[i]/a_f.length);
    }
    console.log(c)
    return c;
}
