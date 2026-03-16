
const revistas = [

{
id: "o1",
base: "https://online.fliphtml5.com/qlffj/wtcz",
cuentos: [7,8,10,12,24,26],
minis: [29,30,31,32,33],
poemas: [41,43]
},

{
id: "o2",
base: "https://online.fliphtml5.com/qlffj/ckzf",
cuentos: [9,10,11,12,14,16,18,20,22,23,24,26,27],
minis: [29,30,31,32,33],
poemas: [39,40,41,42],
ensayos: [6]
},

{
id: "o3",
base: "https://online.fliphtml5.com/qlffj/fphz",
cuentos: [9,10,12,14,16,17,20,22,24,26,28,30,32,34],
minis: [46,47,48,49,50,51],
poemas: [57,58,59,60],
ensayos: [6,7]
},

{
id: "o4",
base: "https://online.fliphtml5.com/qlffj/ldaf",
cuentos: [11,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44],
minis: [38,39,40,41,42],
poemas: [44,45],
ensayos: [6,8]
},

{
id: "e1",
base: "https://online.fliphtml5.com/qlffj/sybu",
minis: [6,7,8,9,10,11,12,13,15,16,17,18,20,21,22,23,24,25,27,28],
},

{
id: "e2",
base: "https://online.fliphtml5.com/qlffj/ryom",
cuentos: [8,10,13,15,22,24,26,28,29,31,33,34,36],
minis: [39,40,41,42,43,44],
poemas: [46],
},

{
id: "e3",
base: "https://online.fliphtml5.com/qlffj/seap",
minis: [8,9,10,11,12,13,14,15,16,17,18,19,20,21],
poemas: [24,25,26],
},

{
id: "e4",
base: "https://online.fliphtml5.com/qlffj/akxv",
cuentos: [12,14,16,19,20,22,24,26,28,30,32,34,36,38,43],
minis: [44,45,46,47,48,49,50],
poemas: [52,53],
ensayos: [6]
},

{
id: "e5",
base: "https://online.fliphtml5.com/qlffj/sybu",
minis: [8,12,16,20,24,26,29,32,36,39,42,45,48,51,54],
},
  
]

function elegir(lista){
return lista[Math.floor(Math.random()*lista.length)]
}

function redirigir(base,pagina){
window.location.href = base + "/#p=" + pagina
}

