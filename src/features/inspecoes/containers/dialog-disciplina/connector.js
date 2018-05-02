import { connect } from 'react-redux'

import { load, adicionar, alterar, deletar, change } from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.containers.dialogDisciplina
    return {
        id: view.id,
        nome: view.nome,
        carregando: view.carregando,
        erro: view.erro
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (disciplinaId) => {
            dispatch(load(disciplinaId))
        },
        adicionar: (disciplina) => {
            dispatch(adicionar(disciplina))
        },
        alterar: (disciplina) => {
            dispatch(alterar(disciplina))
        },
        deletar: (disciplinaId) => {
            dispatch(deletar(disciplinaId))
        },
        change: (e, { name, value }) => {
            dispatch(change(name, value))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}