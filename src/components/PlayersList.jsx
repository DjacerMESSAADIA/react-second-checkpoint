import React, { useState } from "react";
import Player from "./Player";
import { players } from "../data/players";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const PlayersList = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4">
      <motion.h1
        className="text-5xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          textShadow:
            "0 0 10px rgba(0,242,255,0.5), 0 0 20px rgba(0,242,255,0.3)",
        }}
      >
        FIFA Players
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[auto]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {players.map((player, index) => (
          <motion.div
            key={index}
            className="flex justify-center h-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            layout
          >
            <Player
              {...player}
              id={index}
              isExpanded={expandedId === index}
              onExpand={handleExpand}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PlayersList;
