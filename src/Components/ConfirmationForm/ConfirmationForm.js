import React from 'react'
import { Form } from '../MainPage/styles'

const ConfirmationForm = ({data, telefone, seletor, onChangeData, onChangeTelefone, onChangeSeletor, declarado, onChangeDeclarado, curso, onChangeCurso, onChangeDisponivel, onChangeMedio, disponivel, medio, limpandoInputs}) => {


  return (
    <Form>
      <label>
          Data de Nascimento:
          <input type="date" value={data} onChange={onChangeData}/>
      </label>  
      <label>
          N° Telefone:
          <input type={"tel"} placeholder="telefone" value={telefone} onChange={onChangeTelefone}/>
      </label>  
      <label>
          Gênero:
          <select value={seletor} onChange={onChangeSeletor}>
            <option></option>
            <option>Homem cisgênero</option>
            <option>Mulher cisgênero</option>
            <option>Homem trans</option>
            <option>Mulher trans</option>
            <option>Pessoa não binária</option>
            <option>Prefiro não dizer</option>
          </select>
      </label>  
      <label>
          Auto Declaração:
          <select value={declarado} onChange={onChangeDeclarado}>
            <option></option>
            <option>Negro</option>
            <option>Branco</option>
            <option>Pardo</option>
            <option>Amarelo</option>
            <option>Indígena</option>
            <option>Prefiro não dizer</option>
          </select>
      </label>  
      <label>
          Cursos:<br/>
          Curso integral web fullstack:
          <input type="radio" value={"integral"} onChange={onChangeCurso}/> 
      </label>
      <label>
          Curso noturno web fullstack:
          <input type="radio" value={"noturno"} onChange={onChangeCurso}/>
      </label> 
      <label>
          Tenho Ensino médio completo:
          <input type="checkbox" value={medio} onChange={onChangeMedio}/>
      </label> 
      <label>
          Tenho disponibilidade:
          <input type="checkbox" value={disponivel} onChange={onChangeDisponivel}/>
      </label> 
      <button onClick={limpandoInputs}>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm