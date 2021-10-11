import './UserAvatar.scss'
import Avatar from 'react-avatar';

function UserAvatar() {
  return (
    <div className='user-avatar'>
      <Avatar name="Nico Nico nii" round={true} />
      <div className='user-info'>
        <h3>Nico Nico-nii</h3>
        <h4>nico.nico@gmail.com</h4>
      </div>
    </div>
  )
}

export default UserAvatar
