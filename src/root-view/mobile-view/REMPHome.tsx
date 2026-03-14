import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Header } from "./header";
import { Footer } from "./footer";
import locationIcon from "../../assets/images/Icons/header_icons/location-crosshairs.svg";
import filterIcon from "../../assets/images/Icons/header_icons/settings-sliders.svg";
import searchIcon from "../../assets/images/Icons/header_icons/search.svg";

// Fix Leaflet default marker icons broken by bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom navy + gold SVG marker
const navyGoldMarker = new L.Icon({
  iconUrl:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="38" viewBox="0 0 28 38">
        <path d="M14 0C6.268 0 0 6.268 0 14c0 9.625 14 24 14 24S28 23.625 28 14C28 6.268 21.732 0 14 0z" fill="#1C2A44"/>
        <circle cx="14" cy="14" r="6" fill="#C89B3C"/>
      </svg>`
    ),
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  popupAnchor: [0, -38],
});

const MAP_MARKERS = [
  { lat: 17.412, lng: 78.448, label: "Lalitabagh" },
  { lat: 17.425, lng: 78.475, label: "Bhavani Nagar" },
  { lat: 17.408, lng: 78.462, label: "Central" },
  { lat: 17.416, lng: 78.490, label: "East Side" },
];

const AD_SLIDES = [
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
];

export function REMPHome() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeNav, setActiveNav] = useState("Home");

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((s) => (s + 1) % AD_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden relative bg-white">
      {/* Header */}
      <Header />

      {/* Scrollable content area above fixed footer */}
      <div className="flex-1 overflow-y-auto pb-[72px]">

        {/* Search Bar */}
        <div className="px-4 pt-3 pb-2">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 shadow-sm gap-2">
            <img src={locationIcon} alt="Location" className="w-5 h-5 flex-shrink-0" />
            <span className="flex-1 text-gray-400 text-[13px]">Search Properties</span>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-cremp-gold/20 border border-cremp-gold rounded-md p-[5px]">
                <img src={filterIcon} alt="Filter" className="w-4 h-4" />
              </div>
              <div className="bg-cremp-blue rounded-md p-[5px]">
                <img src={searchIcon} alt="Search" className="w-4 h-4 brightness-0 invert" />
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full overflow-hidden" style={{ height: 220 }}>
          <MapContainer
            center={[17.415, 78.468]}
            zoom={13}
            scrollWheelZoom={false}
            dragging={true}
            doubleClickZoom={false}
            zoomControl={false}
            attributionControl={false}
            style={{ width: "100%", height: "220px" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {MAP_MARKERS.map((m) => (
              <Marker key={m.label} position={[m.lat, m.lng]} icon={navyGoldMarker}>
                <Popup>{m.label}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Advertisement / Hero Card */}
        <div className="px-4 pt-4">
          <div className="w-full rounded-2xl overflow-hidden bg-gray-200 shadow-sm">
            <img
              src={AD_SLIDES[activeSlide]}
              alt={`Ad slide ${activeSlide + 1}`}
              className="w-full h-52 object-cover"
            />
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 pt-3">
          {AD_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                activeSlide === i
                  ? "w-3 h-3 bg-cremp-gold"
                  : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Enquire Now CTA */}
        <div className="flex justify-center pt-4 pb-2 px-4">
          <button className="w-full bg-cremp-gold text-cremp-blue font-bold text-[16px] py-4 rounded-xl shadow-md flex items-center justify-center gap-2">
            Enquire Now
            <span className="text-xl font-bold">›</span>
          </button>
        </div>

      </div>

      {/* Footer (absolutely positioned inside the container) */}
      <Footer active={activeNav} onNavigate={setActiveNav} />
    </div>
  );
}
