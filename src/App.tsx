
let name: string = "Ujala Singh";
let isAvailable: boolean = false; // boolean 
let hobbies: string[] = ["cricket", "netlix", "book"] // array of strings
let role: [number, string]; //tupple
role = [5, "daddy"]

// object type
type Person = {
  name: string;
  age?: number; // optional
}

let person: Person = {
  name: "ujala",
  age: 20
}

let lotsOfpeople: Person[]; // array of object
lotsOfpeople = [
  {
    name: "shami",
    age: 19
  },
  {
    name: "ujala",
    age: 20
  }
]

export default function App() {
  return (
    <div>
      {
        lotsOfpeople.map((item) => (
          <>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
          </>
        ))
      }



    </div>

  )
}