"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { Button } from "@/components/ui/button";

interface Route {
  place: string;
  busNumber: string;
  stops: string;
}

const BusCard = ({ route }: { route: Route }) => (
  <motion.div 
    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(103, 3, 169, 0.58)" }}
    className="relative border-2 border-violet-500/20 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-4 transition-all"
  >
    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-violet-500/10 rounded-lg flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold text-violet-400">#{route.busNumber}</span>
        </div>
      </div>
      <div className="flex-grow">
        <h2 className="text-lg sm:text-xl font-semibold text-white">{route.place}</h2>
        <div className="flex items-center gap-2 mt-1">
          <FiMapPin className="text-violet-400 w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm text-violet-400/80">Route Details</span>
        </div>
      </div>
    </div>

    <div className="space-y-3 relative pl-3 sm:pl-4 border-l-2 border-violet-500/20">
      <div className="relative flex items-start group">
        <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-violet-400 rounded-full -left-[7px] sm:-left-[9px] top-2 border-2 border-violet-500/30" />
        <div className="flex-1 ml-3 sm:ml-4">
          <span className="text-xs sm:text-sm font-medium text-white break-words">
            {route.stops}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Bus() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mode, setMode] = useState<'choice' | 'technical' | 'online'>('choice');

  const busRoutes: Route[] = [
    {
      place: "Thiruvanmiyur",
      busNumber: "111",
      stops: "Thiruvanmiyur Bus Terminus (Bypass) (6.20) – Adyar Depot (6.30) – Adyar Signal (6.35) – Madhya Kailash (6.37) –  Guindy Race Course (6.50)  – Nehru Statue (6.52)  – Kasi Theatre (6.55)  –  Ashok Pillar (7.00) – Vadapalani Signal (7.10) – MMDA (7.12) – Koyambedu  Roundana (7.15) –  College (8.10)."
    },
    {
      place: "Porur",
      busNumber: "121",
      stops: "Iyappan Thangal (6.35) – Porur Signal (6.45) – Valasarawakkam (6.50) – virugambakkam (6.55)  – Avichi (6.58) – Natesan Nagar  (7.00) – Chinmaya nagar (7.05) –  Koyambedu (7.10)  – Anna Nagar Depot (7.15) – College (8.10). "
    },
    {
      place: "Tiruvallur",
      busNumber: "131",
      stops: "iruvallur (6.10) –  Kakkalur (6.15) – Ramapuram (6.20) – Sevvaipettai ( 6.25) – Veppampattu ( 6.30) – Thiruninravur (6.35) – Jaya College (6.40) – Pattabiram (6.50) – Hindu College (6.55) – Avadi Bus Terminus (7.00) – Thirumulaivoyal (7.05) – Ambattur Rakki (7.10)  – College (8.10)."
    },
    {
      place: "Ambattur",
      busNumber: "132",
      stops: "Ambattur TI Cycles (7.00) – Britannia – Korattur (7.10) –  Lucas –TVS (7.15)  – Senthil Nagar (7.17)  – College (8.10)"
    },
    {
      place: "Avadi",
      busNumber: "138",
      stops: "Avadi Depot (7.00) – Murugappa Polytechnic (7.05) – Thirumullaivoyal (7.10) – College (8.10)."
    },
    {
      place: "T.Nagar",
      busNumber: "141",
      stops: "T.Nagar Panagal Park (6.45 am) , Pondy Bazaar (6.50) , Vani Mahal (6.52) , Vidhyodaya School , Valluvarkottam (6.57) ,Nungabakkam PoliceStation, Sterling Road ,Choolaimedu (7.00) , Arun Hotel (7.05), Anna Arch, Roundtana (7.10), K4, Nathamuni (7.20), Senthil Nagar(7.25), College (8.00)"
    },
    {
      place: "Kodambakkam",
      busNumber: "145",
      stops: "Meenakshi College (6.50) – Mahalingapuram (6.55)  – Chetpet Signal (6.55)  – Ega (6.58)  – Pachaiyappa's College (7.02)  – Aminjikarai Market  – Shenoy Nagar (7.10)   –   Chinthamani (7.12)  – Nathamuni (7.20) – College (8.10)"
    },
    {
      place: "Mogappair West",
      busNumber: "153",
      stops: "Mogappair West Depot (7.00), Golden Flats (7.05), Collector Nagar Bus Stop (7.05), Padikuppam Road (7.07)- Thirumangalam, (7.10) Anna Nagar West Depot (7.20), College (8.10)."
    },
    {
      place: "Mogappair East",
      busNumber: "156",
      stops: "Mogappair East (7.00) – Collector Nagar Bus Stop (7.05) – Padikuppam Road (7.07)- Anna Nagar West Depot (7.15) – College (8.10)."
    },
    {
      place: "Thiruverkadu Arch",
      busNumber: "157",
      stops: "Thiruverkadu Arch (6.50)  – Maduravoyal (6.55) – Nerkundram( 7.00) – Thirumangalam Signal (7.05) – Blue Star (7.10) – Shanthi Colony (7.15) – Anna Nagar West Depot (7.20) –   College (8.10)."
    },
    {
      place: "Thiru Vi Ka Nagar",
      busNumber: "166",
      stops: "Thiru Vi Ka Nagar (7.05) – Agaram (7.10) – Periyar Nagar (7.15) – Kolathur Anna Statue (7.20)  – Moogambikai (7.25) – Retteri (7.30) – College (8.10)."
    },
    {
      place: "Tollgate",
      busNumber: "172",
      stops: "Tollgate (6.45)  – Tondiarpet Bus Depot (6.50)  – Maharani (6.55) – Mint (7.00) – College (8.10)."
    },
    {
      place: "Manali New Town",
      busNumber: "182",
      stops: "Manali New Town (6.50) – MMDA – Nappalayam (6.55) – Athipattu (7.00)-Minjur (7.10)  – College (8.10)"
    },
    {
      place: "Ponneri",
      busNumber: "183",
      stops: "Ponneri (7.40) – Anna Statue (7.45) –Thatchur (7.55) – College (8.10)"
    },
    {
      place: "Sunnambukulam",
      busNumber: "191",
      stops: "Arambakkam (7.20)  –  Ramapuram (7.25) – Elavur (7.35)  –  IRT (7.40) – Gummidipoondi Bypass (7.45) – College (8.10)."
    },
    {
      place: "Uthukottai",
      busNumber: "195",
      stops: "Uthukottai (7.10 am) – Palavakkam (7.25) – Periyapalayam (7.40) – Arani (7.50) – College (8.10)."
    },
    {
      place: "Tambaram",
      busNumber: "112",
      stops: "Tambaram Yard – Selaiyur Bharath College – Camp Road Junction -Tambaram BT – Tambaram Sanitorium – Chrompet – Pallavaram – Meenambakkam – Palavanthangal – Alandur – Guindy Kathipara – K.K. Nagar – Vadapalani Signal – Anna Nagar Depot – Nallur Tollgate – College."
    },
    {
      place: "Kasimedu",
      busNumber: "173",
      stops: "Kasimedu R2 PS (6.50 am) – Kalmandapam – Royapuram Market (6.55) – Stanley Hospital – Mint (7.05)– Basin Bridge – M.K.B Nagar – M.R. Nagar – Erukencherry - Moolakadai (7.15) – Madhavaram Roundana – 100 ft Road (7.20) – College (8.00)."
    },
    {
      place: "Manali Market",
      busNumber: "175",
      stops: "Manali Market (7.00 am) - Mathur (7.05) – Milk Colony FG – SG (7.10) – Arul Nagar (7.15) - Moolakadai (7.25) – College (8.00)."
    },
    {
      place: "Tiruvottiyur",
      busNumber: "181",
      stops: "Rajakadai (6.35 am) – Kaladipet – Thiruvottiyur Police Station – Ellaiamman Koil (6.40) – Theradi – Vellanchetti School – Ajax (6.50) – Periyar Nagar – Wimco – Ennore Lift Gate (6.55) – Jothi Nagar (6.57) – Sathyamoorthy Nagar - MFL Corner – College (8.00)."
    },
    {
      place: "Korattur Bus Stand",
      busNumber: "132A",
      stops: "Korattur Bus Stand (7.10) – Padi Saravana Stores (7.20) – Senthil Nagar (7.25) – Ambedkar Nagar (7.28) –  Padiyanallur (7.40) – Karanodai (7.50) – College (8.10)"
    },
    {
      place: " Murugappa Polytechnic",
      busNumber: "135A",
      stops: " Murugappa Polytechnic (7.05)  – Ambathur Rakki (7.15)  – Oragadam (7.20) – Pudur (7.35)  – Wireless- Kallikuppam – Puzhal Camp (7.35)   College (8.10). "
    },
    {
      place: "Ambattur Ram Nagar",
      busNumber: "135",
      stops: "Ambathur Rakki (7.10)  – Oragadam (7.18) – Pudur (7.20)  – Kallikuppam (7.25) – Puzhal Camp (7.35)  – College (8.10). "
    },
    {
      place: "Pattabiram",
      busNumber: "136",
      stops: "Murugappa Polytechnic (7.05)  – Thirumullaivoyal (7.10) – Ambattur Rakki (7.15) – Pudur(7.17) – Kallikuppam (7.20) – Surapet (7.25) – Velammal (7.30) – Kavankarai (7.40) – Red Hills (7.45) – College (8.10)"
    },
    {
      place: "Puzhal Camp",
      busNumber: "137",
      stops: "Puzhal Camp (7.30) – Puzhal Jail Stop (7.32) – Kavankarai (7.35)- Vadakarai -(7.40) Ambika Theatre (7.45) – Redhills (7.50) – College (8.10)"
    },
    {
      place: "Mandaveli",
      busNumber: "162",
      stops: "Kaliappa (6.35)  – Mylapore Luz (6.40)  – Ajantha  – Triplicance Post Office (6.45) –  Royapettah Hospital (6.45) Tarapore Towers  – Pudupet (6.50)  – Egmore (6.55)  – Kilpauk Garden (7.10)  – ESI (7.05) – Ayanavaram (7.07) –  I.C.F. (7.10)  –  Villivakkam (7.12)  – Nathamuni (7.15) – College (8.10)"
    },
    {
      place: "Purasawalkam",
      busNumber: "163",
      stops: "Kelly's Signal (6.45)  – Abirami Theatre (6.47) – Purasawalkam Tank (6.50) Doveton (6.53)  – Bhuvaneswari    (6.55)  Otteri (6.58) – Agaram (7.05)  – College (8.10)."
    },
    {
      place: "Uthukottai",
      busNumber: "192",
      stops: "Uthukottai (7.10) – Komakkam Road (7.15) – Tharatchi ( 7.20) –  Peranthur (7.22) – Palavakkam (7.25) – Thandalam (7.35) – Periyapalayam (7.40)  – Kosavanpettai (7.45) – Arani  (7.50)  – Agaram ( 7.55) – Panapapakkam (8.00) – College (8.10)."
    },
    {
      place: "Gummidipoondi Bazar",
      busNumber: "193",
      stops: "Gummidipoondi Bazar (7.40) – Panapakkam (7.50) – College (8.10)"
    },
    {
      place: "Thiruvallur-Manavalan Nagar",
      busNumber: "194",
      stops: "Manavalan Nagar (6.35) – Tiruvallur Railway Station (6.40)– Govt.Hospital  (6.45) – Tiruvallur Bus Stand (6.48) – Theradi (6.50) – Thamaraipakkam kootroad (7.20) – Periyapalayam (7.40) – Arani (7.50) – College (8.10)"
    },
    {
      place: "Tiruvottiyur Ajax",
      busNumber: "184",
      stops: "Tiruvottiyur Ajax (6.50) – Ennore Lift Gate (7.00) – Jothi Nagar (7.05) – Sathyamurthy Nagar (7.10) – Minjur(7.30) –  Ponneri (7.45) – College (8.10)"
    },
    {
      place: "Kolathur Anna Statue",
      busNumber: "167",
      stops: "Kolathur Anna Statue(7.10) – Moogambigai (7.15) – Rettery (7.20) – Vinayagapuram (7.25) – College (8.10)."
    },
    {
      place: "Ambedkar College Viyasarpadi",
      busNumber: "174",
      stops: "Mathur 1st Main Road (7.05) – Milk Colony Gate (7.10) – Arul Nagar (7.15) – Thapal Petty (7.20) –  Moolakadai (7.30) – Madhavaram  100 ft Road (7.37) – Camp (7.45) – Cycle Shop (7.25)  – Ambika Theatre (7.35) – College (8.10)."
    },
    {
      place: "Madhavaram Bus Stand",
      busNumber: "176",
      stops: "Moolakkadai (7.20) – Thapalpetty (7.25) – Madhavaram Bus Stand (7.30) – Madhavaram Roundana (7.40) – College (8.05)"
    },
    {
      place: "Thiruvallur",
      busNumber: "196",
      stops: "Thiruvallur (6.45) – Theradi(6.40) – Ekadu (7.00) – Thamaraipakkam kootroad (7.15) –  Vengal (7.30) – Kanniputhur(7.40) – Manjankaranai (7.45) – Janappanchathiram (7.55) – College (8.10)"
    },
    {
      place: "Perambur",
      busNumber: "165",
      stops: "Perambur Bus Depot (7.00) – Perambur Church (7.05) – Venus – Kolathur (7.15)Rettery (7.20) College (8.10)."
    },
    {
      place: "Collector Nagar",
      busNumber: "158",
      stops: "Collector Nagar Bus Stop (7.05) – Padikuppam Road (7.07) – Thirumangalam (7.15) – College (8.10)."
    },
    {
      place: "Wheels India",
      busNumber: "Bus",
      stops: "Wheels India – College (Only for any Break down maintenance purpose)"
    }
  ];

  const filteredRoutes = busRoutes.filter(route => {
    const searchText = `${route.place} ${route.busNumber} ${route.stops}`.toLowerCase();
    return searchText.includes(searchTerm.toLowerCase());
  });

  // Animation variants for staggered text effect
  const headerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (mode === 'choice') {
    return (
      <div className="min-h-screen p-4 sm:p-8 bg-gradient-to-br from-gray-900/50 to-gray-900 overflow-y-auto flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto">
          <motion.h1
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-violet-400 mb-12 text-center drop-shadow-lg"
          >
            {"SELECT MODE".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Button
                onClick={() => setMode('technical')}
                className="w-full h-40 bg-violet-900/50 hover:bg-violet-800/50 border-2 border-violet-500/20 rounded-xl p-6 text-center flex flex-col items-center justify-center gap-4 transition-all duration-300"
              >
                <span className="text-2xl font-bold text-violet-400">TECHNICAL</span>
                <span className="text-sm text-violet-300/80">View bus routes for technical events</span>
              </Button>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Button
                onClick={() => setMode('online')}
                className="w-full h-40 bg-violet-900/50 hover:bg-violet-800/50 border-2 border-violet-500/20 rounded-xl p-6 text-center flex flex-col items-center justify-center gap-4 transition-all duration-300"
              >
                <span className="text-2xl font-bold text-violet-400">ONLINE</span>
                <span className="text-sm text-violet-300/80">View bus routes for online events</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gradient-to-br from-gray-900/50 to-gray-900 overflow-y-auto">
      <div className="max-w-4xl mx-auto min-h-full">
        <div className="flex items-center justify-between mb-8">
          <motion.h1
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-violet-400 text-center drop-shadow-lg"
          >
            {`${mode.toUpperCase()} BUS ROUTES`.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <Button
            onClick={() => setMode('choice')}
            variant="outline"
            className="text-violet-400 border-violet-500/20 hover:bg-violet-900/50"
          >
            Change Mode
          </Button>
        </div>

        <div className="mb-8 relative group">
          <div className="flex items-center gap-2 mb-4">
            <FiSearch className="text-violet-400 w-5 h-5" />
            <span className="text-sm text-violet-400/80">Search by location, bus number, or stop</span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Try 'Koyambedu' or '175'..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-gray-800/40 backdrop-blur-lg rounded-xl border-2 border-violet-500/20 text-gray-100 placeholder-gray-400/80 focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-500/20 transition-all"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-400 w-5 h-5" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-violet-400/50 hover:text-violet-400 transition-colors"
              >
                ×
              </button>
            )}
          </div>
          <div className="mt-2 text-sm text-violet-400/50">
            Showing {filteredRoutes.length} route{filteredRoutes.length !== 1 && 's'}
          </div>
        </div>

        <motion.div 
          layout
          className="space-y-6"
        >
          <AnimatePresence>
            {filteredRoutes.map((route) => (
              <motion.div
                key={route.busNumber}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <BusCard route={route} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredRoutes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="mb-4 text-violet-400/30">
              <FiSearch className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl text-violet-400/80 mb-2">No routes found</h3>
            <p className="text-violet-400/50">Try searching for a different location or bus number</p>
          </motion.div>
        )}
      </div>
    </div>
  );
} 