import React, {useState, useEffect} from 'react'

export default function NewTicket(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [subcategoryId, setSubcategoryId] = useState('')
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState(false)
  const [skills, setSkills] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/categories', {credentials: 'include'})
    .then(res => res.json())
    .then(categories => {
      setCategories(categories.map(category => {
        return (
          <option
            key={category.id}
            value={category.id}
          >
            {category.attributes.name}
          </option>
        )
      }))
    })
  }, [])

  const submit = (e) => {
    e.preventDefault()
    props.handleSubmit({
      title,
      description,
      subcategoryId,
      skills
    })
  }

  const categoryChange = (e) => {
    const id = e.target.value
    fetch('http://localhost:3000/categories/' + id, {credentials: 'include'})
    .then(res => res.json())
    .then(category => {
      setSubcategories(category.subcategories.map(subcategory => {
        return (
          <option
            key={subcategory.id}
            value={subcategory.id}
          >
            {subcategory.attributes.name}
          </option>
        )
      }))
    })
  }

  return (
    <form onSubmit={submit}>
      <input
        className='form-control'
        placeholder='Title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className='form-control'
        placeholder='Description'
        onChange={e => setDescription(e.target.value)}
        rows='6'
      />
      <select
        className='form-control'
        defaultValue=''
        onChange={categoryChange}
      >
        <option disabled value=''>Select Catagory</option>
        {categories}
      </select>
      <select
        disabled={!subcategories}
        className='form-control'
        defaultValue=''
        onChange={e => setSubcategoryId(e.target.value)}
      >
        <option disabled value=''>Select Subcategory</option>
        {subcategories}
      </select>
      <input
        type='submit'
        value='Submit Ticket'
        className='form-control btn btn-sm btn-primary'
      />
    </form>
  )
}
