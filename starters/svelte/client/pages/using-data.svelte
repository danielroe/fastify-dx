<script context="module">
export let getMeta = () => {
  return { title: 'Todo List — Using Data' }
}

export let getData = ({ server }) => {
	return {
		todoList: server.db.todoList,
	}
}
</script>

<script>
import { Link } from 'svelte-routing'
import { useRouteContext } from '/dx:core.js'

const { data } = useRouteContext()

let todoList = [...data.todoList]
let value = null

function addItem () {
  todoList = [...todoList, value]
  value = ''
}
</script>

<h2>Todo List — Using Data</h2>
<ul>
  {#each todoList as item, i}
    <li>{item}</li>
  {/each}
  </ul>
<div>
  <input bind:value />
  <button on:click={addItem}>Add</button>
</div>
<p>
  <Link to="/">Go back to the index</Link>
</p>
<p>⁂</p>
<p>When you navigate away from this route, any additions to the to-do 
list will be lost, because they're bound to this route component only.</p>
<p>See the <Link to="/using-store">/using-store</Link> example to learn 
how to use the application global state for it.
</p>
