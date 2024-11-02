"use client"

import { useState } from 'react'
import { PlusCircle, Trash2, CheckCircle, Circle } from 'lucide-react'

interface Task {
  id: number
  text: string
  completed: boolean
}

export default function TaskTracker() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-teal-100 flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">Task Tracker</h1>
          <div className="flex mb-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="flex-grow px-4 py-2 text-purple-900 bg-purple-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              type='button'
              onClick={addTask}
              aria-label="Add task"
              className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              <PlusCircle className="w-6 h-6" />
            </button>
          </div>
          <ul className="space-y-2">
            {tasks.map(task => (
              <li key={task.id} className="flex items-center bg-teal-50 rounded-lg p-3 shadow-sm">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className="mr-2 focus:outline-none"
                >
                  {task.completed ? (
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-purple-900'}`}>
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700 transition-colors duration-300 focus:outline-none"
                  aria-label="Delete task"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="mt-auto py-4 text-center text-sm text-purple-600">
        <p>Coded by Sai Aneesh</p>
        <p>As part of the CodSoft React JS Internship</p>
      </footer>
    </div>
  )
}