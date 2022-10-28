import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = ({name,age,email,onChangeAge, onChangeEmail,onChangeName,sendData, confirmaEmail,onChangeConfirmaEmail}) => {
  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={name} onChange={onChangeName}/>
        </label>
        <label>
          Idade:
          <Input type={"number"} placeholder="Idade" value={age} onChange={onChangeAge}/>
        </label>
        <label>
          E-mail:
          <Input type={"email"} placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail} required/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input type={"email"} placeholder="usuario@usuario.com" value={confirmaEmail} onChange={onChangeConfirmaEmail} required/>
        </label>
      <button type={'submit'} onClick={sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm