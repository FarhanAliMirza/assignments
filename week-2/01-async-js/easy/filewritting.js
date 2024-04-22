const fs = require("fs");

const writeFileAsync = (filename, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const writeToFile = async () => {
  const content = "Hello World";

  try {
    await writeFileAsync("hello.txt", content);
    console.log("File written successfully!");
  } catch (err) {
    console.error(err);
  }
};

writeToFile();
