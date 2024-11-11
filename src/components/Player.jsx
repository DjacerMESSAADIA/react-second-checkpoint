import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const Player = ({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageUrl,
  isExpanded,
  onExpand,
  id,
}) => {
  const fifaColors = {
    primary: "#00f2ff",
    secondary: "#00d2a0",
    dark: "#1a1a1a",
    light: "#ffffff",
  };

  const cardVariants = {
    collapsed: {
      scale: 1,
    },
    expanded: {
      scale: 1,
    },
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
    },
    expanded: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          stiffness: 500,
          damping: 40,
          mass: 1,
        },
        opacity: {
          duration: 0.2,
          delay: 0.1,
        },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: {
          type: "spring",
          stiffness: 500,
          damping: 40,
          mass: 1,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-md bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-xl overflow-hidden cursor-pointer"
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={cardVariants}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 1,
      }}
      onClick={() => onExpand(id)}
      layout="position"
    >
      <motion.div
        className={`relative ${isExpanded ? "h-72" : "h-56"}`}
        layout="position"
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <motion.img
          className="h-full w-full object-cover"
          src={imageUrl}
          alt={name}
          layout="position"
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white"
          layout="position"
        >
          <motion.h2
            className="text-2xl font-bold mb-1"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            layout="position"
          >
            {name}
          </motion.h2>
          <motion.div
            className="flex items-center space-x-2"
            style={{ color: fifaColors.primary }}
            layout="position"
          >
            <span className="text-xl font-bold">#{jerseyNumber}</span>
            <span className="text-white/80">|</span>
            <span>{team}</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="overflow-hidden"
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="exit"
          >
            <div className="p-6 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
              <motion.div
                className="grid grid-cols-2 gap-4 text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1,
                    duration: 0.2,
                  },
                }}
                exit={{ opacity: 0, y: 10 }}
              >
                <div className="space-y-2">
                  <div>
                    <p className="text-[#00f2ff] text-sm">Nationality</p>
                    <p className="font-semibold">{nationality}</p>
                  </div>
                  <div>
                    <p className="text-[#00f2ff] text-sm">Age</p>
                    <p className="font-semibold">{age} years</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-[#00f2ff] text-sm">Team</p>
                    <p className="font-semibold">{team}</p>
                  </div>
                  <div>
                    <p className="text-[#00f2ff] text-sm">Jersey Number</p>
                    <p className="font-semibold">#{jerseyNumber}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

Player.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
};

export default Player;
