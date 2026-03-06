import  Character   from './models/character';
import db from './db/db';
import { Model } from 'sequelize';


async function getCharacters() {

  await db.sync({ force: true});
  let url: string | null = 'https://rickandmortyapi.com/api/character';

  while(url){
    const response: any = await fetch(url);


    console.log("Status: ", response.status);
    console.log("current url", url);

    if (!response.ok) {
    const text = await response.text();
    console.log("answer of server:", text);
    break;
  }

    const data: any = await response.json();

    for(const c of data.results){
      await Character.create({
        id: c.id,
        name: c.name,
        status: c.status,
        species: c.species,
        type: c.type,
        gender: c.gender,
        origin: c.origin.name,
        image: c.image,
        url: c.url
      });
    }

    url = data.info.next;
    await new Promise (resolve => setTimeout(resolve, 500));
  }
//  const result = await fetch('https://rickandmortyapi.com/api/character').then((res) =>{
//   return res.json();
//  }).then((result) =>{
//   console.log(result.info.next);
//  });

 console.log("Ready");


 const characters: Model<any, any>[] = [];

//  result.results.forEach((character: { 
//    id: number;
//   name: string;
//   status: string;
//   species: string;
//   type: string;
//   gender: string;
//   origin: { name: string };
//   image: string;
//   url: string;
//  }) => {
//   console.log(character.origin);
//   const ch = new Character({
//     id: character.id,
//     name: character.name,
//     status: character.status,
//     species: character.species,
//     type: character.type,
//     gender: character.gender,
//     origin: character.origin.name,
//     image: character.image,
//     url: character.url
//   });
//   characters.push(ch);
//  });

//  await Promise.all(characters.map((ch)=>{
//   return ch.save();
//  }));
}

Promise.resolve(getCharacters()).then(() =>{
  console.log('Success');
});

