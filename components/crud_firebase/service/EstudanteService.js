import { getDocs, collection, addDoc, docRef, doc, getDoc, docSnap, updateDoc, deleteDoc } from "firebase/firestore/lite";
import { firestoreDb } from "../firebase/firebase_config";

class EstudanteService{
    static listar = (firestoreDb, callback) =>{
        getDocs(collection(firestoreDb, 'estudante'))
        .then(
            (snapshot)=>{
                const estudante = []
                snapshot.forEach(
                    (document)=>{
                        const id=document.id
                        const {nome, curso, ira} = document.data();
                        estudante.push({id, nome, curso, ira,})
                    }
                    //foreach
                )
                callback(estudante)
            }//snapshot
        )//then
        .catch(error=>console.log(error));
    }

    static criar = (firestoreDb,callback,estudante) => {
        addDoc(collection(firestoreDb, 'estudante'), estudante)
        .then(
            (docRef)=>{
                callback(docRef.id)
            }
        )
        .catch(error => console.log(error))
    }

    static recuperar = (firestoreDb, callback, id)=>{
        getDoc(doc(firestoreDb, "estudante", id))
        .then(
            (docSnap) => {
                if(docSnap.exists()){
                    callback(docSnap.data())
                }
            }
        )
        .catch(error => console.log(error))
    }

    static atualizar = (firestoreDb, callback, id, estudante) => {
        updateDoc(doc(firestoreDb, 'estudante', id), estudante)
    .then(
        ()=>{
            callback()
        }
    )
    .catch(error=>console.log(error))
    }

    static apagar = (firestoreDb, callback, id) => {
        deleteDoc(doc(firestoreDb, 'estudante', id))
    .then(()=>callback(true))
    .catch(error=>console.log(error))
    }

}

export default EstudanteService