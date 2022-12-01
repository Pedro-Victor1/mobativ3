import { View, Button, Text, TextInput } from "react-native";
import { useState } from "react";
import EstudanteService from "../service/EstudanteService";
import { firestoreDb } from "../firebase/firebase_config";
import { estilos } from "../css/css";

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
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Criar Estudante</Text>
            <Text>Nome:</Text><TextInput  style={estilos.input} placeholder="Nome" value={nome} onChangeText={(nome) => setNome(nome)}></TextInput>
            <Text>Curso:</Text><TextInput  style={estilos.input} placeholder="Curso" value={curso} onChangeText={(curso) => setCurso(curso)}></TextInput>
            <Text>IRA:</Text><TextInput  style={estilos.input} placeholder="IRA" value={ira} onChangeText={(ira) => setIra(ira)}></TextInput>

            <View style={estilos.botao}>
                <Button title="Cadastrar" onPress={cadastro}></Button>
            </View>

        </View>
    )


}

export default CriarEstudante