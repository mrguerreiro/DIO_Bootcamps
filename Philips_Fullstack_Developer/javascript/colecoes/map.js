function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === "admin") {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set("Luiz", "admin");
usuarios.set("Antonio", "admin");
usuarios.set("Maria", "user");
usuarios.set("Joao", "admin");

console.log(getAdmins(usuarios));
