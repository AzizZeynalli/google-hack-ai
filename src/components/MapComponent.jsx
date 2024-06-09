import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import brownBear from "../assets/brown-bear.png";
import redFox from "../assets/red-fox.png";
import tortoise from "../assets/tortoise.png";
import lynx from "../assets/lynx.png";
import goat from "../assets/goat.png";
import boar from "../assets/boar.png";

const addLegend = (map) => {
  const legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    const div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<p>OPTIMUM team</p>";
    return div;
  };

  legend.addTo(map);
};

const getMarkerIcon = (animal) => {
  return L.icon({
    iconUrl: animal.image,
    iconSize: [50, 35], // size of the icon
    iconAnchor: [25, 17.5], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -17.5], // point from which the popup should open relative to the iconAnchor
  });
};

const MapComponent = () => {
  const mapRef = useRef(null);

  const [timestamp, setTimestamp] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(prevTimestamp => prevTimestamp + 1);
    }, 5000); 
    if (mapRef.current) return;

    mapRef.current = L.map("map").setView([36.9804, 30.4623], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    addLegend(mapRef.current);

    const dangerZone = {
      lat: 36.98009818266554,
      lng: 30.488269184292076,
      radius: 200,
    };

    L.circle([dangerZone.lat, dangerZone.lng], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: dangerZone.radius,
    }).addTo(mapRef.current);

    const animals = [
      {
        lat: 36.992681532107234,
        lng: 30.47867870049044,
        prediction: "High",
        anomaly: 82,
        type: "Brown bear (Ursus arctos)",
        image: brownBear,
      },
      {
        lat: 36.966352227940526,
        lng: 30.47661935196821,
        prediction: "Medium",
        anomaly: 33,
        type: "Red fox (Vulpes vulpes)",
        image: redFox,
      },
      {
        lat: 36.99487522952384,
        lng: 30.530162413546304,
        prediction: "Low",
        anomaly: 4,
        type: "Tortoise (Testudo spp.)",
        image: tortoise,
      },
      {
        lat: 36.99152961122579,
        lng: 30.491352429258434,
        prediction: "Low",
        anomaly: 2,
        type: "Lynx",
        image: lynx,
      },
      {
        lat: 36.973389818266554,
        lng: 30.488269184292076,
        prediction: "Low",
        anomaly: 5.66,
        type: "Mountain goat (Capra aegagrus)",
        image: goat,
      },
      {
        lat: 36.99031863163271,
        lng: 30.498275441281162,
        prediction: "Low",
        anomaly: 7.21,
        type: "Wild boar (Sus scrofa)",
        image: boar,
      },
    ];

    let data = {
      0: [
        {
          animal: "GOAT",
          coordinates: [36.99887132095771, 30.471641438038027],
        },
        { animal: "BEAR", coordinates: [36.99943442957833, 30.48868591897663] },
        { animal: "LYNX", coordinates: [36.96538768867892, 30.48581341662709] },
        { animal: "LYNX", coordinates: [37.00903538233324, 30.50660315296361] },
        {
          animal: "TORTOISE",
          coordinates: [36.98281504353844, 30.4444134161759],
        },
        { animal: "FOX", coordinates: [36.96258060839884, 30.46731258639675] },
        {
          animal: "BEAR",
          coordinates: [36.984422888533764, 30.481523467491044],
        },
        {
          animal: "GOAT",
          coordinates: [36.95050847556072, 30.494915277671637],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.96439975014729, 30.442133599095325],
        },
        {
          animal: "LYNX",
          coordinates: [36.978026903525276, 30.494207140831605],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.9724393763373, 30.5355247452672],
        },
        {
          animal: "BEAR",
          coordinates: [36.97720078812842, 30.515871910327267],
        },
        {
          animal: "BEAR",
          coordinates: [36.94775648297839, 30.504749481596658],
        },
        { animal: "PIG", coordinates: [36.99340388892239, 30.5324091085135] },
        { animal: "GOAT", coordinates: [37.00972574666341, 30.50051425542735] },
        { animal: "BEAR", coordinates: [37.01476662440244, 30.45731439196793] },
        {
          animal: "BEAR",
          coordinates: [36.94523065683554, 30.442064104016517],
        },
        { animal: "FOX", coordinates: [36.92653973920827, 30.474025667566178] },
        { animal: "PIG", coordinates: [36.93610391464209, 30.493619366867645] },
        {
          animal: "FOX",
          coordinates: [36.950174857888015, 30.529559021626724],
        },
      ],
      1: [
        {
          animal: "GOAT",
          coordinates: [37.00061160393735, 30.475271320072014],
        },
        {
          animal: "BEAR",
          coordinates: [37.003534367777036, 30.48854487348277],
        },
        { animal: "LYNX", coordinates: [36.98366731923046, 30.48981790565093] },
        { animal: "LYNX", coordinates: [36.99376915445133, 30.51742549613412] },
        {
          animal: "TORTOISE",
          coordinates: [36.982750961524026, 30.444411581090527],
        },
        {
          animal: "FOX",
          coordinates: [36.964167251145845, 30.453836194805234],
        },
        {
          animal: "BEAR",
          coordinates: [36.98388784402018, 30.477456144731168],
        },
        { animal: "GOAT", coordinates: [36.9538019236657, 30.492600579417072] },
        {
          animal: "TORTOISE",
          coordinates: [36.96433577746956, 30.442137766662185],
        },
        {
          animal: "LYNX",
          coordinates: [36.95946312982849, 30.491847663860476],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.97239410732643, 30.53557013897562],
        },
        { animal: "BEAR", coordinates: [36.97617173769694, 30.51190070871138] },
        {
          animal: "BEAR",
          coordinates: [36.944746883335114, 30.50753725795995],
        },
        { animal: "PIG", coordinates: [36.99786316681044, 30.531777276474916] },
        {
          animal: "GOAT",
          coordinates: [37.009558938777396, 30.50453629515354],
        },
        {
          animal: "BEAR",
          coordinates: [37.018868782746644, 30.457273355598257],
        },
        {
          animal: "BEAR",
          coordinates: [36.948870811444266, 30.443955839063797],
        },
        { animal: "FOX", coordinates: [36.92781228609197, 30.48753533780506] },
        { animal: "PIG", coordinates: [36.937678088920734, 30.48939961019832] },
        { animal: "FOX", coordinates: [36.9617564000961, 30.522488063727195] },
      ],
      2: [
        { animal: "GOAT", coordinates: [37.00179983885942, 30.47112393844961] },
        {
          animal: "BEAR",
          coordinates: [37.00403481595697, 30.488196429869326],
        },
        {
          animal: "LYNX",
          coordinates: [36.992544860747074, 30.49685473150458],
        },
        {
          animal: "LYNX",
          coordinates: [36.993523444957525, 30.50609998120903],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.98282033011461, 30.444350108531314],
        },
        { animal: "FOX", coordinates: [36.97399316996901, 30.44902827785155] },
        {
          animal: "BEAR",
          coordinates: [36.98327957338813, 30.477499367071836],
        },
        {
          animal: "GOAT",
          coordinates: [36.953947982038535, 30.496912347442322],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.96427445927352, 30.4422072717392],
        },
        {
          animal: "LYNX",
          coordinates: [36.95664473942274, 30.480875684230774],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.97242093152921, 30.535658859542803],
        },
        { animal: "BEAR", coordinates: [36.97588675567425, 30.51243982519165] },
        { animal: "BEAR", coordinates: [36.94529838932459, 30.50727706096511] },
        { animal: "PIG", coordinates: [36.9942949813572, 30.528468715089907] },
        {
          animal: "GOAT",
          coordinates: [37.01124617601357, 30.500565664591434],
        },
        {
          animal: "BEAR",
          coordinates: [37.01917465056715, 30.457800902950567],
        },
        {
          animal: "BEAR",
          coordinates: [36.948402854973445, 30.443564842805543],
        },
        { animal: "FOX", coordinates: [36.92999230448416, 30.47681562391136] },
        { animal: "PIG", coordinates: [36.94120604862179, 30.49275103171983] },
        {
          animal: "FOX",
          coordinates: [36.953074242594155, 30.529142752845736],
        },
      ],
    };


    const updatedAnimals = data[timestamp]
      .map((item) => {
        const animalType = item.animal.toLowerCase();
        const animalData = animals.find((animal) =>
          animal.type.toLowerCase().includes(animalType)
        );

        if (animalData) {
          return {
            ...animalData,
            lat: item.coordinates[0],
            lng: item.coordinates[1],
          };
        }

        return null;
      })
      .filter(Boolean);

    const markers = updatedAnimals.map((animal) => {
      const markerIcon = getMarkerIcon(animal);
      const marker = L.marker([animal.lat, animal.lng], {
        icon: markerIcon,
      });
      marker.bindPopup(`Animal: ${animal.type} , Value: ${animal.anomaly}%`);
      return marker;
    });

    const markerGroup = L.layerGroup(markers).addTo(mapRef.current);

    mapRef.current.on("zoomend", function () {
      if (mapRef.current.getZoom() < 12) {
        if (mapRef.current.hasLayer(markerGroup)) {
          mapRef.current.removeLayer(markerGroup);
        }
      } else {
        if (!mapRef.current.hasLayer(markerGroup)) {
          markerGroup.addTo(mapRef.current);
        }
      }
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "50%" }}>
      <div
        id="map"
        style={{ height: "580px", width: "85", borderRadius: "25px" }}
      />
    </div>
  );
};

export default MapComponent;
