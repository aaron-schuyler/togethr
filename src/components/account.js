import React, {useState, useEffect} from 'react'
import SelectSkills from './selectSkills.js'

export default function Account(props) {
  const [user, setUser] = useState({})
  const [skills, setSkills] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/account/', {credentials: 'include'})
    .then(res => res.json())
    .then(user => setUser(user))
  },[])

  const dummy = () => {

  }

  function userSkills() {
    if (user.skills) {
      let skills = user.skills.map(skill => {
        return <div className='badge badge-pill badge-primary ml-3 pointer my-auto' id={skill.id}  key={skill.id}>{skill.name}</div>
      })
      if(skills.length > 0) return skills
      else return <p className='my-auto'>Use the form below to add skills to your profile.</p>
    }
  }

  const addSkills = () => {
    fetch('http://localhost:3000/add_skills',{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({skills})
    })
    .then(res => res.json())
    .then(json => setUser({...user, skills: json.skills}))
  }


  return (
    <div className='container border-primary border rounded m-auto p-3'>
      <div className='row'>
        <div className='col'>
          <h2>Your Info</h2>
          <hr />
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className='col'>
          <h2>Your Skills</h2>
          <hr />
          <div className='mb-3 border rounded p-3'>
            {userSkills()}
          </div>
          <h3>Add Skills</h3>
          <hr />
          <SelectSkills setSkills={setSkills} setSubcategoryId={dummy} />
          <button onClick={addSkills} className='btn btn-primary btn-sm'>Add Skills</button>
        </div>
      </div>
    </div>
  )
}
