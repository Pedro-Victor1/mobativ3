import { View, Button, Text, TextInput } from "react-native";
import { useState } from "react";
import EstudanteService from "../service/ProfessorService";
import { firestoreDb } from "../firebase/firebase_config";

const CriarEstudante = (props) =>{

    const [nome, setNome] = useState(' ');
    const [curso, setCurso] = useState(' ');
    const [ira, setIra] = useState(' ')

    const cadastro = () => {
        
        EstudanteService.criar(
            firestoreDb, 
            (id)=>{
                alert(`Estudante ${id} inserido`)
                props.navigation.navigate('ListarEstudante')
            },
            {nome, curso, ira}

            )
    }

    return(
        <View>
            <Text>Criar Estudante</Text>
            <TextInput placeholder="Nome:" value={nome} onChangeText={(nome) => setNome(nome)}></TextInput>
            <TextInput placeholder="Curso:" value={curso} onChangeText={(curso) => setCurso(curso)}></TextInput>
            <TextInput placeholder="IRA:" value={ira} onChangeText={(ira) => setIra(ira)}></TextInput>

            <View>
                <Button title="Cadastrar" onPress={cadastro}></Button>
            </View>

        </View>
    )


}

export default CriarEstudante