type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Guarderias",
      desc: "Una guardería canina ofrece un entorno seguro y acogedor para tus mascotas mientras estás fuera. Nuestros servicios incluyen cuidado individualizado, actividades recreativas y atención veterinaria si es necesario. Confía en nosotros para mantener a tu peludo amigo feliz y saludable en tu ausencia.",
      img: "/dognursery.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Cuidadores",
      desc: "Un cuidador canino profesional ofrece atención personalizada y amorosa para tu perro en tu ausencia. Nuestros servicios incluyen paseos regulares, alimentación adecuada y compañía constante para mantener a tu amigo de cuatro patas feliz y relajado. Deja a tu mascota en nuestras manos expertas y ten la tranquilidad de que recibirá el mejor cuidado posible.",
      img: "/dogcare.jpg",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Paseadores",
      desc: "Nuestro servicio de paseador canino ofrece a tu perro la oportunidad de disfrutar de paseos regulares y saludables. Nuestros profesionales cuidan de tu mascota con amor y atención, adaptando los paseos a sus necesidades individuales. Mantén a tu perro activo, socializado y feliz con nuestro servicio de paseador canino de confianza..",
      img: "/dogwalkers.jpg",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
