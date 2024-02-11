import { useAuthContext } from 'context/AuthContext'
import './Login.css'
import Wave from 'assets/wave2.svg'
import { useEffect, useState } from 'react';

export default function Login() {
  const [failLogin, setFailLogin] = useState(false);
  const {onLoginHandle} = useAuthContext();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    setFailLogin(false);
  }, [formData]);

  return (
    <div className='container'>
      <div className='left'>
        <div className='wrapper'>       
          <div className="svgContainer">
            <img className="scaling-svg" src={Wave} />
        </div>
        </div>
      </div>
      <div className='right'>
          <h1 className='login'>Login</h1>
          {failLogin ? <div className='error'>Wrong username/password</div>: null}
          <input value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}/>
          <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
          <button onClick={() => onLoginHandle(formData) ? setFailLogin(false) : setFailLogin(true)} className='btn'>Sign In</button>
      </div>
    </div>
  )
}
