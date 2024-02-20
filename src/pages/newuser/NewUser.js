import Sidebar from '../../components/sidebar/Sidebar'
import './newuser.css'
const NewUser = () => {
  return (
<>
    <Sidebar />

    <div className="newUser">
    <h1 className="newUserTitle">New User</h1>
    <form  className="newUserForm">
      <div className="newUserItem">
        <label >Username</label>
        <input type="text" placeholder='John' />
      </div>
      <div className="newUserItem">
        <label >Full Name</label>
        <input type="text" placeholder='John Wick' />
      </div>
      <div className="newUserItem">
        <label >Email</label>
        <input type="email" placeholder='John@gmail.com' />
      </div>
      <div className="newUserItem">
        <label >Password</label>
        <input type="password" placeholder='password' />
      </div>
      <div className="newUserItem">
        <label >Phone</label>
        <input type="text" placeholder='9876543210' />
      </div>
      <div className="newUserItem">
        <label >Address</label>
        <input type="text" placeholder='mars / USA' />
      </div>
      <div className="newUserItem">
        <label >Gender</label>
        <div className="newUserGender">
        <input type="radio" name="gender" id='male' value="male"  />
        <label For="male">Male</label>
        <input type="radio" name="gender" id='female' value="female"  />
        <label For="female">Female</label>
        <input type="radio" name="gender" id='other' value="other"  />
        <label For="other">Other</label>
        </div>
      </div>
      <div className="newUserItem">
        <label>Active</label>
        <select name="active" id="active" className="newUserSelect">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <button className="newUserBtn">Create</button>
    </form>
    </div>
</>
  )
}
export default NewUser