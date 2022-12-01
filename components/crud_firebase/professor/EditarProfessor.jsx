import { View, Button, Text, TextInput } from "react-native";
import { useEffect, useState } from "react";
import ProfessorService from "../service/ProfessorService";
import { firestoreDb } from "../firebase/firebase_config";

const EditarProfessor = (props) =>{

    const [nome, setNome] = useState(' ');
    const [curso, setCurso] = useState(' ');
    const [salario, setSalario] = useState(' ')

    useEffect(
        ()=>{
            ProfessorService.recuperar(
                firestoreDb,
                (professor) => {
                    console.log(professor)
                    setNome(professor.nome)
                    setCurso(professor.curso)
                    setSalario(professor.salario)
                },
                props.route.params.id
            )
            //console.log(props.route.params.id)
        },
        []
    )

    const cadastro = () => {
        
        ProfessorService.atualizar(
            firestoreDb, 
            ()=>{
                alert(`professor atualizado`)
                props.navigation.navigate('ListarProfessor')
            },
            props.route.params.id,
            {nome, curso, salario}

            )
    }

    return(
        <View>
            <Text>Editar Professor</Text>
            <TextInput placeholder="Nome:" value={nome} onChangeText={(nome) => setNome(nome)}></TextInput>
            <TextInput placeholder="Curso:" value={curso} onChangeText={(curso) => setCurso(curso)}></TextInput>
            <TextInput placeholder="Salario:" value={salario} onChangeText={(salario) => setSalario(salario)}></TextInput>

            <View>
                <Button title="Editar" onPress={cadastro}></Button>
            </View>

        </View>
    )


}

export default EditarProfessor