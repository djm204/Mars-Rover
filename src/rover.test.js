"use strict";

const rover = require('./rover');
const fs = require('fs');
const instructionParser = require('./instructionParser');

describe('Mars Rover Instructions Consumption', () => {
    test('desired output is achieved based on input', () => {
        const baseDir = process.env.PWD;
        const pathsToInputs = ['input.txt'];
        const parseInstructions = instructionParser();
        const marsRover = rover();
        let instructionSets = [];
        let roverInstructions = [];

        pathsToInputs.forEach(path => {
            instructionSets.push(fs.readFileSync(`${baseDir}/${path}`, 'utf8').split('\n'));
        })
        
        instructionSets.forEach(instructionSet => {
            roverInstructions.push({
                plateauInstructions: parseInstructions.parsePlateauInstruction(instructionSet),
                roverInstructions: parseInstructions.groupLandingAndMovementPerRover(instructionSet)
            });
        })
        
        roverInstructions.forEach(instructions => {
            marsRover.init(instructions.plateauInstructions, instructions.roverInstructions.landingInstruction, instructions.roverInstructions.movementInstruction)
            marsRover.roam();
        });

        expect(console.log).toHaveBeenCalledWith('Rover1:1 3 N');
        expect(console.log).toHaveBeenCalledWith('Rover2:5 1 E');
    })
})

