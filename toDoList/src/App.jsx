function App() {
  

  return (
    <>
      <div className="items-center justify-center flex flex-col h-screen">
        <fieldset className="border-2 border-gray-300 rounded-lg p-4 ">
            <h1 className="text-3xl mt-1 text-center">To-Do List</h1>
            <div className="flex space-x-2 mt-7">
            <input type="text" placeholder="Add a new task" className="border-2 rounded-lg px-3 py-1" />
            <button className="bg-blue-500 px-2 rounded-lg">Add Task</button>
            </div>
            <p className="text-center mt-4 text-2xl">Task List</p>
            <ol className="p-0">
                <li className="flex items-center mt-4 mb-3 border-2 p-2  border-x- rounded-lg flex items-center" >
                  <input type="checkbox" className="mr-2 scale-130" />
                    <span className="text-lg pl-1 mr-4">Going to School</span>
                    <div className=" space-x-2 text-right ml-auto">
                        <button className="text-red-500 ">Delete</button>
                    </div>
                </li>
                <li className="flex items-center mt-4 mb-3 border-2 p-2  border-x- rounded-lg flex items-center" >
                  <input type="checkbox" className="mr-2 scale-130" />
                    <span className="text-lg pl-1 mr-4">Going to School</span>
                    <div className=" space-x-2 text-right ml-auto">
                        <button className="text-red-500 ">Delete</button>
                    </div>
                </li>
                <li className="flex items-center mt-4 mb-3 border-2 p-2  border-x- rounded-lg flex items-center" >
                  <input type="checkbox" className="mr-2 scale-130" />
                    <span className="text-lg pl-1 mr-4">Going to School</span>
                    <div className=" space-x-2 text-right ml-auto">
                        <button className="text-red-500 ">Delete</button>
                    </div>
                </li>
            </ol>
            
            <hr></hr>

            <div className="flex justify-center mt-4 ">
                <p className="text-lg">Completed: 0 / Uncompleted: 0</p>
            </div>

        </fieldset>
        

      </div>
      
    </>
  )
}

export default App
