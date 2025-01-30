import React, { useEffect, useState } from "react"
import Button from "./Button";

const TodoForm = () => {
    const [item, setItem] = useState<string>("");
    const [toggleBtn, setToggleBtn] = useState<boolean>(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [todos, setTodos] = useState<string[]>([]);

    // add, update or delete garne bitikae localstorage ma store garna useEffect use garne ho?

    useEffect(() => {
        const list = window.localStorage.getItem("todos");
        // setTodos();
        console.log(list)
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value);
    }

    const handleUpdate = (index: number) => {
        const foundItem = todos.filter((todo, index) =>
            index === editIndex
            //  why couldn't i check the string the same way i did for delete?
            // -> cause string can be the same but index cannot
        )
        console.log(foundItem[0])
        setItem(foundItem[0]);
        setToggleBtn(true)
        setEditIndex(index)
    }

    const addTodo = () => {
        if (toggleBtn && editIndex != null) {
            const updatedTodos = todos.map((todo, index) => {
                return index === editIndex ? item : todo;
            })
            setTodos(updatedTodos);
            setEditIndex(null);
            setToggleBtn(false);
            // the input field isn't being updated
        } else {
            setTodos([item, ...todos])
            window.localStorage.setItem("todos", todos.toString())
        }
        setItem("")
    }

    const deleteTodo = (item: string) => {
        const filteredList = todos.filter((todo) => todo !== item)
        console.log(filteredList);
        setTodos(filteredList)
    }

    return (
        <section>
            <div className="flex gap-4">
                <input
                    value={item}
                    placeholder="Type your todo here..."
                    onChange={handleInputChange}
                    className="border-blue-500 rounded-md p-2 border-1"
                />
                <Button label={!toggleBtn ? "Add todo" : "Update todo"} onClick={addTodo} />
            </div>
            <ul>
                {todos.map((item, index) => (
                    <div key={index} className="flex justify-center items-center p-2 gap-4">
                        <li>{item}</li>
                        <div className="flex gap-4 items-center">
                            <Button label="Update" onClick={() => handleUpdate(index)} />
                            <Button label="Delete" onClick={() => deleteTodo(item)} />
                        </div>
                    </div>
                ))}
            </ul>
        </section>
    )
}

export default TodoForm