import bcrypt from "bcrypt";

const saltRounds = 10;
// const plainPassword = "my password";

// bcrypt
//   .hash(plainPassword, saltRounds)
//   .then((firstHash) => {
//     console.log({ firstHash });
//     bcrypt.hash(plainPassword, saltRounds).then((secondHash) => {
//       console.log({ secondHash });
//       bcrypt.compare(plainPassword, firstHash).then(console.log);
//       bcrypt.compare(plainPassword, secondHash).then(console.log);
//       bcrypt.compare(firstHash, secondHash).then(console.log);
//     });
//   })
//   .catch(console.error);

export const hash = (plainText: string) => {
  const hashedValue = bcrypt.hashSync(plainText, saltRounds);
  return hashedValue;
};

export const compareHash = (plainText: string, existingHash: string) => {
  const result = bcrypt.compareSync(plainText, existingHash);
  return result;
};

//instead of writing the below files as they are written (in the sync manner) use async-await or something like that. They are written in the sync manner here because dany wanted to keep things simple for us otherwise he has to write async-await everywhere he imports these 2 things everywhere.
