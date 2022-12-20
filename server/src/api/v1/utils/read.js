// comon read
exports.read = (urls, data) => {
  return new Promise(async (resolve, _reject) => {
    if (urls.length === 0) {
      resolve([]);
    }

    const output = [];
    for (let i = 0; i < urls.length; i++) {
      const index = data.findIndex((item) => item.url === urls[i]);
      output.push(data[index]);
    }
    resolve(output);
  });
};
