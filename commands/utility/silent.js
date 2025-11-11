const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("talk")
		.setDescription("talk with quiet kid."),
	async execute(interaction) {
		await interaction.reply("...");
	},
};
