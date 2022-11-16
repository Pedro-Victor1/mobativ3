import { View, Button, Text, TextInput } from "react-native";
import { useState } from "react";
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
        <View>
            <Text>Criar Professor</Text>
            <TextInput placeholder="Nome:" value={nome} onChangeText={(nome) => setNome(nome)}></TextInput>
            <TextInput placeholder="Curso:" value={curso} onChangeText={(curso) => setCurso(curso)}></TextInput>
            <TextInput placeholder="Salario:" value={salario} onChangeText={(salario) => setSalario(salario)}></TextInput>

            <View>
                <Button title="Cadastrar" onPress={cadastro}></Button>
            </View>

        </View>
    )


}

export default CriarProfessor