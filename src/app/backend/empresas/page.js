'use client'

import Pagina from "@/components/Pagina"
import apiVoos from "@/services/apiVoos";
import Link from "next/link"
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Page() {

    const [empresas, setEmpresas] = useState([])

    useEffect(() => {
        carregarDados()
    }, [])

    function carregarDados(){
        apiVoos.get('empresas').then(resultado=>{
            setEmpresas(resultado.data)
        })
    }
console.log(empresas)
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            apiVoos.delete('empresas/' + id)
            carregarDados()
        }
    }

    return (
        <Pagina titulo="Empresas">

            <Link
                href="/backend/empresas/form"
                className="btn btn-primary mb-3"
            >
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map((item, i) => (
                        <tr key={item._id}>
                            <td>
                                <Link href={`/backend/empresas/form/${item._id}`}>
                                    <FaRegEdit title="Editar" className="text-primary" />
                                </Link>
                                <MdDelete
                                    title="Excluir"
                                    className="text-danger"
                                    onClick={() => excluir(item._id)}
                                />
                            </td>
                            <td>{item.nome}</td>
                            <td>
                                <a href={item.site} target="_blank">
                                    <img src={item.logo} width={100} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}