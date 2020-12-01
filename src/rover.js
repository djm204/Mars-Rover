"use strict";

const plateau = require('./plateau');

const Rover = () => {
    let x = 0;
    let y = 0;
    let dir = "";
    let currentPlateau = {};
    let landingArea = [];
    let instruction = [];
    
    const init = (plateau, landing, instruction) => {
      setPlateau(plateau);
      setLandingArea(landing);
      setInstruction(instruction)
    };
    
    const roam = () => {
        
    }
    
    return ({
        init,
        roam,
        setInstruction: (newInstruction) => instruction = newInstruction,
        setLandingArea: (newLandingArea) => landingArea = newLandingArea,
        setPlateau: (newPlateau) => currentPlateau = newPlateau,
        setDirection: (newDirection) => dir = newDirection,
        setX: (newX) => x = newX,
        setY: (newY) => y = newY,
        getX: () => x,
        getDirection: () => dir,
        getPlatteau: () => currentPlateau,
        getLandingArea: () => landingArea,
      });
}


module.exports = Rover;