'use client'

import Pagina from "@/components/Pagina"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Page() {

    const [voos, setVoos] = useState([])

    useEffect(() => {
        setVoos(JSON.parse(localStorage.getItem('voos')) || [])
    }, [])

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const dados = voos.filter(item => item.id != id)
            localStorage.setItem('voos', JSON.stringify(dados))
            setVoos(dados)
        }
    }

    return (
        <Pagina titulo="Voos">

            <Link
                href="/voos/form"
                className="btn btn-primary mb-3"
            >
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Identificador</th>
                        <th>Dt. Embarque</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Empresa</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {voos.map((item, i) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/voos/form/${item.id}`}>
                                    <FaRegEdit title="Editar" className="text-primary" />
                                </Link>
                                <MdDelete
                                    title="Excluir"
                                    className="text-danger"
                                    onClick={() => excluir(item.id)}
                                />
                            </td>
                            <td>{item.identificador}</td>
                            <td>{item.data_embarque}</td>
                            <td>{item.origem}</td>
                            <td>{item.destino}</td>
                            <td>{item.empresa}</td>
                            <td>{item.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}