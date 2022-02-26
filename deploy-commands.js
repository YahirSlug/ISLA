const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require("dotenv").config();
const commands = [
    new SlashCommandBuilder().setName('isla').setDescription('Imagenes de Isla ^^'),
   ]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.ID, process.env.GUILD), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);