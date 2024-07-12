const dataItens = [
  {
    brand: "Rolex",
    model: "Submariner",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9500
  },
  {
    brand: "Omega",
    model: "Seamaster",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 5800
  },
  {
    brand: "Tag Heuer",
    model: "Carrera",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4200
  },
  {
    brand: "Breitling",
    model: "Navitimer",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 7900
  },
  {
    brand: "Cartier",
    model: "Tank Solo",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 2800
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Reverso",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5500
  },
  {
    brand: "Seiko",
    model: "Prospex",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 1400
  },
  {
    brand: "Citizen",
    model: "Promaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 1200
  },
  {
    brand: "Tissot",
    model: "Le Locle",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 650
  },
  {
    brand: "Hamilton",
    model: "Khaki Field",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 495
  },
  {
    brand: "Longines",
    model: "Master Collection",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 1150
  },
  {
    brand: "Oris",
    model: "Big Crown ProPilot",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Textile",
    priceUSD: 1800
  },
  {
    brand: "Bell & Ross",
    model: "Aviation",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 4500
  },
  {
    brand: "Sinn",
    model: 104,
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 1400
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18k White Gold",
    strapMaterial: "Leather",
    priceUSD: 16000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 22000
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 19000
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 4500
  },
  {
    brand: "Breitling",
    model: "Superocean",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 3200
  },
  {
    brand: "Panerai",
    model: "Luminor Base Logo",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3900
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3500
  },
  {
    brand: "Rolex",
    model: "GMT-Master II",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 14000
  },
  {
    brand: "IWC",
    model: "Pilot's Watch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4800
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Ultra Thin",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Bell & Ross",
    model: "BR 03-92",
    caseMaterial: "Ceramic",
    strapMaterial: "Rubber",
    priceUSD: ""
  },
  {
    brand: "Montblanc",
    model: "1858 Geosphere",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6200
  },
  {
    brand: "Cartier",
    model: "Santos-Dumont",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3500
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 21000
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Jubilee",
    priceUSD: 9000
  },
  {
    brand: "Omega",
    model: "Speedmaster Moonwatch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5250
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Alligator",
    priceUSD: 8800
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 17800
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Canvas",
    priceUSD: 11500
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Alligator",
    priceUSD: 6500
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18K Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 23500
  },
  {
    brand: "Piaget",
    model: "Polo S",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 10000
  },
  {
    brand: "Ulysse Nardin",
    model: "Marine",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 9500
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 21500
  },
  {
    brand: "Jaquet Droz",
    model: "Grande Seconde",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 9800
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 19900
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Canvas",
    priceUSD: 14400
  },
  {
    brand: "Breguet",
    model: "Type XXI",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 9500
  },
  {
    brand: "Bulgari",
    model: "Octo Finissimo",
    caseMaterial: "Titanium",
    strapMaterial: "Leather",
    priceUSD: 12800
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 7800
  },
  {
    brand: "Glashütte Original",
    model: "Senator",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 9200
  },
  {
    brand: "Hublot",
    model: "Classic Fusion",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 6500
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8400
  },
  {
    brand: "Jaquet Droz",
    model: "Grande Seconde",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6200
  },
  {
    brand: "Longines",
    model: "Master Collection",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 1600
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 29800
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 24500
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7950
  },
  {
    brand: "Hublot",
    model: "Classic Fusion",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 8200
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Canvas",
    priceUSD: 11500
  },
  {
    brand: "Zenith",
    model: "Chronomaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 9400
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 6700
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6100
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 16300
  },
  {
    brand: "Montblanc",
    model: 1858,
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3600
  },
  {
    brand: "Ulysse Nardin",
    model: "Marine",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 9500
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 8900
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 44500
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 17000
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Fabric",
    priceUSD: 4500
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8300
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8900
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Fabric",
    priceUSD: 12000
  },
  {
    brand: "Hublot",
    model: "Classic Fusion",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 7500
  },
  {
    brand: "Zenith",
    model: "Chronomaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6900
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 15500
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 11200
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 18900
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 49800
  },
  {
    brand: "IWC",
    model: "Pilot's Watch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5500
  },
  {
    brand: "Panerai",
    model: "Luminor",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 9600
  },
  {
    brand: "Breguet",
    model: "Type XX",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8800
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 14700
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 10600
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 19200
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5600
  },
  {
    brand: "Longines",
    model: "HydroConquest",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 1400
  },
  {
    brand: "Rolex",
    model: "Submariner",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9500
  },
  {
    brand: "Omega",
    model: "Seamaster",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 5800
  },
  {
    brand: "Tag Heuer",
    model: "Carrera",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4200
  },
  {
    brand: "Breitling",
    model: "Navitimer",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 7900
  },
  {
    brand: "Cartier",
    model: "Tank Solo",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 2800
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Reverso",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5500
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3500
  },
  {
    brand: "Seiko",
    model: "Prospex",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Silicone",
    priceUSD: 650
  },
  {
    brand: "Citizen",
    model: "Promaster",
    caseMaterial: "Titanium",
    strapMaterial: "Titanium",
    priceUSD: 995
  },
  {
    brand: "Hamilton",
    model: "Khaki Field Auto",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 545
  },
  {
    brand: "Bulova",
    model: "Precisionist",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 650
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5500
  },
  {
    brand: "Breitling",
    model: "Superocean Heritage",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 4800
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Control",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "Cartier",
    model: "Santos",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 7500
  },
  {
    brand: "Zenith",
    model: "Elite",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4500
  },
  {
    brand: "Panerai",
    model: "Luminor Base",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5800
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 21000
  },
  {
    brand: "IWC",
    model: "Pilot's Watch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3800
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3900
  },
  {
    brand: "Longines",
    model: "Conquest VHP",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 1500
  },
  {
    brand: "Sinn",
    model: "U1",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 2500
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 38000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Rose Gold",
    strapMaterial: "Rose Gold",
    priceUSD: 55000
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 21000
  },
  {
    brand: "A. Lange & Sohne",
    model: "Saxonia",
    caseMaterial: "White Gold",
    strapMaterial: "Leather",
    priceUSD: 23000
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 23000
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8500
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Fabric",
    priceUSD: 14000
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 16000
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8500
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6000
  },
  {
    brand: "Piaget",
    model: "Altiplano",
    caseMaterial: "White Gold",
    strapMaterial: "Leather",
    priceUSD: 16500
  },
  {
    brand: "Seiko",
    model: "Prospex",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Silicone",
    priceUSD: 1200
  },
  {
    brand: "Panerai",
    model: "Luminor Due",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 9800
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 16800
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 19800
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 47000
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18K Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 19000
  },
  {
    brand: "Vacheron Constantin",
    model: "Patrimony",
    caseMaterial: "18K White Gold",
    strapMaterial: "Leather",
    priceUSD: 18500
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5800
  },
  {
    brand: "Longines",
    model: "Conquest",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 2200
  },
  {
    brand: "Montblanc",
    model: 1858,
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3500
  },
  {
    brand: "Rolex",
    model: "GMT-Master II",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9950
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 4950
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 38000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 22000
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Ultra Thin",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8900
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Fabric",
    priceUSD: 13900
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 20500
  },
  {
    brand: "Ulysse Nardin",
    model: "Marine",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 9500
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Ceramic",
    strapMaterial: "Rubber",
    priceUSD: 16000
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5500
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 8200
  },
  {
    brand: "Omega",
    model: "Speedmaster Moonwatch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5500
  },
  {
    brand: "Cartier",
    model: "Ballon Bleu",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 6500
  },
  {
    brand: "Breitling",
    model: "Superocean",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 3600
  },
  {
    brand: "Patek Philippe",
    model: "Calatrava",
    caseMaterial: "Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 18000
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 8900
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Canvas",
    priceUSD: 13500
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 26000
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7800
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Ultra Thin",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4500
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 29800
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 23100
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7950
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 18900
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Canvas",
    priceUSD: 12800
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Ceramic",
    strapMaterial: "Rubber",
    priceUSD: 17900
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18k Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 15200
  },
  {
    brand: "Ulysse Nardin",
    model: "Marine",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8400
  },
  {
    brand: "Zenith",
    model: "Defy",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 9500
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9200
  },
  {
    brand: "Panerai",
    model: "Luminor",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Seiko",
    model: "Prospex",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Silicone",
    priceUSD: 1300
  },
  {
    brand: "Tissot",
    model: "Le Locle",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 650
  },
  {
    brand: "Longines",
    model: "Master Collection",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 2500
  },
  {
    brand: "Hamilton",
    model: "Jazzmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 1150
  },
  {
    brand: "Montblanc",
    model: "Heritage",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 2750
  },
  {
    brand: "Rado",
    model: "True Thinline",
    caseMaterial: "High-Tech Ceramic",
    strapMaterial: "Leather",
    priceUSD: 1600
  },
  {
    brand: "Frederique Constant",
    model: "Classics",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 1400
  },
  {
    brand: "Zenith",
    model: "Elite",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5500
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 8700
  },
  {
    brand: "Ulysse Nardin",
    model: "Marine Torpilleur",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7900
  },
  {
    brand: "Sinn",
    model: "U50",
    caseMaterial: "German Submarine Steel",
    strapMaterial: "Silicone",
    priceUSD: 3350
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Jubilee",
    priceUSD: 8000
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 6500
  },
  {
    brand: "Cartier",
    model: "Ballon Bleu",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4500
  },
  {
    brand: "Tag Heuer",
    model: "Aquaracer",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 1800
  },
  {
    brand: "Breitling",
    model: "Superocean",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 3600
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8900
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Titanium",
    strapMaterial: "Leather",
    priceUSD: 5700
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 34000
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Ultra Thin",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6800
  },
  {
    brand: "Bell & Ross",
    model: "BR V2-92",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 2500
  },
  {
    brand: "Montblanc",
    model: 1858,
    caseMaterial: "Bronze",
    strapMaterial: "Leather",
    priceUSD: 5300
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 34000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 22000
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 17500
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8500
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Ceramic",
    strapMaterial: "Rubber",
    priceUSD: 15000
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6000
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5000
  },
  {
    brand: "Panerai",
    model: "Luminor",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 8500
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9000
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "NATO Strap",
    priceUSD: 12500
  },
  {
    brand: "Bulgari",
    model: "Octo Finissimo",
    caseMaterial: "Titanium",
    strapMaterial: "Leather",
    priceUSD: 10000
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3800
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8900
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 16800
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6900
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 24500
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 19500
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18k White Gold",
    strapMaterial: "Leather",
    priceUSD: 24500
  },
  {
    brand: "Piaget",
    model: "Altiplano",
    caseMaterial: "18k Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 20800
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Fabric",
    priceUSD: 13000
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9700
  },
  {
    brand: "Zenith",
    model: "Chronomaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7400
  },
  {
    brand: "Breitling",
    model: "Superocean Heritage II",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 4300
  },
  {
    brand: "Cartier",
    model: "Santos de Cartier",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 6500
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5500
  },
  {
    brand: "Rolex",
    model: "GMT-Master II",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9100
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Control",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 20900
  },
  {
    brand: "IWC",
    model: "Pilot's Watch Mark XVIII",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4200
  },
  {
    brand: "Patek Philippe",
    model: "Calatrava",
    caseMaterial: "18k White Gold",
    strapMaterial: "Leather",
    priceUSD: 22000
  },
  {
    brand: "Tag Heuer",
    model: "Aquaracer",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 1700
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3600
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Jubilee Bracelet",
    priceUSD: 8900
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 6800
  },
  {
    brand: "Tag Heuer",
    model: "Aquaracer",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 2600
  },
  {
    brand: "Breitling",
    model: "Superocean Heritage",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4400
  },
  {
    brand: "Cartier",
    model: "Ballon Bleu",
    caseMaterial: "18k Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 13000
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Control",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Tudor",
    model: "Black Bay GMT",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 4500
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6900
  },
  {
    brand: "Longines",
    model: "HydroConquest",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 1800
  },
  {
    brand: "Oris",
    model: "Divers Sixty-Five",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 1500
  },
  {
    brand: "Hamilton",
    model: "Khaki Field",
    caseMaterial: "Stainless Steel",
    strapMaterial: "NATO Strap",
    priceUSD: 595
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "IWC",
    model: "Pilot's Watch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5400
  },
  {
    brand: "Patek Philippe",
    model: "Calatrava",
    caseMaterial: "White Gold",
    strapMaterial: "Leather",
    priceUSD: 25000
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Carbon Fiber",
    strapMaterial: "Rubber",
    priceUSD: 15000
  },
  {
    brand: "Zenith",
    model: "Chronomaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 25000
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 18000
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "White Gold",
    strapMaterial: "Leather",
    priceUSD: 20000
  },
  {
    brand: "Ulysse Nardin",
    model: "Marine",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 8500
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Canvas",
    priceUSD: 10500
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9000
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 51000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 22000
  },
  {
    brand: "IWC",
    model: "Pilot's Watch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Titanium",
    strapMaterial: "Fabric",
    priceUSD: 14500
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 21500
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 15000
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18k Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 18000
  },
  {
    brand: "Chopard",
    model: "Happy Sport",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5000
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 11500
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8000
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3800
  },
  {
    brand: "Panerai",
    model: "Luminor",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6400
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8900
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 20400
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 22000
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 62500
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Canvas",
    priceUSD: 14900
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5900
  },
  {
    brand: "Longines",
    model: "Master Collection",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 1500
  },
  {
    brand: "Montblanc",
    model: "Heritage",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 2700
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 7800
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5300
  },
  {
    brand: "Tag Heuer",
    model: "Monaco",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5900
  },
  {
    brand: "Breitling",
    model: "Superocean",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 3800
  },
  {
    brand: "Cartier",
    model: "Ballon Bleu",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 7500
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Ultra Thin",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6200
  },
  {
    brand: "Rolex",
    model: "GMT-Master II",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9500
  },
  {
    brand: "Omega",
    model: "Aqua Terra",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 4700
  },
  {
    brand: "Tag Heuer",
    model: "Aquaracer",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 2700
  },
  {
    brand: "Breitling",
    model: "Avenger II",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 4600
  },
  {
    brand: "Cartier",
    model: "Santos",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5300
  },
  {
    brand: "Rolex",
    model: "Daytona",
    caseMaterial: "Yellow Gold",
    strapMaterial: "Leather",
    priceUSD: 39500
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5400
  },
  {
    brand: "TAG Heuer",
    model: "Monaco",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6550
  },
  {
    brand: "Cartier",
    model: "Santos-Dumont",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5300
  },
  {
    brand: "Breitling",
    model: "Superocean",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 3850
  },
  {
    brand: "Patek Philippe",
    model: "Calatrava",
    caseMaterial: "White Gold",
    strapMaterial: "Leather",
    priceUSD: 25800
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Fabric",
    priceUSD: 4100
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 12900
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6900
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 19800
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 8100
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 6500
  },
  {
    brand: "Omega",
    model: "Speedmaster Moonwatch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5400
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 44000
  },
  {
    brand: "Cartier",
    model: "Ballon Bleu",
    caseMaterial: "18k Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 13200
  },
  {
    brand: "Hublot",
    model: "Classic Fusion",
    caseMaterial: "18k King Gold",
    strapMaterial: "Rubber",
    priceUSD: 20200
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 24800
  },
  {
    brand: "IWC",
    model: "Pilot's Watch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4800
  },
  {
    brand: "Tudor",
    model: "Black Bay GMT",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 4000
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18k White Gold",
    strapMaterial: "Leather",
    priceUSD: 22500
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 12500
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6900
  },
  {
    brand: "Panerai",
    model: "Luminor",
    caseMaterial: "Titanium",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 25000
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 70000
  },
  {
    brand: "IWC",
    model: "Pilot's Watch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5500
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Titanium",
    strapMaterial: "Fabric",
    priceUSD: 12000
  },
  {
    brand: "Ulysse Nardin",
    model: "Marine",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 7500
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 20000
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 8500
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Ceramic",
    strapMaterial: "Rubber",
    priceUSD: 12000
  },
  {
    brand: "Zenith",
    model: "Chronomaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6000
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 12000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 22000
  },
  {
    brand: "Hublot",
    model: "Classic Fusion",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 8500
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7200
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18K White Gold",
    strapMaterial: "Leather",
    priceUSD: 16000
  },
  {
    brand: "Chopard",
    model: "Happy Sport",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5800
  },
  {
    brand: "Ulysse Nardin",
    model: "Marine",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 8900
  },
  {
    brand: "IWC",
    model: "Portugieser Chronograph",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7600
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 57000
  },
  {
    brand: "Montblanc",
    model: "1858 Geosphere",
    caseMaterial: "Titanium",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 21000
  },
  {
    brand: "Zenith",
    model: "Chronomaster El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6000
  },
  {
    brand: "Rolex",
    model: "Daytona",
    caseMaterial: "18k Yellow Gold",
    strapMaterial: "Leather",
    priceUSD: 29500
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Rose Gold",
    strapMaterial: "Rose Gold",
    priceUSD: 36500
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 51000
  },
  {
    brand: "IWC",
    model: "Portuguese",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8800
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 13500
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Carbon Fiber",
    strapMaterial: "Rubber",
    priceUSD: 19500
  },
  {
    brand: "Ulysse Nardin",
    model: "Marine",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 7000
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18k White Gold",
    strapMaterial: "Leather",
    priceUSD: 23000
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9500
  },
  {
    brand: "Piaget",
    model: "Altiplano",
    caseMaterial: "18k White Gold",
    strapMaterial: "Leather",
    priceUSD: 18500
  },
  {
    brand: "Vacheron Constantin",
    model: "Patrimony",
    caseMaterial: "18k Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 22500
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 20000
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Carbon Fiber",
    strapMaterial: "Rubber",
    priceUSD: 12000
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 6500
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6200
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 15000
  },
  {
    brand: "Piaget",
    model: "Altiplano",
    caseMaterial: "White Gold",
    strapMaterial: "Leather",
    priceUSD: 22000
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5500
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "White Gold",
    strapMaterial: "Leather",
    priceUSD: 19000
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3500
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 7400
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5000
  },
  {
    brand: "Cartier",
    model: "Santos",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 6200
  },
  {
    brand: "TAG Heuer",
    model: "Aquaracer",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 3100
  },
  {
    brand: "Breitling",
    model: "Superocean",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 4100
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3800
  },
  {
    brand: "Zenith",
    model: "Elite Classic",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4900
  },
  {
    brand: "Longines",
    model: "Conquest Classic",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 1850
  },
  {
    brand: "Montblanc",
    model: "Star Legacy",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3900
  },
  {
    brand: "Baume & Mercier",
    model: "Clifton Baumatic",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 2750
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Jubilee Bracelet",
    priceUSD: 9500
  },
  {
    brand: "Omega",
    model: "Speedmaster Moonwatch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5350
  },
  {
    brand: "Breitling",
    model: "Superocean Heritage",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 3250
  },
  {
    brand: "Cartier",
    model: "Santos-Dumont",
    caseMaterial: "18K Yellow Gold",
    strapMaterial: "Leather",
    priceUSD: 14200
  },
  {
    brand: "Tag Heuer",
    model: "Monaco",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4950
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Control",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "Panerai",
    model: "Luminor",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 8500
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 27000
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7250
  },
  {
    brand: "Patek Philippe",
    model: "Calatrava",
    caseMaterial: "18K White Gold",
    strapMaterial: "Leather",
    priceUSD: 25000
  },
  {
    brand: "Bell & Ross",
    model: "BR 03-92",
    caseMaterial: "Ceramic",
    strapMaterial: "Rubber",
    priceUSD: 3800
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 8000
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 4500
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 52000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 28500
  },
  {
    brand: "IWC",
    model: "Pilot's Watch Mark",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6800
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Ceramic",
    strapMaterial: "Rubber",
    priceUSD: 16000
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18K White Gold",
    strapMaterial: "Leather",
    priceUSD: 19000
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 13500
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 8000
  },
  {
    brand: "Jaquet Droz",
    model: "Grande Seconde",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 10000
  },
  {
    brand: "Rolex",
    model: "GMT-Master II",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9700
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 29800
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5350
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 18500
  },
  {
    brand: "IWC",
    model: "Pilot's Watch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4950
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7900
  },
  {
    brand: "Cartier",
    model: "Santos-Dumont",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4500
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 16000
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 12800
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Control",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8500
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8500
  },
  {
    brand: "Panerai",
    model: "Luminor",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 7500
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 39000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 19500
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 13000
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 23000
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18K White Gold",
    strapMaterial: "Leather",
    priceUSD: 24000
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Fabric",
    priceUSD: 11000
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6000
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 7500
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 6500
  },
  {
    brand: "Tag Heuer",
    model: "Aquaracer",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 3700
  },
  {
    brand: "Breitling",
    model: "Superocean",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 4500
  },
  {
    brand: "Cartier",
    model: "Ballon Bleu",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 7500
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Control",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6000
  },
  {
    brand: "Rolex",
    model: "GMT-Master II",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9500
  },
  {
    brand: "Omega",
    model: "Constellation",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 4800
  },
  {
    brand: "Tag Heuer",
    model: "Monaco",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5200
  },
  {
    brand: "Breitling",
    model: "Chronomat",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 6900
  },
  {
    brand: "Cartier",
    model: "Santos",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5500
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 8000
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 40000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 18000
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 14000
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Canvas",
    priceUSD: 14000
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 25000
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Ultra Thin",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 7000
  },
  {
    brand: "Bulgari",
    model: "Octo Finissimo",
    caseMaterial: "Titanium",
    strapMaterial: "Titanium",
    priceUSD: 10000
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9000
  },
  {
    brand: "Rolex",
    model: "GMT-Master II",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9450
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 29800
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 22300
  },
  {
    brand: "Hublot",
    model: "Classic Fusion",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 8100
  },
  {
    brand: "IWC",
    model: "Pilot's Watch Mark XVIII",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3900
  },
  {
    brand: "A. Lange & Söhne",
    model: "Saxonia",
    caseMaterial: "Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 23300
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 23200
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6300
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5600
  },
  {
    brand: "Panerai",
    model: "Luminor",
    caseMaterial: "Titanium",
    strapMaterial: "Leather",
    priceUSD: 6900
  },
  {
    brand: "Rolex",
    model: "Daytona",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 13500
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 4500
  },
  {
    brand: "Cartier",
    model: "Santos",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6600
  },
  {
    brand: "Breitling",
    model: "Superocean Heritage",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4400
  },
  {
    brand: "Tag Heuer",
    model: "Aquaracer",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 2800
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Ultra Thin",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6300
  },
  {
    brand: "Patek Philippe",
    model: "Calatrava",
    caseMaterial: "18k Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 22900
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 22500
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 6900
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 20200
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7600
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 34000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 22000
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 9500
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Ceramic",
    strapMaterial: "Rubber",
    priceUSD: 14000
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18k Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 26000
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7000
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "NATO strap",
    priceUSD: 10000
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 11500
  },
  {
    brand: "Ulysse Nardin",
    model: "Marine",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 20000
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 26000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 17000
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7800
  },
  {
    brand: "A. Lange & Söhne",
    model: "Saxonia",
    caseMaterial: "18k Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 17500
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 20000
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 12000
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 14000
  },
  {
    brand: "Hublot",
    model: "Classic Fusion",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 9500
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18k White Gold",
    strapMaterial: "Leather",
    priceUSD: 22000
  },
  {
    brand: "Piaget",
    model: "Polo",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 10500
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 29000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 38500
  },
  {
    brand: "Hublot",
    model: "Classic Fusion",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 7500
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 25000
  },
  {
    brand: "IWC",
    model: "Pilot's Watch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5900
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "NATO Strap",
    priceUSD: 12000
  },
  {
    brand: "Zenith",
    model: "El Primero",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6200
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 6800
  },
  {
    brand: "Vacheron Constantin",
    model: "Patrimony",
    caseMaterial: "White Gold",
    strapMaterial: "Leather",
    priceUSD: 28000
  },
  {
    brand: "Panerai",
    model: "Luminor",
    caseMaterial: "Titanium",
    strapMaterial: "Leather",
    priceUSD: 9500
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "NATO Strap",
    priceUSD: 3500
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7200
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7900
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 36000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 28500
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Canvas",
    priceUSD: 15000
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18K Yellow Gold",
    strapMaterial: "Leather",
    priceUSD: 26000
  },
  {
    brand: "Zenith",
    model: "Chronomaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 6500
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 12000
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 18500
  },
  {
    brand: "Jaquet Droz",
    model: "Grande Seconde",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 9500
  },
  {
    brand: "Montblanc",
    model: "Star Legacy",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3500
  },
  {
    brand: "Rolex",
    model: "GMT-Master II",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 9900
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 4300
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 7500
  },
  {
    brand: "Hublot",
    model: "Big Bang",
    caseMaterial: "Ceramic",
    strapMaterial: "Rubber",
    priceUSD: 15500
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 5200
  },
  {
    brand: "Patek Philippe",
    model: "Calatrava",
    caseMaterial: "White Gold",
    strapMaterial: "Leather",
    priceUSD: 25000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 19500
  },
  {
    brand: "Vacheron Constantin",
    model: "Patrimony",
    caseMaterial: "Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 15000
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Titanium",
    strapMaterial: "Fabric",
    priceUSD: 14000
  },
  {
    brand: "Girard-Perregaux",
    model: "Laureato",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 7500
  },
  {
    brand: "Jaquet Droz",
    model: "Grande Seconde",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8500
  },
  {
    brand: "Rolex",
    model: "Datejust",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Jubilee Bracelet",
    priceUSD: 7650
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 5200
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 67000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 25000
  },
  {
    brand: "Cartier",
    model: "Ballon Bleu",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 4700
  },
  {
    brand: "IWC",
    model: "Portugieser",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 9100
  },
  {
    brand: "Jaeger-LeCoultre",
    model: "Master Control",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 8200
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Canvas",
    priceUSD: 12500
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18K Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 27900
  },
  {
    brand: "Chopard",
    model: "Mille Miglia",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Rubber",
    priceUSD: 6500
  },
  {
    brand: "Seiko",
    model: "Prospex",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Silicone",
    priceUSD: 1200
  },
  {
    brand: "Tudor",
    model: "Black Bay",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 3800
  },
  {
    brand: "IWC",
    model: "Pilot's Watch",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 4500
  },
  {
    brand: "Panerai",
    model: "Luminor Marina",
    caseMaterial: "Titanium",
    strapMaterial: "Rubber",
    priceUSD: 9500
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 35000
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 24000
  },
  {
    brand: "Breguet",
    model: "Classique",
    caseMaterial: "18k Rose Gold",
    strapMaterial: "Leather",
    priceUSD: 21500
  },
  {
    brand: "Blancpain",
    model: "Fifty Fathoms",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Fabric",
    priceUSD: 13500
  },
  {
    brand: "Longines",
    model: "Master Collection",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 1800
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Stainless Steel",
    priceUSD: 19000
  },
  {
    brand: "Frederique Constant",
    model: "Classics",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    priceUSD: 1200
  }
]

export const dataset = dataItens.map((objeto) => ({
  brand: objeto.brand,
  model: objeto.model,
  caseMaterial: objeto.caseMaterial,
  strapMaterial: objeto.strapMaterial,
  price: objeto.priceUSD
}));
