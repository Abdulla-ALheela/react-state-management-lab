import "./App.css"
import { useState } from "react"

const App = () => {
let totalStrength 
let totalAgility
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
  )

  

  const handleAddFighter = (fighter) => {
    
    if( money > fighter.price ){
      setTeam([...team, fighter])
let index = zombieFighters.findIndex(zombieFighter => zombieFighter.id === fighter.id);

  zombieFighters.splice(index, 1);

   setMoney(money-fighter.price)
  
}else{
  console.log("Not enough money");
  
}
  }

  totalStrength = 0
  totalAgility = 0
  team.map((fighter)=> {
    totalAgility+=fighter.agility;
   totalStrength+=fighter.strength;
  
})
  return (
    <>
    <h1>Zombie Fighters</h1>

    <b><h3>Money: {money}</h3></b>
    <b><h3>Team Strenght: {team.length === 0 ? totalStrength=0:totalStrength} </h3></b>
    <b><h3>Team Agility:  {team.length === 0 ? totalAgility=0:totalAgility} </h3></b>
    <b><h3>Team</h3></b>
    
   {team.length !== 0 ?  
   <ul>
      {team.map((fighter) => (
        <li key = {fighter.id}>
        <img src={fighter.img} alt={fighter.name} />
        <br></br>
        <br></br>
        <b>{fighter.name}</b>
        <br></br>
        <br></br>
        Price: {fighter.price}
        <br></br>
        <br></br>
        Strenght: {fighter.strength}
        <br></br>
        <br></br>
        Agility: {fighter.agility}
        </li>
      ))}
    </ul> : <p>Pick some team members!</p>
}
    <b><h3>Fighters</h3></b>
    
    <ul>
      {zombieFighters.map((zombieFighter) => (
        <li key = {zombieFighter.id} >
        <img src={zombieFighter.img} alt={zombieFighter.name} />
        <br></br>
        <br></br>
        <b>{zombieFighter.name}</b>
        <br></br>
        <br></br>
        Price: {zombieFighter.price}
        <br></br>
        <br></br>
        Strenght: {zombieFighter.strength}
        <br></br>
        <br></br>
        Agility: {zombieFighter.agility}
        <br></br>
        <br></br>
        <button onClick={()=> handleAddFighter(zombieFighter)}>Add </button>
        </li>
      ))}
    </ul>
  </>
  );
}

export default App
