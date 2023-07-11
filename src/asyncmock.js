const misProductos = [
  {
    id: "1001",
    categoria: "Almacén",
    idCat: "1000",
    artículo: "Yerba",
    marca: "Armiño",
    descripción: "Yerba mate Armiño SUAVE",
    precio: 205,
    img: "../img/armiño.jpg",
    stock:"10"
  },
  {
    id: "1002",
    categoria: "Almacén",
    idCat: "1000",
    artículo: "Azúcar",
    marca: "Bella Unión",
    descripción: "Azúcar blanco refinado",
    precio: 48,
    img: "../img/azucar.jpg",
    stock:"10"
  },
  {
    id: "1003",
    categoria: "Almacén",
    idCat: "1000",
    artículo: "Fideo",
    marca: "Adria",
    descripción: "Fideo al huevo Adria moña",
    precio: 61,
    img: "../img/fideo-adria-moñas.jpg",
    stock:"10"
  },
  {
    id: "2001",
    categoria: "Electrodomésticos",
    idCat: "2000",
    artículo: "Microondas",
    marca: "Black & Decker",
    descripción: "Black & Decker microondas de acero inoxidable con plato giratorio, 700 W, 0.7 pies cúbicos",
    precio: 4100,
    img: "../img/microwave.jpg",
    stock:"10"
  },
  {
    id: "2002",
    categoria: "Electrodomésticos",
    idCat: "2000",
    artículo: "Licuadora",
    marca: "Philips",
    descripción: "Licuadora Philips 500W jarra 1,25L",
    precio: 4100,
    img: "../img/licuadora-philips-500w.jpg",
    stock:"10"
  },
  {
    id: "2003",
    categoria: "Electrodomésticos",
    idCat: "2000",
    artículo: "Cocina combinada",
    marca: "James",
    descripción:
      "Cocina James C-225 G2 a gas/eléctrica 4 hornallas acero inoxidable 220V puerta ciega",
    precio: 23900,
    img: "../img/cocina-combianda-james.jpg",
    stock:"10"
  },
  {
    id: "3001",
    categoria: "Muebles",
    idCat: "3000",
    artículo: "Juego de comedor",
    marca: "Rústico",
    descripción: "Juego de comedor en madera rústico",
    precio: 16500,
    img: "../img/juego-de-comedor-madera.jpg",
    stock:"10"
  },
  {
    id: "3002",
    categoria: "Muebles",
    idCat: "3000",
    artículo: "Cama marinera",
    marca: "Rústico",
    descripción: "Cama marinera en madera rústico, color natural",
    precio: 8900,
    img: "../img/cama-marinera-madera-natural.jpg",
    stock:"10"
  },
  {
    id: "3003",
    categoria: "Muebles",
    idCat: "3000",
    artículo: "Sofá 2 cuerpos",
    marca: "Rústico",
    descripción: "Sofá Alexis de 2 cuerpos, color natural",
    precio: 32900,
    img: "../img/butacas-2-cuerpos.jpg",
    stock:"10"
  },
  {
    id: "4001",
    categoria: "Motos",
    idCat: "4000",
    artículo: "YUMBO GS-125",
    marca: "Yumbo",
    descripción: "Yumbo GS-125 II LED 4T",
    precio: 68700,
    img: "../img/yumbo-gs125.jpg",
    stock:"10"
  },
  {
    id: "4002",
    categoria: "Motos",
    idCat: "4000",
    artículo: "YAMAHA CRYPTON-110",
    marca: "Yamaha",
    descripción: "Yamaha Crypton-110 4T",
    precio: 61500,
    img: "../img/yamaha-crypton.jpg",
    stock:"10"
  },
  {
    id: "4003",
    categoria: "Motos",
    idCat: "4000",
    artículo: "HONDA XR-250 Tornado",
    marca: "Honda",
    descripción: "Honda XR-250 Tornado 4T",
    precio: 121500,
    img: "../img/Honda-XR250-Tornado.jpg",
    stock:"10"
  },
];

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(misProductos);
    }, 2000);
  });
};

export const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = misProductos.find((prod) => prod.id === id);
      resolve(product);
    }, 2000);
  });
};

export const getProductsByCategory = (idCat) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productsCategory = misProductos.filter(prod => prod.idCat === idCat);
      resolve(productsCategory);
    }, 2000);
  });
};