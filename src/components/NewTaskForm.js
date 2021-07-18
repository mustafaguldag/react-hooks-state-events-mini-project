import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit , categories }) {
  const [formData, setFormData] = useState({
    task: '',
    category: ''  
  });

  function handleInputChange(e){ setFormData({...formData, [e.target.name]: e.target.value}); }

  return (
    <form 
      className="new-task-form"
      onSubmit={(e) => {
        e.preventDefault();
        onTaskFormSubmit(formData);
        setFormData({
          task: '',
          category: ''
        })
      }}
    >
      <label>
        Details
        <input type="text" name="text" onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleInputChange}>
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
