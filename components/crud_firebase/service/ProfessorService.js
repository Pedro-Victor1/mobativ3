import { getDocs, collection, addDoc, docRef, doc, getDoc, docSnap, updateDoc, deleteDoc } from "firebase/firestore/lite";
import { firestoreDb } from "../firebase/firebase_config";

class ProfessorService{
    static listar = (firestoreDb, callback) =>{
        getDocs(collection(firestoreDb, 'professor'))
        .then(
            (snapshot)=>{
                const professor = []
                snapshot.forEach(
                    (document)=>{
                        const id=document.id
                        const {nome, curso, salario} = document.data();
                        professor.push({id, nome, curso, salario})
                    }
                    //foreach
                )
                callback(professor)
            }//snapshot
        )//then
        .catch(error=>console.log(error));
    }

    static criar = (firestoreDb,callback,professor) => {
        addDoc(collection(firestoreDb, 'professor'), professor)
        .then(
            (docRef)=>{
                callback(docRef.id)
            }
        )
        .catch(error => console.log(error))
    }

    static recuperar = (firestoreDb, callback, id)=>{
        getDoc(doc(firestoreDb, "professor", id))
        .then(
            (docSnap) => {
                if(docSnap.exists()){
                    callback(docSnap.data())
                }
            }
        )
        .catch(error => console.log(error))
    }

    static atualizar = (firestoreDb, callback, id, professor) => {
        updateDoc(doc(firestoreDb, 'professor', id), professor)
    .then(
        ()=>{
            callback()
        }
    )
    .catch(error=>console.log(error))
    }

    static apagar = (firestoreDb, callback, id) => {
        deleteDoc(doc(firestoreDb, 'professor', id))
    .then(()=>callback(true))
    .catch(error=>console.log(error))
    }

}

export default EstudanteService