import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'
import { type } from '@testing-library/user-event/dist/type'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [confirmaEmail, setConfirmaEmail] = useState("")
const [data, setData] = useState("")
const [telefone, setTelefone] = useState("")
const [curso, setCurso] = useState("")
const [medio, setMedio] = useState("")
const [disponivel, setDisponivel] = useState("")
const [seletor, setSeletor] = useState("")
const [declarado, setdeclarado] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeConfirmaEmail = (event) => {
  setConfirmaEmail(event.target.value)
}

const onChangeData = (event) => {
  setData(event.target.value)
}

const onChangeTelefone = (event) => {
  setTelefone(event.target.value)
}

const onChangeSeletor = (event) => {
  setSeletor(event.target.value)
}
const onChangeDeclarado = (event) => {
  setdeclarado(event.target.value)
}
const onChangeCurso = (event) => {
  setCurso(event.target.value)
}

const onChangeMedio = (event) => {
  setMedio(event.target.value)
}
const onChangeDisponivel = (event) => {
  setDisponivel(event.target.value)
}

const sendData = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  if(name.length>10 && name.length<30 && age>=18 && email===confirmaEmail){
    setFormFlow(2)
  }else{
    alert("Preenchimento do formulario incorreto, tente novamente!")
  }
}

const limpandoInputs = () => {
  alert("Inscrição Finalizada!")
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      name={name} age={age} email={email} onChangeName={onChangeName} onChangeAge={onChangeAge} onChangeEmail={onChangeEmail} sendData={sendData} onChangeConfirmaEmail={onChangeConfirmaEmail} confirmaEmail={confirmaEmail}
      /> : <ConfirmationForm 
      data={data} telefone={telefone} seletor={seletor} onChangeData={onChangeData} onChangeTelefone={onChangeTelefone} onChangeSeletor={onChangeSeletor} onChangeDeclarado={onChangeDeclarado} declarado={declarado} curso={curso} onChangeCurso={onChangeCurso} disponivel={disponivel} medio={medio} onChangeMedio={onChangeMedio} onChangeDisponivel={onChangeDisponivel} limpandoInputs={limpandoInputs}
      />}
    </MainContainer>
  )
}

export default MainPage