/*
 * Advanced Bot
 * Copyright (C) 2021 AstralDevs-ml
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const { readdirSync } = require('fs');

module.exports = (client) => {
	const load = dirs => {
		const events = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith('js'));
		for (const file of events) {
			const evt = require(`../events/${dirs}/${file}`);
			const eName = file.split('.')[0];
			client.on(eName, evt.bind(null, client));
		}
	};
	['client'].forEach((x) => load(x));
};