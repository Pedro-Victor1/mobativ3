import { View, Button, Text, TextInput } from "react-native";
import { useState } from "react";
import { estilos } from "../css/css";

import ProfessorService from "../service/ProfessorService";
import { firestoreDb } from "../firebase/firebase_config";

const CriarProfessor = (props) =>{

    const [nome, setNome] = useState(' ');
    const [curso, setCurso] = useState(' ');
    const [salario, setSalario] = useState(' ')

    const cadastro = () => {
        
        ProfessorService.criar(
            firestoreDb, 
            (id)=>{
                alert(`Professor ${id} inserido`)
                props.navigation.navigate('ListarProfessor')
            },
            {nome, curso, salario}

            )
    }

    return(
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Criar Professor</Text>
            <Text>Nome:</Text><TextInput placeholder="Nome:" style={estilos.input} value={nome} onChangeText={(nome) => setNome(nome)}></TextInput>
            <Text>Curso:</Text><TextInput placeholder="Curso:" style={estilos.input} value={curso} onChangeText={(curso) => setCurso(curso)}></TextInput>
            <Text>Salario:</Text><TextInput placeholder="Salario:" style={estilos.input} value={salario} onChangeText={(salario) => setSalario(salario)}></TextInput>

            <View style={estilos.botao}>
                <Button title="Cadastrar" onPress={cadastro}></Button>
            </View>

        </View>
    )


}

export default CriarProfessor