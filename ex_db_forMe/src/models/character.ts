import { DataTypes, Model } from "sequelize";
import sequelize from "../db/db";

class Character extends Model { }

Character.init({
  name: {
    type: DataTypes.STRING, allowNull: false
  },
  status: {
    type: DataTypes.STRING
  },
  species: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING
  },
  origin: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  },
  url: {
    type: DataTypes.STRING
  }

}, { sequelize })

// async function test() {
//   const newCharacter = new Character({
//         id: "",
//         name: "",
//         status: "",
//         type: "",
//         gender: "",
//         origin:  "",
//         image: "",
//         url: ""
//   });

//   await newCharacter.save();
// }

// Promise.resolve(test()).then(() =>{
//   console.log('Charcater save');
// })
export default Character;