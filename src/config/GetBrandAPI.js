/**
 * Brand API Component
 */

const BrandAPI = {
  brands: [
    { id: 1, name: "Bravo", color: "#def4ff",src: "/img/logos/logo-bravo.svg" },
    { id: 2, name: "CNBC", color: "#146195", src: "/img/logos/logo-cnbc.svg" },
    { id: 3, name: "E!", color: "#000", src: "/img/logos/logo-e.svg" },
    { id: 4, name: "MSNBC", color: "#3062ff", src: "/img/logos/logo-msnbc.svg" },
    { id: 5, name: "NBC Digital", color: "#f4f4f4", src: "/img/logos/logo-nbcd.png" },
    { id: 6, name: "NBC News", color: "#FFF", src: "/img/logos/logo-nbcnews.svg" },
    { id: 7, name: "Oxygen", color: "#000", src: "/img/logos/logo-oxygen.svg" },
    { id: 8, name: "SYFY", color: "#000", src: "/img/logos/logo-syfy.svg" },
    { id: 9, name: "Telemundo", color: "#e4e4e6", src: "/img/logos/logo-telemundo.svg" },
    { id: 10, name: "Today", color:"", src: "/img/logos/logo-today.svg" },
    { id: 11, name: "Universal Kids", color: "#FFF", src: "/img/logos/logo-universalkids.jpg" },
    { id: 12, name: "Universo", color: "#000", src: "/img/logos/logo-universo.svg" },
    { id: 13, name: "USA", color: "#ba2026", src: "/img/logos/logo-usa.svg" },
  ],
  all: function() { return this.brands},
  get: function(id) {
    const isBrand = p => p.number === id;
    return this.brands.find(isBrand)
  }
};

export default BrandAPI;