import '../assets/stylesheets/components-styles/UpdateInfo.css'
import ContactContext from '../context/ContactContex';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';

function UpdateInfo() {

    const { contact, setContact } = useContext(ContactContext)
    const [email, setEmail] = useState(contact.email)
    const [phone, setPhone] = useState(contact.phone)

    function update(e){
        e.preventDefault();
        setContact({email:email,phone:phone})
        Swal.fire({
            icon: 'success',
            title: 'Datos actualizados correctamente',
            text: 'Tus datos han sido guardado con éxito'
          })
    }

    return (
        <div className="update-info">
            <h1 className="up-title">Actualizar Datos</h1>
            <form className="update-info" onSubmit={(e)=>update(e)}>

                <label className='inp-up' htmlFor="email">Correo Electrónico</label>
                <input onKeyUp={(e)=>{ setEmail(e.target.value)}} type="email" name="email" id="email" defaultValue={email}/>

                <label className='inp-up' htmlFor="phone">Número telefónico</label>
                <input onKeyUp={(e)=>{ setPhone(e.target.value)}} type="number" name="phone" id="phone" defaultValue={phone}/>

                <button className='reply' type="submit">Actualizar</button>
            </form>
        </div>
    );
}

export default UpdateInfo;