client.on("guildMemberAdd", member => {
  member.setNickname(settings.Server.Register_Name)
  if (member.user.bot) {
  member.roles.add("881485745817288704") 
  client.channels.cache.get("922195730154811474").send("**Sunucuya Bir Bot Eklendi !!**")
  let sahip = "845035147492589639" && "818359006232969216" && "901554322763051030";
  client.users.cache.get(sahip).send("**Sunucuya Bir Bot Eklendi Haberin Var Değilmi Yok İse Söyliyeyim :) <3 <:Salute:915292443858075731>**");
  } else {
  member.roles.add("921400325632581682") 
  };
  }); 
