#!/usr/bin/env node
import greetUser from '../src/cli.js';

export function brainGames() {
  console.log('brain-games');
  console.log('Welcome to the Brain Games!');
  greetUser();
}

brainGames();