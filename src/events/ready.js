//bot başladığında hangi işlemlerin yapılacağını ayarlarsınız.

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Bot hazır!`);
    client.user.setStatus("online");
  const aktiviteler = [
    "yakında."

  ]
  setInterval(function() {
    var random = Math.floor(Math.random() * (aktiviteler.length - 0 + 1) + 0);

    client.user.setActivity(aktiviteler[random], "");
  }, 2 * 2500);
	},
};
