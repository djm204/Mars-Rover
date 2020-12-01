"use strict";

const InstructionParser = () => {
    const parseLandingAreaInstruction = (instructions) => {
        return instructions.split(':')[1].split(' ');
    };
    
    const parsePlateauInstruction = (instructions) => {
        return instructions.filter(instruction => instruction.indexOf('Plateau') >= 0)[0].split(':')[1].split(' ');;
    }
    
    const parseMovementInstructions = (instructions) => {
        return instructions.split(':')[1].split('');
    }
    
    const groupLandingAndMovementPerRover = (instructions) => {
        let roverInstructionSets = [];
        const movementInstructions = instructions.filter(instruction => instruction.indexOf('Instructions') >= 0);
        const landingInstructions = instructions.filter(instruction => instruction.indexOf('Landing') >= 0);
        const roverNames = landingInstructions.map(instruction => instruction.split(' ')[0]);
    
        roverNames.forEach(roverName => {
            roverInstructionSets.push({
                name: roverName,
                landingInstruction: parseLandingAreaInstruction(landingInstructions.filter(landingInstruction => landingInstruction.indexOf(roverName) >= 0)[0]),
                movementInstruction: parseMovementInstructions(movementInstructions.filter(landingInstruction => landingInstruction.indexOf(roverName) >= 0)[0])
            })
        })
    
        return roverInstructionSets;
    }

    return {
        parsePlateauInstruction,
        groupLandingAndMovementPerRover
    }
}



module.exports = InstructionParser;