import React, {useState, useEffect} from 'react'
import SelectSkills from './selectSkills.js'

export default function NewTicket(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [subcategoryId, setSubcategoryId] = useState('')
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState(false)
  const [skillOptions, setSkillOptions] = useState(<p className='my-auto'>Select a category and subcategory first.</p>)
  const [skills, setSkills] = useState([])

  const submit = (e) => {
    e.preventDefault()
    props.handleSubmit({
      title,
      description,
      subcategory_id: subcategoryId,
      skills
    })
  }

  return (
    <form onSubmit={submit}>
      <input
        required
        name='title'
        className='form-control mb-3'
        placeholder='Title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        required
        className='form-control mb-3'
        placeholder='Description'
        onChange={e => setDescription(e.target.value)}
        rows='6'
      />
    <SelectSkills setSkills={setSkills} setSubcategoryId={setSubcategoryId} />
      <input
        type='submit'
        value='Submit Ticket'
        className='btn btn-sm btn-primary'
      />
    </form>
  )
}
