import { createSignal } from 'solid-js'
import { Link } from 'solid-app-router'
import { useRouteContext } from '/dx:core.js'

export function getMeta () {
  return { title: 'Todo List — Using Data' }
}

export function getData ({ server }) {
	return {
		todoList: server.db.todoList
	}
}

export default function UsingData (props) {
  let input
  const {data} = useRouteContext()
  const [todoList, updateTodoList] = createSignal(data.todoList)
  const addItem = (value) => {
    updateTodoList(list => [...list, value])
    input.value = ''
  }
  return (
    <>
      <h2>Todo List — Using Data</h2>
      <ul>
        <For each={todoList()}>{(item, i) =>
          <li>{item}</li>
        }</For>
      </ul>
      <div>
        <input ref={input} />
        <button onClick={() => addItem(input.value)}>Add</button>
      </div>
      <p>
        <Link href="/">Go back to the index</Link>
      </p>
      <p>⁂</p>
      <p>When you navigate away from this route, any additions to the to-do 
      list will be lost, because they're bound to this route component only.</p>
      <p>See the <Link href="/using-store">/using-store</Link> example to learn 
      how to use the application global state for it.
      </p>
    </>
  )
}
