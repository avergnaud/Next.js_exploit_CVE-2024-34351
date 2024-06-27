'use client';

import addTodo from '@/actions/addTodo';

export default function TodoList() {
    return (
        <>
            <h2>Server Actions Demo</h2>
            <div>
                <form action={addTodo}>
                    <div>
                        <label htmlFor="todo">Todo</label>
                        <div>
                            <input
                                id="todo"
                                name="input_key"
                                type="text"
                                placeholder="What needs to be done?"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit"> Add Todo</button>
                    </div>
                </form>
            </div>
        </>
    );
}