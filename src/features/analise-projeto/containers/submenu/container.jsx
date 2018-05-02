import React from 'react';

import { Menu, Dropdown, Popup, Input, Button, Icon } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import SuperMenu from './../../../../components/super-menu'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const { carregando, projeto } = this.props
        return (
            <SuperMenu menus={[
                <Menu.Item key="header" header>Análise de projeto</Menu.Item>,
                <Menu.Item
                    onClick={() => { }}
                    as={NavLink}
                    to={'/' + projeto + '/analise-projeto'}
                    key="painel">
                    <Icon inverted name='list layout' />
                    Painel
                </Menu.Item>
            ]} />
        )
    }
}