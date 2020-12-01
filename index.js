const fs = require('fs');

const baseDir = process.env.PWD;
const pathsToInputs = process.argv.slice(2);
const instructionParser = require('./src/instructionParser');
const rover = require('./src/rover');
let instructionSets = [];

pathsToInputs.forEach(path => {
    instructionSets.push(fs.readFileSync(`${baseDir}/${path}`, 'utf8').split('\n'));
})

instructionSets.forEach(instructionSet => {
    plateauInstructions = parseInstructions.parsePlateauInstruction(instructionSet);
    roverInstructions = parseInstructions.groupLandingAndMovementPerRover(instructionSet);
})


roverInstructions.forEach(instructions => {
    rover.init(plateauInstructions, landingInstructions, instructions)
    rover.roam();
});