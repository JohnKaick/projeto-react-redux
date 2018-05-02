import React from 'react'

import { Modal, Header, Button } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

export default (props) => {

    const {
        id, projetoId,
        open, close, onOpen, onDeletar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}
            basic
            size='small'>
            <Header icon='archive' content="Tem certeza?" />
            <Modal.Content>
                <p>Será excluído o diário completo com os assuntos.</p>
            </Modal.Content>
            <Modal.Actions>
                <Button color="green" icon="remove" content="Cancelar" onClick={close} />
                <Button
                    icon="checkmark"
                    content="Ok"
                    color='red'
                    onClick={onDeletar}
                    as={NavLink}
                    to={'/' + projetoId + '/diario-obra'}
                    inverted />
            </Modal.Actions>
        </Modal>
    )
}