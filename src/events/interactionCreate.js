//burasının ne olduğunu bilmiyorsanız lütfen hiç bir koda dokunmayın.

const { InteractionType } = require("discord.js")

module.exports = {
	name: 'interactionCreate',
	execute(interaction, client) {
    if(!interaction.guild) return;
    if(interaction.channel.type == "DM") return;
	  if (!interaction.type === InteractionType.ApplicationCommand) {
  //butona basıldığında burda hangi işlemleri yapacağınızı belirleyebilirsiniz.
	  } else {
		const command = client.slashcommands.get(interaction.commandName);
		if (!command) return;
		try {
		  command.execute(client, interaction);
		} catch (error) {
		  console.error(error);
		  interaction.reply({ content: 'Komutta bir sorun oluştu lütfen daha sonra tekrar dene.', ephemeral: true });
		}
	  }
	},
};
