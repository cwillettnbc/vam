/**
 * Platform API Component
 */

const PlatformAPI = {
  platforms: [
    { id: 1, name: "Android Phone", type: "android", color: "#a4c639",src: "/img/logos/logo-android-phone.svg" },
    { id: 2, name: "Android Tablet", type: "android", color: "#a4c639", src: "/img/logos/logo-android-tablet.svg" },
    { id: 2, name: "iPhone", type: "apple", color: "#fff", src: "/img/logos/logo-iphone.svg" },
    { id: 2, name: "iPad", type: "apple", color: "#fff", src: "/img/logos/logo-ipad.svg" },
    { id: 2, name: "Apple TV", type: "apple", color: "#fff", src: "/img/logos/logo-appletv.svg" },
    { id: 2, name: "Fire TV", type: "", color: "#000", src: "/img/logos/logo-firetv.png" },
    { id: 2, name: "Kindle Fire", type: "white", color: "#fff", src: "/img/logos/logo-kindlefire.svg" },
    { id: 2, name: "Roku", type: "roku", color: "#6c3c97", src: "/img/logos/logo-roku.svg" },
    { id: 2, name: "Samsung TV", type: "samsung", color: "#fff", src: "/img/logos/logo-samsung.svg" },
    { id: 2, name: "Xbox One", type: "white", color: "#fff", src: "/img/logos/logo-xbox.svg" },
    { id: 2, name: "Vizio", type: "white", color: "#fff", src: "/img/logos/logo-vizio.png" },
    { id: 2, name: "Desktop", type: "desktop", color: "#fff", src: "/img/logos/logo-desktop.png" }
  ],
  all: function() { return this.platforms},
  get: function(id) {
    const isPlatform = p => p.number === id;
    return this.platforms.find(isPlatform)
  }
};

export default PlatformAPI;