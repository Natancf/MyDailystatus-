import React from 'react'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
    return (
    <Link href={href} >
        <a className='p-2 hover:underline hover:text-gray-600'>{children}</a>
    </Link>
    )
}

const NavBar = () => {
    return (
        <div className='bg-gray-500 py-4 text-center'>
            <NavLink href='/sobre'>Sobre</NavLink>
            <NavLink href='/cadastro'>Cadastro</NavLink>
            <NavLink href='/entrar'>entrar</NavLink>
        </div>
    )
}
export default NavBar