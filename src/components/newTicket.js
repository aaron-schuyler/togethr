import React, {useState, useEffect} from 'react'

export default function NewTicket(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [subcategoryId, setSubcategoryId] = useState('')
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState(false)
  const [skillOptions, setSkillOptions] = useState([])
  const [skills, setSkills] = useState([])

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

  const subcategoryChange = (e) => {
    const id = e.target.value
    setSubcategoryId(id)
    fetch('http://localhost:3000/subcategories/' + id, {credentials: 'include'})
    .then(res => res.json())
    .then(subcategory => {
      setSkillOptions(subcategory.skills.map(skill => {
        return (
          <div className='badge badge-pill border border-primary ml-3 pointer' id={skill.id} onClick={skillClick} key={skill.id}>{skill.attributes.name}</div>
        )
      }))
    })
  }

  const skillClick = (e) => {
    e.target.classList.toggle('badge-primary')
    const id = e.target.id
    if (!e.target.classList.contains('badge-primary')) {
      setSkills(skills => [...skills.filter(el => el !== id)])
    } else {
      setSkills(skills => [...skills, id])
    }
  }

  return (
    <form onSubmit={submit}>
      <input
        required
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
      <select
        required
        className='form-control mb-3'
        defaultValue=''
        onChange={categoryChange}
      >
        <option disabled value=''>Select Catagory</option>
        {categories}
      </select>
      <select
        required
        disabled={!subcategories}
        className='form-control mb-3'
        defaultValue=''
        onChange={subcategoryChange}
      >
        <option disabled value=''>Select Subcategory</option>
        {subcategories}
      </select>
      <div className='mb-3'>
      {skillOptions}
      </div>
      <input
        type='submit'
        value='Submit Ticket'
        className='btn btn-sm btn-primary'
      />
    </form>
  )
}
