//On importe la librairie react
import React from 'react'
//On importe la libraie react-dom(elle permetd'affcher react sur la page
import { createRoot } from 'react-dom/client'
// const name: string = 'John doe'
// const id: string = 'ma-super-div'
// const notes: Array<number> = [12, 15, 8, 9]
// const age: number = 18
//On crée un element react(jsx)
// const element: JSX.Element = (
//   <div className="test" id={`${name}-${id}`}>
//     <h1>Bonjour'{name}</h1>
//     <p>Coucou les amis</p>
//     <p>
//       {age >= 18 ? (
//         <div>
//           <p>Vous etes majeur</p>
//         </div>
//       ) : (
//         <div>
//           <p>Vous etes mineur</p>
//         </div>
//       )}
//     </p>
//     <ul>
//       {notes.map((note, index) => (
//         <li key={`note-${index}`}>{note}/20</li>
//       ))}
//     </ul>
//   </div>
// )
// function Hello(): JSX.Element {
//   return <p>Hello tout le monde </p>
// }

// const element: JSX.Element = (
//   <div>
//     <Hello />
//   </div>
// )
//? =>age est facutatif
type HelloProps = {
  name: string
  age?: string
}

function Hello({ name, age = '??' }: HelloProps): JSX.Element {
  return (
    <p>
      Hello {name}, vous avez {age} ans :)
    </p>
  )
}
type BigTextProps = {
  children: React.ReactNode
}

function BigText({ children }: BigTextProps): JSX.Element {
  return (
    <div className="gros-text">
      <h1>{children}</h1>
    </div>
  )
}
const element: JSX.Element = (
  <div>
    <Hello name="Rose" />
    <Hello name="Jean" age="35" />
    <Hello name="Jack" age="21" />
    <Hello name="Jane" age="40" />
  </div>
)

//On root de notre page recupère la balise div#root de notre page Html
const root = document.querySelector('#root')

//Si il ny a pas de balise root
if (!root) {
  //On leve une erreur
  throw new Error('Oups... il manque une balise root dans votre index.html')
}
//J'affiche l'element à l'ecran de la balise
//div#root
createRoot(root).render(element)
