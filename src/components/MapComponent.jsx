import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import brownBear from "../assets/brown-bear.png";
import redFox from "../assets/red-fox.png";
import tortoise from "../assets/tortoise.png";
import lynx from "../assets/lynx.png";
import goat from "../assets/goat.png";
import boar from "../assets/boar.png";
import AnimalInfo from "./AnimalInfo";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

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
    iconSize: [50, 35],
    iconAnchor: [25, 17.5],
    popupAnchor: [0, -17.5],
  });
};

const MapComponent = () => {
  const mapRef = useRef(null);
  const [selectedAnimal, setSelectedAnimal] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp((prevTimestamp) => (prevTimestamp + 1) % 6);
    }, 5000);

    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([36.9804, 30.4623], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      addLegend(mapRef.current);
    }

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp((prevTimestamp) => prevTimestamp % 6);
    }, 5000);
    if (!mapRef.current) return;





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
        type: "Wild boar pig (Sus scrofa)",
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
      3: [
        {
          animal: "GOAT",
          coordinates: [37.007839504764064, 30.47461962347341],
        },
        { animal: "BEAR", coordinates: [37.00670125893403, 30.48649720958996] },
        {
          animal: "LYNX",
          coordinates: [36.99510268037309, 30.508639458322534],
        },
        {
          animal: "LYNX",
          coordinates: [36.98831173302106, 30.516974735739787],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.982778307136506, 30.44427784635965],
        },
        { animal: "FOX", coordinates: [36.97544974357759, 30.460053672278367] },
        { animal: "BEAR", coordinates: [36.9823911073136, 30.48053381854486] },
        {
          animal: "GOAT",
          coordinates: [36.960924298053726, 30.496743845568336],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.96424090667984, 30.442283835278825],
        },
        {
          animal: "LYNX",
          coordinates: [36.945448700762476, 30.485355745137813],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.972416942067426, 30.535575362019863],
        },
        {
          animal: "BEAR",
          coordinates: [36.97277691248178, 30.513010914524358],
        },
        {
          animal: "BEAR",
          coordinates: [36.94845928530606, 30.507199573533402],
        },
        { animal: "PIG", coordinates: [36.98967402497776, 30.528144568690863] },
        { animal: "GOAT", coordinates: [37.01815117339482, 30.49955651188231] },
        {
          animal: "BEAR",
          coordinates: [37.01623188896275, 30.458957372512362],
        },
        {
          animal: "BEAR",
          coordinates: [36.945994859739876, 30.441515738937305],
        },
        { animal: "FOX", coordinates: [36.93980131905428, 30.4715749977935] },
        { animal: "PIG", coordinates: [36.94192058259152, 30.49732790291693] },
        {
          animal: "FOX",
          coordinates: [36.962211912994476, 30.522803674947557],
        },
      ],
      4: [
        {
          animal: "GOAT",
          coordinates: [37.003101031256165, 30.471127755908913],
        },
        { animal: "BEAR", coordinates: [37.0052944280905, 30.48417029654973] },
        {
          animal: "LYNX",
          coordinates: [37.00913272027146, 30.515746973890657],
        },
        {
          animal: "LYNX",
          coordinates: [36.989939321354086, 30.501331534235007],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.98280911070616, 30.444356225119847],
        },
        { animal: "FOX", coordinates: [36.966352227940526, 30.46220391231256] },
        {
          animal: "BEAR",
          coordinates: [36.98335761217526, 30.477992250983004],
        },
        {
          animal: "GOAT",
          coordinates: [36.966352227940526, 30.49446703916088],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.96415770803828, 30.442296876597624],
        },
        {
          animal: "LYNX",
          coordinates: [36.950440525507126, 30.470441306401483],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.97238683148438, 30.535654009605597],
        },
        {
          animal: "BEAR",
          coordinates: [36.97512967493797, 30.514374074875825],
        },
        {
          animal: "BEAR",
          coordinates: [36.95098926024785, 30.508196029309136],
        },
        { animal: "PIG", coordinates: [36.99103621751952, 30.528103065024037] },
        {
          animal: "GOAT",
          coordinates: [37.023935745931624, 30.500645084727612],
        },
        {
          animal: "BEAR",
          coordinates: [37.01351910258053, 30.458771664775504],
        },
        {
          animal: "BEAR",
          coordinates: [36.946599271636295, 30.43886462906056],
        },
        { animal: "FOX", coordinates: [36.93397664519062, 30.46426326083479] },
        { animal: "PIG", coordinates: [36.940562624214465, 30.49721283719055] },
        { animal: "FOX", coordinates: [36.96744946416934, 30.51506052438322] },
      ],
      5: [
        {
          animal: "GOAT",
          coordinates: [37.03278876971596, 30.465226401082948],
        },
        {
          animal: "BEAR",
          coordinates: [37.036077555982025, 30.481024987835692],
        },
        {
          animal: "LYNX",
          coordinates: [37.02182512020039, 30.531855223474857],
        },
        { animal: "LYNX", coordinates: [37.00263492606702, 30.522238692408] },
        {
          animal: "TORTOISE",
          coordinates: [36.996054315529506, 30.421952011282023],
        },
        { animal: "FOX", coordinates: [36.97521195850507, 30.43568991280615] },
        {
          animal: "BEAR",
          coordinates: [36.999893074223124, 30.449427814330246],
        },
        {
          animal: "GOAT",
          coordinates: [36.959850778632976, 30.52292558748422],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.96369136420023, 30.41027479498655],
        },
        {
          animal: "LYNX",
          coordinates: [36.93515667474226, 30.443245758644395],
        },
        {
          animal: "TORTOISE",
          coordinates: [36.976309067021845, 30.556583446218237],
        },
        { animal: "BEAR", coordinates: [36.98618233190832, 30.5380372791607] },
        { animal: "BEAR", coordinates: [36.94338893211519, 30.522238692408] },
        { animal: "PIG", coordinates: [37.00702168334702, 30.54834070530378] },
        {
          animal: "GOAT",
          coordinates: [37.044846956335654, 30.50850079088391],
        },
        {
          animal: "BEAR",
          coordinates: [37.02456618093351, 30.426073381739258],
        },
        { animal: "BEAR", coordinates: [36.95162030010336, 30.41508306052] },
        {
          animal: "FOX",
          coordinates: [36.931863522781875, 30.483085673064306],
        },
        { animal: "PIG", coordinates: [36.93351011654799, 30.50781389580769] },
        { animal: "FOX", coordinates: [36.96424000346695, 30.540784859465543] },
      ],
    };

    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
        mapRef.current.removeLayer(layer);
      }
    });

    const updatedAnimals = data[timestamp]
      .map((item,index) => {
        const animalType = item.animal.toLowerCase();
        const animalData = animals.find((animal) =>
          animal.type.toLowerCase().includes(animalType)
        );
        if(index === 1){
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
        }
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
        marker.on("click", () => handleMarkerClick(animal));
        return marker;
      });

    const markerGroup = L.layerGroup(markers);

    markerGroup.addTo(mapRef.current);

    // const oldMarkers = data[(timestamp + 2) % 3].map((item) => {
    //   const marker = L.circleMarker([item.coordinates[0], item.coordinates[1]], {
    //     color: 'blue',
    //     radius: 3,
    //   });
    //   return marker;
    // });

    // const oldMarkerGroup = L.layerGroup(oldMarkers);
    // oldMarkerGroup.addTo(mapRef.current);

    return () => {
      clearInterval(interval);
    };
  }, [timestamp]);

  const handleMarkerClick = (animal) => {
    setSelectedAnimal(animal.type);
    setIsModalOpen(true);
  };


  return (
    <div style={{ width: "50%" }}>
      <div
        id="map"
        style={{ height: "580px", width: "85%", borderRadius: "25px" }}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Animal Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedAnimal && <AnimalInfo targetAnimal={selectedAnimal} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MapComponent;
