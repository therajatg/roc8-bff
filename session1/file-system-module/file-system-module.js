const fs = require("fs");

const data =
  "dsalkmkwmfklqewmflmewlkfmewklmfelkmfewkmfkle2mf2 fkewmkf wek fewm fwomfewk fewfnf ";

fs.writeFile("example.txt", data, (err) => {
  if (err) throw err;
  console.log("File created successfully!");
});

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

const newData = "My name is anthony gonsalwis";

fs.appendFile("example.txt", newData, (err) => {
  if (err) throw err;
  console.log("file updated successfully");
});

fs.unlink("example.txt", (err) => {
  if (err) throw err;
  console.log("File deleted successfully");
});
