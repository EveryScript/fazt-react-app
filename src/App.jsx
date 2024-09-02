import React, { useState } from 'react'
import Taskform from './Taskform';
import { Tasklist } from './Tasklist';
import { SimpleCard } from './components/SimpleCard';

function App() {
  const phraseFotmat = <span className='italic text-sm text-gray-700'>the home is my alone world</span>
  const [name, setName] = useState('Marcus')

  const persons = [
    {
      username: 'Maik',
      phrase: <span className='italic text-sm text-gray-700'>I am the walking dev</span>,
    },
    {
      username: 'midudev',
      phrase: <span className='italic text-sm text-gray-700'>My world my rules</span>,
    },
    {
      username: 'Lucia',
      phrase: <span className='italic text-sm text-gray-700'>Just one to go end</span>,
    },
    {
      username: 'pheralb',
      phrase: <span className='italic text-sm text-gray-700'>Just one to go end</span>,
    },
    {
      username: 'martin',
      phrase: <span className='italic text-sm text-gray-700'>Just one to go end</span>,
    },
  ]

  return <main className='bg-gray-800 w-100 pt-10'>
    {/* <section className='w-4/5 mx-auto '>
      <h1 className='text-2xl text-center pt-4 pb-4 text-white'>Tareas</h1>
      <Taskform />
      <Tasklist />
    </section> */}
    {
      persons.map(({username, phrase}) => (
        <SimpleCard username={username} phraseFormat={phrase} key={username}></SimpleCard>
      ))
    }
  </main>
}

export default App;