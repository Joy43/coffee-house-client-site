import { useLoaderData } from "react-router-dom/dist/umd/react-router-dom.development";


const User = () => {
    const loadUsers=useLoaderData();
    console.log(loadUsers);
    return (
        <div>
          <h2>user:{loadUsers.length}</h2> 

          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {

        loadUsers.map(user=>  <tr key={user._id} className="bg-base-200">
        <th>1</th>
        <td>{user.email}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>)
    }
     
     
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default User;