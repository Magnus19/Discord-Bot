const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies with Pong!"),
	async execute(interaction) {
		await interaction.reply("Pong!");
	},

	data: new SlashCommandBuilder()
		.setName("Cazrhyl")
		.setDescription("Replies with....."),
	async execute(interaction) {
		await interaction.reply("SUH MAH DIH");
	},
};
