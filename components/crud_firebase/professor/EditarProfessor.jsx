import { View, Button, Text, TextInput } from "react-native";
import { useEffect, useState } from "react";
import ProfessorService from "../service/ProfessorService";
import { firestoreDb } from "../firebase/firebase_config";
import { estilos } from "../css/css";

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
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Editar Professor</Text>
            <Text>Nome:</Text><TextInput placeholder="Nome:" style={estilos.input} value={nome} onChangeText={(nome) => setNome(nome)}></TextInput>
            <Text>Curso:</Text><TextInput placeholder="Curso:" style={estilos.input} value={curso} onChangeText={(curso) => setCurso(curso)}></TextInput>
            <Text>Salário:</Text><TextInput placeholder="Salario:" style={estilos.input} value={salario} onChangeText={(salario) => setSalario(salario)}></TextInput>

            <View style={estilos.botao}>
                <Button title="Editar" onPress={cadastro}></Button>
            </View>

        </View>
    )


}

export default EditarProfessor