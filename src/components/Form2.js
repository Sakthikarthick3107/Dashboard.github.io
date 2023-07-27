import React from 'react'

const Form2 = () => {
  return (
    <div>
      <div className="bg-white ml-5 mr-5 px-8 rounded-md">
        <br/>
          <p className="text-xl font-bold">Form Title</p>
          <p>Sed tortor , sed velit ridiculus ipsum pharetra lacus odio gravida augue enim</p><br/>
      
      

      <label className="mb-2">Label Title</label>
      <input type="text"
          className="block  px-4 py-2 my-4 border rounded-lg focus:outline-none w-full text-gray-700"
          placeholder="Placeholder Content"
                />

      
          
          <label className="mb-2">Label Title</label>
              <select
              className="block  px-4 py-2 my-4 border rounded-lg focus:outline-none w-full text-gray-700"
              placeholder="Placeholder Content"
            >
                <option disabled selected>Choose</option>
                <option>Opt1</option>
                <option>Opt2</option>
            </select>
          
          


      <div className="grid grid-cols-2 gap-2">
          <div>
          <label className="mb-2">Label Title</label>
              <input type="text"
              className="block  px-4 py-2 my-4 border rounded-lg focus:outline-none w-full text-gray-700"
              placeholder="Placeholder Content"
                />
          </div>
          <div>
          <label className="mb-2">Label Title</label>
            <input type="text"
              className="block  px-4 py-2 my-4 border rounded-lg focus:outline-none w-full text-gray-700"
              placeholder="Placeholder Content"
                />
          </div>
      </div>


      <label className="mb-2">Label Title</label>
      <textarea rows="5"
              className="block  px-4 py-2 my-4 border rounded-lg focus:outline-none w-full text-gray-700"
              placeholder="Placeholder Content"
            >
      </textarea><br/>


      </div>
    </div>
  )
}

export default Form2
