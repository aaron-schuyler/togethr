import React, {useState, useEffect} from 'react'

export default function SelectSkills(props) {
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState(false)
  const [skillOptions, setSkillOptions] = useState(<p className='my-auto'>Select a category and subcategory first.</p>)

  useEffect(() => {
    fetch('https://aaronschuyler-togethr.herokuapp.com/categories', {credentials: 'include'})
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

  const categoryChange = (e) => {
    const id = e.target.value
    fetch('https://aaronschuyler-togethr.herokuapp.com/categories/' + id, {credentials: 'include'})
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
    props.setSubcategoryId(id)
    fetch('https://aaronschuyler-togethr.herokuapp.com/subcategories/' + id, {credentials: 'include'})
    .then(res => res.json())
    .then(subcategory => {
      setSkillOptions(subcategory.skills.map(skill => {
        return (
          <div className='badge badge-pill border border-rounded ml-3 pointer my-auto' id={skill.id} onClick={skillClick} key={skill.id}>{skill.attributes.name}</div>
        )
      }))
    })
  }

  const skillClick = (e) => {
    e.target.classList.toggle('badge-primary')
    const id = e.target.id
    if (!e.target.classList.contains('badge-primary')) {
      props.setSkills(skills => [...skills.filter(el => el !== id)])
    } else {
      props.setSkills(skills => [...skills, id])
    }
  }

  return (
    <>
      <select
        required
        className='form-control mb-3'
        defaultValue={''}
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
      <div className='form-group'>
        <label>Select Skills</label>
        <div className='mb-3 border rounded p-3'>
          {skillOptions}
        </div>
      </div>
    </>
  )
}
