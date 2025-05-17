import axios from "axios"
import { Api }  from "./api/Api"


// PRECISO
// 1: PEGAR AS PAGINAS DENTRO DO BR SOFTWARE ENGINER (META DE HOJE)
// 2: PEGAR AS FILHAS DE CADA PAGINGA
// 3: SALVAR ISSO (CACHE)
// 4: SALVAR ESCOLHA DA PAGINHA PAI QUE SERA CRIADO A DOC

// 5: PEGAR A LISTA DE TEMPLATES (SOMENTE O NOME NO MOMENTO)
// 6: LISTAR NA INTERFACE
// 7: SALVAR SELEÇÃO DO USUARIO (ID DO TEMPLATE??)

// 8: FAZER A RELAÇÃO DOS DADOS COM O TEMPLATE
// 9: CRIAR PAGINA


const getPageFromParentID = async (id: number) => {
    
    try {
        const { data } = await Api().get('?id=' + id)
        return data
    } catch (error) {
        return error
    }
    
}

export const ConfluenceService = {
    getPageFromParentID
}